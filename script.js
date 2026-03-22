let user = null;

// ESPERAR CARGA
document.addEventListener("DOMContentLoaded", () => {

    const flipCard = document.getElementById("flipCard");

    // BOTONES (SI EXISTEN)
    const registerText = document.getElementById("registerText");
    const loginText = document.getElementById("loginText");

    if(registerText){
        registerText.onclick = () => flipCard.classList.add("active");
    }

    if(loginText){
        loginText.onclick = () => flipCard.classList.remove("active");
    }

});


// LOGIN
function login(){
    const userInput = document.getElementById("loginUser").value.trim();
    const pass = document.getElementById("loginPass").value.trim();

    const saved = JSON.parse(localStorage.getItem("usuario"));

    if(!saved){
        alert("No hay usuario registrado");
        return;
    }

    if(saved.user !== userInput || saved.pass !== pass){
        alert("Datos incorrectos");
        return;
    }

    if(saved.rol === "docente"){
        location.href = "docente.html";
    } else {
        location.href = "estudiante.html";
    }
}


// REGISTRO
function registrar(){
    const userInput = document.getElementById("regUser").value.trim();
    const pass = document.getElementById("regPass").value.trim();
    const rol = document.getElementById("regRol").value;

    if(!userInput || !pass || !rol){
        alert("Completa todos los campos");
        return;
    }

    localStorage.setItem("usuario", JSON.stringify({
        nombre: userInput,
        user: userInput,
        pass: pass,
        rol: rol
    }));

    alert("Usuario registrado ✔");

    // 🔥 VOLVER AUTOMÁTICAMENTE AL LOGIN
    document.getElementById("flipCard").classList.remove("active");
}


// PANEL USUARIO
function cargarUsuario(){
    const data = localStorage.getItem("usuario");

    if(!data){
        location.href = "index.html";
        return;
    }

    user = JSON.parse(data);

    document.body.classList.add(user.rol);

    const b = document.getElementById("bienvenida");
    if(b){
        b.innerText = "Bienvenido " + user.nombre;
    }
}


// LOGOUT
function logout(){
    localStorage.removeItem("usuario");
    location.href = "index.html";
}
