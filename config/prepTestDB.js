const db = require('../api/dbConfig')

module.exports = () => {
    return db.migrate.rollback()
      .then(() => db.migrate.latest())
      .then(() => db.seed.run());
  };