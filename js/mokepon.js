let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


// Iniciar el juego
function iniciarJuego (){

    // Ocultar secciones
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = 'none'


    let botonMascota = document.getElementById('boton-mascota')
    botonMascota.addEventListener('click', seleccionarMascotaJugador)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

// Seleccionar mascotas

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = 'flex'

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
    combate()
}

// Crear mensajes

function createMensaje(resultadoCombate){
    let sectionMensajes = document.getElementById("mensaje")
    let parrafo = document.createElement('p')

    parrafo.innerHTML = "Tú mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + " ---> " + resultadoCombate

    sectionMensajes.appendChild(parrafo)
}

// Combates

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')


    if (ataqueEnemigo == ataqueJugador){
        createMensaje('EMPATE')
    } else if (ataqueJugador == 'AGUA' & ataqueEnemigo == 'FUEGO'){
        createMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' & ataqueEnemigo == 'AGUA'){
        createMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'FUEGO' & ataqueEnemigo == 'TIERRA'){
        createMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        createMensaje('PERDISTE')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    
    // Revisar las vidas
    revisarVidas()
}

// Final del juego y validar vidas

function revisarVidas(){
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')


    if (vidasJugador == 0){
        mensajeFinal("EL ENEMIGO ganó", spanMascotaEnemigo.innerHTML)
        deshabilitarBotones()
    } else if (vidasEnemigo == 0) {
        mensajeFinal("TU Ganaste", spanMascotaJugador.innerHTML)
        deshabilitarBotones()
    } else {
        
    }
}

function deshabilitarBotones(){
    // Mostrar boton reiniciar
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = 'block'

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true
}

function mensajeFinal(jugadorGanador, mascotaGanadora){
    let sectionMensajes = document.getElementById("mensaje")
    let parrafoFinal = document.createElement('p')

    parrafoFinal.innerHTML = jugadorGanador + " con su mascota "+ mascotaGanadora

    sectionMensajes.appendChild(parrafoFinal)
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
