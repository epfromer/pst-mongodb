import { Client } from '@elastic/elasticsearch'
import {
  Custodian,
  custodianCollection,
  dbName,
  EmailSentByDay,
  emailSentByDayCollection,
  EmailTotal,
  HTTPQuery,
  ImportLogEntry,
  SearchHistoryEntry,
  wordCloudCollection,
  WordCloudTag,
} from '@klonzo/common'
import { getEmail } from './getEmail'
import { getImportStatus, importPST } from './importPST'
import { clearSearchHistory, getSearchHistory } from './searchHistory'

const getWordCloud = async (): Promise<Array<WordCloudTag>> => {
  try {
    const client = new Client({
      node: `http://${process.env.ELASTIC_HOST}:${process.env.ELASTIC_PORT}`,
    })
    const { body } = await client.search({
      index: dbName + wordCloudCollection,
      q: '*',
    })
    return body.hits.hits[0]._source.wordCloudCollection
  } catch (err) {
    console.error(err.stack)
  }
}

const getEmailSentByDay = async (): Promise<Array<EmailSentByDay>> => {
  try {
    const client = new Client({
      node: `http://${process.env.ELASTIC_HOST}:${process.env.ELASTIC_PORT}`,
    })
    const { body } = await client.search({
      index: dbName + emailSentByDayCollection,
      q: '*',
    })
    return body.hits.hits[0]._source.emailSentCollection
  } catch (err) {
    console.error(err.stack)
  }
}

const getCustodians = async (): Promise<Array<Custodian>> => {
  try {
    const client = new Client({
      node: `http://${process.env.ELASTIC_HOST}:${process.env.ELASTIC_PORT}`,
    })
    const { body } = await client.search({
      index: dbName + custodianCollection,
      q: '*',
      sort: 'id.keyword:asc',
    })
    return body.hits.hits.map((custodian) => ({
      id: custodian._source.id,
      name: custodian._source.name,
      title: custodian._source.title,
      color: custodian._source.color,
      senderTotal: custodian._source.senderTotal,
      receiverTotal: custodian._source.receiverTotal,
      toCustodians: custodian._source.toCustodians,
      fromCustodians: custodian._source.fromCustodians,
    }))
  } catch (err) {
    console.error(err.stack)
  }
}

const setCustodianColor = async (
  httpQuery: HTTPQuery
): Promise<Array<Custodian>> => {
  const client = new Client({
    node: `http://${process.env.ELASTIC_HOST}:${process.env.ELASTIC_PORT}`,
  })
  await client.update({
    index: dbName + custodianCollection,
    id: httpQuery.id,
    body: {
      doc: {
        color: httpQuery.color,
      },
    },
  })
  await client.indices.refresh({ index: dbName + custodianCollection })
  const { body } = await client.search({
    index: dbName + custodianCollection,
    q: '*',
    sort: 'id.keyword:asc',
  })
  return body.hits.hits.map((custodian) => ({
    id: custodian._source.id,
    name: custodian._source.name,
    title: custodian._source.title,
    color: custodian._source.color,
    senderTotal: custodian._source.senderTotal,
    receiverTotal: custodian._source.receiverTotal,
    toCustodians: custodian._source.toCustodians,
    fromCustodians: custodian._source.fromCustodians,
  }))
}

interface Root {
  clearSearchHistory: () => Promise<string>
  getCustodians: () => Promise<Array<Custodian>>
  getEmail: (httpQuery: HTTPQuery) => Promise<EmailTotal>
  getEmailSentByDay: () => Promise<Array<EmailSentByDay>>
  getImportStatus: () => Array<ImportLogEntry>
  getSearchHistory: () => Promise<Array<SearchHistoryEntry>>
  getWordCloud: () => Promise<Array<WordCloudTag>>
  importPST: (httpQuery) => string
  setCustodianColor: (httpQuery: HTTPQuery) => Promise<Array<Custodian>>
}
export const root: Root = {
  clearSearchHistory: () => clearSearchHistory(),
  getCustodians: () => getCustodians(),
  getEmail: (httpQuery) => getEmail(httpQuery),
  getEmailSentByDay: () => getEmailSentByDay(),
  getImportStatus: () => getImportStatus(),
  getSearchHistory: () => getSearchHistory(),
  getWordCloud: () => getWordCloud(),
  importPST: (httpQuery) => importPST(httpQuery),
  setCustodianColor: (httpQuery) => setCustodianColor(httpQuery),
}

export default root
