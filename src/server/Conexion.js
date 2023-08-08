import mysql from 'mysql2/promise';

const pool = mysql.createPool({
host: 'data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com',
user: 'testing',
password: 'Pruebas%ALI%2020',
database: 'testing_ali_fullstack',
waitForConnections: true,
connectionLimit: 10,
queueLimit: 0,
});

export default pool;
