let respuestasCorrectas = [
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
        pregunta: "Bootstrap es ?",
        respuesta:
            "Conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web",
        opciones: {
            opcion1: "Conjunto de herramientas para diseño de sitios y aplicaciones web",
            opcion2: "Un lenguaje de programacion",
            opcion3: "Conjunto de herramientas para hacer sitios y aplicaciones web responsive",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "Cuantas formas de declarar una varibale hay en JavaScript?",
        respuesta: 3,
        opciones: {
            opcion1: 1,
            opcion2: 2,
            opcion3: 3,
            opcion4: "Mas de 3"
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
        pregunta: "Se puede modificar el valor de una varibale const?",
        respuesta: "No",
        opciones: {
            opcion1: "Si",
            opcion2: "No",
            opcion3: "Depende el contexto donde se la crea",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: `
        Que se imprime en consola el sigueinte codigo? 
        let num1 = '34';
        let num2 = 10;
        const resultado = num1 + num2; 
        `,
        respuesta: "3410",
        opciones: {
            opcion1: "3410",
            opcion2: 44,
            opcion3: 44.0,
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "For y While?",
        respuesta: "Bucles",
        opciones: {
            opcion1: "Ejecuta una sentencia si una condición específicada es evaluada como verdadera",
            opcion2: "Un bucle que ejecuta la misma sentencia una cierta cantidad de veces",
            opcion3: "Palabra reservada para crear objetos y clases",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta:
            "En un archivo .css cuantas formas hay de seleccionar un elemento?",
        respuesta: "Clases, ID, Elemento(Tags), Atributo, etc",
        opciones: {
            opcion1: "Clases, ID, Elemento(Tags), Atributo, etc",
            opcion2: "Clases, ID, Elemento(Tags)",
            opcion3: "Clases, ID",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "Cual es la utilidad de CSS?",
        respuesta: "Poner la web facherita",
        opciones: {
            opcion1: "El esqueleto del sitio web",
            opcion2: "Dar logica e interactividad al sitio web",
            opcion3: "Poner la web facherita",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "HTML nos permite?",
        respuesta: "Ninguna de las anteriores",
        opciones: {
            opcion1: "Hacer mas facil el responsive del sitio web",
            opcion2: "Dar logica e interactividad al sitio web",
            opcion3: "Poner la web facherita",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "Una funcion en JS es?",
        respuesta:
            "Un conjunto de instrucciones reutilizable que realiza una tarea o calcula un valor",
        opciones: {
            opcion1: "Un conjunto de instrucciones reutilizable que realiza una tarea o calcula un valor",
            opcion2: "Un bucle que permite repetir intrucciones una cierta cantidad de veces",
            opcion3: "Palabra reservada para crear objetos",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "Una funcion es obligatorio que tenga parametros declarados entre sus ()?",
        respuesta: "No",
        opciones: {
            opcion1: "Si",
            opcion2: "No",
            opcion3: "Depende el contexto",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "console.log() nos permite?",
        respuesta: "escribir un mensaje en consola",
        opciones: {
            opcion1: "Muestra un texto y espera hasta que el usuario cierre la ventana de texto",
            opcion2: "Se usa para mostrar un cuadro texto que le pide al usuario ingresar datos",
            opcion3: "Escribir un mensaje en consola",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "Un alert() muestra?",
        respuesta:
            "Muestra un texto y espera hasta que el usuario cierre la ventana de texto",
        opciones: {
            opcion1: "Muestra un texto y espera hasta que el usuario cierre la ventana de texto",
            opcion2: "Se usa para mostrar un cuadro texto que le pide al usuario ingresar datos",
            opcion3: "Escribir un mensaje en consola",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "if y else?",
        respuesta:
            "Ejecuta una sentencia si una condición específicada es evaluada como verdadera",
        opciones: {
            opcion1: "Ejecuta una sentencia si una condición específicada es evaluada como verdadera",
            opcion2: "Ejecuta una sentencia si una condición específicada es evaluada como falsa",
            opcion3: "Ejecuta una sentencia si una condición específicada sin importar si esta es evaluada como verdadera o falsa",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "La utilidad de los eventos es?",
        respuesta:
            "Permiten la interacción entre las aplicaciones y el usuario",
        opciones: {
            opcion1: "Permiten la interacción entre las aplicaciones y el usuario",
            opcion2: "Reciclar codigo",
            opcion3: "Alamacenar varios tipos de datos",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "El evento onCLick nos permite?",
        respuesta:
            "Ejecuta una cierta funcionalidad cuando se hace click en un botón",
        opciones: {
            opcion1: "Ejecuta una cierta funcionalidad cuando se preciona una tecla",
            opcion2: "Ejecuta una cierta funcionalidad cuando se una condicion se evalua como verdadera",
            opcion3: "Ejecuta una cierta funcionalidad cuando se hace click en un elemento",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta:
            "Bootstrap se debe linkear antes o despues de nuestro archivo .css?",
        respuesta: "Antes",
        opciones: {
            opcion1: "No importa",
            opcion2: "Antes",
            opcion3: "Despues",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "Los arrays se usan para?",
        respuesta: "Almacenar multiples valores en una sola variable",
        opciones: {
            opcion1: "Crear clases",
            opcion2: "Intanciar objetos",
            opcion3: "Alamcenar multiples valores de un mismo tipo en una sola varibale",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "El metodo push() nos permite?",
        respuesta: "Nos permite agragar un o varios elemento al final de un array",
        opciones: {
            opcion1: "Nos permite agragar un elemento al principio de un array",
            opcion2: "Nos permite agragar un elemento al final de un array",
            opcion3: "Nos permite agragar un o varios elemento al final de un array",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "Los Booleanos pueden tener solo?",
        respuesta: "2 valores",
        opciones: {
            opcion1: "1 valores",
            opcion2: "2 valores",
            opcion3: "3 valores",
            opcion4: "Mas de 3"
        }
    },
    {
        pregunta: "El objeto Math permite?",
        respuesta: "Realizar tareas matemáticas",
        opciones: {
            opcion1: "Convertir strings a numero enteros",
            opcion2: "Realizar tareas matemáticas",
            opcion3: "Convertir strings a numero con ,",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "Los objetos son?",
        respuesta: "Un objeto es una colección de datos que se agrupan de manera clave-valor",
        opciones: {
            opcion1: "Un objeto es una colección de datos que se agrupan de manera clave-valor pero todos sus atributos deben de ser del mismo tipo",
            opcion2: "Un objeto es una clase",
            opcion3: "Un objeto es un funciones constructoras",
            opcion4: "Un objeto es una colección de datos que se agrupan de manera clave-valor"
        }
    },
    {
        pregunta: `
        El siguiente codigo tiene error cual es?
        const sumar = (a,b)=>{
            return a+b;
        }

        let res = sumar(5;6);
        console.log(res);
        `,
        respuesta: "Los parametros deben separarse con ,",
        opciones: {
            opcion1: "Los parametros deben ser pasados como objetos",
            opcion2: "Los parametros deben separarse con :",
            opcion3: "No tiene ningun error",
            opcion4: "Los parametros deben separarse con ,"
        }
    },
    {
        pregunta: ` El siguiente codigo tiene error xq?
        const person = {
        firstName: "John"
        lastName: "Doe"
        age: 50
        eyeColor: "blue"
        };
        console.log(person["age"])
        `,
        respuesta: "Faltan las , para separar los atributos",
        opciones: {
            opcion1: "Faltan las , para separar los atributos",
            opcion2: "Faltan las ; para separar los atributos",
            opcion3: "No todos sus atributos son del mismo tipo",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "fetch() es?",
        respuesta: "Metodo inicia el proceso de obtener un recurso de un servidor",
        opciones: {
            opcion1: "Metodo inicia el proceso de obtener un recurso de un servidor",
            opcion2: "Palabra reservada para crear una funcion",
            opcion3: "Un framework para dar estilos a la pagina",
            opcion4: "Palabra reservada para poder crear metodos en funciones constructoras"
        }
    },
    {
        pregunta: "Que nos devuelve una peticion fetch()",
        respuesta: "Una promesa que se resuelve en un objeto de respuesta",
        opciones: {
            opcion1: "Una objeto",
            opcion2: "Una promesa que se resuelve en un objeto de respuesta",
            opcion3: "Un array",
            opcion4: "Un mensaje para que el usuario ingrese datos"
        }
    },
    {
        pregunta: "Usamos media queries para?",
        respuesta:
            "Aplicar estilos CSS según el tamaño de pantalla del dispositivo",
        opciones: {
            opcion1: "Intanciar un objeto",
            opcion2: "Aplicar estilos CSS según el tamaño de pantalla del dispositivo",
            opcion3: "Intanciar una clase",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "JSON es?",
        respuesta: "Formato para almacenar y transportar datos",
        opciones: {
            opcion1: "Formato para almacenar datos",
            opcion2: "Formato para almacenar y transportar datos",
            opcion3: "Formato para transportar datos",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: ` q se escribe en consola?
        const funcion1 = (a,b)=>{
            let c = 0
            return
            c = a+b;
        }

        let res = funcion1(5,5);
        `,
        respuesta: "undefined",
        opciones: {
            opcion1: "undefined",
            opcion2: "error",
            opcion3: 10,
            opcion4: 55
        }
    }, {
        pregunta: `array1[3] q elemento es?
        const array1 = ["Hola",55,true,{nombre : "Juan", edad : 25, altura : 1.80}];
        `,
        respuesta: { nombre: "Juan", edad: 25, altura: 1.80 },
        opciones: {
            opcion1: "undefined",
            opcion2: { nombre: "Juan", edad: 25, altura: 1.80 },
            opcion3: true,
            opcion4: 55
        }
    },
];


//QUIZ DE PREGUNTAS (DE MOMENTO SOLO 5)
const nombreUsuario = prompt("Ingrese su nombre: ");

//variable donde esta la pregunta
const pregunta1 = "JavaScript es un lenguaje?";
//variable donde guarda el numero de la respuesta correcta
const respuesta1 = "2";

const pregunta2 = "let es una forma de?";
const respuesta2 = "3";

const pregunta3 = "Se puede modificar el valor de una varibale const?";
const respuesta3 = "2";

const pregunta4 = "Que se imprime en consola el sigueinte codigo?\n let num1 = '34';\n let num2 = 10;\n const resultado = num1 + num2; \n console.log(resultado);";
const respuesta4 = "1";

const pregunta5 = "Bootstrap se debe linkear antes o despues de nuestro archivo .css?";
const respuesta5 = "1";

//la funcion analizandoRespuesta pues hace lo q dice su nombre
//los parametros q toma son la respuesta del usuario, respuesta1,2,3,.... (el numero depende del caso en el q estemos ene el switch) y por ultimo la variable donde se va a ir guardando la puntuacion
const analizandoRespuesta = (resU, resP, puntuacion) => {

    //este if analiza si la respuesta del usuario es igual a la respuesta1,2,3,...
    if (resU == resP) {
        //en caso de ser correcta se le informa y a la varibale puntuacion se le suma 1
        alert("respuesta correcta");
        puntuacion++;

    } else {
        alert("respuesta incorrecta");
    }

    //restornamos puntuacion q se usa mas adelante para mostrar la cantidad de respuestas correctas
    return puntuacion;
}

//funcion q se encarga de hacer las preguntas
const funcionPregunta = (nombre) => {

    let respuestaUsuario = "";
    let puntuacion = 0;

    for (let i = 0; i < 5; i++) {

        switch (i) {
            case 0:

                alert(pregunta1);
                respuestaUsuario = prompt(`
                escriba el numero de alguna de las siguientes opciones:
                1_Igual q Java
                2_Interpretado
                3_Un framework para diseños de sitios y aplicaciones web
                4_Ninguna de las anteriores
                `);

                //esta funcion cumple la misma funcion de el if else de abajo q se repetia muchas veces en el codigo
                puntuacion = analizandoRespuesta(respuestaUsuario, respuesta1, puntuacion);

                break;

            case 1:

                alert(pregunta2);
                respuestaUsuario = prompt(`
                escriba el numero de alguna de las siguientes opciones:
                1_Declarar una varibale q no puede cambiar su valor asiganado
                2_Usar condicionales
                3_Declarar una varibale q puede cambiar su valor asiganado
                4_Ninguna de las anteriores
                `);

                puntuacion = analizandoRespuesta(respuestaUsuario, respuesta2, puntuacion);

                break;
            case 2:

                alert(pregunta3);
                respuestaUsuario = prompt(`
                escriba el numero de alguna de las siguientes opciones:
                1_Si
                2_No
                3_Ninguna de las anteriores
                `);

                puntuacion = analizandoRespuesta(respuestaUsuario, respuesta3, puntuacion);

                break;
            case 3:

                alert(pregunta4);
                respuestaUsuario = prompt(`
                escriba el numero de alguna de las siguientes opciones:
                1_3410
                2_44
                3_44.0
                4_Ninguna de las anteriores
                `);

                puntuacion = analizandoRespuesta(respuestaUsuario, respuesta4, puntuacion);

                break;

            case 4:

                alert(pregunta5);
                respuestaUsuario = prompt(`
                escriba el numero de alguna de las siguientes opciones:
                1_Antes ya q asi nuestro css tiene prioridad a la hora de poner estilos
                2_Despues ya q asi nuestro css tiene menos prioridad a la hora de poner estilos
                3_Da igual el orden en el q se linkean
                4_Ninguna de las anteriores
                `);

                puntuacion = analizandoRespuesta(respuestaUsuario, respuesta5, puntuacion);

                break;

            default:
                console.log("Error");
                break;
        }

    }

    //alert q muestra el nombre + la puntuacion del jugador
    alert(nombre + " tu puntuacion es de:" + " " + puntuacion + " respuestas correctas");
}

//llamamos a la funcion para q empeize el quiz
funcionPregunta(nombreUsuario);



//profe aca tengo una calculadora q era otra posible opcion de proyecto (puede porblarlo si quiere pero la entraga es el quiz de preguntas)

//CALCULADORA

// const sumar = (a,b)=>{
//     return a+b;
// }

// const restar = (a,b)=>{
//     return a-b;
// }

// const multiplicar = (a,b)=>{
//     return a*b;
// }

// const dividir = (a,b)=>{
//     return a/b;
// }

// const calculadora = (num1, num2, operador)=>{
//     let resultado = 0;

//     switch (operador) {
//         case "+":
//             resultado = sumar(num1,num2);
//             break;

//         case "-":
//                 resultado = restar(num1,num2);
//                 break;

//         case "*":
//             resultado = multiplicar(num1,num2);
//             break;

//         case "/":
//                 resultado = dividir(num1,num2);
//                 break;

//         default:
//             break;
//     }

//     return resultado;
// }

// const mismosNumeros = (resultado,numero,operacion)=>{
//     let res = resultado;

//     if (parseInt(numero)) {
//         res = calculadora(res,numero,operacion);
//         alert(res);

//     } else {
//         alert("tenes q pasarme numeros");
//     }

//     return res;
// }

// const bucleOperacion = (confirmacion,resultado)=>{

//     if (confirmacion == 'si') {
//         while (confirmacion == 'si') {
//             let numNuevo = parseInt(prompt("pasame otro numero:"));
//             let opNueva = prompt("q operacion queres hacer (+,-,*,/)");

//             resultado = mismosNumeros(resultado,numNuevo,opNueva);
//             confirmacion = prompt("seguimos con estos numero? si o no");
//         }
//     }

//     return resultado;
// }

// const seguirOperando = ()=>{
//     let continuar = prompt("queres hacer una operacion matematica? si o no");
//     let res = 0;

//     while (continuar == 'si' || continuar == 'SI' || continuar == 'Si') {

//         let numero1 = parseInt(prompt("pasame 1 numero"));
//         let numero2 = parseInt(prompt("pasame otro numero"));
//         let operacion = prompt("q operacion queres hacer (+,-,*,/)");
//         let seguimos = "";

//         if (parseInt(numero1) && parseInt(numero2)) {
//             res = calculadora(numero1,numero2,operacion);

//             alert(res);

//             seguimos = prompt("seguimos con estos numero? si o no");

//             res = bucleOperacion(seguimos,res);

//             continuar = prompt("hacemos otra operacion?");

//         } else {
//             alert("tenes q pasarme numeros");
//         }
//     }
// }

// seguirOperando();