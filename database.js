const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : 'localhost', // MYSQL HOST NAME
    user     : 'nodeJs', // MYSQL USERNAME
    password : 'Kapalapi_67', // MYSQL PASSWORD
    database : 'students' // MYSQL DB NAME
}).promise();
module.exports = dbConnection;