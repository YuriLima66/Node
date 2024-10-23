// chamando a framework express
var express = require('express');
// definindo uma variavel para express
var app = express();


// chamando a framework body-parser para deixar os codig maisorganizados parapassar para o banco
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }))




app.get('/', function (req, res) {
    res.sendFile(__dirname + '/cadastro.html');
})
// função pra executar o servidor em uma rota
app.listen(7000);














// // importando modulo
// var conexao = require("./conexaobanco");

// conexao.connect(function(error){
//     if(error) throw error;
//     // console.log("O banco de dados foi conectado!");
//     conexao.query("select*from estudante",function(error, result){
//         if(error)throw error;
//         console.log(result);
//         console.log(result[0].nomecompleto);

//     });

// });
