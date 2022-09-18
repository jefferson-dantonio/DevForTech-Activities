const express = require('express');
const Aluno = require('./model/Aluno')
const app = express()
const port = 3333

async function createAluno(aluno, media) {
    await Aluno.create({
      nome: aluno.nome,
      n1: aluno.n1,
      n2: aluno.n2,
      media: media
    });
  }

app.use(express.json())

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/notas', (req,res) => {
   const aluno = req.query
    const media = (parseFloat(aluno.n1) + parseFloat(aluno.n2))
    let resultado = "";
    if(media >= 5){
        resultado = "aprovado";
    }else{
        resultado = "reprovado";
    }

    createAluno(aluno, media)

    res.redirect("/")
 
    
})




app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`)
})