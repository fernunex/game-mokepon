const express = require("express")
const cors = require("cors")

const app = express()

// Usar la libreria de cors en nuestra app
app.use(cors())

// Activar las peticiones que soporten JSON como parte del body
app.use(express.json())


const jugadores = []

class Jugador {
    constructor(id){
        this.id = id
    }

    asignarMokepon(mokepon){
        this.mokepon = mokepon
    }
}

class Mokepon {
    constructor(nombre){
        this.nombre = nombre
    }
}

app.get("/unirse", (req, res) => { 
    const id = `${Math.random()}`
    
    const jugador = new Jugador(id)

    jugadores.push(jugador)

    res.setHeader('Access-Control-Allow-Origin', '*') // Cualquier origen es valido

    res.send(id)
})

app.post("/mokepon/:judadorId", (req, res) => {

    const jugadorId = req.params.judadorId || ""
    const nombre = req.body.mokepon || ""
    const mokepon = new Mokepon(nombre)

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId == jugador.id)
    
    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarMokepon(mokepon)
    }    

    console.log(jugadores)
    console.log(jugadorId) // Estas dos lineas se ejecutan en nuestro backend
    res.end() // Terminamos la respuesta para que el navegador no espere una respuesta
})


// listen at port 8070
app.listen(8070, () => {
    console.log('El server esta funcionando')
})