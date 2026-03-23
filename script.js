// 🔥 INICIALIZAR USUARIOS
function init(){
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    if(!usuarios){
        usuarios = [
            { user: "admin", pass: "123", rol: "admin" },
            { user: "profe", pass: "123", rol: "docente" }
        ];
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
}

init();


// 🔐 LOGIN
function login(){
    const user = document.getElementById("loginUser").value.trim();
    const pass = document.getElementById("loginPass").value.trim();

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const encontrado = usuarios.find(u => u.user === user && u.pass === pass);

    if(!encontrado){
        alert("Datos incorrectos ❌");
        return;
    }

    localStorage.setItem("session", JSON.stringify(encontrado));

    if(encontrado.rol === "admin"){
        location.href = "administracion.html";
    } 
    else if(encontrado.rol === "docente"){
        location.href = "docente.html";
    } 
    else {
        location.href = "estudiante.html";
    }
}


// 🧾 REGISTRO (SOLO ESTUDIANTE)
function registrar(){
    const user = document.getElementById("regUser").value.trim();
    const pass = document.getElementById("regPass").value.trim();

    if(!user || !pass){
        return alert("Completa todo");
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    if(usuarios.some(u => u.user === user)){
        return alert("Usuario ya existe");
    }

    usuarios.push({ user, pass, rol: "estudiante" });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Registrado ✔");
}


// 👑 ADMIN CREA DOCENTE
function crearDocente(){
    const user = document.getElementById("docUser").value;
    const pass = document.getElementById("docPass").value;

    if(!user || !pass){
        return alert("Completa todo");
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    if(usuarios.some(u => u.user === user)){
        return alert("Ya existe");
    }

    usuarios.push({ user, pass, rol: "docente" });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Docente creado ✔");
}


// 🚪 LOGOUT
function logout(){
    localStorage.removeItem("session");
    location.href = "index.html";
}


// 👁️ PASSWORD
function togglePass(id){
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}
