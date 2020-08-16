const { v4: uuidv4 } = require('uuid')
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

  // CREATE
  app.post('/users', (req, res) => {
    knex('users')
      .insert({
        id: uuidv4(),
        ...req.body
      })
      .then(result => {
        res.send(result)
      })
  })

  // UPDATE
  app.patch('/users/:id', (req, res) => {
    const id = req.params.id

    knex
      .select()
      .from('users')
      .where('id', id)
      .then(user => {
        knex('users')
          .where('id', id)
          .update(req.body)
          .then(result => {
            res.send(result)
          })
      })
  })

  app.put('/users/:id', (req, res) => {})

  // DELETE
  app.delete('/users/:id', (req, res) => {})
}
