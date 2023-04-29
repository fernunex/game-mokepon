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

// Classes

class Mokepon {
    constructor (nombre, imagen, tipo){
        this.nombre = nombre
        this.imagen = imagen
        this.ataques = []
        this.tipo = tipo
    }
}

let hipodoge = new Mokepon('Hipodoge', 'assets/mokepons_mokepon_hipodoge_attack.png', 'agua')
let capipepo = new Mokepon('Capipepo', 'assets/mokepons_mokepon_capipepo_attack.png', 'tierra')
let ratigueya = new Mokepon('Ratigueya', 'assets/mokepons_mokepon_ratigueya_attack.png', 'fuego')
let langostelvis = new Mokepon('Langostelvis', 'assets/mokepons_mokepon_langostelvis_attack.png', 'fuego')
let pydos = new Mokepon('Pydos', 'assets/mokepons_mokepon_pydos_attack.png', 'tierra')
let tucapalma = new Mokepon('Tucapalma', 'assets/mokepons_mokepon_tucapalma_attack.png', 'agua')

// Llenando los ataques de los mokepones

hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌰', id: 'boton-tierra'}
)

tucapalma.ataques.push(
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

pydos.ataques.push(
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

langostelvis.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌰', id: 'boton-tierra'}
)

// llenandoo los mokepones
mokepones.push(hipodoge, capipepo, ratigueya, tucapalma, langostelvis, pydos)

// Iniciar el juego
function iniciarJuego (){

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

    inputsMascotas.forEach((mascota) => {
        if (mascota.control.checked){
            spanMascotaJugador.innerHTML = mascota.control.id
            mascotaJugador = mascota.control.id
        }
    })


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
