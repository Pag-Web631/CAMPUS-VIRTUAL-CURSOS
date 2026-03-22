let user = JSON.parse(localStorage.getItem("user") || "null");

function cargarUsuario(){
    if(!user){
        window.location.href = "index.html";
        return;
    }
    document.getElementById("bienvenida").innerText =
        `Bienvenido ${user.nombre} (${user.rol === "estudiante" ? "Estudiante" : "Docente"})`;
}
