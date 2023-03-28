function iniciarJuego (){
    let botonMascota = document.getElementById('boton-mascota')
    botonMascota.addEventListener('click', seleccionarMascotaJugador)
}

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

}

function aleatorio(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)