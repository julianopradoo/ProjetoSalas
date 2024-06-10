import mysql from "mysql"


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "fatec",
    database: "projetoSalas"
})
// Este trecho de código está criando uma conexão com um banco de dados MySQL utilizando o pacote mysql em Node.js
// const db: Aqui estamos declarando uma constante chamada db que será usada para representar a conexão com o banco de dados.
// mysql.createConnection({ ... }): Esta linha está invocando o método createConnection fornecido pelo pacote mysql para criar uma nova conexão com o banco de dados MySQL.
// Este método retorna um objeto de conexão que pode ser usado para executar consultas SQL e interagir com o banco de dados.
// Dentro do método passamos as informações necessárias para fazer a conecxão com o banco.

//Caso haja algum problema de autenticação
//ALTER USE 'root'@'localhost' INDENTIFIED WITH mysql_native_password BY 'fatec';

module.exports = db;