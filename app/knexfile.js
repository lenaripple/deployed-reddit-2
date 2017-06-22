require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'reddit-clone',
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'reddit-clone-test',
    }
  },

  production: {
    client:"pg",
    connection:{
      database: process.env.DATABASE_URL + '?ssl=true',
    }
  }
};
