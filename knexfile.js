// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {
  development: {
    client: "pg",
    connection: {
      port: 5432,
      user: "postgres",
      password: "postgres",
      database: "paw_paths_api1",
    },
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};