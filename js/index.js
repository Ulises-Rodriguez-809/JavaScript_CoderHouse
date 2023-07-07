let respuestasCorrectas = [
    {
        pregunta: "JavaScript es un lenguaje?",
        respuesta: "Interpretado",
    },
    {
        pregunta: "Bootstrap es un framework q permite?",
        respuesta:
            "Conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web",
    },
    {
        pregunta: "Cuantas formas de declarar una varibale hay en JavaScript?",
        respuesta: "3",
    },
    {
        pregunta: "let es una forma de delcarar variables de forma?",
        respuesta: "Local",
    },
    {
        pregunta: "Se puede modificar el valor de una varibale const?",
        respuesta: "No",
    },
    {
        pregunta:
            "Que se imprime en consola el sigueinte codigo?\n let num1 = '34';\n let num2 = 10;\n const resultado = num1 + num2; ",
        respuesta: "3410",
    },
    {
        pregunta: "For y While son?",
        respuesta: "Bucles",
    },
    {
        pregunta:
            "En un archivo .css cuantas formas vistas en el curso de Desarrollo Web hay de seleccionar un elemento?",
        respuesta: "Tipo, Clases, ID, :nth-child()",
    },
    {
        pregunta: "Cual es la utilidad de CSS?",
        respuesta: "Poner la web facherita",
    },
    {
        pregunta: "HTML nos permite crear el?",
        respuesta: "Esqueleto de la pagina web",
    },
    {
        pregunta: "Una funcion en JS es?",
        respuesta:
            "Un conjunto de instrucciones que realiza una tarea o calcula un valor",
    },
    {
        pregunta: "Una funcion es obligatorio que tenga parametros entre sus ()?",
        respuesta: "No",
    },
    {
        pregunta: "console.log() nos permite?",
        respuesta: "escribir un mensaje en consola",
    },
    {
        pregunta: "Un alert() muestra?",
        respuesta:
            "Muestra un diálogo de alerta con un mensaje opcional, y aguardará hasta que el usuario cierre la ventana de diálogo.",
    },
    {
        pregunta: "if y else hacen?",
        respuesta:
            "Ejecuta una sentencia si una condición específicada es evaluada como verdadera. Si la condición es evaluada como falsa, otra sentencia puede ser ejecutada.",
    },
    {
        pregunta: "La utilidad de los eventos es?",
        respuesta:
            "permiten la interacción entre las aplicaciones JavaScript y los usuarios. Cada vez que se pulsa un botón,se pulsa una tecla, etc",
    },
    {
        pregunta: "El evento onCLick nos permite?",
        respuesta:
            "Ejecuta una cierta funcionalidad cuando se hace clic en un botón.",
    },
    {
        pregunta:
            "Bootstrap se debe linkear antes o despues de nuestro archivo .css?",
        respuesta: "Antes",
    },
    {
        pregunta: "Los arrays se usan para?",
        respuesta: "Almacenar multiples valores en una sola variable",
    },
    {
        pregunta: "El metodo push() nos permite?",
        respuesta: "Nos permite agragar un elemento al final de la lista",
    },
    {
        pregunta: "Los Booleanos pueden tener solo?",
        respuesta: "2 valores",
    },
    {
        pregunta: "El objeto Math permite?",
        respuesta: "Realizar tareas matemáticas",
    },
    {
        pregunta: "Los objetos son?",
        respuesta: "Un Tipo de dato de JS",
    },
    {
        pregunta: "Los objetos se utilizan para?",
        respuesta: "Almacenar colecciones de clave/valor",
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
        respuesta: "Faltan las , en el objeto person",
    },
    {
        pregunta: "fetch() es?",
        respuesta: "Metodo inicia el proceso de obtener un recurso de un servidor",
    },
    {
        pregunta: "Que nos devuelve una peticion fetch()",
        respuesta: "Una promesa que se resuelve en un objeto de respuesta",
    },
    {
        pregunta: "Usamos media queries para?",
        respuesta:
            "Aplicar estilos CSS según el tamaño de pantalla del dispositivo",
    },
    {
        pregunta:
            "En CSS la propiedad display: block; hara q nuestro elemento se vean en?",
        respuesta: "Bloque",
    },
    {
        pregunta: "JSON es?",
        respuesta: "Formato para almacenar y transportar datos.",
    },
    {
        pregunta: "Cuando se usa JSON?",
        respuesta:
            "Se usa cuando los datos se envían desde un servidor a una página web.",
    },
    {
        pregunta: "JSON significa?",
        respuesta: "Java Script Object Notation",
    },
    {
        pregunta: "Inpeccionar una pagina nos permite?",
        respuesta: "Ver los elementos, CSS, errores, consola, etc",
    },
    {
        pregunta: ` q se escribe en consola?
        const funcion1 = (a,b)=>{
            let c = 0
            return
            c = a+b;
        }
        `,
        respuesta: "undefined",
    },
];

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

const nombreUsuario = prompt("Ingrese su nombre: ")

const pregunta1 = "JavaScript es un lenguaje?";
const respuesta1 = "2";

const pregunta2 = "let es una forma de?";
const respuesta2 = "3";

const pregunta3 = "Se puede modificar el valor de una varibale const?";
const respuesta3 = "2";

const pregunta4 = "Que se imprime en consola el sigueinte codigo?\n let num1 = '34';\n let num2 = 10;\n const resultado = num1 + num2; \n console.log(resultado);";
const respuesta4 = "1";

const pregunta5 = "Bootstrap se debe linkear antes o despues de nuestro archivo .css?";
const respuesta5 = "1";

const analizandoRespuesta = (resU, resP, puntuacion)=>{
    if (resU == resP) {
        alert("respuesta correcta");
        puntuacion++;

    } else {
        alert("respuesta incorrecta");
    }

    return puntuacion;
}

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

                puntuacion = analizandoRespuesta(respuestaUsuario,respuesta1,puntuacion);
                // if (respuestaUsuario == respuesta1) {
                //     alert("respuesta correcta");
                //     puntuacion++;

                // } else {
                //     alert("respuesta incorrecta");
                // }

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

                puntuacion = analizandoRespuesta(respuestaUsuario,respuesta2,puntuacion);

                // if (respuestaUsuario == respuesta2) {
                //     alert("respuesta correcta");
                //     puntuacion++;

                // } else {
                //     alert("respuesta incorrecta");
                // }

                break;
            case 2:

                alert(pregunta3);
                respuestaUsuario = prompt(`
                escriba el numero de alguna de las siguientes opciones:
                1_Si
                2_No
                3_Ninguna de las anteriores
                `);

                puntuacion = analizandoRespuesta(respuestaUsuario,respuesta3,puntuacion);

                // if (respuestaUsuario == respuesta3) {
                //     alert("respuesta correcta");
                //     puntuacion++;

                // } else {
                //     alert("respuesta incorrecta");
                // }

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

                puntuacion = analizandoRespuesta(respuestaUsuario,respuesta4,puntuacion);

                // if (respuestaUsuario == respuesta4) {
                //     alert("respuesta correcta");
                //     puntuacion++;

                // } else {
                //     alert("respuesta incorrecta");
                // }

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

                puntuacion = analizandoRespuesta(respuestaUsuario,respuesta5,puntuacion);

                // if (respuestaUsuario == respuesta5) {
                //     alert("respuesta correcta");
                //     puntuacion++;

                // } else {
                //     alert("respuesta incorrecta");
                // }

                break;

            default:
                console.log("no pusiste ninguna de las opciones vamos todo de nuevo");
                break;
        }

    }

    alert(nombre + " tu puntuacion es de:" + " " + puntuacion + " respuestas correctas");
}

funcionPregunta(nombreUsuario);

