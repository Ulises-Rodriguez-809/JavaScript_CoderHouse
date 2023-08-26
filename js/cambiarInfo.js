const btnCambiar = document.getElementById("btnCambiar");

//actuliza el localStorage del equipo del jugador
const actualizarInfoEquipo = (nombreJug,id,equipo)=>{
    let arrAux = JSON.parse(localStorage.getItem(equipo));

    arrAux.forEach(element => {
        if (element.id === id) {
            element.jugador = {
                ...element.jugador,
                ["nombre"] : nombreJug
            }
        }
    });

    localStorage.setItem(equipo,JSON.stringify(arrAux));
}

//cambia los datos del jugador
const cambiarInfo = () => {
    const nuevoNombre = document.getElementById("nuevoNombre");
    const nuevaContraseña = document.getElementById("nuevaContraseña");
    const nuevaConConfirmar = document.getElementById("nuevaConConfirmar");

    const msg3 = document.querySelector(".msg3");
    msg3.style.display = "none";

    let jugActual = JSON.parse(localStorage.getItem("jugadorActual"));
    let jugDatos = JSON.parse(localStorage.getItem("jugadorDatos"));

    btnCambiar.addEventListener("click", () => {
        if (nuevoNombre.value === "" && nuevaContraseña.value === "" && nuevaConConfirmar.value === "") {
            msg3.innerHTML = `Todos los campos deben de estar completos`;
            msg3.classList.replace("msgCor", "msgInc");
        }
        else if (nuevaContraseña.value !== nuevaConConfirmar.value) {
            msg3.innerHTML = `Las contraseñas no coiciden`;
            msg3.classList.replace("msgCor", "msgInc");
        }
        else {
            Swal.fire({
                title: 'Estas seguro de realizar los cambios?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirmar!'
            }).then((result) => {
                if (result.isConfirmed) {

                    Swal.fire(
                        'Los cambios se realizaron con exito!'
                    )

                    msg3.innerHTML = `Los datos se cambiaron con exito`;
                    msg3.classList.replace("msgInc", "msgCor");

                    jugActual = {
                        usuario: nuevoNombre.value,
                        contraseña: nuevaContraseña.value,
                    }

                    jugDatos = {
                        ...jugDatos,
                        ["usuario"] : nuevoNombre.value
                    }

                    localStorage.setItem("jugadorActual", JSON.stringify(jugActual));
                    localStorage.setItem("jugadorDatos",JSON.stringify(jugDatos));

                    actualizarInfoEquipo(jugDatos.usuario,jugDatos.id,jugDatos.equipo);
                }
            })
        }

        msg3.style.display = "block";

    })
}

cambiarInfo();