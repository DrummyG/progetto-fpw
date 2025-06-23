const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'metasdevelopers',
    password: 'admin',
    port: 5433,
});

module.exports = pool;