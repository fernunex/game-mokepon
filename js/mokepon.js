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

// -----------------------
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

// Mokepones html
let inputHipodoge
let inputCapipepo
let inputRatigueya


// Seccion de crear mensaje final
const sectionMensajes = document.getElementById("resultado")

// Arreglos
let mokepones = []

// Classes

class Mokepon {
    constructor (nombre, imagen, vida){
        this.nombre = nombre
        this.imagen = imagen
        this.vida = vida
        this.ataques = []

    }
}

let hipodoge = new Mokepon('Hipodoge', 'assets/mokepons_mokepon_hipodoge_attack.png', 100)
let capipepo = new Mokepon('Capipepo', 'assets/mokepons_mokepon_capipepo_attack.png', 100)
let ratigueya = new Mokepon('Ratigueya', 'assets/mokepons_mokepon_ratigueya_attack.png', 100)

// Llenando los ataques de los mokepones

hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌰', id: 'boton-tierra'}

)

capipepo.ataques.push(
    {nombre: '🌰', id: 'boton-tierra'},
    {nombre: '🌰', id: 'boton-tierra'},
    {nombre: '🌰', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'}
)

ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌰', id: 'boton-tierra'}
)

// llenandoo los mokepones
mokepones.push(hipodoge, capipepo, ratigueya)

// Iniciar el juego
function iniciarJuego (){

    // Iterar mokepones
    mokepones.forEach( (mokepon) =>
    {
        opcionDeMokepon = `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label for="${mokepon.nombre}" class="label-mokepon">
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.imagen} alt=${mokepon.nombre}>
        </label>
        `
        divContenedorTarjetas.innerHTML += opcionDeMokepon

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
    }
    )

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
        spanMascotaJugador.innerHTML = inputHipodoge.id

    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id

    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id

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
