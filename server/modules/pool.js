const pg = require('pg');

pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'react-gallery'
});

module.exports = pool;