const express = require('express');

const app = express()
const port = 3333


app.use(express.json())

app.get('/notas', (req,res) => {
    const query = req.query;
    console.log(query);
    const media = (Number(query.n1) + Number(query.n2)) / 2;
    let resultado = "";
    if(media >= 5){
        resultado = "Aprovado";
    }else{
        resultado = "Reprovado";
    }
    res.send(`<p>A nota 1 é : ${Number(query.n1)} <br> A nota 2 é : ${Number(query.n2)}  <br>  e a média é ${media} e o aluno foi ${resultado}.<p>`);
});




app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`)
})