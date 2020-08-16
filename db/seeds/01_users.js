const { v4: uuidv4 } = require('uuid')

exports.seed = (knex, Promise) => {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        { id: uuidv4(), name: 'John Snow', email: 'john_snow@gmail.com' },
        { id: uuidv4(), name: 'Cleo Spar', email: 'cleo_spar@gmail.com' },
        { id: uuidv4(), name: 'Joe Smith', email: 'joe_smith@gmail.com' }
      ])
    })
}
