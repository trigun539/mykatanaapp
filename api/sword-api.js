const knex = require('../db/knex')

module.exports = function (app) {
  // GET
  app.get('/user', (req, res) => {})

  // GET
  app.get('/swords', (req, res) => {
    knex
      .select()
      .from('swords')
      .then(swords => {
        res.send(swords)
      })
  })

  app.get('/swords/:id', (req, res) => {
    knex
      .select({ id })
      .from('swords')
      .then(sword => res.send(sword))
  })

  app.get('/swords/:id/reminders', (req, res) => {})

  // CREATE
  app.post('/swords', (req, res) => {})

  // UPDATE
  app.put('/swords/:id', (req, res) => {})

  app.put('/swords/:id/reminders/sync', (req, res) => {})

  // DELETE
  app.delete('/swords/:id', (req, res) => {})
}
