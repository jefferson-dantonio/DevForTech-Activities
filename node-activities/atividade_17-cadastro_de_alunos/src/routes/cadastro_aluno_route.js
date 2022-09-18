'use strict';
const express = require('express');
const path = require('path');
const router = express.Router();
const alunos = require('../repositories/aluno-repository')


router.get('/', (req,res) => {
    res.sendFile(path.resolve("pages/cadastro/index.html"))
})


router.get('/cadastrar',  (req,res) => {   
    const aluno = req.query
    console.log(aluno)
    alunos.createAluno(aluno)

    res.redirect("/")
})


module.exports = router;