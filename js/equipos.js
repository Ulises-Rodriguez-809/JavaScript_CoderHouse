export function Jugadores(nombre, puntuacion, equipo) {
    this.nombre = nombre;
    this.puntuacion = puntuacion;
    this.equipo = equipo;

    //ESTO CAMBIALO CON UN SWEET ALERT O TOSTIFY
    this.infoJugador = function () {
        alert(`
        El jugador fue agregado
        Jugador : ${this.nombre} 
        Equipo : ${this.equipo}
        Puntuacion : ${this.puntuacion}
        `);
    }
}

export const noCoffeNoWorkee = [
    {
        jugador: new Jugadores("Marta", 8, "noCoffeNoWorkee")
    },
    {
        jugador: new Jugadores("Ludmi", 4, "noCoffeNoWorkee")
    },
    {
        jugador: new Jugadores("Fede", 5, "noCoffeNoWorkee")
    },
    {
        jugador: new Jugadores("Fernando", 2, "noCoffeNoWorkee")
    },
    {
        jugador: new Jugadores("Maria", 1, "noCoffeNoWorkee")
    },
    {
        jugador: new Jugadores("Luciana", 8, "noCoffeNoWorkee")
    },
    {
        jugador: new Jugadores("Luciano", 8, "noCoffeNoWorkee")
    },
    {
        jugador: new Jugadores("Juan", 10, "noCoffeNoWorkee")
    },
    {
        jugador: new Jugadores("Facu", 10, "noCoffeNoWorkee")
    },
    {
        jugador: new Jugadores("Martin", 9, "noCoffeNoWorkee")
    },
    {
        jugador: new Jugadores("Lucho", 7, "noCoffeNoWorkee")
    },
    {
        jugador: new Jugadores("Yo", 7, "noCoffeNoWorkee")
    },
    {
        jugador: new Jugadores("Pepe", 6, "noCoffeNoWorkee")
    },
    {
        jugador: new Jugadores("ElMagician", 5, "noCoffeNoWorkee")
    },
    {
        jugador: new Jugadores("Lenox", 3, "noCoffeNoWorkee")
    },
    {
        jugador: new Jugadores("ElPampa", 3, "noCoffeNoWorkee")
    },
    {
        jugador: new Jugadores("Tatun", 3, "noCoffeNoWorkee")
    }
]

export const codigoYCafe = [
    {
        jugador: new Jugadores("Uli", 10, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Patt", 10, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Bio", 4, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Nicolas", 9, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Niruki", 10, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Josefina", 10, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Messi", 10, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Ariel", 3, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Abril", 5, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Timy", 2, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Tom", 8, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Juanchibiri", 6, "codigoYCafe")
    }
]

export const iTurnCoffeIntoCode = [
    {
        jugador: new Jugadores("Javier", 7, "iTurnCoffeIntoCode")
    },
    {
        jugador: new Jugadores("Coco", 10, "iTurnCoffeIntoCode")
    },
    {
        jugador: new Jugadores("Laura", 10, "iTurnCoffeIntoCode")
    },
    {
        jugador: new Jugadores("Alicia", 9, "iTurnCoffeIntoCode")
    },
    {
        jugador: new Jugadores("Bibi", 2, "iTurnCoffeIntoCode")
    },
    {
        jugador: new Jugadores("Joshep", 3, "iTurnCoffeIntoCode")
    },
    {
        jugador: new Jugadores("Lucy", 6, "iTurnCoffeIntoCode")
    },
    {
        jugador: new Jugadores("Maximiliano", 1, "iTurnCoffeIntoCode")
    },
    {
        jugador: new Jugadores("Marcelo", 5, "iTurnCoffeIntoCode")
    },
    {
        jugador: new Jugadores("Rocio", 8, "iTurnCoffeIntoCode")
    },
    {
        jugador: new Jugadores("Martincho", 10, "iTurnCoffeIntoCode")
    },
    {
        jugador: new Jugadores("Juanchis", 10, "iTurnCoffeIntoCode")
    }
]