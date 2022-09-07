const names = ["Pedro", "Paulo", "Ana", "Flavia", "Luciana", "Nicole"];

document.write(`<p>Existem ${names.length} alunos</p>`);
document.write("<h3>Cadastro de Alunos:</h3>");
document.write("<ol>");
for (let i = 0; i < names.length; i++) {
    document.write(`<li>${names[i]}</li>`);
    document.write("<br/>");
}
document.write("</ol>");
