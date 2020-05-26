const knex = require('knex');
const config = require('../knexfile2.js');

const environment = process.env.DB_ENV || 'development';

module.exports = knex(config[environment]);