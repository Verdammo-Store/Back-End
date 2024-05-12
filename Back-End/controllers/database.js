const mysql = require('mysql');

class Database {
  constructor(config) {
    this.connection = mysql.createConnection(config);
  }

  connect() {
    this.connection.connect((err) => {
      if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
      }
      console.log('Conexão bem sucedida com o banco de dados MySQL.');
    });
  }

  disconnect() {
    this.connection.end((err) => {
      if (err) {
        console.error('Erro ao desconectar do banco de dados:', err);
        return;
      }
      console.log('Desconectado do banco de dados MySQL.');
    });
  }
}

module.exports = Database;