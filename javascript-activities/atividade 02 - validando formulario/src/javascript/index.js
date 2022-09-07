
function isEmpty(value){
    return  value === "";
}

function clean(id) {
    document.getElementById(id).value = "";
}

function isValid() {

    let name = register.name.value;
    let password = register.password.value;
    let passwordCheck = register.passwordCheck.value;

    if (isEmpty(name)) {
            alert("Por favor preencha o campo nome pois ele é obrigatório");
            register.name.focus();
            return false;
    }

    if(isEmpty(password) || password.length <=5){
        alert("A senha deverá ter mais que 5 caracteres");
        register.password.focus();
        return false;
    }  

    if(passwordCheck != password){
        alert("A senha principal não está de acordo com a senha de confirmação");
        clean("password");
        clean("passwordCheck");
        register.password.focus();
        return false;
    }  

    alert(`Olá ${name} sejam bem vindo`);     
}

