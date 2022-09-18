const express = require('express');
const db = require('./database/index');

const app = express()
const port = 3333


app.use(express.json())

const cadastro_aluno_route = require('./routes/cadastro_aluno_route')

app.use("/css",express.static("./pages/cadastro/css"));
app.use("/js",express.static("./pages/cadastro/js"));
app.use("/vendor",express.static("./pages/cadastro/vendor"));
app.use("/images", express.static("./pages/cadastro/images"));
app.use("/jquery", express.static("./pages/cadastro/vendor/jquery"));
app.use("/font-awesome-4.7", express.static("./pages/cadastro/vendor/font-awesome-4.7"));
app.use("/select2", express.static("./pages/cadastro/vendor/select2"));




app.use("/", cadastro_aluno_route)

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`)
})