/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pathData', function(table) {
        table.increments('id')
        table.string('title')
        table.string('location')
        table.string('type')
        table.string('leash')
        table.string('overview', 5000)
        table.string('image')
        table.string('length')
        table.string('difficulty')
        table.timestamps()
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('pathData')
};
