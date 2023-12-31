import { noCoffeNoWorkee, codigoYCafe, iTurnCoffeIntoCode } from "./equipos.js";

const usuariosRegistrados = [];

let usuarioIn = {
    usuario: "",
    contraseña: "",
}

let usuarioReg = {
    usuario: "",
    contraseña: "",
    ConfirmarCont: "",
}

const msg = document.querySelector(".msg");

//fun q se encarga de los eventos de los btn de is y reg
const opcion = () => {
    const btnOpcionIniciarSesion = document.getElementById("btnOpcion__iniciarSesion");
    const btnOpcionRegistrarse = document.getElementById("btnOpcion__registrarse");

    const iniciarSesion = document.getElementById("iniciarSesion");
    const registrarse = document.getElementById("registrarse");

    btnOpcionIniciarSesion.addEventListener("click", () => {
        iniciarSesion.style.display = "flex";
        registrarse.style.display = "none";
    })

    btnOpcionRegistrarse.addEventListener("click", () => {
        iniciarSesion.style.display = "none";
        registrarse.style.display = "flex";
    })
}

const cargarStorage = (arr) => {
    JSON.parse(localStorage.getItem("usuarios")) || localStorage.setItem("usuarios", JSON.stringify(arr));
}

//carga los equipos al localStorage
const cargarStorageEquipos = () => {

    let aux = JSON.parse(localStorage.getItem("noCoffeNoWorkee")) || JSON.parse(localStorage.getItem("codigoYCafe")) || JSON.parse(localStorage.getItem("iTurnCoffeIntoCode"));

    if (aux === null) {
        localStorage.setItem("noCoffeNoWorkee", JSON.stringify(noCoffeNoWorkee));
        localStorage.setItem("codigoYCafe", JSON.stringify(codigoYCafe));
        localStorage.setItem("iTurnCoffeIntoCode", JSON.stringify(iTurnCoffeIntoCode));
    }
}

//fun q guarda los datos dependiendo si es is o reg
const capturarValores = (arr, nombreObjeto) => {

    arr.forEach((element) => {
        element.addEventListener("change", (e) => {
            const { target } = e;
            const { value, name } = target;

            switch (nombreObjeto) {
                case "usuarioIn":
                    usuarioIn = {
                        ...usuarioIn,
                        [name]: value
                    }

                    break;
                case "usuarioReg":
                    usuarioReg = {
                        ...usuarioReg,
                        [name]: value
                    }

                    break;
                default:
                    break;
            }
        })
    })
}

//caso iniciar sesion
const datosIn = () => {
    const inputDatos = document.querySelectorAll(".inputLog");
    capturarValores(inputDatos, "usuarioIn");
}

const funIniciarSesion = () => {
    const logDatos = document.getElementById("logDatos");

    logDatos.innerHTML = "";

    msg.innerHTML = `
        <p>Se inicio secion con exito</p>
        <a href="./pages/quiz.html" class="link">Ir al juego</a>
    `;

    msg.classList.replace("msgInc", "msgCor");
    msg.style.display = "block";

    Swal.fire({
        title: '<h1>Se inicio sesion con exito</h1>',
        icon: 'success',
        html:
            '<h2>Para ir al juego darle click a este enlace ---> <a href="./pages/quiz.html" class="link">Jugar</a></h2><br>' +
            '<h2>O puede cerrar esta ventana y darle click a "Ir al juego"</h2>',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
    })

    localStorage.setItem("jugadorActual", JSON.stringify(usuarioIn));
}

const funRevisarDatosIS = () => {
    msg.innerHTML = `
                Usuario no encontrado<br>
                Revisar nombre/contraseña son correctos<br>
            `;

    msg.classList.replace("msgCor", "msgInc");
    msg.style.display = "block";

    Swal.fire({
        title: '<h1>No se logro iniciar sesion</h1>',
        icon: 'error',
        html:
            '<h2>Compruebe Nombre o Contraseña</h2>',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
    })
}

const casoLogin = () => {
    const btnLog = document.getElementById("btnLog");

    let arrUsuarios = JSON.parse(localStorage.getItem("usuarios"));

    btnLog.addEventListener("click", () => {

        let usuarioEncontrado = arrUsuarios.find((element) => element.usuario === usuarioIn.usuario && element.contraseña === usuarioIn.contraseña);

        usuarioEncontrado ? funIniciarSesion() : funRevisarDatosIS();
    })
}

//caso registrarse
const datosReg = () => {
    const inputDatos = document.querySelectorAll(".inputReg");
    capturarValores(inputDatos, "usuarioReg");
}

const casoReg = () => {
    const regDatos = document.getElementById("regDatos");
    const msg2 = document.querySelector(".msg2");
    const btnReg = document.getElementById("btnReg");

    let arrUsuarios = JSON.parse(localStorage.getItem("usuarios"));

    btnReg.addEventListener("click", () => {

        let usuarioEncontrado = arrUsuarios.find((element) => element.usuario === usuarioReg.usuario);

        const regContraseña = document.getElementById("regContraseña");
        const regConConfirmar = document.getElementById("regConConfirmar");

        //caso usuario ya registrado
        if (usuarioEncontrado) {
            msg2.innerHTML = `
                <p>Ese usuario ya existe</p>
            `;

            msg2.classList.replace("msgCor", "msgInc");
            msg2.style.display = "block";

            Swal.fire({
                title: '<h1>No se logro completar el registro</h1>',
                icon: 'error',
                html:
                    '<h2>El usuario ya existe</h2><br>' +
                    '<h2>Vaya al apartado de "iniciar sesion" o eliga otro nombre</h2>',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
            })

        }//caso contraseñas distintas
        else if (regContraseña.value !== regConConfirmar.value) {
            msg2.innerHTML = `
                <p>Las contraseñas no coinciden</p>
            `;

            msg2.classList.replace("msgCor", "msgInc");
            msg2.style.display = "block";

            Swal.fire({
                title: '<h1>No se logro completar el registro</h1>',
                icon: 'warning',
                html:
                    '<h2>Las contraseñas no coinciden</h2>',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
            })

        }//caso todo bien
        else {
            let aux = {
                usuario: usuarioReg.usuario,
                contraseña: usuarioReg.contraseña
            }

            arrUsuarios.push(aux);

            localStorage.setItem("usuarios", JSON.stringify(arrUsuarios));

            localStorage.setItem("jugadorActual", JSON.stringify(aux));

            regDatos.innerHTML = "";

            msg2.innerHTML = `
                <p>Usuario registrado con exito</p>
                <a href="./pages/quiz.html" class="link">Ir al juego</a>
            `;

            msg2.classList.replace("msgInc", "msgCor");
            msg2.style.display = "block";

            Swal.fire({
                title: '<h1>El registro se completo con exito</h1>',
                icon: 'success',
                html:
                    '<h2>Para ir al juego darle click a este enlace ---> <a href="./pages/quiz.html" class="link">Jugar</a></h2><br>' +
                    '<h2>O puede cerrar esta ventana y darle click a "Ir al juego"</h2>',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
            })
        }
    })
}

const cargarFuns = () => {
    cargarStorage(usuariosRegistrados);
    cargarStorageEquipos();
    opcion();
    datosIn();
    datosReg();
    casoLogin();
    casoReg();
}

cargarFuns();