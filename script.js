let user = null;

function cargarUsuario(){
    const data = localStorage.getItem("usuario");

    if(!data){
        window.location.href = "index.html";
        return;
    }

    user = JSON.parse(data);

    // Mostrar nombre
    const bienvenida = document.getElementById("bienvenida");
    if(bienvenida){
        bienvenida.innerText = "Bienvenido, " + user.nombre;
    }

    // Aplicar estilo por rol
    document.body.classList.add(user.rol);
}
