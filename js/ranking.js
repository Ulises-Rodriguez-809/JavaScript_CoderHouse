import cerrarSesion from "./cerrarSesion.js";
import { noCoffeNoWorkee, codigoYCafe, iTurnCoffeIntoCode } from "./equipos.js";

const equipoPorDefecto = "noCoffeNoWorkee";

const listaMejJug = document.getElementById("listaMejJug");

//fun q setea el local storage en caso de q no esten cargador previamente
const setLocalStorage = (arrNombre) => {
    switch (arrNombre) {
        case "noCoffeNoWorkee":
            localStorage.setItem(arrNombre, JSON.stringify(noCoffeNoWorkee));

            break;
        case "codigoYCafe":
            localStorage.setItem(arrNombre, JSON.stringify(codigoYCafe));

            break;
        case "iTurnCoffeIntoCode":
            localStorage.setItem(arrNombre, JSON.stringify(iTurnCoffeIntoCode));

            break;
        default:
            break;
    }
}

//fun q ordena los jugadores por su puntuacion
const ordernar = (arr)=>{
    let equipoLS = [];

    equipoLS = arr.sort((a, b) => b.jugador.puntuacion - a.jugador.puntuacion);

    return equipoLS;
}

const localStorageNoCargado = (arrNombre)=>{
    let equipoLS = [];
    
    setLocalStorage(arrNombre);

    equipoLS = JSON.parse(localStorage.getItem(arrNombre));

    return equipoLS
}

//fun q obtiene el local storage del equipo clickeado
const obtenerEquiposLocalStorage = (arrNombre) => {

    let auxArr = JSON.parse(localStorage.getItem(arrNombre));

    let equipoLS = [];

    equipoLS = auxArr ? ordernar(auxArr) : localStorageNoCargado(arrNombre);

    return equipoLS;
}

//fun q suma los puntos totales del equipo
const sumarPuntosEquipos = (equipoNombre) => {

    let puntosTotales = 0;

    let equipoLS = obtenerEquiposLocalStorage(equipoNombre);

    puntosTotales = equipoLS.map((element) => element.jugador.puntuacion).reduce((total, valor) => {
        return total + valor
    }, 0);

    return puntosTotales;
}

//fun q analiza el equipo clickeado
const puntosDelEquipo = (equipo, fun) => {

    let puntosTotales = 0;

    puntosTotales = fun(equipo);

    return puntosTotales;
}

//fun q cambia la info q se ve en pantalla de los puntos totales del equipo clikeado
const cambiarPuntosTotales = (num) => {
    const puntosTotales = document.getElementById("puntosTotales");
    puntosTotales.innerText = num;
}

//crea y agrega los elementos de la lista
const crearElementos = (equipo) => {

    let aux = [];

    aux = equipo.filter((element) => element.jugador.puntuacion >= 8);

    aux.forEach((element) => {
        const li = document.createElement("li");
        const divJ = document.createElement("div");
        const divP = document.createElement("div");

        divJ.classList.add("jugador");
        divP.classList.add("puntos");

        divJ.textContent = element.jugador.nombre;
        divP.textContent = element.jugador.puntuacion;

        li.append(divJ, divP);

        listaMejJug.append(li);
    })
}

//fun q carga la lista de los equipos clikeado
const cargarLista = (arrNombre) => {
    let lSEquipo = obtenerEquiposLocalStorage(arrNombre);

    crearElementos(lSEquipo);
}

//info por defecto para q asi se muestre un equipo y la info de ese equipo al entrar al ranking
const infoPorDefecto = (equipoPorDefecto) => {

    let puntosPorDefecto = 0;

    puntosPorDefecto = puntosDelEquipo(equipoPorDefecto, sumarPuntosEquipos);

    cambiarPuntosTotales(puntosPorDefecto);

    cargarLista(equipoPorDefecto);
}

//fun q ejecuta el tostify
const toastifiFun = (equipo) => {
    Toastify({
        text: `Mostrando el ranking del equipo ${equipo}`,
        style: "font-size : 2.5rem",
        duration: 3500,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            fontSize: "2rem",
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }

    }).showToast();
}

//funcion q se encarga de darle el evento a los equipos
const mostrarInfoEquipoClick = () => {
    const equiposImg = document.querySelectorAll(".equipoLista");
    const jugadoresContainer = document.querySelector(".jugadoresContainer");

    equiposImg.forEach(element => {
        element.addEventListener("click", (e) => {
            const { target } = e;
            const { name } = target;

            toastifiFun(name);

            jugadoresContainer.style.display = "block";

            let puntosTotalesEquipo = 0;
            listaMejJug.innerHTML = "";

            puntosTotalesEquipo = puntosDelEquipo(name, sumarPuntosEquipos);

            cambiarPuntosTotales(puntosTotalesEquipo);

            cargarLista(name);
        })
    });
}

//fun q carga la funcionalidad de ranking
const cargarFuncionalidad = () => {
    infoPorDefecto(equipoPorDefecto);
    mostrarInfoEquipoClick();
    cerrarSesion();
}

cargarFuncionalidad();