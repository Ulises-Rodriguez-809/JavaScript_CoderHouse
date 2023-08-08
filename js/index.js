const preguntasYRespuestas = [
    {
        pregunta: "JavaScript es un lenguaje?",
        respuesta: "Interpretado",
        opciones: {
            opcion1: "Igual q Java",
            opcion2: "Interpretado",
            opcion3: "Un Framework para diseño de sitios y aplicaciones web",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "let es una forma de delcarar variables?",
        respuesta: "Variable cuyo valor asignado puede cambiar",
        opciones: {
            opcion1: "Variable q siempre es de contexto global",
            opcion2: "Variable constante cuyo valor no puede cambiar",
            opcion3: "Variable cuyo valor asignado puede cambiar",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "Los arrays se usan para?",
        respuesta: "Ninguna de las anteriores",
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
    //     respuesta: "Antes",
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
    //     respuesta: "3410",
    //     opciones: {
    //         opcion1: "3410",
    //         opcion2: 44,
    //         opcion3: 44.0,
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "Bootstrap es ?",
    //     respuesta: "Conjunto de herramientas para diseño de sitios y aplicaciones web",
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
    //     respuesta: "No",
    //     opciones: {
    //         opcion1: "Si",
    //         opcion2: "No",
    //         opcion3: "Depende el contexto donde se la crea",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "For y While?",
    //     respuesta: "Un bucle que ejecuta la misma sentencia una cierta cantidad de veces",
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
    //     respuesta: "Clases, ID, Elemento(Tags), Atributo, etc",
    //     opciones: {
    //         opcion1: "Clases, ID, Elemento(Tags), Atributo, etc",
    //         opcion2: "Clases, ID, Elemento(Tags)",
    //         opcion3: "Clases, ID",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "Cual es la utilidad de CSS?",
    //     respuesta: "Poner la web facherita",
    //     opciones: {
    //         opcion1: "El esqueleto del sitio web",
    //         opcion2: "Dar logica e interactividad al sitio web",
    //         opcion3: "Poner la web facherita",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "HTML nos permite?",
    //     respuesta: "Ninguna de las anteriores",
    //     opciones: {
    //         opcion1: "Hacer mas facil el responsive del sitio web",
    //         opcion2: "Dar logica e interactividad al sitio web",
    //         opcion3: "Poner la web facherita",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "Una funcion en JS es?",
    //     respuesta: "Un conjunto de instrucciones reutilizable que realiza una tarea o calcula un valor",
    //     opciones: {
    //         opcion1: "Un conjunto de instrucciones reutilizable que realiza una tarea o calcula un valor",
    //         opcion2: "Un bucle que permite repetir intrucciones una cierta cantidad de veces",
    //         opcion3: "Palabra reservada para crear objetos",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "Una funcion es obligatorio que tenga parametros declarados entre sus ()?",
    //     respuesta: "No",
    //     opciones: {
    //         opcion1: "Si",
    //         opcion2: "No",
    //         opcion3: "Depende el contexto",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "console.log() nos permite?",
    //     respuesta:  "Escribir un mensaje en consola",
    //     opciones: {
    //         opcion1: "Muestra un texto y espera hasta que el usuario cierre la ventana de texto",
    //         opcion2: "Se usa para mostrar un cuadro texto que le pide al usuario ingresar datos",
    //         opcion3: "Escribir un mensaje en consola",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "Un alert() muestra?",
    //     respuesta: "Muestra un texto y espera hasta que el usuario cierre la ventana de texto",
    //     opciones: {
    //         opcion1: "Muestra un texto y espera hasta que el usuario cierre la ventana de texto",
    //         opcion2: "Se usa para mostrar un cuadro texto que le pide al usuario ingresar datos",
    //         opcion3: "Escribir un mensaje en consola",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "if y else?",
    //     respuesta:  "Ejecuta una sentencia si una condición específicada es evaluada como verdadera",
    //     opciones: {
    //         opcion1: "Ejecuta una sentencia si una condición específicada es evaluada como verdadera",
    //         opcion2: "Ejecuta una sentencia si una condición específicada es evaluada como falsa",
    //         opcion3: "Ejecuta una sentencia si una condición específicada sin importar si esta es evaluada como verdadera o falsa",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "El metodo push() nos permite?",
    //     respuesta:  "Nos permite agragar un o varios elemento al final de un array",
    //     opciones: {
    //         opcion1: "Nos permite agragar un elemento al principio de un array",
    //         opcion2: "Nos permite agragar un elemento al final de un array",
    //         opcion3: "Nos permite agragar un o varios elemento al final de un array",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "Los Booleanos pueden tener solo?",
    //     respuesta: "2 valores",
    //     opciones: {
    //         opcion1: "1 valores",
    //         opcion2: "2 valores",
    //         opcion3: "3 valores",
    //         opcion4: "Mas de 3"
    //     }
    // },
    // {
    //     pregunta: "Los objetos son?",
    //     respuesta: "Un objeto es una colección de datos que se agrupan de manera clave-valor",
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
    //     respuesta: "Los parametros deben separarse con ,",
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
    //     respuesta: "Faltan las , para separar los atributos",
    //     opciones: {
    //         opcion1: "Faltan las , para separar los atributos",
    //         opcion2: "Faltan las ; para separar los atributos",
    //         opcion3: "No todos sus atributos son del mismo tipo",
    //         opcion4: "Ninguna de las anteriores"
    //     }
    // },
    // {
    //     pregunta: "Usamos media queries para?",
    //     respuesta: "Aplicar estilos CSS según el tamaño de pantalla del dispositivo",
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
    //     respuesta: "undefined",
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
    //     respuesta: "{ nombre: 'Juan', edad: 25, altura: 1.80 }",
    //     opciones: {
    //         opcion1: "Hola",
    //         opcion2: 55,
    //         opcion3: true,
    //         opcion4: "{ nombre: 'Juan', edad: 25, altura: 1.80 }"
    //     }
    // },
];
//     {
//         pregunta: "JavaScript es un lenguaje?",
//         respuesta: "Interpretado",
//         opciones: {
//             opcion1: "Igual q Java",
//             opcion2: "Interpretado",
//             opcion3: "Un Framework para diseño de sitios y aplicaciones web",
//             opcion4: "Ninguna de las anteriores"
//         }
//     },
//     {
//         pregunta: "let es una forma de delcarar variables?",
//         respuesta: "Variable cuyo valor asignado puede cambiar",
//         opciones: {
//             opcion1: "Variable q siempre es de contexto global",
//             opcion2: "Variable constante cuyo valor no puede cambiar",
//             opcion3: "Variable cuyo valor asignado puede cambiar",
//             opcion4: "Ninguna de las anteriores"
//         }
//     },
//     {
//         pregunta: "Los arrays se usan para?",
//         respuesta: "Ninguna de las anteriores",
//         opciones: {
//             opcion1: "Crear clases",
//             opcion2: "Intanciar objetos",
//             opcion3: "Alamcenar multiples valores de un mismo tipo en una sola varibale",
//             opcion4: "Ninguna de las anteriores"
//         }
//     },
//     {
//         pregunta:
//             "Bootstrap se debe linkear antes o despues de nuestro archivo .css?",
//         respuesta: "Antes",
//         opciones: {
//             opcion1: "No importa",
//             opcion2: "Antes",
//             opcion3: "Despues",
//             opcion4: "Ninguna de las anteriores"
//         }
//     },
//     {
//         pregunta: `
//         Que se imprime en consola el sigueinte codigo? 
//         let num1 = '34';
//         let num2 = 10;
//         const resultado = num1 + num2; 
//         `,
//         respuesta: "3410",
//         opciones: {
//             opcion1: "3410",
//             opcion2: 44,
//             opcion3: 44.0,
//             opcion4: "Ninguna de las anteriores"
//         }
//     },
//     {
//         pregunta: "Bootstrap es ?",
//         respuesta: "Conjunto de herramientas para diseño de sitios y aplicaciones web",
//         opciones: {
//             opcion1: "Conjunto de herramientas para diseño de sitios y aplicaciones web",
//             opcion2: "Un lenguaje de programacion",
//             opcion3: "Conjunto de herramientas para hacer sitios y aplicaciones web responsive",
//             opcion4: "Ninguna de las anteriores"
//         }
//     },
//     {
//         pregunta: "Cuantas formas de declarar una varibale hay en JavaScript?",
//         respuesta: 3,
//         opciones: {
//             opcion1: 1,
//             opcion2: 2,
//             opcion3: 3,
//             opcion4: "Mas de 3"
//         }
//     },
//     {
//         pregunta: "Se puede modificar el valor de una varibale const?",
//         respuesta: "No",
//         opciones: {
//             opcion1: "Si",
//             opcion2: "No",
//             opcion3: "Depende el contexto donde se la crea",
//             opcion4: "Ninguna de las anteriores"
//         }
//     },
//     {
//         pregunta: "For y While?",
//         respuesta: "Un bucle que ejecuta la misma sentencia una cierta cantidad de veces",
//         opciones: {
//             opcion1: "Ejecuta una sentencia si una condición específicada es evaluada como verdadera",
//             opcion2: "Un bucle que ejecuta la misma sentencia una cierta cantidad de veces",
//             opcion3: "Palabra reservada para crear objetos y clases",
//             opcion4: "Ninguna de las anteriores"
//         }
//     },
//     {
//         pregunta:
//             "En un archivo .css cuantas formas hay de seleccionar un elemento?",
//         respuesta: "Clases, ID, Elemento(Tags), Atributo, etc",
//         opciones: {
//             opcion1: "Clases, ID, Elemento(Tags), Atributo, etc",
//             opcion2: "Clases, ID, Elemento(Tags)",
//             opcion3: "Clases, ID",
//             opcion4: "Ninguna de las anteriores"
//         }
//     },
//     {
//         pregunta: "Cual es la utilidad de CSS?",
//         respuesta: 3,
//         opciones: {
//             opcion1: "El esqueleto del sitio web",
//             opcion2: "Dar logica e interactividad al sitio web",
//             opcion3: "Poner la web facherita",
//             opcion4: "Ninguna de las anteriores"
//         }
//     },
//     {
//         pregunta: "HTML nos permite?",
//         respuesta: 4,
//         opciones: {
//             opcion1: "Hacer mas facil el responsive del sitio web",
//             opcion2: "Dar logica e interactividad al sitio web",
//             opcion3: "Poner la web facherita",
//             opcion4: "Ninguna de las anteriores"
//         }
//     },
//     {
//         pregunta: "Una funcion en JS es?",
//         respuesta: 1,
//         opciones: {
//             opcion1: "Un conjunto de instrucciones reutilizable que realiza una tarea o calcula un valor",
//             opcion2: "Un bucle que permite repetir intrucciones una cierta cantidad de veces",
//             opcion3: "Palabra reservada para crear objetos",
//             opcion4: "Ninguna de las anteriores"
//         }
//     },
//     {
//         pregunta: "Una funcion es obligatorio que tenga parametros declarados entre sus ()?",
//         respuesta: 2,
//         opciones: {
//             opcion1: "Si",
//             opcion2: "No",
//             opcion3: "Depende el contexto",
//             opcion4: "Ninguna de las anteriores"
//         }
//     },
//     {
//         pregunta: "console.log() nos permite?",
//         respuesta: 3,
//         opciones: {
//             opcion1: "Muestra un texto y espera hasta que el usuario cierre la ventana de texto",
//             opcion2: "Se usa para mostrar un cuadro texto que le pide al usuario ingresar datos",
//             opcion3: "Escribir un mensaje en consola",
//             opcion4: "Ninguna de las anteriores"
//         }
//     },
//     {
//         pregunta: "Un alert() muestra?",
//         respuesta: 1,
//         opciones: {
//             opcion1: "Muestra un texto y espera hasta que el usuario cierre la ventana de texto",
//             opcion2: "Se usa para mostrar un cuadro texto que le pide al usuario ingresar datos",
//             opcion3: "Escribir un mensaje en consola",
//             opcion4: "Ninguna de las anteriores"
//         }
//     },
//     {
//         pregunta: "if y else?",
//         respuesta: 1,
//         opciones: {
//             opcion1: "Ejecuta una sentencia si una condición específicada es evaluada como verdadera",
//             opcion2: "Ejecuta una sentencia si una condición específicada es evaluada como falsa",
//             opcion3: "Ejecuta una sentencia si una condición específicada sin importar si esta es evaluada como verdadera o falsa",
//             opcion4: "Ninguna de las anteriores"
//         }
//     },
//     {
//         pregunta: "El metodo push() nos permite?",
//         respuesta: 3,
//         opciones: {
//             opcion1: "Nos permite agragar un elemento al principio de un array",
//             opcion2: "Nos permite agragar un elemento al final de un array",
//             opcion3: "Nos permite agragar un o varios elemento al final de un array",
//             opcion4: "Ninguna de las anteriores"
//         }
//     },
//     {
//         pregunta: "Los Booleanos pueden tener solo?",
//         respuesta: 2,
//         opciones: {
//             opcion1: "1 valores",
//             opcion2: "2 valores",
//             opcion3: "3 valores",
//             opcion4: "Mas de 3"
//         }
//     },
//     {
//         pregunta: "Los objetos son?",
//         respuesta: 4,
//         opciones: {
//             opcion1: "Un objeto es una colección de datos que se agrupan de manera clave-valor pero todos sus atributos deben de ser del mismo tipo",
//             opcion2: "Un objeto es una clase",
//             opcion3: "Un objeto es un funciones constructoras",
//             opcion4: "Un objeto es una colección de datos que se agrupan de manera clave-valor"
//         }
//     },
//     {
//         pregunta: `
//         El siguiente codigo tiene error cual es?
//         const sumar = (a,b)=>{
//             return a+b;
//         }

//         let res = sumar(5;6);
//         console.log(res);
//         `,
//         respuesta: 4,
//         opciones: {
//             opcion1: "Los parametros deben ser pasados como objetos",
//             opcion2: "Los parametros deben separarse con :",
//             opcion3: "No tiene ningun error",
//             opcion4: "Los parametros deben separarse con ,"
//         }
//     },
//     {
//         pregunta: ` El siguiente codigo tiene error xq?
//         const person = {
//         firstName: "John"
//         lastName: "Doe"
//         age: 50
//         eyeColor: "blue"
//         };
//         console.log(person["age"])
//         `,
//         respuesta: 1,
//         opciones: {
//             opcion1: "Faltan las , para separar los atributos",
//             opcion2: "Faltan las ; para separar los atributos",
//             opcion3: "No todos sus atributos son del mismo tipo",
//             opcion4: "Ninguna de las anteriores"
//         }
//     },
//     {
//         pregunta: "Usamos media queries para?",
//         respuesta: 2,
//         opciones: {
//             opcion1: "Intanciar un objeto",
//             opcion2: "Aplicar estilos CSS según el tamaño de pantalla del dispositivo",
//             opcion3: "Intanciar una clase",
//             opcion4: "Ninguna de las anteriores"
//         }
//     },
//     {
//         pregunta: ` q se escribe en consola?
//         const funcion1 = (a,b)=>{
//             let c = 0
//             return
//             c = a+b;
//         }

//         let res = funcion1(5,5);
//         `,
//         respuesta: 1,
//         opciones: {
//             opcion1: "undefined",
//             opcion2: "error",
//             opcion3: 10,
//             opcion4: 55
//         }
//     },
//     {
//         pregunta: `array1[3] q elemento es?
//         const array1 = ["Hola", 55, true, {nombre : "Juan", edad : 25, altura : 1.80}];
//         `,
//         respuesta: 4,
//         opciones: {
//             opcion1: "Hola",
//             opcion2: 55,
//             opcion3: true,
//             opcion4: "{ nombre: 'Juan', edad: 25, altura: 1.80 }"
//         }
//     },
// ];

function Jugadores(nombre, puntuacion, equipo) {
    this.nombre = nombre;
    this.puntuacion = puntuacion;
    this.equipo = equipo;

    this.infoJugador = function () {
        alert(`
        El jugador fue agregado
        Jugador : ${this.nombre} 
        Equipo : ${this.equipo}
        Puntuacion : ${this.puntuacion}
        `);
    }
}

//Equipos
const noCoffeNoWorkee = [
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
        // nombre: "Juan",
        // puntuacion: 10,
        // equipo: "noCoffeNoWorkee"
    },
    {
        jugador: new Jugadores("Facu", 10, "noCoffeNoWorkee")

        // nombre: "Facu",
        // puntuacion: 10,
        // equipo: "noCoffeNoWorkee"
    },
    {
        jugador: new Jugadores("Martin", 9, "noCoffeNoWorkee")

        // nombre: "Martin",
        // puntuacion: 9,
        // equipo: "noCoffeNoWorkee"
    },
    {
        jugador: new Jugadores("Lucho", 7, "noCoffeNoWorkee")

        // nombre: "Lucho",
        // puntuacion: 7,
        // equipo: "noCoffeNoWorkee"
    },
    {
        jugador: new Jugadores("Yo", 7, "noCoffeNoWorkee")

        // nombre: "Yo",
        // puntuacion: 7,
        // equipo: "noCoffeNoWorkee"
    },
    {
        jugador: new Jugadores("Pepe", 6, "noCoffeNoWorkee")

        // nombre: "Pepe",
        // puntuacion: 6,
        // equipo: "noCoffeNoWorkee"
    },
    {
        jugador: new Jugadores("ElMagician", 5, "noCoffeNoWorkee")

        // nombre: "ElMagician",
        // puntuacion: 5,
        // equipo: "noCoffeNoWorkee"
    },
    {
        jugador: new Jugadores("Lenox", 3, "noCoffeNoWorkee")

        // nombre: "Lenox",
        // puntuacion: 3,
        // equipo: "noCoffeNoWorkee"
    },
    {
        jugador: new Jugadores("ElPampa", 3, "noCoffeNoWorkee")

        // nombre: "ElPampa",
        // puntuacion: 3,
        // equipo: "noCoffeNoWorkee"
    },
    {
        jugador: new Jugadores("Tatun", 3, "noCoffeNoWorkee")

        // nombre: "Tatun",
        // puntuacion: 3,
        // equipo: "noCoffeNoWorkee"
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
        jugador: new Jugadores("Javier", 7, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Coco", 10, "codigoYCafe")
    },
    {
        jugador: new Jugadores("Laura", 10, "codigoYCafe")
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
//input nombre
const nombreUsuario = document.querySelector("#nombre");

//var q va a guardar el nombre de la clase de la foto del equipo seleccionado
let equipoSeleccionado = "";

let equipoElegido = [];

const arrLength = preguntasYRespuestas.length;


//obtenemos las img de los equipos q podes seleccionar
const imgEquipo = document.querySelectorAll(".equipo");

//info rondas
const rondas = document.querySelector(".rondas");
const rondasCantidad = document.querySelector(".rondasCantidad");

//obtenemos el div donde se va a ir guardando los puntos obtenidos por respuestas correctas
const puntosJugador = document.querySelector(".puntosJugador");
const respuestasIncorrectas = document.querySelector(".incorrectas");

//obtenemos todo el section q contiene el juego
const sectionInfo = document.querySelector(".sectionInfo");

//pregunta y opciones
const pregunta = document.getElementById("pregunta");
const inputOpcion = document.querySelectorAll(".inputOpcion");
console.log(inputOpcion)

//el section q contiene la pregunta y opciones
//lo hacemos desasparecer cuando no hay mas preguntas en el array
const sectionJuego = document.querySelector(".sectionJuego");
const juegoTerminado = document.querySelector(".juegoTerminado");

//se encarga de dar fondo naranja al equipo elegido
const pintarFondo = (arr) => {
    
    arr.forEach((element) => {
        
        element.addEventListener("click", (e) => {

            const { target } = e;

            //primero eliminamos la clase equipoElegido a todas las img de esta manera nunca puede haber 2 equipos pintados al mismo tiempo
            arr.forEach(elem => {
                if (elem.classList.contains("equipoElegido")) {
                    elem.classList.remove("equipoElegido")
                }
            })

            //luego una ves removido la clase equipoElegido de todas las img agregamos devuelta esa clase a la ultima img q fue clikeada
            target.classList.add("equipoElegido");
            //obtenemos el nombre en formato string desde la clase de la img seleccionada
            equipoSeleccionado = target.classList[0];
        })
    })
}

//push al equipo elegido y oculta el input de nombre. los equipos y el btn de empezar a jugar
const agregarAEquipo = (nombre, puntos = 0, equipo) => {

    let auxEquipo = [];

    //creo el nuevo jugador
    const jugadorNuevo = {
        jugador: new Jugadores(nombre, puntos, equipo)
    }

    switch (equipoSeleccionado) {
        case "noCoffeNoWorkee":
            auxEquipo = noCoffeNoWorkee;
            noCoffeNoWorkee.push(jugadorNuevo);
            noCoffeNoWorkee[noCoffeNoWorkee.length - 1].jugador.infoJugador()

            break;
        case "codigoYCafe":
            auxEquipo = codigoYCafe;
            codigoYCafe.push(jugadorNuevo);
            codigoYCafe[codigoYCafe.length - 1].jugador.infoJugador()

            break;
        case "iTurnCoffeIntoCode":
            auxEquipo = iTurnCoffeIntoCode;
            iTurnCoffeIntoCode.push(jugadorNuevo);
            iTurnCoffeIntoCode[iTurnCoffeIntoCode.length - 1].jugador.infoJugador()


            break;
        default:
            alert("ese equipo no esta");
            break;
    }

    //desaparecemos el menu de eleccion de equipo y nombre
    sectionInfo.style.display = "none";

    return auxEquipo;
}

//funcion q le da al btn (empezar a jugar su evento)
const comenzarJuego = () => {

    const btnJugar = document.getElementById("btnJugar");
    // let aux = ""

    btnJugar.addEventListener("click", () => {
        
        let nombre = nombreUsuario.value;

        //cambiamos la info q se ve en cuadro abajo de las preguntas
        const nombreInfo = document.querySelector(".nombreInfo");
        const equipoInfoImg = document.querySelector(".equipoInfoImg");

        equipoElegido = agregarAEquipo(nombre, 0, equipoSeleccionado);

        rondas.innerText = `Ronda : 1`
        rondasCantidad.innerText = `1/${arrLength}`;

        nombreInfo.innerHTML = nombre;
        equipoInfoImg.src = `./img/${equipoSeleccionado}.png`;
        equipoInfoImg.classList.replace("signoPregunta", "imgEquipoInfo");

        // imgEquipo.forEach(elem => {
        //     if (elem.classList.contains("equipoElegido")) {
        //         elem.classList.remove("equipoElegido")
        //     }
        // })
        // if (condition) {
            
        // } else {
        //     alert("Solo puede haber un equipo seleccionado");
        // }

    })
}

//funcion q analiza las respuestas correctas e incorrectas
const analizandoRespuesta = (resU, resP, puntuacion, resInc) => {
    debugger

    if (resU === resP) {
        puntuacion++;
        puntosJugador.innerHTML = `Puntos : ${puntuacion}`;
    } else {
        resInc++;
        respuestasIncorrectas.innerHTML = `Incorrectas : ${resInc}`;
    }

    return [puntuacion,resInc];
}

//funcion q actualiza la rondas 
const rondaActual = (numRondas,rondasCT)=>{

    rondas.innerText = `Ronda : ${numRondas+1}`;
    rondasCantidad.innerText = `${numRondas+1}/${rondasCT}`;
}

//funcion q se encarga de hacer las preguntas y devuelve los puntos del jugador
const funcionPregunta = (arr,fun) => {
    let respuesta = "";
    let opcionesAux = "";
    let opcionIndice = 1;
    let respuestaUsuario = "";
    let puntuacion = 0;
    let resIncorrectas = 0;

    inputOpcion.forEach((element) => {
        element.addEventListener("click", () => {

            //como tanto la primera pregunta como las opciones se ponene de forma estatica en html restamos 1
            respuesta = arr[opcionIndice - 1].respuesta;
            respuestaUsuario = element.value;

            [puntuacion,resIncorrectas] = fun(respuestaUsuario, respuesta, puntuacion, resIncorrectas);

            equipoElegido[equipoElegido.length - 1].jugador.puntuacion = puntuacion;

            //con este if evito q cuando no hay mas preguntas ya no intante actualizar
            if (opcionIndice < arr.length) {
                rondaActual(opcionIndice,arrLength);

                pregunta.innerText = arr[opcionIndice].pregunta;
                opcionesAux = arr[opcionIndice].opciones;

                // for (let i = 0; i < inputOpcion.length; i++) {
                //     inputOpcion[i].value = opcionesAux[`opcion${i + 1}`];
                // }

                inputOpcion.forEach((element,index)=>{
                    element.value = opcionesAux[`opcion${index + 1}`]
                })

                opcionIndice++;

            } else {
                sectionJuego.style.display = "none";
                juegoTerminado.style.display = "block";
                opcionIndice = 1;
                puntuacion = 0;
                resIncorrectas = 0;
            }
        })
    })

    return puntuacion;
}

//funcion q da el evento al btn para jugar devuelta
const eventoNuevoJuego = () => {
    const btnJuegoNuevo = document.getElementById("btnJuegoNuevo");
    const primerasOpciones = ["Igual que Java","Interpretado","Un Framework para diseño de sitios y aplicaciones web","Ninguna de las anteriores"];

    btnJuegoNuevo.addEventListener("click", () => {
        console.log(equipoElegido)

        sectionInfo.style.display = "flex";
        nombreUsuario.value = "";
        equipoSeleccionado = "";
        equipoElegido = [];

        rondas.innerText = "Ronda: ---";
        rondasCantidad.innerText = "---";

        imgEquipo.forEach(elem => {
            if (elem.classList.contains("equipoElegido")) {
                elem.classList.remove("equipoElegido")
            }
        })

        sectionJuego.style.display = "flex";

        pregunta.innerText = "JavaScript es un lenguaje?";

        // for (let i = 0; i < inputOpcion.length; i++) {
        //     inputOpcion[i].value = primerasOpciones[i]; 
            
        // }

        inputOpcion.forEach((element,index)=>{
            element.value = primerasOpciones[index]; 
        })

        puntosJugador.innerText = "Puntos : 0";
        respuestasIncorrectas.innerText = "Incorrectas : 0";

        juegoTerminado.style.display = "none";

    })
}

//funcion q carga las 2 funciones anteriorres (esto para q no haya q llamar a tantas funcion al final)
const cargarEventosMenu = (arr) => {
    pintarFondo(arr);
    comenzarJuego();
    let puntuacion = funcionPregunta(preguntasYRespuestas,analizandoRespuesta);
    eventoNuevoJuego();
}

cargarEventosMenu(imgEquipo);














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

const listaJugadores = () => {

    const equipoLista = document.querySelectorAll(".equipoLista");
    console.log(equipoLista)

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