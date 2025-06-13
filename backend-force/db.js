const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: 'metro2033',
    host: 'localhost',
    port: 5432,
    database: 'forac'
})

module.exports = pool