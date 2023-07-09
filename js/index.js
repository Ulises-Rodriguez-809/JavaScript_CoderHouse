//QUIZ DE PREGUNTAS (DE MOMENTO SOLO 5)
const nombreUsuario = prompt("Ingrese su nombre: ")

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
//se q podria pedir el nombre del jugador dentro de la funcion pero queria practicar todo el tema de los parametros de funciones
const funcionPregunta = (nombre) => {

    //varibale q va a ir guardando la respuesta del usuario
    let respuestaUsuario = "";
    //cantidad de respuestas correctas del jugador
    let puntuacion = 0;

    for (let i = 0; i < 5; i++) {

        switch (i) {
            case 0:

                //se q podria hacer la pregunta y las opciones todo juntos pero me parecia q quedaba muy cargado todo en 1 solo propmt
                alert(pregunta1);
                //prompt q le muestra al usuario las posibles respuestas y guarda el numero para comparar mas adelante con la variable respuesta1
                respuestaUsuario = prompt(`
                escriba el numero de alguna de las siguientes opciones:
                1_Igual q Java
                2_Interpretado
                3_Un framework para diseños de sitios y aplicaciones web
                4_Ninguna de las anteriores
                `);

                //esta funcion cumple la misma funcion de el if else de abajo q se repetia muchas veces en el codigo
                puntuacion = analizandoRespuesta(respuestaUsuario, respuesta1, puntuacion);
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

                puntuacion = analizandoRespuesta(respuestaUsuario, respuesta2, puntuacion);

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

                puntuacion = analizandoRespuesta(respuestaUsuario, respuesta3, puntuacion);

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

                puntuacion = analizandoRespuesta(respuestaUsuario, respuesta4, puntuacion);

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

                puntuacion = analizandoRespuesta(respuestaUsuario, respuesta5, puntuacion);

                // if (respuestaUsuario == respuesta5) {
                //     alert("respuesta correcta");
                //     puntuacion++;

                // } else {
                //     alert("respuesta incorrecta");
                // }

                break;

            default:
                console.log("no pusiste ninguna de las opciones");
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