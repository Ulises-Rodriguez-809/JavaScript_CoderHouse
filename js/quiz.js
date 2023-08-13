import preguntasYRespuestas from "./pregYRes.js"
import { Jugadores, noCoffeNoWorkee, codigoYCafe, iTurnCoffeIntoCode } from "./equipos.js";
import cerrarSesion from "./cerrarSesion.js";

//esto para poder modificar los datos en el ranking
let datosAux = {
    id: 0,
    usuario: '',
    equipo: '',
    puntuacion: 0
}

let jugadorDatos = JSON.parse(localStorage.getItem("jugadorDatos")) || datosAux;

//QUIZ DE PREGUNTAS 

const infoContainer = document.querySelector(".infoContainer");
const btnContainer = document.querySelector(".btnContainer");

//var q va a guardar el nombre de la clase de la foto del equipo seleccionado
let equipoSeleccionado = "";

let equipoElegido = [];

const arrLength = preguntasYRespuestas.length;

let algunoPintado = false;
//obtenemos las img de los equipos q podes seleccionar
const imgEquipo = document.querySelectorAll(".equipo");

//info rondas
const rondas = document.querySelector(".rondas");
const rondasCantidad = document.querySelector(".rondasCantidad");

//obtenemos el div donde se va a ir guardando los puntos obtenidos por respuestas correctas
const puntosJugador = document.querySelector(".puntosJugador");
const respuestasIncorrectas = document.querySelector(".incorrectas");

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

//traemos el contenido del localStorage para obtener el nombre del jugador
const getLocalStorage = () => {
    let contenidoLocStorage = JSON.parse(localStorage.getItem("jugadorActual"));

    return contenidoLocStorage;
}

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
            // equipoSeleccionado = target.classList[0];
            equipoSeleccionado = target.name;

            algunoPintado = true
        })
    })

}

//push al equipo elegido y oculta el input de nombre. los equipos y el btn de empezar a jugar
const agregarAEquipo = (nombre, puntos = 0, equipo) => {

    let auxEquipo = [];

    //creo el nuevo jugador
    let jugadorNuevo = {
        id: 0,
        jugador: new Jugadores(nombre, puntos, equipo)
    }

    switch (equipo) {
        case "noCoffeNoWorkee":
            jugadorNuevo = {
                ...jugadorNuevo,
                id: noCoffeNoWorkee.length + 1
            }

            auxEquipo = noCoffeNoWorkee;
            noCoffeNoWorkee.push(jugadorNuevo);
            // noCoffeNoWorkee[noCoffeNoWorkee.length - 1].jugador.infoJugador()

            break;
        case "codigoYCafe":
            jugadorNuevo = {
                ...jugadorNuevo,
                id: codigoYCafe.length + 1
            }

            auxEquipo = codigoYCafe;
            codigoYCafe.push(jugadorNuevo);
            // codigoYCafe[codigoYCafe.length - 1].jugador.infoJugador()

            break;
        case "iTurnCoffeIntoCode":
            jugadorNuevo = {
                ...jugadorNuevo,
                id: iTurnCoffeIntoCode.length + 1
            }

            auxEquipo = iTurnCoffeIntoCode;
            iTurnCoffeIntoCode.push(jugadorNuevo);
            // iTurnCoffeIntoCode[iTurnCoffeIntoCode.length - 1].jugador.infoJugador()

            break;
        default:
            break;
    }

    jugadorDatos = {
        ...jugadorDatos,
        id: jugadorNuevo.id
    }

    localStorage.setItem(equipoSeleccionado, JSON.stringify(auxEquipo));

    //ESTO PARA EL PROYECTO FINAL CAMBIALO POR UN TOASTIFY O UN SWEET ALERT 
    infoContainer.innerHTML = `
    <div class="msgJuegoIniciado">Jugador: ${nombre} fue agregado con exito al equipo : ${equipo}</div>
    `;

    //desaparecemos el menu de eleccion de equipo y nombre
    btnContainer.style.display = "none";

    return auxEquipo;
}

//funcion q le da al btn (empezar a jugar su evento)
const comenzarJuego = () => {

    const btnJugar = document.getElementById("btnJugar");

    btnJugar.addEventListener("click", () => {

        //con esta condicion evito q el jugador empise a jugar sin haber elegido un equipo
        if (algunoPintado) {
            let objLocalStorage = getLocalStorage();
            let nombre = objLocalStorage["usuario"] //arrLocalStorage[...].usuario

            instruccionesContainer.style.display = "none";
            juegoContainer.style.display = "block";


            equipoElegido = agregarAEquipo(nombre, 0, equipoSeleccionado);

            rondas.innerText = `Ronda : 1`
            rondasCantidad.innerText = `1/${arrLength}`;

            //cambiamos la info q se ve en cuadro abajo de las preguntas
            nombreInfo.innerHTML = nombre;
            equipoInfoImg.src = `../img/${equipoSeleccionado}.png`;
            equipoInfoImg.classList.replace("signoPregunta", "imgEquipoInfo");

            //modificiamos los datos del jugador actual
            jugadorDatos = {
                ...jugadorDatos,
                usuario: nombre,
                equipo: equipoSeleccionado,
                puntuacion: 0
            }

            //cargamos los datos al localStorage
            localStorage.setItem("jugadorDatos", JSON.stringify(jugadorDatos));
        }
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

    return [puntuacion, resInc];
}

//funcion q actualiza la rondas 
const rondaActual = (numRondas, rondasCT) => {
    rondas.innerText = `Ronda : ${numRondas + 1}`;
    rondasCantidad.innerText = `${numRondas + 1}/${rondasCT}`;
}

//funcion q se encarga de hacer las preguntas y devuelve los puntos del jugador
const funcionPregunta = (arr, fun) => {
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

            [puntuacion, resIncorrectas] = fun(respuestaUsuario, respuesta, puntuacion, resIncorrectas);

            let indiceJugador = equipoElegido.findIndex((element) => element.id === jugadorDatos.id);

            //lo modifica en el array
            equipoElegido[indiceJugador].jugador.puntuacion = puntuacion;
            console.log(equipoElegido)

            //actualizamos los datos
            jugadorDatos = {
                ...jugadorDatos,
                puntuacion: puntuacion
            }

            //cargamos los datos al localStorage
            localStorage.setItem("jugadorDatos", JSON.stringify(jugadorDatos));

            //obtenemos el array del equipo elegido
            let auxArr = JSON.parse(localStorage.getItem(equipoSeleccionado));

            auxArr[indiceJugador].jugador.puntuacion = puntuacion;

            localStorage.setItem(equipoSeleccionado, JSON.stringify(auxArr));

            //con este if evito q cuando no hay mas preguntas ya no intante actualizar
            if (opcionIndice < arr.length) {
                rondaActual(opcionIndice, arrLength);

                pregunta.innerText = arr[opcionIndice].pregunta;
                opcionesAux = arr[opcionIndice].opciones;

                inputOpcion.forEach((element, index) => {
                    element.value = opcionesAux[`opcion${index + 1}`]
                })

                opcionIndice++;

            } else {//este else se encarga de q cuando no hay mas preguntas resetea los valores para el proximo jugador y ocualta el juego

                const msgJuegoTerminado = document.getElementById("msgJuegoTerminado");

                msgJuegoTerminado.innerText = `Felicidades ${jugadorDatos.usuario} lograste responder todas las preguntas
                
                Tu puntuacion final fue de ${jugadorDatos.puntuacion}

                Si queres volver a intentarlo y conseguir mejor puntuacion
                Dale al boton de "Nuevo Juego"`;


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
    const primerasOpciones = ["Igual que Java", "Interpretado", "Un Framework para diseño de sitios y aplicaciones web", "Ninguna de las anteriores"];

    btnJuegoNuevo.addEventListener("click", () => {

        infoContainer.innerHTML = `
        <div class="msgJuegoIniciado">Jugador: ${jugadorDatos.usuario} listo para jugar devuelta?</div>
        `;

        //desaparecemos el menu de eleccion de equipo y nombre
        btnContainer.style.display = "block";

        rondas.innerText = "Ronda: ---";
        rondasCantidad.innerText = "---";

        sectionJuego.style.display = "flex";
        instruccionesContainer.style.display = "block";
        juegoContainer.style.display = "none";

        jugadorDatos = {
            ...jugadorDatos,
            puntuacion: 0
        }

        localStorage.setItem("jugadorDatos", JSON.stringify(jugadorDatos));

        let indiceJugador = equipoElegido.findIndex((element) => element.id === jugadorDatos.id);

        //lo modifica en el array
        equipoElegido[indiceJugador].jugador.puntuacion = jugadorDatos.puntuacion;
        console.log(equipoElegido)

        //obtenemos el array del equipo elegido
        let auxArr = JSON.parse(localStorage.getItem(equipoSeleccionado));

        auxArr[indiceJugador].jugador.puntuacion = jugadorDatos.puntuacion;

        localStorage.setItem(equipoSeleccionado, JSON.stringify(auxArr));

        //cargamos la primera pregunta
        pregunta.innerText = "JavaScript es un lenguaje?";

        inputOpcion.forEach((element, index) => {
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
    funcionPregunta(preguntasYRespuestas, analizandoRespuesta);
    eventoNuevoJuego();
}

cargarEventosMenu(imgEquipo);
cerrarSesion();