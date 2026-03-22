let user = null;

// LOGIN
function login(){
    const userInput = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;

    const saved = JSON.parse(localStorage.getItem("usuario"));

    if(!saved || saved.user !== userInput || saved.pass !== pass){
        alert("Datos incorrectos");
        return;
    }

    if(saved.rol === "docente") location.href = "docente.html";
    else location.href = "estudiante.html";
}

// REGISTRO
function registrar(){
    const user = document.getElementById("regUser").value;
    const pass = document.getElementById("regPass").value;
    const rol = document.getElementById("regRol").value;

    if(!user || !pass || !rol){
        alert("Completa todo");
        return;
    }

    localStorage.setItem("usuario", JSON.stringify({
        nombre: user,
        user,
        pass,
        rol
    }));

    alert("Registrado");
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
    if(b) b.innerText = "Bienvenido " + user.nombre;
}

// LOGOUT
function logout(){
    localStorage.removeItem("usuario");
    location.href = "index.html";
}

// MOSTRAR REGISTRO
function toggleRegistro(){
    const reg = document.getElementById("registro");
    reg.style.display = reg.style.display === "none" ? "block" : "none";
}
