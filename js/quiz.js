// import preguntasYRespuestas from "./pregYRes.js"
import { Jugadores } from "./equipos.js";
import cerrarSesion from "./cerrarSesion.js";

//esto para poder modificar los datos en el ranking
let datosAux = {
    id: 0,
    usuario: '',
    equipo: '',
    puntuacion: 0
}

let jugadorDatos = JSON.parse(localStorage.getItem("jugadorDatos")) || datosAux;

const btnContainer = document.querySelector(".btnContainer");

//var q va a guardar el nombre de la clase de la foto del equipo seleccionado
let equipoSeleccionado = "";

let equipoElegido = [];

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


//fun fetch para hacer la peticion al archivo local de las preguntas
const peticionFetch = async () => {
    const peticion = await fetch('../data/pregYres.json');
    const arrPreguntasYrespuestas = await peticion.json();
    const arrLength = await arrPreguntasYrespuestas.length;

    return [arrLength, arrPreguntasYrespuestas];
}

//traemos el contenido del localStorage para obtener el nombre del jugador
const getLocalStorage = (lSNombre) => {
    let contenidoLocStorage = JSON.parse(localStorage.getItem(lSNombre));

    return contenidoLocStorage;
}

const setLocalStorage = (lSNombre, elemento) => {
    localStorage.setItem(lSNombre, JSON.stringify(elemento));
}

//se encarga de dar fondo naranja al equipo elegido
const pintarFondo = (arr) => {

    arr.forEach((element) => {
        element.addEventListener("click", (e) => {
            const { target } = e;

            arr.forEach(elem => {
                if (elem.classList.contains("equipoElegido")) {
                    elem.classList.remove("equipoElegido")
                }
            })

            target.classList.add("equipoElegido");
            equipoSeleccionado = target.name;

            algunoPintado = true
        })
    })

}

//fun q agrega al equipo 
const agregarAEquipo = (nombre, puntos = 0, equipo) => {

    const infoContainer = document.querySelector(".infoContainer");

    let arrEquipo = JSON.parse(localStorage.getItem(equipo));

    let jugadorEncontrado = arrEquipo.find((element) => element.jugador.nombre === nombre);

    //se encarga de saludar a un jugador ya agregado y de tomar sus datos
    if (jugadorEncontrado) {
        jugadorDatos = {
            usuario: nombre,
            equipo: equipo,
            puntuacion: jugadorEncontrado.jugador.puntuacion,
            id: jugadorEncontrado.id
        }

        infoContainer.innerHTML = `
        <div class="msgJuegoIniciado">Jugador: ${nombre} bienvenido devuelta</div>
        `;

        //agrega un jugador nuevo al equipo
    } else {
        let jugadorNuevo = {
            id: arrEquipo.length + 1,
            jugador: new Jugadores(nombre, puntos, equipo)
        }

        jugadorDatos = {
            ...jugadorDatos,
            id: jugadorNuevo.id
        }

        arrEquipo.push(jugadorNuevo);
        arrEquipo[arrEquipo.length - 1].jugador.infoJugador();

        localStorage.setItem(equipo, JSON.stringify(arrEquipo));

        infoContainer.innerHTML = `
        <div class="msgJuegoIniciado">Jugador: ${nombre} fue agregado con exito al equipo : ${equipo}</div>
        `;
    }

    //desaparecemos el menu de eleccion de equipo y nombre
    btnContainer.style.display = "none";

    return arrEquipo;
}

//funcion q le da al btn (empezar a jugar su evento)
const comenzarJuego = (arrLength) => {

    const btnJugar = document.getElementById("btnJugar");
    const nombreInfo = document.querySelector(".nombreInfo");
    const equipoInfoImg = document.querySelector(".equipoInfoImg");

    btnJugar.addEventListener("click", async () => {

        //con esta condicion evito q el jugador empise a jugar sin haber elegido un equipo
        if (algunoPintado) {
            let objLocalStorage = getLocalStorage("jugadorActual");
            let nombre = objLocalStorage["usuario"]

            instruccionesContainer.style.display = "none";
            juegoContainer.style.display = "block";

            equipoElegido = agregarAEquipo(nombre, 0, equipoSeleccionado);

            rondas.textContent = `Ronda : 1`;
            rondasCantidad.textContent = `1/${arrLength}`;

            //cambiamos la info q se ve en cuadro abajo de las preguntas
            nombreInfo.innerHTML = nombre;
            equipoInfoImg.src = `../img/${equipoSeleccionado}.png`;
            equipoInfoImg.classList.replace("signoPregunta", "imgEquipoInfo");

            //modificiamos los datos del jugador actual
            jugadorDatos = {
                ...jugadorDatos,
                puntuacion: 0
            }

            //cargamos los datos al localStorage
            setLocalStorage("jugadorDatos", jugadorDatos);
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
    rondas.textContent = `Ronda : ${numRondas + 1}`;
    rondasCantidad.textContent = `${numRondas + 1}/${rondasCT}`;
}

//funcion q se encarga de hacer las preguntas y devuelve los puntos del jugador
const funcionPregunta = (arr, fun, arrLength) => {
    let respuesta = "";
    let opcionesAux = "";
    let opcionIndice = 1;
    let respuestaUsuario = "";
    let puntuacion = 0;
    let resIncorrectas = 0;

    inputOpcion.forEach((element) => {
        element.addEventListener("click", async () => {

            //como tanto la primera pregunta como las opciones se ponene de forma estatica en html restamos 1
            respuesta = arr[opcionIndice - 1].respuesta;
            respuestaUsuario = element.value;

            [puntuacion, resIncorrectas] = fun(respuestaUsuario, respuesta, puntuacion, resIncorrectas);

            let indiceJugador = equipoElegido.findIndex((element) => element.id === jugadorDatos.id);

            //lo modifica en el array
            equipoElegido[indiceJugador].jugador.puntuacion = puntuacion;

            //actualizamos los datos
            jugadorDatos = {
                ...jugadorDatos,
                puntuacion: puntuacion
            }

            //cargamos los datos al localStorage
            setLocalStorage("jugadorDatos", jugadorDatos);

            //obtenemos el array del equipo elegido
            let auxArr = getLocalStorage(equipoSeleccionado);

            auxArr[indiceJugador].jugador.puntuacion = puntuacion;

            setLocalStorage(equipoSeleccionado, auxArr);

            //con este if evito q cuando no hay mas preguntas ya no intante actualizar
            if (opcionIndice < arr.length) {

                rondaActual(opcionIndice, arrLength);

                pregunta.innerText = arr[opcionIndice].pregunta;
                opcionesAux = arr[opcionIndice].opciones;

                inputOpcion.forEach((element, index) => {
                    element.value = opcionesAux[`opcion${index + 1}`]
                })

                opcionIndice++;

            } else {

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
        Swal.fire({
            title: 'Estas seguro de querer jugar de nuevo?',
            text: "La puntuacion anteriror sera borrada!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar!'
        }).then((result) => {
            if (result.isConfirmed) {
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

                setLocalStorage("jugadorDatos", jugadorDatos);

                let indiceJugador = equipoElegido.findIndex((element) => element.id === jugadorDatos.id);

                //lo modifica en el array
                equipoElegido[indiceJugador].jugador.puntuacion = jugadorDatos.puntuacion;

                //obtenemos el array del equipo elegido
                let auxArr = getLocalStorage(equipoSeleccionado)

                auxArr[indiceJugador].jugador.puntuacion = jugadorDatos.puntuacion;

                setLocalStorage(equipoSeleccionado, auxArr);

                //cargamos la primera pregunta
                pregunta.textContent = "JavaScript es un lenguaje?";

                inputOpcion.forEach((element, index) => {
                    element.value = primerasOpciones[index];
                })

                puntosJugador.textContent = "Puntos : 0";
                respuestasIncorrectas.textContent = "Incorrectas : 0";

                juegoTerminado.style.display = "none";
            }
        })
    })
}

//fun q ejecuta el resto de funciones (mas prolijo el codigo)
const cargarEventosMenu = async (arr) => {
    const [arrLength, arrPreguntasYrespuestas] = await peticionFetch();
    pintarFondo(arr);
    comenzarJuego(arrLength);
    funcionPregunta(arrPreguntasYrespuestas, analizandoRespuesta, arrLength);
    eventoNuevoJuego();
}

cargarEventosMenu(imgEquipo);
cerrarSesion();