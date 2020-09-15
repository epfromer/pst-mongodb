import { dbName, custodianCollection } from '@klonzo/common'
import { Request, Response } from 'express'
import * as dotenv from 'dotenv'
dotenv.config()

// http://knexjs.org/#Builder

// eslint-disable-next-line @typescript-eslint/no-var-requires
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.PGHOST,
    password: process.env.PGPASSWORD,
    database: dbName,
  },
})

// HTTP PUT /custodians/:id
export async function setCustodian(req: Request, res: Response): Promise<void> {
  try {
    await knex(custodianCollection)
      .where('custodian_id', '=', req.params.id)
      .update({ color: req.body.color })
    res.status(200).send('success')
  } catch (err) {
    console.error(err.stack)
    res.status(500).send(err.msg)
  }
}