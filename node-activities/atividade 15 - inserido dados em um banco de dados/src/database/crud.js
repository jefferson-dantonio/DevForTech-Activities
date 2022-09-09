const con = require('./connection')


function inserir(dados) {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Conectado");
        //Criando uma tabela dentro do nosso database

        dados.forEach(dado => {
            let sql = `insert into consumidores  values ('${dado.nome}', '${dado.endereco}')`;
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("Registro adicionado");

            });

        })

    });
}

module.exports ={
    inserir
}