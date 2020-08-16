const knex = require('knex')

const DB_CONNECTION_URL =
  `${process.env.DATABASE_URL}?ssl=true` ||
  'postgres://postgress:sample@localhost:5432/katana'

const DB = knex({
  client: 'pg',
  connection: DB_CONNECTION_URL
})

module.exports = DB
