const { v4: uuidv4 } = require('uuid')
const { Router } = require('express')
const knex = require('../db/knex')
const User = require('../models/User')

const router = Router()

// GET
router.get('/', (req, res) => {
  knex
    .select()
    .from('users')
    .then(users => {
      res.send(users)
    })
})

router.get('/:id', (req, res) => {
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
router.post('/', (req, res) => {
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
router.patch('/:id', (req, res) => {
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

router.put('/:id', (req, res) => {})

// DELETE
router.delete('/:id', (req, res) => {})

module.exports = router
