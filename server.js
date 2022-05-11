const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hola desde heroku');
})

const server = app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`)
})

server.on("error", error => {
    console.log("Error: ", error)
})