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

let usuarioIn = {
    usuario: "",
    contraseña: ""
}

let usuarioReg = {
    usuario: "",
    contraseña: "",
    ConfirmarCont: ""
}


const opcion = ()=>{
    const btnOpcion__iniciarSesion = document.getElementById("btnOpcion__iniciarSesion");
    const btnOpcion__registrarse = document.getElementById("btnOpcion__registrarse");

    const iniciarSesion = document.getElementById("iniciarSesion");
    const registrarse = document.getElementById("registrarse");

    btnOpcion__iniciarSesion.addEventListener("click",()=>{

        iniciarSesion.style.display = "flex";
        registrarse.style.display = "none";
    })

    btnOpcion__registrarse.addEventListener("click",()=>{

        iniciarSesion.style.display = "none";
        registrarse.style.display = "flex";
    })
}


const cargarStorage = (arr) => {
    //cargamos al local storage algunos usuarios 
    localStorage.setItem("usuarios", JSON.stringify(arr));
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

    // return objeto;
}

const datosIn = () => {
    const inputDatos = document.querySelectorAll(".inputLog");
    capturarValores(inputDatos, "usuarioIn");
}

const casoLogin = () => {
    const login = document.getElementById("login");
    const msg = document.querySelector(".msg");
    const btnLog = document.getElementById("btnLog");

    //obtenemos el contenido guardado en el localStorage para comparar
    debugger
    const arrUsuarios = JSON.parse(localStorage.getItem("usuarios"));

    btnLog.addEventListener("click", () => {
        debugger
        console.log(usuarioIn)
        //se q podria usar directamente usuariosRegistrados en ves de arrUsuarios y ahorrarme hacer todo le json parse,etc pero es para poder practicar mas
        let usuarioEncontrado = arrUsuarios.find((element) => {
            debugger
            element.usuario === usuarioIn.usuario && element.contraseña === usuarioIn.contraseña
        });

        if (usuarioEncontrado) {
            login.innerHTML = `
                <div id="logTitulo">
                        <p>Iniciar sesion</p>
                </div>
                <div class="msg msgInc"></div>
            `;

            msg.innerHTML = `
                Se inicio secion con exito
                <a href="./pages/quiz.html" class="link">Ir al juego</a>
            `;

            msg.classList.replace("msgInc", "msgCor");
            msg.style.display = "block";

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

const comprobarSiRegistrado = (aux) => {

    casoLogin(aux);




    // if (estaRegistrado) {
    //     //lo redireccionamos al quiz 

    // }else{
    //     //le mostramos en el DOM q no puede iniciar sesion xq no esta registrado
    //     //le pedimos q se registre
    // }

}

// let a = JSON.parse(localStorage.getItem("usuarios"));
// console.log(a)

opcion();
cargarStorage(usuariosRegistrados);
// comprobarSiRegistrado(aux)