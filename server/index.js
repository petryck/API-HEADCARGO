const conexao = require('../server/conexao/connect.js');
const conexao_sql = require('../server/conexao/connect_sql.js');
const rotas = require('../server/rotas.js');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
app.use(require("cors")());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(rotas)
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);


conexao_sql.conecta_sql();
conexao.incia_conexao();


server.listen(4466, function () {
    console.log(`Servidors Carregado ${server.address().port}`);
});
