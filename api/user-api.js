const knex = require('../db/knex')
const User = require('../models/User')

module.exports = function (app) {
  // GET
  app.get('/user', (req, res) => {})

  // GET
  app.get('/users', (req, res) => {
    knex
      .select()
      .from('users')
      .then(users => {
        res.send(users)
      })
  })

  app.get('/users/:id', (req, res) => {
    const id = req.params.id

    knex
      .select()
      .from('users')
      .where('id', id)
      .then(user => {
        res.send(user[0])
      })
  })

  app.get('/users/:id/reminders', (req, res) => {})

  // CREATE
  app.post('/users', (req, res) => {})

  // UPDATE
  app.put('/users/:id', (req, res) => {})

  app.put('/users/:id/reminders/sync', (req, res) => {})

  // DELETE
  app.delete('/users/:id', (req, res) => {})
}
