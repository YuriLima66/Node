// // importando modulo
var conexao = require("./conexaobanco");

// chamando a framework express
var express = require('express');
// definindo uma variavel para express
var app = express();


// chamando a framework body-parser para deixar os codig maisorganizados parapassar para o banco
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }))

//importando o ejs

app.set('view engine','ejs');



// GET
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/cadastro.html');
})

//POST
app.post('/', function (req, res) {
    var nomecompleto = req.body.nomecompleto;
    var email = req.body.email;
    var senha = req.body.senha;

    conexao.connect(function (error) {
        if (error) throw error;

        /* opcão menos segura 
       
       var sql = "INSERT INTO estudante (nomecompleto, email, senha) VALUES(' "+nomecompleto+" ',' "+email+" ',' "+senha+" ')";
        conexao.query(sql, function(error, result){
            if(error)throw error;
            res.send("Estudante "+nomecompleto+" cadastrado com sucesso"+result.insertId);
        })*/

        //previnindo o sql injection

        var sql = "INSERT INTO estudante (nomecompleto, email, senha) VALUES(?,?,?)";
        conexao.query(sql, [nomecompleto, email, senha], function (error, result) {
            if (error) throw error;
            res.send("Estudante " + nomecompleto + " cadastrado com sucesso, numero do ID é  " + result.insertId);
        });


    })

})

// função pra executar o servidor em uma rota
app.listen(7001);


// conexao.connect(function(error){
//     if(error) throw error;
//     // console.log("O banco de dados foi conectado!");
//     conexao.query("select*from estudante",function(error, result){
//         if(error)throw error;
//         console.log(result);
//         console.log(result[0].nomecompleto);

//     });

// });
