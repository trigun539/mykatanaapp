const { v4: uuidv4 } = require('uuid')

exports.seed = (knex, Promise) => {
  return knex('swords')
    .del()
    .then(() => {
      return knex('swords').insert([
        { id: uuidv4(), name: 'Crusher' },
        { id: uuidv4(), name: 'Lightning' },
        { id: uuidv4(), name: 'Icebreaker' }
      ])
    })
}
