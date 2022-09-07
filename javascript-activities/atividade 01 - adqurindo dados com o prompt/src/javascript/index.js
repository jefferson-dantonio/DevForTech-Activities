
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

let nome = prompt("Olá seja bem vindo, qual o seu nome?");
let idade = parseInt( prompt(`Olá ${nome}, qual a sua idade?`));
while(isNaN(idade)){
    idade = prompt(`A idade deve ser um numero!, por favor digite um valor válido`);
}
let email = prompt("Qual o seu email?");
while(!validateEmail(email)){
     email = prompt("Por favor digite um email válido"); 
}

alert(`Seu nome é ${nome}, voce tem ${idade} anos e o seu email é ${email}`);