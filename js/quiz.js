import preguntasYRespuestas from "./pregYRes.js"
import {Jugadores,noCoffeNoWorkee,codigoYCafe,iTurnCoffeIntoCode} from "./equipos.js";

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

//el section q contiene la pregunta y opciones
//lo hacemos desasparecer cuando no hay mas preguntas en el array
const sectionJuego = document.querySelector(".sectionJuego");
//div intrucciones
const instruccionesContainer = document.querySelector(".instruccionesContainer");
//div juego
const juegoContainer = document.querySelector(".juegoContainer");
//section juego nuevo
const juegoTerminado = document.querySelector(".juegoTerminado");

const nombreInfo = document.querySelector(".nombreInfo");
const equipoInfoImg = document.querySelector(".equipoInfoImg");

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

    //FIJATE SI PODES HACERLO ESCALABLE A ESTO CON EL EJEM Q DIO EL PROFE EN LA CLASE 13
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

    btnJugar.addEventListener("click", () => {

        instruccionesContainer.style.display = "none";
        juegoContainer.style.display = "block";
        
        let nombre = nombreUsuario.value;

        equipoElegido = agregarAEquipo(nombre, 0, equipoSeleccionado);

        rondas.innerText = `Ronda : 1`
        rondasCantidad.innerText = `1/${arrLength}`;

        //cambiamos la info q se ve en cuadro abajo de las preguntas
        nombreInfo.innerHTML = nombre;
        equipoInfoImg.src = `../img/${equipoSeleccionado}.png`;
        equipoInfoImg.classList.replace("signoPregunta", "imgEquipoInfo");

    })
}

//funcion q analiza las respuestas correctas e incorrectas
const analizandoRespuesta = (resU, resP, puntuacion, resInc) => {
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

                inputOpcion.forEach((element,index)=>{
                    element.value = opcionesAux[`opcion${index + 1}`]
                })

                opcionIndice++;
                
            } else {//este else se encarga de q cuando no hay mas preguntas resetea los valores para el proximo jugador y ocualta el juego
                // console.log(puntuacion)
                sectionJuego.style.display = "none";
                juegoTerminado.style.display = "block";
                opcionIndice = 1;
                puntuacion = 0;
                resIncorrectas = 0;
            }
        })
    })

}

//funcion q da el evento al btn para jugar devuelta
const eventoNuevoJuego = () => {
    const btnJuegoNuevo = document.getElementById("btnJuegoNuevo");
    const primerasOpciones = ["Igual que Java","Interpretado","Un Framework para diseño de sitios y aplicaciones web","Ninguna de las anteriores"];

    btnJuegoNuevo.addEventListener("click", () => {
        // console.log(equipoElegido)

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
        instruccionesContainer.style.display = "block";
        juegoContainer.style.display = "none";

        pregunta.innerText = "JavaScript es un lenguaje?";

        inputOpcion.forEach((element,index)=>{
            element.value = primerasOpciones[index]; 
        })

        //cambiamos la info q se ve en cuadro abajo de las preguntas
        nombreInfo.innerHTML = `<img src="../img/signoPregunta.png" alt="signo pregunta" class="equipoInfoImg signoPregunta">`;
        equipoInfoImg.src = `../img/signoPregunta.png`;
        equipoInfoImg.classList.replace("imgEquipoInfo", "signoPregunta");

        puntosJugador.innerText = "Puntos : 0";
        respuestasIncorrectas.innerText = "Incorrectas : 0";

        juegoTerminado.style.display = "none";
    })
}

//funcion q carga las 2 funciones anteriorres (esto para q no haya q llamar a tantas funcion al final)
const cargarEventosMenu = (arr) => {
    pintarFondo(arr);
    comenzarJuego();
    funcionPregunta(preguntasYRespuestas,analizandoRespuesta);
    eventoNuevoJuego();
}

cargarEventosMenu(imgEquipo);