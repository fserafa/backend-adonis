'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PasswordsSchema extends Schema {
  up() {
    this.create('passwords', (table) => {
      table.increments()
      table
        .integer('cliente_id')
        .unsigned()
        .references('id')
        .inTable('cliente')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('nome').notNullable()
      table.string('login').notNullable()
      table.string('senha').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('passwords')
  }

}

module.exports = PasswordsSchema
