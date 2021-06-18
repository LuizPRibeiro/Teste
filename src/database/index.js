const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'smarkio'
  });

  

  connection.connect ((err) =>{
      if (err) {
            console.log ("ERROOO")
      }
      else {
            console.log ("Deu bom ihu")
            var sql = "CREATE TABLE comentarios (id bigint NOT NULL AUTO_INCREMENT, comentario VARCHAR(5000), arquivo VARCHAR (100), PRIMARY KEY (id))";
            connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Tabela criada");
    });
      }
  })



  module.exports = connection