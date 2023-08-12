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
        id : 1,
        jugador: new Jugadores("Marta", 8, "noCoffeNoWorkee")
    },
    {
        id : 2,
        jugador: new Jugadores("Ludmi", 4, "noCoffeNoWorkee")
    },
    {
        id : 3,
        jugador: new Jugadores("Fede", 5, "noCoffeNoWorkee")
    },
    {
        id : 4,
        jugador: new Jugadores("Fernando", 2, "noCoffeNoWorkee")
    },
    {
        id : 5,
        jugador: new Jugadores("Maria", 1, "noCoffeNoWorkee")
    },
    {
        id : 6,
        jugador: new Jugadores("Luciana", 8, "noCoffeNoWorkee")
    },
    {
        id : 7,
        jugador: new Jugadores("Luciano", 8, "noCoffeNoWorkee")
    },
    {
        id : 8,
        jugador: new Jugadores("Juan", 10, "noCoffeNoWorkee")
    },
    {
        id : 9,
        jugador: new Jugadores("Facu", 10, "noCoffeNoWorkee")
    },
    {
        id : 10,
        jugador: new Jugadores("Martin", 9, "noCoffeNoWorkee")
    },
    {
        id : 11,
        jugador: new Jugadores("Lucho", 7, "noCoffeNoWorkee")
    },
    {
        id : 12,
        jugador: new Jugadores("Yo", 7, "noCoffeNoWorkee")
    },
    {
        id : 13,
        jugador: new Jugadores("Pepe", 6, "noCoffeNoWorkee")
    },
    {
        id : 14,
        jugador: new Jugadores("ElMagician", 5, "noCoffeNoWorkee")
    },
]

export const codigoYCafe = [
    {
        id : 1,
        jugador: new Jugadores("Uli", 10, "codigoYCafe")
    },
    {
        id : 2,
        jugador: new Jugadores("Patt", 10, "codigoYCafe")
    },
    {
        id : 3,
        jugador: new Jugadores("Bio", 4, "codigoYCafe")
    },
    {
        id : 4,
        jugador: new Jugadores("Nicolas", 9, "codigoYCafe")
    },
    {
        id : 5,
        jugador: new Jugadores("Niruki", 10, "codigoYCafe")
    },
    {
        id : 6,
        jugador: new Jugadores("Josefina", 10, "codigoYCafe")
    },
    {
        id : 7,
        jugador: new Jugadores("Messi", 10, "codigoYCafe")
    },
    {
        id : 8,
        jugador: new Jugadores("Ariel", 3, "codigoYCafe")
    },
    {
        id : 9,
        jugador: new Jugadores("Abril", 5, "codigoYCafe")
    },
    {
        id : 10,
        jugador: new Jugadores("Timy", 2, "codigoYCafe")
    },
    {
        id : 11,
        jugador: new Jugadores("Tom", 8, "codigoYCafe")
    },
    {
        id : 12,
        jugador: new Jugadores("Juanchibiri", 6, "codigoYCafe")
    }
]

export const iTurnCoffeIntoCode = [
    {
        id : 1,
        jugador: new Jugadores("Javier", 7, "iTurnCoffeIntoCode")
    },
    {
        id : 2,
        jugador: new Jugadores("Coco", 10, "iTurnCoffeIntoCode")
    },
    {
        id : 3,
        jugador: new Jugadores("Laura", 10, "iTurnCoffeIntoCode")
    },
    {
        id : 4,
        jugador: new Jugadores("Alicia", 9, "iTurnCoffeIntoCode")
    },
    {
        id : 5,
        jugador: new Jugadores("Bibi", 2, "iTurnCoffeIntoCode")
    },
    {
        id : 6,
        jugador: new Jugadores("Joshep", 3, "iTurnCoffeIntoCode")
    },
    {
        id : 7,
        jugador: new Jugadores("Lucy", 6, "iTurnCoffeIntoCode")
    },
    {
        id : 8,
        jugador: new Jugadores("Maximiliano", 1, "iTurnCoffeIntoCode")
    },
    {
        id : 9,
        jugador: new Jugadores("Marcelo", 5, "iTurnCoffeIntoCode")
    },
    {
        id : 10,
        jugador: new Jugadores("Rocio", 8, "iTurnCoffeIntoCode")
    },
    {
        id : 11,
        jugador: new Jugadores("Martincho", 10, "iTurnCoffeIntoCode")
    },
    {
        id : 12,
        jugador: new Jugadores("Juanchis", 10, "iTurnCoffeIntoCode")
    }
]