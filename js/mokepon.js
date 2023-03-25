function iniciarJuego (){
    let botonMascota = document.getElementById('boton-mascota')
    botonMascota.addEventListener('click', seleccionarMascota)
}

function seleccionarMascota(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')

    let spanMascotaJugador = document.getElementById('mascota-select-jugador')



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
}

function seleccionarMascotaEnemigo(){

}

function aleatorio(min, max){
    Math.floor(Math.random()* (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)