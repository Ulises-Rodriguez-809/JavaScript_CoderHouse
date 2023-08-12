const usuariosRegistrados = [
    {
        usuario: 'Ulises',
        contraseña: '12345'
    },
    {
        usuario: 'Tino',
        contraseña: '54321'
    }
]
// https://github.com/Znt77/Proyecto-coder
// const aux = document.querySelector("#contenedo-" + objeto.id)

let usuarioIn = {
    usuario: "",
    contraseña: ""
}

let usuarioReg = {
    usuario: "",
    contraseña: "",
    ConfirmarCont: ""
}

const opcion = () => {
    const btnOpcion__iniciarSesion = document.getElementById("btnOpcion__iniciarSesion");
    const btnOpcion__registrarse = document.getElementById("btnOpcion__registrarse");

    //forma 1
    // const login = document.getElementById("login");

    //forma 2
    const iniciarSesion = document.getElementById("iniciarSesion");
    const registrarse = document.getElementById("registrarse");

    btnOpcion__iniciarSesion.addEventListener("click", () => {

        //forma 1 
        // en ves de tener tanto el apartado de iniciar sesion como el de registrarse en el html 
        //dejo 1 de los 2
        //y luego lo voy creando dependiendo del btn q se pulsa
        // login.innerHTML = `
        // <div id="iniciarSesion">
        //     <div id="logTitulo">
        //         <p>Iniciar sesion</p>
        //     </div>
        //     <div id="logDatos">
        //         <div>
        //             <label for="logNombre">Nombre</label>
        //             <input type="text" name="usuario" id="logNombre" class="inputLog"
        //                 placeholder="Escriba su Nombre">
        //         </div>
        //         <div>
        //             <label for="logContraseña">Contraseña</label>
        //             <input type="password" name="contraseña" id="logContraseña" class="inputLog"
        //                 placeholder="Escriba su contraseña">
        //         </div>
        //     </div>
        //     <div class="msg msgInc"></div>
        //     <div class="btnLogContainer">
        //         <button id="btnLog">Iniciar sesion</button>
        //     </div>
        // </div>
        // `;

        //la otra forma de hacerlo es dejando todo estatico en el html y cambiar el display
        iniciarSesion.style.display = "flex";
        registrarse.style.display = "none";

        //la diferencia entre forma 1 y 2 es q forma_1 cuando te inicias sesion te muestra un mensaje pero si volves a tocar el btn de iniciar sesion te muestra todo el formulario devuelta
        //miesntras q la forma_2 una ves iniciado sesion por mas q toques el btn iniciar sesion sigue mostrando el mensaje de q ya iniciaste sesion
    })

    btnOpcion__registrarse.addEventListener("click", () => {

        // login.innerHTML = `
        // <div id="registrarse">
        //     <div id="regTitulo">
        //         <p>Registrarse</p>
        //     </div>
        //     <div id="regDatos">
        //         <div>
        //             <label for="regNombre">Nombre</label>
        //             <input type="text" name="usuario" id="regNombre" class="inputReg"
        //                 placeholder="Escriba su Nombre">
        //         </div>
        //         <div>
        //             <label for="regContraseña">Contraseña</label>
        //             <input type="password" name="contraseña" id="regContraseña" class="inputReg"
        //                 placeholder="Escriba su contraseña">
        //         </div>
        //         <div>
        //             <label for="regConConfirmar">Confirmar Contraseña</label>
        //             <input type="password" name="ConfirmarCont" id="regConConfirmar" class="inputReg"
        //                 placeholder="Confirmar Contraseña">
        //         </div>
        //     </div>
        //     <div class="btnRegContainer">
        //         <button id="btnReg">Registrarse</button>
        //     </div>
        // </div>
        // `;

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

                    console.log(usuarioReg)

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

const datosReg = ()=>{
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

            //este localStorage es para tener los datos del ultimo jugador q inicio sesion o se registro
            localStorage.setItem("jugadorActual",JSON.stringify(usuarioIn));

        } else {
            msg.innerHTML = `
                Usuario no encontrado<br>
                Revisar nombre/contraseña son correctos<br>
            `;

            msg.classList.replace("msgCor", "msgInc");
            msg.style.display = "block";
        }
    })
}

const casoReg = () => {
    const regDatos = document.getElementById("regDatos");
    const msg2 = document.querySelector(".msg2");
    const btnReg = document.getElementById("btnReg");

    let arrUsuarios = JSON.parse(localStorage.getItem("usuarios"));

    btnReg.addEventListener("click",()=>{

        let usuarioEncontrado = arrUsuarios.find((element) => element.usuario === usuarioReg.usuario);

        const regContraseña = document.getElementById("regContraseña");
        const regConConfirmar = document.getElementById("regConConfirmar");

        if (usuarioEncontrado) {
            msg2.innerHTML = `
                <p>Ese usuario ya existe</p>
            `;

            msg2.classList.replace("msgCor", "msgInc");
            msg2.style.display = "block";

        }
        else if (regContraseña.value !== regConConfirmar.value) {
            msg2.innerHTML = `
                <p>Las contraseñas no coinciden</p>
            `;

            msg2.classList.replace("msgCor", "msgInc");
            msg2.style.display = "block";
        }
        else{
            //creamos el nuevo usuario
            let aux = {
                usuario : usuarioReg.usuario,
                contraseña : usuarioReg.contraseña
            }
            
            //lo pusheamos dentro del array q nos devuelve al hacer el JSON.parse(localStorage.getItem("usuarios"))
            arrUsuarios.push(aux);
            
            //guardamos los cambios en el local storage
            //sin olvidar convertir a texto el arrUsuarios ya q los arrays y objetos si no los convertis a texto no se guardan bien en el localStorage 
            localStorage.setItem("usuarios", JSON.stringify(arrUsuarios));

            //este localStorage es para tener los datos del ultimo jugador q inicio sesion o se registro
            localStorage.setItem("jugadorActual",JSON.stringify(aux));

            regDatos.innerHTML = "";

            msg2.innerHTML = `
                <p>Usuario registrado con exito</p>
                <a href="./pages/quiz.html" class="link">Ir al juego</a>
            `;

            msg2.classList.replace("msgInc", "msgCor");
            msg2.style.display = "block";
        }
    })
}

cargarStorage(usuariosRegistrados);
opcion();
datosIn();
datosReg();
casoLogin();
casoReg();