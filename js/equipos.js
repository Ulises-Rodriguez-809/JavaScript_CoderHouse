export function Jugadores(nombre, puntuacion, equipo) {
    this.nombre = nombre;
    this.puntuacion = puntuacion;
    this.equipo = equipo;

    this.infoJugador = function () {
        Swal.fire({
            title: '<h1>El jugador fue añadido</h1>',
            icon: 'success',
            html:
                `<p class="sweetAlertP">El jugador : ${this.nombre}</p><br>` +
                `<p class="sweetAlertP">Fue añadido al equipo : ${this.equipo}</p><br>`,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
        })
    }
}

export const noCoffeNoWorkee = [
    {
        id: 1,
        jugador: new Jugadores("Marta", 8, "noCoffeNoWorkee")
    },
    {
        id: 2,
        jugador: new Jugadores("Ludmi", 14, "noCoffeNoWorkee")
    },
    {
        id: 3,
        jugador: new Jugadores("Fede", 5, "noCoffeNoWorkee")
    },
    {
        id: 4,
        jugador: new Jugadores("Fernando", 2, "noCoffeNoWorkee")
    },
    {
        id: 5,
        jugador: new Jugadores("Maria", 1, "noCoffeNoWorkee")
    },
    {
        id: 6,
        jugador: new Jugadores("Luciana", 8, "noCoffeNoWorkee")
    },
    {
        id: 7,
        jugador: new Jugadores("Luciano", 8, "noCoffeNoWorkee")
    },
    {
        id: 8,
        jugador: new Jugadores("Juan", 10, "noCoffeNoWorkee")
    },
    {
        id: 9,
        jugador: new Jugadores("Facu", 12, "noCoffeNoWorkee")
    },
    {
        id: 10,
        jugador: new Jugadores("Martin", 19, "noCoffeNoWorkee")
    },
    {
        id: 11,
        jugador: new Jugadores("Lucho", 7, "noCoffeNoWorkee")
    },
    {
        id: 12,
        jugador: new Jugadores("Yo", 17, "noCoffeNoWorkee")
    },
    {
        id: 13,
        jugador: new Jugadores("Pepe", 6, "noCoffeNoWorkee")
    },
    {
        id: 14,
        jugador: new Jugadores("ElMagician", 25, "noCoffeNoWorkee")
    },
]

export const codigoYCafe = [
    {
        id: 1,
        jugador: new Jugadores("Uli", 10, "codigoYCafe")
    },
    {
        id: 2,
        jugador: new Jugadores("Patt", 15, "codigoYCafe")
    },
    {
        id: 3,
        jugador: new Jugadores("Bio", 4, "codigoYCafe")
    },
    {
        id: 4,
        jugador: new Jugadores("Nicolas", 9, "codigoYCafe")
    },
    {
        id: 5,
        jugador: new Jugadores("Niruki", 10, "codigoYCafe")
    },
    {
        id: 6,
        jugador: new Jugadores("Josefina", 20, "codigoYCafe")
    },
    {
        id: 7,
        jugador: new Jugadores("Messi", 24, "codigoYCafe")
    },
    {
        id: 8,
        jugador: new Jugadores("Ariel", 13, "codigoYCafe")
    },
    {
        id: 9,
        jugador: new Jugadores("Abril", 5, "codigoYCafe")
    },
    {
        id: 10,
        jugador: new Jugadores("Timy", 2, "codigoYCafe")
    },
    {
        id: 11,
        jugador: new Jugadores("Tom", 8, "codigoYCafe")
    },
    {
        id: 12,
        jugador: new Jugadores("Juanchibiri", 16, "codigoYCafe")
    }
]

export const iTurnCoffeIntoCode = [
    {
        id: 1,
        jugador: new Jugadores("Javier", 7, "iTurnCoffeIntoCode")
    },
    {
        id: 2,
        jugador: new Jugadores("Coco", 15, "iTurnCoffeIntoCode")
    },
    {
        id: 3,
        jugador: new Jugadores("Laura", 18, "iTurnCoffeIntoCode")
    },
    {
        id: 4,
        jugador: new Jugadores("Alicia", 9, "iTurnCoffeIntoCode")
    },
    {
        id: 5,
        jugador: new Jugadores("Bibi", 20, "iTurnCoffeIntoCode")
    },
    {
        id: 6,
        jugador: new Jugadores("Joshep", 13, "iTurnCoffeIntoCode")
    },
    {
        id: 7,
        jugador: new Jugadores("Lucy", 6, "iTurnCoffeIntoCode")
    },
    {
        id: 8,
        jugador: new Jugadores("Maximiliano", 10, "iTurnCoffeIntoCode")
    },
    {
        id: 9,
        jugador: new Jugadores("Marcelo", 5, "iTurnCoffeIntoCode")
    },
    {
        id: 10,
        jugador: new Jugadores("Rocio", 8, "iTurnCoffeIntoCode")
    },
    {
        id: 11,
        jugador: new Jugadores("Martincho", 22, "iTurnCoffeIntoCode")
    },
    {
        id: 12,
        jugador: new Jugadores("Juanchis", 23, "iTurnCoffeIntoCode")
    }
]