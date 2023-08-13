import cerrarSesion from "./cerrarSesion.js";
import { noCoffeNoWorkee, codigoYCafe, iTurnCoffeIntoCode } from "./equipos.js";

const equipoPorDefecto = "noCoffeNoWorkee";

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

const obtenerEquiposLocalStorage = (arrNombre) => {
    let equipoLS = [];
    let aux = JSON.parse(localStorage.getItem(arrNombre));

    if (aux) { //no null
        equipoLS = aux;
        equipoLS.sort((a, b) => b.jugador.puntuacion - a.jugador.puntuacion);
    } else {
        setLocalStorage(arrNombre);
    }
    // equipoLS = equipoLS.filter((elem) => elem.jugador.puntuacion >= 5);
    return equipoLS;
}

//sumar puntos del equipo clikeado
const sumarPuntosEquipos = (equipoNombre) => {

    let puntosTotales = 0;

    let equipoLS = obtenerEquiposLocalStorage(equipoNombre)

    puntosTotales = equipoLS.map((element) => element.jugador.puntuacion).reduce((total, valor) => {
        return total + valor
    }, 0);

    return puntosTotales;
}

//funcion q suma los puntos totales del equipo q eligio el jugador
const puntosDelEquipo = (equipo, fun) => {

    let puntosTotales = 0;

    switch (equipo) {
        case "noCoffeNoWorkee":
            puntosTotales = fun("noCoffeNoWorkee", noCoffeNoWorkee);

            break;
        case "codigoYCafe":
            puntosTotales = fun("codigoYCafe", codigoYCafe);

            break;
        case "iTurnCoffeIntoCode":
            puntosTotales = fun("iTurnCoffeIntoCode", iTurnCoffeIntoCode);

            break;
        default:
            break;
    }

    return puntosTotales;
}

const cambiarPuntosTotales = (num) => {
    const puntosTotales = document.getElementById("puntosTotales");
    puntosTotales.innerText = num;
}

const cargarLista = (arrNombre) => {
    let lSEquipo = obtenerEquiposLocalStorage(arrNombre);

    const jugadorNombre = document.querySelectorAll(".jugador");
    const puntos = document.querySelectorAll(".puntos");

    jugadorNombre.forEach((element, index) => {
        element.textContent = lSEquipo[index].jugador.nombre;
    });

    puntos.forEach((element, index) => {
        element.textContent = lSEquipo[index].jugador.puntuacion;
    });
}

const cambiarInfoLista = (nombreEquipo) => {

    switch (nombreEquipo) {
        case "noCoffeNoWorkee":
            cargarLista("noCoffeNoWorkee");

            break;
        case "codigoYCafe":
            cargarLista("codigoYCafe");

            break;
        case "iTurnCoffeIntoCode":
            cargarLista("iTurnCoffeIntoCode");

            break;
        default:
            break;
    }
}

const infoPorDefecto = (equipoPorDefecto) => {
    let puntosPorDefecto = 0;

    puntosPorDefecto = puntosDelEquipo(equipoPorDefecto, sumarPuntosEquipos);
    cambiarPuntosTotales(puntosPorDefecto);
    cambiarInfoLista(equipoPorDefecto);
}

const mostrarInfoEquipoClick = () => {
    const equiposImg = document.querySelectorAll(".equipoLista");
    const jugadoresContainer = document.querySelector(".jugadoresContainer");


    equiposImg.forEach(element => {
        element.addEventListener("click", (e) => {
            const { target } = e;
            const { name } = target;

            jugadoresContainer.style.display = "block";

            let puntosTotalesEquipo = 0;

            //obtenemos los puntos del equipo clickeado
            puntosTotalesEquipo = puntosDelEquipo(name, sumarPuntosEquipos);

            cambiarPuntosTotales(puntosTotalesEquipo);

            cambiarInfoLista(name);

        })

    });
}

infoPorDefecto(equipoPorDefecto);
mostrarInfoEquipoClick();
cerrarSesion();


// const obtenerNombresEquipos = (nodeList)=>{

//     //https://stackoverflow.com/questions/2600343/why-does-document-queryselectorall-return-a-staticnodelist-rather-than-a-real-ar
//     //map es un metodo para arrays pero "equipos" es un nodeList por lo cual primero tenes q convertirlo a array
//     //creas un array q podrias ser una variable o un array sin nombre (como abajo) y usuas el spread para copiar todo el contenido del nodeList
//     return [...nodeList].map((element)=> element.name);
// }

// const obtenerLocalStorage = ()=>{
//     const infoAux = {
//         id : 0,
//         usuario : "",
//         equipo : "",
//         puntuacion : 0
//     }

//     let infoJugadorActual = JSON.parse(localStorage.getItem("jugadorDatos")) || infoAux;

//     return infoJugadorActual
// }

// const mostrarMejoresJugadores = (equipo) => {

//     let mejorsJugadores = [];

//     switch (equipo) {
//         case "1":

//             mejorsJugadores = noCoffeNoWorkee.filter((elem) => elem.jugador.puntuacion >= 5);
//             mejorsJugadores.sort((a, b) => b.jugador.puntuacion - a.jugador.puntuacion);

//             console.log("Mejores jugadores:", mejorsJugadores);

//             break;
//         case "2":

//             mejorsJugadores = codigoYCafe.filter((elem) => elem.jugador.puntuacion >= 5);
//             mejorsJugadores.sort((a, b) => b.jugador.puntuacion - a.jugador.puntuacion);

//             console.log("Mejores jugadores:", mejorsJugadores);

//             break;
//         case "3":

//             mejorsJugadores = iTurnCoffeIntoCode.filter((elem) => elem.jugador.puntuacion >= 5);
//             mejorsJugadores.sort((a, b) => b.jugador.puntuacion - a.jugador.puntuacion);

//             console.log("Mejores jugadores:", mejorsJugadores);

//             break;
//         default:
//             console.log("error");
//             break;
//     }

// }