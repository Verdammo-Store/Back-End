const mysql = require('mysql');

class Produto {
  constructor(idproduto,imagem, nome, categoria, estado, preco, descricao) {
    this.idproduto = idproduto;
    this.imagem = imagem;
    this.nome = nome;
    this.categoria = categoria;
    this.estado = estado;
    this.preco = preco;
    this.descricao = descricao;
  }
}

class Usuario {
  constructor(idusuario, email, senha, tipo_usuario) {
    this.idusuario = idusuario;
    this.email = email;
    this.senha = senha;
    this.tipo_usuario = tipo_usuario;
  }
}

class Compra {
  constructor(idcompra, usuario_id, hora_compra, produto_nome) {
    this.idcompra = idcompra;
    this.usuario_id = usuario_id;
    this.hora_compra = hora_compra;
    this.produto_nome = []; // Array para armazenar os itens do pedido
  }

  addItem(item) {
    this.items.push(item);
  }
}


module.exports = {
  Produto,
  Usuario,
  Compra
};