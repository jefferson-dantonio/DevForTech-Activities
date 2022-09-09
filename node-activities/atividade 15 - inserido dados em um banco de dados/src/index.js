const crud  = require('./database/crud')

const dados = [
    {nome:'Rita', endereco: 'Rua Fábia, 1000'},
    {nome: 'Ana', endereco: 'Rua Catão,902'},
    {nome:'Nicole', endereco: 'Rua Taipas,920'},
    {nome: 'Romulo', endereco: 'Rua das Cruzes,100'}
    ]

crud.inserir(dados);    