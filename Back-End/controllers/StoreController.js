const Database = require('./database');

class StoreController {
    constructor(database) {
      this.db = database;
      this.carrinho = []; // Array para armazenar os itens do carrinho
    }
  
    // Método para fazer login
    Login(email, senha, callback) {
      const sql = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';
      this.db.query(sql, [email, senha], (err, result) => {
        if (err) {
          console.error('Erro ao fazer login:', err);
          callback(err, null);
          return;
        }
  
        if (result.length === 1) {
          console.log('Login bem sucedido.');
          callback(null, true);
        } else {
          console.log('Credenciais inválidas. Tente novamente.');
          callback(null, false);
        }
      });
    }

    
    // Método para registrar um novo usuário
    CadastroUser(email, senha, callback) {

      // Validação do formato do email usando uma expressão regular
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        const error = new Error('O formato do email é inválido.');
        console.error('Erro ao registrar usuário:', error);
        callback(error, null);
        return;
      }
    
      // Validação da senha
      if (password.length < 5) {
        const error = new Error('A senha deve ter pelo menos 5 caracteres.');
        console.error('Erro ao registrar usuário:', error);
        callback(error, null);
        return;
      }
    
      // Se passar pelas validações, procedemos com o registro do usuário
      const sql = 'INSERT INTO usuario (email, senha, tipo_usuario) VALUES (?, ?, 20)';
      this.db.query(sql, [email, password], (err, result) => {
        if (err) {
          console.error('Erro ao registrar usuário:', err);
          callback(err, null);
          return;
        }
        console.log('Usuário registrado com sucesso.');
        callback(null, result);
      });
    }

    CadastroProdutos(image, name, category, condition, price, description, callback) {
      // Neste exemplo, vamos apenas inserir os dados do produto no banco de dados
  
      const sql = 'INSERT INTO products (imagem, nome, categoria, estado, preco, descricao) VALUES (?, ?, ?, ?, ?, ?)';
      this.db.query(sql, [image, name, category, condition, price, description], (err, result) => {
        if (err) {
          console.error('Erro ao cadastrar produto:', err);
          callback(err, null);
          return;
        }
        console.log('Produto cadastrado com sucesso.');
        callback(null, result);
      });
    }
  

    // Método para adicionar produtos ao carrinho
    Carrinho(productId, quantity) {

      // Buscar informações do produto no banco de dados
      const sql = 'SELECT * FROM produto WHERE id = ?';
      this.db.query(sql, [nome], (err, result) => {
        if (err) {
          console.error('Erro ao buscar informações do produto:', err);
          return;
        }

        // Verificar se o produto foi encontrado
        if (result.length === 0) {
          console.error('Produto não encontrado.');
          return;
        }

        // Adicionar o produto ao carrinho
        const product = result[0];
        this.cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: quantity
        });

        console.log('Produto adicionado ao carrinho:', product.name);
      });
    }

    // Método para processar o checkout
    checkout() {

      // toDo template HTML com os produtos do carrinho e o total a ser pago

      console.log('Produtos no carrinho:');
      this.cart.forEach((item) => {
        console.log(`- ${item.name} (Quantidade: ${item.quantity}, Preço unitário: ${item.price})`);
      });
      console.log('Total a ser pago:', this.calculateTotal());
    }

    // Método para calcular o total a ser pago
    calcularTotal() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }


}

module.exports = StoreController;