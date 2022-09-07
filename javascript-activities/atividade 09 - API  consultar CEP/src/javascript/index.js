document.getElementById("txt-name").focus();


async function processFields() {

    let cep = document.getElementById("txt-query").value;
    let url = `https://api.postmon.com.br/v1/cep/${cep}`;

    fetch(url).then(retorno_cep => {
        //console.log(retorno_cep.json());
        return retorno_cep.json();
    }).then(preenchimento_campo => {
        document.getElementById("txt-address").value = preenchimento_campo.logradouro;
        document.getElementById("txt-district").value = preenchimento_campo.bairro;
        document.getElementById("txt-cep").value = preenchimento_campo.cep;
        document.getElementById("txt-state").value = preenchimento_campo.estado;
        document.getElementById("txt-city").value = preenchimento_campo.cidade;

    }) 
}   


function clearFields(){

    document.getElementById("txt-name").value = "";
    document.getElementById("txt-query").value = "";
    document.getElementById("txt-address").value = "";
    document.getElementById("txt-district").value = "";
    document.getElementById("txt-cep").value = "";
    document.getElementById("txt-state").value = "";
    document.getElementById("txt-city").value = "";
    document.getElementById("txt-name").focus();
}
  
  