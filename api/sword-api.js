const { v4: uuidv4 } = require('uuid')
const { Router } = require('express')
const knex = require('../db/knex')

const router = Router()

// GET
router.get('/', (req, res) => {
  knex
    .select()
    .from('swords')
    .then(swords => {
      res.send(swords)
    })
})

router.get('/:id', (req, res) => {
  knex
    .select({ id })
    .from('swords')
    .then(sword => res.send(sword))
})

// CREATE
router.post('/', (req, res) => {
  knex('swords')
    .insert({
      id: uuidv4(),
      ...req.body
    })
    .then(result => {
      res.send(result)
    })
})

// UPDATE
router.put('/:id', (req, res) => {})

// DELETE
router.delete('/:id', (req, res) => {})

module.exports = router
