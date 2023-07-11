// Seleccionar elementos de HTML
// Ataque y reiniciar
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")

// Boton mascota y reiniciar
const botonMascota = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById("boton-reiniciar")
const spanMascotaJugador = document.getElementById('mascota-jugador')

// Inputs de la seccion de seleccionar mascota
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")

let opcionDeMokepon
const divContenedorTarjetas = document.getElementById('contenedor-tarjetas')

// Mascota enemigo
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")


// Crear mensajes
const pResultado = document.getElementById("resultado")
const divAtaqueDelJugador = document.getElementById("ataques-del-jugador")
const divAtaqueDelEnemigo = document.getElementById("ataques-del-enemigo")


// Combate
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

// -----------------------
let ataquesJugador = []
let ataquesEnemigo = []
let ataquesDisponibleEnemigo = []
let victoriasJugador = 0
let victoriasEnemigo = 0

let ataqueEnemigo
let ataqueJugador

// Mokepones html
let inputsMascotas
let inputHipodoge
let inputCapipepo
let inputRatigueya

// Ataques botones
let mascotaJugador
const divBotonesDeAtaque = document.getElementById('botones-ataque')
let opcionDeBotonAtaque
let botones = []


// Seccion de crear mensaje final
const sectionMensajes = document.getElementById("resultado")

// Arreglos
let mokepones = []

//Canvas y mapa
const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')
let lienzo = mapa.getContext('2d')
let intervalo
let mapaBackground = new Image()

let mokepon

// Mapa Responsive
let anchoMapa = window.innerWidth - 20
let alturaResponsive
const anchoMaximoMapa = 350

if (anchoMapa > anchoMaximoMapa) {
    anchoMapa = anchoMaximoMapa - 20
}

alturaResponsive = anchoMapa * 600 / 800

mapa.width = anchoMapa
mapa.height = alturaResponsive

// Backend
let jugadorId = null
const urlLocalHost = "http://localhost:8070"
let mokeponesEnemigos = []

// Just when we send our position using a if to check if change position
// let latestX = 0
// let latestY = 0




// Classes
class Mokepon {
    constructor (nombre, imagen, tipo, mapaFoto, id = null){
        this.id = id
        this.nombre = nombre
        this.imagen = imagen
        this.ataques = []
        this.tipo = tipo
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = mapaFoto
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let hipodoge = new Mokepon(
    'Hipodoge',
    'assets/mokepons_mokepon_hipodoge_attack.png',
    'agua',
    'assets/hipodoge.png',)

let capipepo = new Mokepon(
    'Capipepo',
    'assets/mokepons_mokepon_capipepo_attack.png',
    'tierra',
    'assets/capipepo.png')

let ratigueya = new Mokepon(
    'Ratigueya', 
    'assets/mokepons_mokepon_ratigueya_attack.png',
    'fuego', 
    'assets/ratigueya.png')

let langostelvis = new Mokepon(
    'Langostelvis', 
    'assets/mokepons_mokepon_langostelvis_attack.png', 
    'fuego', 
    'assets/langostelvis.png')

let pydos = new Mokepon(
    'Pydos', 
    'assets/mokepons_mokepon_pydos_attack.png', 
    'tierra',  
    'assets/pydos.png')

let tucapalma = new Mokepon(
    'Tucapalma', 
    'assets/mokepons_mokepon_tucapalma_attack.png', 
    'agua', 
    'assets/tucapalma.png')

// Creando Mokepones Enemigos
let capipepoEnemigo = new Mokepon(
    'Capipepo',
    'assets/mokepons_mokepon_capipepo_attack.png',
    'tierra',
    'assets/capipepo.png')

let langostelvisEnemigo = new Mokepon(
        'Langostelvis', 
        'assets/mokepons_mokepon_langostelvis_attack.png', 
        'fuego', 
        'assets/langostelvis.png')

// Llenando los ataques de los mokepones
HIPODOGE_ATAQUES = [
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌰', id: 'boton-tierra'}
]

TUCAPALMA_ATAQUES = [
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌰', id: 'boton-tierra'}
]
CAPIPEPO_ATAQUES = [
    {nombre: '🌰', id: 'boton-tierra'},
    {nombre: '🌰', id: 'boton-tierra'},
    {nombre: '🌰', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'}
]
PYDOS_ATAQUES = [
    {nombre: '🌰', id: 'boton-tierra'},
    {nombre: '🌰', id: 'boton-tierra'},
    {nombre: '🌰', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'}
]
LANGOSTELVIS_ATAQUES = [
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌰', id: 'boton-tierra'}
]
RATIGUEYA_ATAQUES = [
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌰', id: 'boton-tierra'}
]

hipodoge.ataques.push(...HIPODOGE_ATAQUES)

tucapalma.ataques.push(...TUCAPALMA_ATAQUES)

capipepo.ataques.push(...CAPIPEPO_ATAQUES)

pydos.ataques.push(...PYDOS_ATAQUES)

ratigueya.ataques.push(...RATIGUEYA_ATAQUES)

langostelvis.ataques.push(...LANGOSTELVIS_ATAQUES)

// Enemies
capipepoEnemigo.ataques.push(...CAPIPEPO_ATAQUES)

langostelvisEnemigo.ataques.push(...LANGOSTELVIS_ATAQUES)

// llenandoo los mokepones
mokepones.push(hipodoge, capipepo, ratigueya, tucapalma, langostelvis, pydos)

// Iniciar el juego
function iniciarJuego (){
    // Ocultar secciones
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    sectionVerMapa.style.display = 'none'

    // Agregar los addEventListener
    botonMascota.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)

    // Iterar mokepones
    mokepones.forEach( (mokepon) =>
    {
        opcionDeMokepon = `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label for="${mokepon.nombre}" class="label-mokepon input-mascota">
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.imagen} alt=${mokepon.nombre}>
        </label>
        `
        divContenedorTarjetas.innerHTML += opcionDeMokepon
    }
    )
    inputsMascotas = document.querySelectorAll('.input-mascota')
    
    unirseAlJuegoBackend()
}

function unirseAlJuegoBackend(){
    fetch(urlLocalHost + '/unirse').then(function (res) {
        if (res.ok){
            res.text().then(function (respuesta){
                console.log(respuesta)
                jugadorId = respuesta
            })
        }
    })
}

// Seleccionar mascotas

function seleccionarMascotaJugador(){
    // Mostrar/ocultar secciones
    sectionSeleccionarMascota.style.display = 'none'
    // sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'flex'

    inputsMascotas.forEach((mascota) => {
        if (mascota.control.checked){
            spanMascotaJugador.innerHTML = mascota.control.id
            mascotaJugador = mascota.control.id
        }
    })
    
    // Enviamos info sobre la mascota seleccionada al backend
    seleccionarMokeponBackend(mascotaJugador)

    // Extraer la info del personaje seleccionado
    extraerAtaques(mascotaJugador)

    // Iniciar el mapa
    iniciarMapa()
}

function seleccionarMokeponBackend(mascotaJugador){
    fetch(`${urlLocalHost}/mokepon/${jugadorId}`,
        {
            method: "post",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                mokepon: mascotaJugador
            })
        })
}

function extraerAtaques(mascotaJugador){
    let ataques 
    mokepones.forEach((mokeponIter) => {
        if (mascotaJugador === mokeponIter.nombre) {
            mokepon = mokeponIter
            ataques = mokeponIter.ataques
        }
    })

    mostrarAtaques(ataques)
}

function seleccionarMascotaEnemigo(enemigo){
    // let mascotaAleatorio = aleatorio(0, mokepones.length - 1)

    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesDisponibleEnemigo = enemigo.ataques
    seleccionarAtaqueEnemigo()

}

function mostrarAtaques(ataques){
        
    // Iterar botones de ataque
    ataques.forEach( (ataque) =>
    {
        opcionDeBotonAtaque = `
        <button id=${ataque.id} class="boton-de-ataque b-ataque">${ataque.nombre}</button>
        `
        divBotonesDeAtaque.innerHTML += opcionDeBotonAtaque  
    }
    )
    
    // Botones de ataque

    botones = document.querySelectorAll('.b-ataque')

    secuenciaAtaques()
}

// Agregare los addEventListener a los botones

function secuenciaAtaques(){
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent == '🔥') {
                ataquesJugador.push('FUEGO')
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if (e.target.textContent == '💧') {
                ataquesJugador.push('AGUA')
                boton.style.background = '#112f58'
                boton.disabled = true
            } else {
                ataquesJugador.push('TIERRA')
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            iniciarPelea()
        })
    })
}


function seleccionarAtaqueEnemigo(){
    // Extracting the names
    ataquesDisponibleEnemigo.forEach((ataque) => {
    if (ataque.nombre == '🔥') {
        ataquesEnemigo.push('FUEGO')
    } else if (ataque.nombre == '💧') {
        ataquesEnemigo.push('AGUA')
    } else {
        ataquesEnemigo.push('TIERRA')
    }
})

    // Shuffle array
    shuffleArray(ataquesEnemigo)
}

// Shuffle the array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// Iniciar pelea

function iniciarPelea(){
    if (ataquesJugador.length == 5){
        combate()
    }
}

// Crear mensajes

function createMensaje(resultadoCombate){

    // Crear los parrafos para las notificaciones
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    // Rellenar los parrafos
    pResultado.innerHTML = resultadoCombate
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    // Agregar a los hijos
    divAtaqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    divAtaqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    
}

// Combates

function combate(){
    for (let index = 0; index < ataquesJugador.length; index++) {
        ataqueEnemigo = ataquesEnemigo[index]
        ataqueJugador = ataquesJugador[index]

        if (ataqueEnemigo == ataqueJugador){
            createMensaje('EMPATE')
        } else if (ataqueJugador == 'AGUA' & ataqueEnemigo == 'FUEGO'){
            createMensaje('GANASTE')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador == 'TIERRA' & ataqueEnemigo == 'AGUA'){
            createMensaje('GANASTE')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasEnemigo
        } else if (ataqueJugador == 'FUEGO' & ataqueEnemigo == 'TIERRA'){
            createMensaje('GANASTE')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            createMensaje('PERDISTE')
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }   
    }

    // Revisar las vidas
    revisarVictorias() 
}

// Final del juego y validar vidas

function revisarVictorias(){
    // Mostrar boton reiniciar
    sectionReiniciar.style.display = 'flex'

    if (victoriasJugador == victoriasEnemigo){
        mensajeFinal("EMPATE")

    } else if (victoriasJugador < victoriasEnemigo){
        mensajeFinal("EL ENEMIGO ganó :(")

    } else {
        mensajeFinal("TU Ganaste :D")
    }
}


function mensajeFinal(mensaje){
    sectionMensajes.innerHTML = mensaje
}

// Canvas y mapa
function pintarCanvas(mokepon){
    // Movimiento del mokepon del jugador 
    mokepon.x = mokepon.x + mokepon.velocidadX
    mokepon.y = mokepon.y + mokepon.velocidadY

    // Limpiar el canvas
    lienzo.clearRect(0,0, mapa.width, mapa.height)

    // Background
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )

    // Pintar mi mokepon
    mokepon.pintarMokepon()

    // Enviar la posicion al backend/server only if choords change
    // if (latestX !== mokepon.x ||  latestY != mokepon.y) {
    //     enviarPosicionBackend(mokepon.x,  mokepon.y)
    //     latestX = mokepon.x
    //     latestY = mokepon.y
    // }
    enviarPosicionBackend(mokepon.x,  mokepon.y)
    
    // Pintar mokepones enemigos Online
    mokeponesEnemigos.forEach((enemigo) => {
        enemigo.pintarMokepon()
    })


    if (mokepon.velocidadX !== 0 || mokepon.velocidadY !== 0) {
        revisarColision(langostelvisEnemigo)
        revisarColision(capipepoEnemigo)
    }

}

// Funcion para enviar la posicion al backend
function enviarPosicionBackend(x, y){
    fetch(`${urlLocalHost}/mokepon/${jugadorId}/posicion`,
    {
        method: "post",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({ // usando sintaxis de clave-valor igual
            x,
            y
        })
    })
    .then(function (res) {
        if (res.ok){
            res.json()
                .then(function (respuesta) {
                    console.log(respuesta.enemigos)
                    let enemigos = respuesta.enemigos
                    mokeponesEnemigos = enemigos.map(enemigo => {
                        let nombreMokepon = enemigo.mokepon.nombre || ''
                        let mokeponEnemigo = null
                        if (nombreMokepon == 'Capipepo') {
                            mokeponEnemigo = capipepo
                        } else if (nombreMokepon == 'Hipodoge'){
                            mokeponEnemigo = hipodoge
                        } else if (nombreMokepon == 'Ratigueya'){
                            mokeponEnemigo = ratigueya
                        }

                        mokeponEnemigo.x = enemigo.x
                        mokeponEnemigo.y = enemigo.y
                        
                        return mokeponEnemigo
                        
                    });
                })
        }
    })
}


function moverArriba(mokepon){
    mokepon.velocidadY = -5
}

function moverAbajo(mokepon){
    mokepon.velocidadY = 5
}

function moverDerecha(mokepon){
    mokepon.velocidadX = 5
}

function moverIzquierda(mokepon){
    mokepon.velocidadX = -5
}

function detenerMovimiento(mokepon){
    mokepon.velocidadX = 0
    mokepon.velocidadY = 0
}

function iniciarMapa(){
    // Inicializando el mapa
    // mapa.width = 580
    // mapa.height = 410
    mapaBackground.src = './assets/mokemap.png'

    // Pintar los personajes y actualizar cada 50ms
    intervalo = setInterval(pintarCanvas, 50, mokepon)

    window.addEventListener('keydown', teclaDown)
    window.addEventListener('keyup', teclaUp)
}


function teclaDown(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba(mokepon)
            break;
        
        case 'ArrowDown':
            moverAbajo(mokepon)
            break;
        
        case 'ArrowRight':
            moverDerecha(mokepon)
            break;

        case 'ArrowLeft':
            moverIzquierda(mokepon)
            break;

        default:
            break;
    }
}

function teclaUp(event){
    switch (event.key) {
        case 'ArrowUp':
            detenerMovimiento(mokepon)
            break;
        
        case 'ArrowDown':
            detenerMovimiento(mokepon)
            break;
        
        case 'ArrowRight':
            detenerMovimiento(mokepon)
            break;

        case 'ArrowLeft':
            detenerMovimiento(mokepon)
            break;

        default:
            break;
    }
}

// Colisiones

function revisarColision(enemigo){
    // Posicion del enemigo
    const arribaEnemigo = enemigo.y 
    const abajoEnemigo = enemigo.y + enemigo.alto
    const izquierdaEnemigo = enemigo.x
    const derechaEnemigo = enemigo.x + enemigo.ancho

    const arribaMascota = mokepon.y +20
    const abajoMascota = mokepon.y + mokepon.alto -20
    const izquierdaMascota = mokepon.x +20
    const derechaMascota = mokepon.x + mokepon.ancho -20

    if (
        arribaEnemigo < abajoMascota &
        derechaEnemigo > izquierdaMascota &
        abajoEnemigo > arribaMascota &
        izquierdaEnemigo < derechaMascota
    ) {
        // Removiendo el set interval para no colisionar mas de 1 vez
        clearInterval(intervalo)
        
        // Seleccionando la mascota y extrayendo los ataques
        detenerMovimiento(mokepon)
        sectionVerMapa.style.display = 'none'
        seleccionarMascotaEnemigo(enemigo)

        // Mostrando la seccion de seleccionar ataques
        sectionSeleccionarAtaque.style.display = 'flex'

    } else {
        return
    }
}

// Otras funciones
function aleatorio(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min)
}

// Reiniciar Juego

function reiniciarJuego(){
    location.reload()
}

// Main
window.addEventListener('load', iniciarJuego)
