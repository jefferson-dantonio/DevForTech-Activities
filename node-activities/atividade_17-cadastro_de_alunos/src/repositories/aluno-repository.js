const Aluno = require("../models/Aluno")




async function createAluno(aluno) {
    await Aluno.create({
        nome: aluno.name,
        email: aluno.email,
        idade: parseInt(aluno.age),
        genero: aluno.gender,
        studentQuestion: aluno.studentQuestion
    });
  }


  module.exports = {
    createAluno, 
}