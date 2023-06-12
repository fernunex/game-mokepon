const express = require("express")

const app = express()

const jugadores = []

class Jugador {
    constructor(id){
        this.id = id
    }
}

app.get("/unirse", (req, res) => { 
    const id = `${Math.random()}`
    
    const jugador = new Jugador(id)

    jugadores.push(jugador)

    res.setHeader('Access-Control-Allow-Origin', '*') // Cualquier origen es valido

    res.send(id)
})


// listen at port 8070
app.listen(8070, () => {
    console.log('El server esta funcionando')
})