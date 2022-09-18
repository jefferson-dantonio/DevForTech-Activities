const express = require('express');

const app = express()
const port = 3333


app.use(express.json())

app.get('/media', (req,res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2
    console.log(req.body)
    console.log(n1)
    console.log(n2)

    const media = ( n1 + n2) / 2;
    let resultado = "";
    if(media >= 5){
        resultado = "Aprovado";
    }else{
        resultado = "Reprovado";
    }

    res.send(`A media do aluno foi ${media} e o aluno foi ${resultado}`);
});




app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`)
})