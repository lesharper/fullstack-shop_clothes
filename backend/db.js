const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "lesharper",
    host: "localhost",
    port: 5432,
    database: "clothes_shop",
});

module.exports = pool;
