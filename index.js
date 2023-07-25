const express = require("express")
const cors = require("cors")

const app = express()

// Para poder enviar static files
app.use(express.static('public'))

// Usar la libreria de cors en nuestra app
app.use(cors())

// Activar las peticiones que soporten JSON como parte del body
app.use(express.json())


const jugadores = []

class Jugador {
    constructor(id){
        this.id = id
        this.x = 0
        this.y = 0
        this.mokepon = null
    }

    asignarMokepon(mokepon){
        this.mokepon = mokepon
    }

    actualizarCoordenadas(x, y){
        this.x = x
        this.y = y
    }

    asignarAtaques(ataques){
        this.ataques = ataques
    }
}

class Mokepon {
    constructor(nombre){
        this.nombre = nombre
    }
}


// Unirse al juego y obtener un Id unico por jugador
app.get("/unirse", (req, res) => { 
    const id = `${Math.random()}`
    
    const jugador = new Jugador(id)

    jugadores.push(jugador)

    res.setHeader('Access-Control-Allow-Origin', '*') // Cualquier origen es valido
    // console.log("genero id")
    res.send(id)
})


// Recibir el mokepon seleccionado
app.post("/mokepon/:judadorId", (req, res) => {

    const jugadorId = req.params.judadorId || ""
    const nombre = req.body.mokepon || ""
    const mokepon = new Mokepon(nombre)

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId == jugador.id)
    
    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarMokepon(mokepon)
    }    
    // console.log("Recibimos el mokepon")
    // console.log(jugadorId) // Estas dos lineas se ejecutan en nuestro backend
    res.end() // Terminamos la respuesta para que el navegador no espere una respuesta
})


// Recibir las coordenadas del jugador
app.post('/mokepon/:jugadorId/posicion', (req, res) => {
    const jugadorId = req.params.jugadorId || ''
    const x = req.body.x || 0
    const y = req.body.y || 0

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId == jugador.id)

    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].actualizarCoordenadas(x,y)
    }

    // Enviar a los enemigos que solo ya hayan elegido su mokepon
    const enemigos = jugadores.filter((jugador) => (jugador.id !== jugadorId && jugador.mokepon !== null))
    res.send({
        enemigos
    })
})

// Recibiendo los ataques
app.post("/mokepon/:judadorId/ataques", (req, res) => {

    const jugadorId = req.params.judadorId || ""
    const ataques = req.body.ataques || []

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId == jugador.id)
    
    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarAtaques(ataques)
    }    
    
    // console.log("Recibimos los ataques")

    // console.log(jugadores[jugadorIndex])

    res.end()
})

// Mandando los ataques de un jugador
app.get("/mokepon/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const jugador = jugadores.find((jugador) => jugadorId == jugador.id)
    res.send({
        ataques: jugador.ataques || []
    })
})

// Eliminando al jugador de la lista de jugadores
app.post("/mokepon/:jugadorId/delete", (req, res) =>{
    const jugadorId = req.params.jugadorId || ""
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId == jugador.id)
    
    if (jugadorIndex >= 0){
            jugadores.splice(jugadorIndex, 1);
        }
        
    res.end()
})

// listen at port 8070
app.listen(8070, () => {
    console.log('El server esta funcionando')
})