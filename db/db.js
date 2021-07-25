const knex = require('knex');
const knexfile = require('../knexfile');

// TODO in prod, use dependency injection
// to create knex instance so db access can be mpcked
// for tests

// TODO in prod don't access knexfiledevelopment directly
// but decide with env vars wich config to use
const db = knex(knexfile.development);
module.exports = db;