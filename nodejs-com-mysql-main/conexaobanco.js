// Chamando a biblioteca mysql
var mysql = require("mysql");

// Conectando ao banco de dados
var conecteBanco = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "escola"
});

// Testando a conexão com o banco de dados
conecteBanco.connect(function(err) {
    if (err) {
        console.error("Erro ao conectar ao banco de dados: " + err.stack);
        return;
    }
    console.log("Conectado ao banco de dados com ID: " + conecteBanco.threadId);
});

// Exportando o módulo
module.exports = conecteBanco;