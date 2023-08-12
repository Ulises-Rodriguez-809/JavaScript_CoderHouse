
const localStorageGet = (localSorageNombre)=>{
    let jugador = JSON.parse(localStorage.getItem(localSorageNombre));
    
    return jugador;
}

const localStorageSet = (localStorageNombre,jugador) =>{
    localStorage.setItem(localStorageNombre,JSON.stringify(jugador));
}

const cerrarSesion = ()=>{
    const cerrarSesionBtn = document.getElementById("cerrarSesion");
    
    cerrarSesionBtn.addEventListener("click",()=>{
        let jugadorDatos = localStorageGet("jugadorDatos");
        let jugadorAtual = localStorageGet("jugadorActual");
    
        jugadorDatos = {
            id : 0,
            usuario : "",
            puntuacion : 0,
            equipo : ""
        }
    
        jugadorAtual = {
            usuario : "",
            contraseña : ""
        }
    
        localStorageSet("jugadorDatos",jugadorDatos);
        localStorageSet("jugadorActual",jugadorAtual);
    })
}


export default cerrarSesion;