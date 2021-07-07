// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/dishes.db'
    },
    useNullAsDefault: true,
    debug: true
  },
  migrations: {
    directory: '.data//migrations'
  },
  seeds: {
    directory: '.data/seeds'
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = on', done);
    }
  }
};