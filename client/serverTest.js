const express = require('express');

const app = express();

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.post('/user', (req, res) => {

    console.log(req.body);

    res.send("nuevo usuario creado");
})

app.get('/hello/:username', (req, res) => {
    console.log(req.params)
    res.send(`Hola ${req.params.username}`)
})

app.listen(3000)
console.log(`Server on port ${3000}`)