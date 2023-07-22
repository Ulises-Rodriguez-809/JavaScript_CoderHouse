const preguntasYRespuestas = [
    {
        pregunta: "JavaScript es un lenguaje?",
        respuesta: 2,
        opciones: {
            opcion1: "Igual q Java",
            opcion2: "Interpretado",
            opcion3: "Un Framework para diseño de sitios y aplicaciones web",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "let es una forma de delcarar variables?",
        respuesta: 3,
        opciones: {
            opcion1: "Variable q siempre es de contexto global",
            opcion2: "Variable constante cuyo valor no puede cambiar",
            opcion3: "Variable cuyo valor asignado puede cambiar",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "Los arrays se usan para?",
        respuesta: 4,
        opciones: {
            opcion1: "Crear clases",
            opcion2: "Intanciar objetos",
            opcion3: "Alamcenar multiples valores de un mismo tipo en una sola varibale",
            opcion4: "Ninguna de las anteriores"
        }
    },
    // {
    //     pregunta:
    //         "Bootstrap se debe linkear antes o despues de nuestro archivo .css?",
    //     respuesta: 2,
    //     opciones: {
    //         opcion1: "No importa",
    //         opcion2: "Antes",
    //         opcion3: "Despues",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: `
    //     Que se imprime en consola el sigueinte codigo? 
    //     let num1 = '34';
    //     let num2 = 10;
    //     const resultado = num1 + num2; 
    //     `,
    //     respuesta: 1,
    //     opciones: {
    //         opcion1: "3410",
    //         opcion2: 44,
    //         opcion3: 44.0,
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "Bootstrap es ?",
    //     respuesta: 1,
    //     opciones: {
    //         opcion1: "Conjunto de herramientas para diseño de sitios y aplicaciones web",
    //         opcion2: "Un lenguaje de programacion",
    //         opcion3: "Conjunto de herramientas para hacer sitios y aplicaciones web responsive",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "Cuantas formas de declarar una varibale hay en JavaScript?",
    //     respuesta: 3,
    //     opciones: {
    //         opcion1: 1,
    //         opcion2: 2,
    //         opcion3: 3,
    //         opcion4: "Mas de 3"
    //     }
    // },
    // {
    //     pregunta: "Se puede modificar el valor de una varibale const?",
    //     respuesta: 2,
    //     opciones: {
    //         opcion1: "Si",
    //         opcion2: "No",
    //         opcion3: "Depende el contexto donde se la crea",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "For y While?",
    //     respuesta: 2,
    //     opciones: {
    //         opcion1: "Ejecuta una sentencia si una condición específicada es evaluada como verdadera",
    //         opcion2: "Un bucle que ejecuta la misma sentencia una cierta cantidad de veces",
    //         opcion3: "Palabra reservada para crear objetos y clases",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta:
    //         "En un archivo .css cuantas formas hay de seleccionar un elemento?",
    //     respuesta: 1,
    //     opciones: {
    //         opcion1: "Clases, ID, Elemento(Tags), Atributo, etc",
    //         opcion2: "Clases, ID, Elemento(Tags)",
    //         opcion3: "Clases, ID",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "Cual es la utilidad de CSS?",
    //     respuesta: 3,
    //     opciones: {
    //         opcion1: "El esqueleto del sitio web",
    //         opcion2: "Dar logica e interactividad al sitio web",
    //         opcion3: "Poner la web facherita",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "HTML nos permite?",
    //     respuesta: 4,
    //     opciones: {
    //         opcion1: "Hacer mas facil el responsive del sitio web",
    //         opcion2: "Dar logica e interactividad al sitio web",
    //         opcion3: "Poner la web facherita",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "Una funcion en JS es?",
    //     respuesta: 1,
    //     opciones: {
    //         opcion1: "Un conjunto de instrucciones reutilizable que realiza una tarea o calcula un valor",
    //         opcion2: "Un bucle que permite repetir intrucciones una cierta cantidad de veces",
    //         opcion3: "Palabra reservada para crear objetos",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "Una funcion es obligatorio que tenga parametros declarados entre sus ()?",
    //     respuesta: 2,
    //     opciones: {
    //         opcion1: "Si",
    //         opcion2: "No",
    //         opcion3: "Depende el contexto",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "console.log() nos permite?",
    //     respuesta: 3,
    //     opciones: {
    //         opcion1: "Muestra un texto y espera hasta que el usuario cierre la ventana de texto",
    //         opcion2: "Se usa para mostrar un cuadro texto que le pide al usuario ingresar datos",
    //         opcion3: "Escribir un mensaje en consola",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "Un alert() muestra?",
    //     respuesta: 1,
    //     opciones: {
    //         opcion1: "Muestra un texto y espera hasta que el usuario cierre la ventana de texto",
    //         opcion2: "Se usa para mostrar un cuadro texto que le pide al usuario ingresar datos",
    //         opcion3: "Escribir un mensaje en consola",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "if y else?",
    //     respuesta: 1,
    //     opciones: {
    //         opcion1: "Ejecuta una sentencia si una condición específicada es evaluada como verdadera",
    //         opcion2: "Ejecuta una sentencia si una condición específicada es evaluada como falsa",
    //         opcion3: "Ejecuta una sentencia si una condición específicada sin importar si esta es evaluada como verdadera o falsa",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "El metodo push() nos permite?",
    //     respuesta: 3,
    //     opciones: {
    //         opcion1: "Nos permite agragar un elemento al principio de un array",
    //         opcion2: "Nos permite agragar un elemento al final de un array",
    //         opcion3: "Nos permite agragar un o varios elemento al final de un array",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "Los Booleanos pueden tener solo?",
    //     respuesta: 2,
    //     opciones: {
    //         opcion1: "1 valores",
    //         opcion2: "2 valores",
    //         opcion3: "3 valores",
    //         opcion4: "Mas de 3"
    //     }
    // },
    // {
    //     pregunta: "Los objetos son?",
    //     respuesta: 4,
    //     opciones: {
    //         opcion1: "Un objeto es una colección de datos que se agrupan de manera clave-valor pero todos sus atributos deben de ser del mismo tipo",
    //         opcion2: "Un objeto es una clase",
    //         opcion3: "Un objeto es un funciones constructoras",
    //         opcion4: "Un objeto es una colección de datos que se agrupan de manera clave-valor"
    //     }
    // },
    // {
    //     pregunta: `
    //     El siguiente codigo tiene error cual es?
    //     const sumar = (a,b)=>{
    //         return a+b;
    //     }

    //     let res = sumar(5;6);
    //     console.log(res);
    //     `,
    //     respuesta: 4,
    //     opciones: {
    //         opcion1: "Los parametros deben ser pasados como objetos",
    //         opcion2: "Los parametros deben separarse con :",
    //         opcion3: "No tiene ningun error",
    //         opcion4: "Los parametros deben separarse con ,"
    //     }
    // },
    // {
    //     pregunta: ` El siguiente codigo tiene error xq?
    //     const person = {
    //     firstName: "John"
    //     lastName: "Doe"
    //     age: 50
    //     eyeColor: "blue"
    //     };
    //     console.log(person["age"])
    //     `,
    //     respuesta: 1,
    //     opciones: {
    //         opcion1: "Faltan las , para separar los atributos",
    //         opcion2: "Faltan las ; para separar los atributos",
    //         opcion3: "No todos sus atributos son del mismo tipo",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "Usamos media queries para?",
    //     respuesta: 2,
    //     opciones: {
    //         opcion1: "Intanciar un objeto",
    //         opcion2: "Aplicar estilos CSS según el tamaño de pantalla del dispositivo",
    //         opcion3: "Intanciar una clase",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: ` q se escribe en consola?
    //     const funcion1 = (a,b)=>{
    //         let c = 0
    //         return
    //         c = a+b;
    //     }

    //     let res = funcion1(5,5);
    //     `,
    //     respuesta: 1,
    //     opciones: {
    //         opcion1: "undefined",
    //         opcion2: "error",
    //         opcion3: 10,
    //         opcion4: 55
    //     }
    // },
    // {
    //     pregunta: `array1[3] q elemento es?
    //     const array1 = ["Hola", 55, true, {nombre : "Juan", edad : 25, altura : 1.80}];
    //     `,
    //     respuesta: 1,
    //     opciones: {
    //         opcion1: "undefined",
    //         opcion2: { nombre: "Juan", edad: 25, altura: 1.80 },
    //         opcion3: true,
    //         opcion4: 55
    //     }
    // },
];

function Jugadores(nombre, puntuacion, equipo) {
    this.nombre = nombre;
    this.puntuacion = puntuacion;
    this.equipo = equipo;

    this.puntuacionJugador = function () {
        alert("La puntuacion del jugador " + this.nombre + " es de :" + this.puntuacion);
    }
}

//Equipos
const myCodeCoffe = [
    {
        jugador: new Jugadores("Marta", 8, "myCodeCoffe")
    },
    {
        jugador: new Jugadores("Ludmi", 4, "myCodeCoffe")

    },
    {
        jugador: new Jugadores("Fede", 5, "myCodeCoffe")

    },
    {
        jugador: new Jugadores("Fernando", 2, "myCodeCoffe")

    },
    {
        jugador: new Jugadores("Maria", 1, "myCodeCoffe")

    },
    {
        jugador: new Jugadores("Luciana", 8, "myCodeCoffe")

    },
    {
        jugador: new Jugadores("Luciano", 8, "myCodeCoffe")

    },
    {
        nombre: "Juan",
        puntuacion: 10,
        equipo: "myCodeCoffe"
    },
    {
        nombre: "Facu",
        puntuacion: 10,
        equipo: "myCodeCoffe"
    },
    {
        nombre: "Martin",
        puntuacion: 9,
        equipo: "myCodeCoffe"
    },
    {
        nombre: "Lucho",
        puntuacion: 7,
        equipo: "myCodeCoffe"
    },
    {
        nombre: "Yo",
        puntuacion: 7,
        equipo: "myCodeCoffe"
    },
    {
        nombre: "Pepe",
        puntuacion: 6,
        equipo: "myCodeCoffe"
    },
    {
        nombre: "ElMagician",
        puntuacion: 5,
        equipo: "myCodeCoffe"
    },
    {
        nombre: "Lenox",
        puntuacion: 3,
        equipo: "myCodeCoffe"
    },
    {
        nombre: "ElPampa",
        puntuacion: 3,
        equipo: "myCodeCoffe"
    },
    {
        nombre: "Tatun",
        puntuacion: 3,
        equipo: "myCodeCoffe"
    }
]

const codigoYCafe = [
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

const iTurnCoffeIntoCode = [
    {
        jugador: new Jugadores("Maxi", 10, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Maxi", 10, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Maxi", 10, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Alicia", 9, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Bibi", 2, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Joshep", 3, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Lucy", 6, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Maximiliano", 1, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Marcelo", 5, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Rocio", 8, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Martincho", 10, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Juanchis", 10, "codigoYCafe")
    }
]



//QUIZ DE PREGUNTAS 
const nombreUsuario = prompt("Ingrese su nombre: ");
const equipoUsuario = prompt(`
Elija un equipo: 
1_MY CODE COFFE
2_CODIFO Y CAFE
3_I TURN COFFE INTO CODE
`);


const analizandoRespuesta = (resU, resP, puntuacion) => {

    if (resU == resP) {
        alert("respuesta correcta");
        puntuacion++;

    } else {
        alert("respuesta incorrecta");
    }

    return puntuacion;
}

//funcion q se encarga de hacer las preguntas y devuelve los puntos del jugador
const funcionPregunta = (arr) => {

    let pregunta = "";
    let respuesta = "";
    let opciones = "";
    let respuestaUsuario = "";
    let puntuacion = 0;

    arr.forEach((elem) => {
        pregunta = elem.pregunta;
        respuesta = elem.respuesta;
        opciones = elem.opciones;

        alert(pregunta);

        respuestaUsuario = prompt(`
        escriba el numero de alguna de las siguientes opciones:
        1_${opciones.opcion1}
        2_${opciones.opcion2}
        3_${opciones.opcion3}
        4_${opciones.opcion4}
        `);

        puntuacion = analizandoRespuesta(respuestaUsuario, respuesta, puntuacion);
    });

    return puntuacion;
}


//funcion para agregar al jugador y su puntuacion al equipo elegido
const agregarAEquipo = (nombre, puntuacion, equipo) => {

    let equipoElegido = "";
    let aux = "";

    switch (equipo) {
        case "1":

            equipoElegido = "myCodeCoffe"

            // const jugadorNuevo = {
            //     nombre: nombre,
            //     equipo: equipo,
            //     puntuacion: 0
            // }

            // myCodeCoffe.push(jugadorNuevo);

            aux = {
                jugador: new Jugadores(nombre, puntuacion, equipoElegido)
            };

            myCodeCoffe.push(aux);
            console.log(myCodeCoffe);

            break;

        case "2":

            equipoElegido = "codigoYCafe";

            aux = {
                jugador: new Jugadores(nombre, puntuacion, equipoElegido)
            };

            codigoYCafe.push(aux);
            console.log(codigoYCafe);

            break;

        case "3":

            equipoElegido = "iTurnCoffeIntoCode";


            aux = {
                jugador: new Jugadores(nombre, puntuacion, equipoElegido)
            };
            iTurnCoffeIntoCode.push(aux);
            console.log(iTurnCoffeIntoCode);

            break;

        default:
            console.log("error");
            break;
    }

    return equipoElegido;
}

//sumar puntos del equipo pasado
const sumarPuntos = (equipo) => {

    let puntosTotales = 0;

    puntosTotales = equipo.map((elem) => elem.jugador.puntuacion).reduce((total, valor) => {
        return total + valor
    }, 0);

    return puntosTotales;
}

//funcion q suma los puntos totales del equipo q eligio el jugador
const puntosDelEquipo = (equipo) => {

    let puntosTotales = 0;

    switch (equipo) {
        case "1":

            puntosTotales = sumarPuntos(myCodeCoffe);

            break;
        case "2":

            puntosTotales = sumarPuntos(codigoYCafe);

            break;
        case "3":

            puntosTotales = sumarPuntos(iTurnCoffeIntoCode);

            break;

        default:
            console.log("error");
            break;
    }

    return puntosTotales;
}

//funcion q muestra por consola los 10 mejores jugadores del equipo elejido
const mostrarTop10 = (equipo)=>{

    //hace un filter y un sort aca

    switch (equipo) {
        case "1":

            puntosTotales = sumarPuntos(myCodeCoffe);

            break;
        case "2":

            puntosTotales = sumarPuntos(codigoYCafe);

            break;
        case "3":

            puntosTotales = sumarPuntos(iTurnCoffeIntoCode);

            break;

        default:
            console.log("error");
            break;
    }

}

// llamamos a la funcion para q empeize el quiz
const puntuacionUsuario = funcionPregunta(preguntasYRespuestas);
alert(nombreUsuario + " tu puntuacion es de:" + " " + puntuacionUsuario + " respuestas correctas");

//agregamos al jugador a su equipo elegido
const agregandoEquipo = agregarAEquipo(nombreUsuario, puntuacionUsuario, equipoUsuario);
alert(`el jugador : ${nombreUsuario} q tiene una puntuacion de : ${puntuacionUsuario} a sido agregado al equipo : ${agregandoEquipo}`);

//mostramos los puntos totales de su equipo
const puntosTotales = puntosDelEquipo(equipoUsuario);
alert(`Los puntos totales de tu equipo son : ${puntosTotales}`);