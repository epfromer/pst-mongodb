import {
  dbName,
  defaultLimit,
  emailCollection,
  EmailTotal,
  HTTPQuery,
  searchHistoryCollection,
  startupQuery,
} from '@klonzo/common'
import redis from 'redis'
import redisearch from 'redis-redisearch'
import { promisify } from 'util'
import { v4 as uuidv4 } from 'uuid'

redisearch(redis)

// https://oss.redislabs.com/redisearch/Commands.html#ftsearch
// https://oss.redislabs.com/redisearch/Query_Syntax.html#a_few_query_examples
const client = redis.createClient()
const ftSearchAsync = promisify(client.ft_search).bind(client)
const ftAddAsync = promisify(client.ft_add).bind(client)
const ftGetAsync = promisify(client.ft_get).bind(client)

const createSearchParams = (httpQuery: HTTPQuery) => {
  // https://oss.redislabs.com/redisearch/Query_Syntax.html#field_modifiers

  // console.log(httpQuery)

  const { id, from, to, subject, body, allText, sent } = httpQuery

  // get single email?
  if (id) return ` @id:${id} `

  let query = ` @type:${emailCollection} `

  if (sent) {
    const start = new Date(sent)
    const end = new Date(start.getTime())
    end.setDate(end.getDate() + 1)
    query += ` @sent:[${new Date(start).getTime()} ${new Date(end).getTime()}] `
  }

  if (allText) {
    // any text field?
    query += ` @from|fromCustodian|emailto|toCustodians|cc|bcc|subject|body:${allText} `
  } else {
    // Else, we have specific field searching.
    if (from) query += ` @from|fromCustodian:${from} `
    if (to) query += ` @to|toCustodians|cc|bcc:${to} `
    if (subject) query += ` @subject:${subject} `
    if (body) query += ` @body:${body} `
  }

  // console.log(query)
  return query
}

// HTTP GET /email/
export async function getEmail(httpQuery: HTTPQuery): Promise<EmailTotal> {
  try {
    const start = Date.now()
    let emailArr
    if (httpQuery.id) {
      emailArr = await ftGetAsync([dbName + emailCollection, httpQuery.id])
    } else {
      emailArr = await ftSearchAsync([
        dbName + emailCollection,
        createSearchParams(httpQuery),
        'LIMIT',
        httpQuery.skip ? +httpQuery.skip : 0,
        httpQuery.limit ? +httpQuery.limit : defaultLimit,
        'SORTBY',
        httpQuery.sort ? httpQuery.sort : 'sent',
        httpQuery.order === 1 ? 'asc' : 'desc',
      ])
    }

    const total = httpQuery.id ? 1 : emailArr[0]
    const emails = []
    // Redis response is array of name followed by value, so need to do some funky
    // assignments to get it into Object
    let i = httpQuery.id ? 0 : 1
    while (i < emailArr.length) {
      const id = httpQuery.id ? httpQuery.id : emailArr[i]
      const docArr = httpQuery.id ? emailArr : emailArr[i + 1]
      i = i + 2
      // 'document' is returned as array of name followed by value entries
      // and they can be in any order, so need to convert to Object
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const doc: any = {}
      for (let j = 0; j < docArr.length; j = j + 2) {
        doc[docArr[j]] = docArr[j + 1]
      }
      emails.push({
        id,
        sent: '' + new Date(doc.sentStr).toISOString(),
        sentShort: new Date(doc.sentStr).toISOString().slice(0, 10),
        from: doc.from,
        fromCustodian: doc.fromCustodian,
        to: doc.to,
        toCustodians: doc.toCustodians ? doc.toCustodians.split(',') : [],
        cc: doc.cc,
        bcc: doc.bcc,
        subject: doc.subject,
        body: doc.body,
      })
    }

    delete httpQuery.skip
    delete httpQuery.limit
    const strQuery = JSON.stringify(httpQuery)
    // save query if not the initial
    if (strQuery !== startupQuery) {
      await ftAddAsync([
        dbName + searchHistoryCollection,
        uuidv4(),
        1.0,
        'FIELDS',
        'type',
        searchHistoryCollection,
        'timestamp',
        new Date().toISOString(),
        'entry',
        strQuery,
      ])
    }

    console.log('redis', httpQuery, total, Date.now() - start)
    return { total, emails }
  } catch (err) {
    console.error(err)
  }
}
