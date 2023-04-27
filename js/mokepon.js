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
        mascotaJugador = inputHipodoge.id

    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id

    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id

    } else {
        alert("Selecciona una mascota")
    }

    seleccionarMascotaEnemigo()
    extraerAtaques(mascotaJugador)
}

function extraerAtaques(mascotaJugador){
    let ataques 
    mokepones.forEach((mokepon) => {
        if (mascotaJugador === mokepon.nombre) {
            ataques = mokepon.ataques
        }
    })

    mostrarAtaques(ataques)
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(0, mokepones.length - 1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
    ataquesDisponibleEnemigo = mokepones[mascotaAleatorio].ataques
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
    seleccionarAtaqueEnemigo()
}

// Agregare los addEventListener a los botones

function secuenciaAtaques(){
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent == '🔥') {
                ataquesJugador.push('FUEGO')
                console.log(ataquesJugador)
                boton.style.background = '#112f58'
            } else if (e.target.textContent == '💧') {
                ataquesJugador.push('AGUA')
                console.log(ataquesJugador)
                boton.style.background = '#112f58'
            } else {
                ataquesJugador.push('TIERRA')
                console.log(ataquesJugador)
                boton.style.background = '#112f58'
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

    // Original array
    console.log(ataquesEnemigo)
    // Shuffle array
    shuffleArray(ataquesEnemigo)
    console.log(ataquesEnemigo)
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
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        } else if (ataqueJugador == 'TIERRA' & ataqueEnemigo == 'AGUA'){
            createMensaje('GANASTE')
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        } else if (ataqueJugador == 'FUEGO' & ataqueEnemigo == 'TIERRA'){
            createMensaje('GANASTE')
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        } else {
            createMensaje('PERDISTE')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }   
    }

    // Revisar las vidas
    revisarVictorias() 
}

// Final del juego y validar vidas

function revisarVictorias(){

    if (victoriasJugador == victoriasEnemigo){
        mensajeFinal("EMPATE")

        deshabilitarBotones()
    } else if (victoriasJugador < victoriasEnemigo){
        mensajeFinal("EL ENEMIGO ganó :(")

    } else {
        mensajeFinal("TU Ganaste :D")
        deshabilitarBotones()
    }
}

function deshabilitarBotones(){
    // Mostrar boton reiniciar
    sectionReiniciar.style.display = 'flex'

    // Deshabilitar botones
    botones.forEach((boton) => {
        boton.disabled = true
    })
}

function mensajeFinal(mensaje){
    sectionMensajes.innerHTML = mensaje
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
