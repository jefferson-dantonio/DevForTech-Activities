const Livro = require('./modules/Livro');


const livro = new Livro('Node.js', 15, 115.99);

console.log(`O livro comprado foi ${livro.nome} e o valor total é de R$ ${livro.calculaValorTotal()}`)