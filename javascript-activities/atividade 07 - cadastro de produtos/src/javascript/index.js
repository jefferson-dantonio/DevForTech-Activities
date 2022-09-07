class Produto {
    constructor(id, descricao, valorUnitario, quantidade) {
        this.id = id;
        this.descricao = descricao;
        this.valorUnitario = valorUnitario;
        this.quantidade = quantidade;
    }



    get valorTotal() {
        return this.calculaValorTotal();
    }

    get toFile(){
        return this.formatarTexto();
    }


    calculaValorTotal() {
        return parseFloat(this.valorUnitario * this.quantidade).toFixed(2);
    }

    formatarTexto(){
        return `${this.descricao}, ${parseFloat(this.valorUnitario).toFixed(2)}, ${this.quantidade}, ${this.valorTotal}`;
    }



}

var app = new function () {
    this.el = document.getElementById('countries');
    this.produtos = [];



    this.Count = function (data) {
        var el = document.getElementById('counter');
        var name = 'Registro';

        if (data) {
            if (data > 1) {
                name = 'Registros';
            }
            el.innerHTML = data + ' - ' + name;
        } else {
            el.innerHTML = 'Nenhum ' + name;
        }
    }



    // Monta a nossa lista de nomes com base na variável que foi setada
    this.FetchAll = function () {
        var data = '';
        if (this.produtos.length > 0) {
            //alert("contou");
            //Criando um laço de repetição para montar os registros da tabela
            for (var i = 0; i < this.produtos.length; i++) {
                //alert("gera registro");
                data += '<tr>';
                data += `<td>${this.produtos[i].descricao}</td>`;
                data += `<td>R$ ${parseFloat(this.produtos[i].valorUnitario).toFixed(2)}</td>`;
                data += `<td>${this.produtos[i].quantidade}</td>`;
                data += `<td>R$ ${this.produtos[i].valorTotal}</td>`;
                data += '<td class="botao" ><button class="botao" onclick="app.Edit(' + i + ')">Editar</button></td>';
                data += '<td class="botao"><button class="botao" onclick="app.Delete(' + i + ')">Excluir</button></td>';
                data += '</tr>';
            }
        }
        this.Count(this.produtos.length);
        return this.el.innerHTML = data;

    };

    //Montando a função para adicionar um novo registro
    this.Add = function () {
        alert("adicionar");
        const descricao = document.getElementById('add-produto');
        const valorUnitario = document.getElementById('add-valor');
        const quantidade = document.getElementById('add-quantidade');
        let id;

        if (this.produtos.length <= 0) {
            id = 1;
        } else {
            id = this.produtos[this.produtos.length - 1].id + 1
        }

        if (descricao.value && valorUnitario.value && quantidade.value) {
            // Adicionando um novo valor
            this.produtos.push(new Produto(id, descricao.value, valorUnitario.value, quantidade.value));
            //Redefinindo um valor de entrada
            descricao.value = '';
            valorUnitario.value = '';
            quantidade.value = '';

            //Chama a função principal para atualizar os registros da nossa tabela
            this.FetchAll();

        }
    };

    //Montando a nossa função para editar os registros
    this.Edit = function (item) {
        var descricao = document.getElementById('edit-produto');
        var valorUnitario = document.getElementById('edit-valor');
        var quantidade = document.getElementById('edit-quantidade');
        // Exibe o valor no campo
        descricao.value = this.produtos[item].descricao;
        valorUnitario.value = this.produtos[item].valorUnitario;
        quantidade.value = this.produtos[item].quantidade;
        // Mostra os campos
        document.getElementById('spoiler').style.display = 'block';
        self = this;

        document.getElementById('saveEdit').onsubmit = function () {
            // Obter valor
            let desc = descricao.value;
            let valor = valorUnitario.value;
            let qtd = quantidade.value;
            if (desc && valor && qtd) {
                // Edita o valor

                self.produtos[item].descricao = desc;
                self.produtos[item].valorUnitario = valor;
                self.produtos[item].quantidade = qtd;
                // Exibe a nova lista
                self.FetchAll();
                //Ocultar campos
                CloseInput();
            }
        }
    };

    this.Delete = function (item) {
        this.produtos.splice(item, 1);
        this.FetchAll();
    };

    this.salvarArquivo = function(){

   
       
        let title = "Lista_de_Produtos"
        let listaProdutos = [];
       console.log(this.produtos);
        this.produtos.forEach(el => {
            console.log(el.toFile)
            listaProdutos.push(el.toFile)
        })
        let blob = new Blob([listaProdutos], {
            type: "text/plain;charset=utf-8"
    
        });
        saveAs(blob, title + ".txt");
        
    }

}

app.FetchAll();

// Função para fechar a janela de edição
function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
}

