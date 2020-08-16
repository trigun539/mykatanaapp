exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('users', table => {
      table.uuid('id')
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('created_at').defaultTo(knex.fn.now())
      table.string('updated_at').defaultTo(knex.fn.now())
    })
    .createTable('swords', table => {
      table.uuid('id')
      table.string('name').notNullable()
      table.string('created_at').defaultTo(knex.fn.now())
      table.string('updated_at').defaultTo(knex.fn.now())
    })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('swords').dropTable('users')
}
