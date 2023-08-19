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

const opcion = () => {
    const btnOpcion__iniciarSesion = document.getElementById("btnOpcion__iniciarSesion");
    const btnOpcion__registrarse = document.getElementById("btnOpcion__registrarse");

    const iniciarSesion = document.getElementById("iniciarSesion");
    const registrarse = document.getElementById("registrarse");

    btnOpcion__iniciarSesion.addEventListener("click", () => {
        iniciarSesion.style.display = "flex";
        registrarse.style.display = "none";
    })

    btnOpcion__registrarse.addEventListener("click", () => {
        iniciarSesion.style.display = "none";
        registrarse.style.display = "flex";
    })
}

const cargarStorage = (arr) => {
    //cargamos al local storage algunos usuarios 
    JSON.parse(localStorage.getItem("usuarios")) || localStorage.setItem("usuarios", JSON.stringify(arr));
}

const capturarValores = (arr, nombreObjeto) => {

    arr.forEach((element) => {
        element.addEventListener("change", (e) => {
            const { target } = e;
            const { value, name } = target;

            switch (nombreObjeto) {
                case "usuarioIn":
                    usuarioIn = {
                        //con el spread copias todo lo q tenga objeto
                        ...usuarioIn,
                        //recorda q para acceder a las props de un objeto tenes el . y ["nombre de la clave"]
                        //de esta manera modificas el valor de la clave cuyo nombre coincida con name
                        //osea es como si hicieras objeto["usuario"] o objeto.usuario : "pepe" / usuario : "pepe"
                        //te ahorras tener q hacer el if else
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

const datosIn = () => {
    const inputDatos = document.querySelectorAll(".inputLog");
    capturarValores(inputDatos, "usuarioIn");
}

const datosReg = () => {
    const inputDatos = document.querySelectorAll(".inputReg");
    capturarValores(inputDatos, "usuarioReg");
}

const casoLogin = () => {
    const logDatos = document.getElementById("logDatos");
    const msg = document.querySelector(".msg");
    const btnLog = document.getElementById("btnLog");

    //obtenemos el contenido guardado en el localStorage para comparar
    let arrUsuarios = JSON.parse(localStorage.getItem("usuarios"));

    btnLog.addEventListener("click", () => {

        //se q podria usar directamente usuariosRegistrados en ves de arrUsuarios y ahorrarme hacer todo le json parse,etc pero es para poder practicar mas
        let usuarioEncontrado = arrUsuarios.find((element) => element.usuario === usuarioIn.usuario && element.contraseña === usuarioIn.contraseña);

        if (usuarioEncontrado) {

            logDatos.innerHTML = "";

            msg.innerHTML = `
                <p>Se inicio secion con exito</p>
                <a href="./pages/quiz.html" class="link">Ir al juego</a>
            `;

            msg.classList.replace("msgInc", "msgCor");
            msg.style.display = "block";


            //modal de sweet alert
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


            //este localStorage es para tener los datos del ultimo jugador q inicio sesion o se registro
            localStorage.setItem("jugadorActual", JSON.stringify(usuarioIn));

        } else {
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
    })
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
                    '<h2>El usuario ya existe</h2><br>"' + 
                    '<h2>Vaya al apartado de "iniciar sesion" o eliga otro nombre</h2>',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
            })

        }
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
                    '<h2>Las contraseñas no coinciden</h2>"',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
            })
        }
        else {
            //creamos el nuevo usuario
            let aux = {
                usuario: usuarioReg.usuario,
                contraseña: usuarioReg.contraseña
            }

            //lo pusheamos dentro del array q nos devuelve al hacer el JSON.parse(localStorage.getItem("usuarios"))
            arrUsuarios.push(aux);

            //guardamos los cambios en el local storage
            //sin olvidar convertir a texto el arrUsuarios ya q los arrays y objetos si no los convertis a texto no se guardan bien en el localStorage 
            localStorage.setItem("usuarios", JSON.stringify(arrUsuarios));

            //este localStorage es para tener los datos del ultimo jugador q inicio sesion o se registro
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
                icon: 'succes',
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

cargarStorage(usuariosRegistrados);
opcion();
datosIn();
datosReg();
casoLogin();
casoReg();