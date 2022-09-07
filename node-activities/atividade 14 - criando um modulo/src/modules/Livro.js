class Livro{
    constructor(nome, quantidade, valor_unitario){
        this._nome = nome
        this._quantidade = quantidade
        this._valor_unitario = valor_unitario
    }

get nome(){
    return this._nome
}

get quantidade(){
    return this._quantidade
}

get valor_unitario(){
    return this._valor_unitario
}

calculaValorTotal(){
    return this._valor_unitario * this._quantidade
}

}


module.exports = Livro;