//falta modificar con eventos


//sumar puntos del equipo clikeado
const sumarPuntosEquipos = (equipo) => {

    let puntosTotales = 0;

    puntosTotales = equipo.map((elem) => elem.jugador.puntuacion).reduce((total, valor) => {
        return total + valor
    }, 0);

    return puntosTotales;
}

//funcion q suma los puntos totales del equipo q eligio el jugador
const puntosDelEquipo = (equipo, fun) => {

    let puntosTotales = 0;

    switch (equipo) {
        case "1":

            puntosTotales = fun(noCoffeNoWorkee);

            break;
        case "2":

            puntosTotales = fun(codigoYCafe);

            break;
        case "3":

            puntosTotales = fun(iTurnCoffeIntoCode);

            break;
        default:
            console.log("error");
            break;
    }

    return puntosTotales;
}




//funcion q muestra por consola los mejores jugadores del equipo elejido
const mostrarMejoresJugadores = (equipo) => {

    let mejorsJugadores = [];

    switch (equipo) {
        case "1":

            mejorsJugadores = noCoffeNoWorkee.filter((elem) => elem.jugador.puntuacion >= 5);
            mejorsJugadores.sort((a, b) => b.jugador.puntuacion - a.jugador.puntuacion);

            console.log("Mejores jugadores:", mejorsJugadores);

            break;
        case "2":

            mejorsJugadores = codigoYCafe.filter((elem) => elem.jugador.puntuacion >= 5);
            mejorsJugadores.sort((a, b) => b.jugador.puntuacion - a.jugador.puntuacion);

            console.log("Mejores jugadores:", mejorsJugadores);

            break;
        case "3":

            mejorsJugadores = iTurnCoffeIntoCode.filter((elem) => elem.jugador.puntuacion >= 5);
            mejorsJugadores.sort((a, b) => b.jugador.puntuacion - a.jugador.puntuacion);

            console.log("Mejores jugadores:", mejorsJugadores);

            break;
        default:
            console.log("error");
            break;
    }

}