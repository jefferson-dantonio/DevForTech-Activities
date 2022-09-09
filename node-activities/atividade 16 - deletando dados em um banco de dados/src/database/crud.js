const con = require('./connection')


function inserir(dados) {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Conectado");
        

        dados.forEach(dado => {
            let sql = `insert into consumidores  values ('${dado.nome}', '${dado.endereco}')`;
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("Registro adicionado");

            });

        })

    });
}

function deletarPeloNome(nome){
    con.connect(function(err){
        if(err)throw err;
        console.log("Conectado");
        con.query(`delete from consumidores where nome_consumidor = '${nome}'`,function(err,result,fields){
                if(err)throw err;
                console.log(result);
                console.log("Registro deletado");
    
        });
    });
    
    
}



module.exports ={
    inserir, 
    deletarPeloNome
};
