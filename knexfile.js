// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      port: 5432,
      user: process.env.DB_USER,
      password: "postgres",
      database: "paw_paths_api1",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      connectionString: process.env.HEROKU_POSTGRESQL_PUCE_URL, 
      ssl: {
        rejectUnauthorized: false,
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
