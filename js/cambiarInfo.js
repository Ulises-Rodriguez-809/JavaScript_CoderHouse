const btnCambiar = document.getElementById("btnCambiar");

const cambiarInfo = () => {
    let jugActual = JSON.parse(localStorage.getItem("jugadorActual"));

    const nuevoNombre = document.getElementById("nuevoNombre");
    const nuevaContraseña = document.getElementById("nuevaContraseña");
    const nuevaConConfirmar = document.getElementById("nuevaConConfirmar");

    const msg3 = document.querySelector(".msg3");
    msg3.style.display = "none";

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
            msg3.innerHTML = `Los datos se cambiaron con exito`;
            msg3.classList.replace("msgInc", "msgCor");

            jugActual = {
                usuario: nuevoNombre.value,
                contraseña: nuevaContraseña.value,
            }

            localStorage.setItem("jugadorActual", JSON.stringify(jugActual));
        }

        msg3.style.display = "block";

    })
}

cambiarInfo()