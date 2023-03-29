let ataqueJugador
let ataqueEnemigo


// Iniciar el juego
function iniciarJuego (){
    let botonMascota = document.getElementById('boton-mascota')
    botonMascota.addEventListener('click', seleccionarMascotaJugador)
}

// Seleccionar mascotas

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')

    let spanMascotaJugador = document.getElementById('mascota-jugador')



    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge"

    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"

    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"

    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = "Langostelvis"

    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = "Tucapalma"

    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = "Pydos"

    } else {
        alert("Selecciona una mascota")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")


    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"

    } else if (mascotaAleatorio == 3){
        spanMascotaEnemigo.innerHTML = "Ratigueya"

    } else if (mascotaAleatorio == 4){
        spanMascotaEnemigo.innerHTML = "Langostelvis"

    } else if (mascotaAleatorio == 5){
        spanMascotaEnemigo.innerHTML = "Tucapalma"

    } else {
        spanMascotaEnemigo.innerHTML = "Pydos"

    }


    seleccionarAtaqueJugador()
}

// Seleccionar ataques

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    seleccionarAtaqueEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    seleccionarAtaqueEnemigo()
}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    seleccionarAtaqueEnemigo()
}

function seleccionarAtaqueJugador(){
    
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarAtaqueEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }

    createMensaje()
}

// Crear mensajes

function createMensaje(){
    let sectionMensajes = document.getElementById("mensaje")
    let parrafo = document.createElement('p')

    parrafo.innerHTML = "Tú mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + " - EN PROCESO 🎉"

    sectionMensajes.appendChild(parrafo)
}

// Otras funciones

function aleatorio(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min)
}


// Main
window.addEventListener('load', iniciarJuego)
