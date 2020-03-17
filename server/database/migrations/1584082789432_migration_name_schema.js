'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MigrationNameSchema extends Schema {
  up() {
    this.table('users', (table) => {
      table.string('token') // token
      table.timestamp('token_created_at') // date when token was created
    })
  }

  down() {
    this.table('migration_names', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MigrationNameSchema
