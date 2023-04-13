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
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')

// Mascota enemigo
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

// Botones de ataque
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")

// Crear mensajes
const pResultado = document.getElementById("resultado")
const divAtaqueDelJugador = document.getElementById("ataques-del-jugador")
const divAtaqueDelEnemigo = document.getElementById("ataques-del-enemigo")


// Combate
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

// Seccion de crear mensaje final
const sectionMensajes = document.getElementById("resultado")



// Iniciar el juego
function iniciarJuego (){

    // Ocultar secciones
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    botonMascota.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

// Seleccionar mascotas

function seleccionarMascotaJugador(){
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'


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
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
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

    if (vidasJugador == 0){
        mensajeFinal("EL ENEMIGO ganó :(", spanMascotaEnemigo.innerHTML)
        deshabilitarBotones()
    } else if (vidasEnemigo == 0) {
        mensajeFinal("TU Ganaste :D", spanMascotaJugador.innerHTML)
        deshabilitarBotones()
    } else {
        
    }
}

function deshabilitarBotones(){
    // Mostrar boton reiniciar
    sectionReiniciar.style.display = 'flex'
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
}

function mensajeFinal(jugadorGanador, mascotaGanadora){
    sectionMensajes.innerHTML = jugadorGanador + " con la mascota: "+ mascotaGanadora
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
