const Sequelize = require('sequelize');
const db = require('../database/index.js');

const Aluno = db.define('aluno', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    studentQuestion: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

(async () => {
    
    await Aluno.sync({ force: false });
})();

module.exports = Aluno;