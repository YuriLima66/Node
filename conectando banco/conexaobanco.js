//Chamando a biblioteca mysql
var mysql = require("mysql");

//Conectando meu banco de dados
var conecteBanco = mysql.createConnection({
    host: "localhost",
    user: "yuri",
    password:"123456",
    database: "escola"
});
// exportando modulo
module.exports = conecteBanco;

