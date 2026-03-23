// CREAR USUARIOS BASE (SOLO UNA VEZ)
if(!localStorage.getItem("usuarios")){
    localStorage.setItem("usuarios", JSON.stringify([
        { user: "profe", pass: "123", rol: "docente" },
        { user: "admin", pass: "123", rol: "admin" }
    ]));
}

// CAMBIOS DE VISTA
function goRegister(){
    document.getElementById("flipInner").style.transform = "rotateY(180deg)";
    document.getElementById("registerCard").style.display = "block";
    document.getElementById("infoCard").style.display = "none";
}

function goLogin(){
    document.getElementById("flipInner").style.transform = "rotateY(0deg)";
}

function goInfo(){
    document.getElementById("flipInner").style.transform = "rotateY(180deg)";
    document.getElementById("registerCard").style.display = "none";
    document.getElementById("infoCard").style.display = "block";
}

// SCROLL INFO
function scrollInfo(dir){
    document.getElementById("infoContainer")
    .scrollBy({ left: dir * 200, behavior: "smooth" });
}

// REGISTRO (ESTUDIANTE)
function registrar(){
    const user = document.getElementById("regUser").value;
    const pass = document.getElementById("regPass").value;

    if(!user || !pass){
        alert("Completa todo");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    if(usuarios.find(u => u.user === user)){
        alert("Usuario ya existe");
        return;
    }

    usuarios.push({
        user,
        pass,
        rol: "estudiante"
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Registrado ✔");
}

// LOGIN REAL 🔥
function login(){
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    const encontrado = usuarios.find(u => u.user === user && u.pass === pass);

    if(!encontrado){
        alert("Datos incorrectos ❌");
        return;
    }

    localStorage.setItem("session", JSON.stringify(encontrado));

    // REDIRECCIÓN
    if(encontrado.rol === "docente"){
        window.location.href = "docente.html";
    } 
    else if(encontrado.rol === "admin"){
        window.location.href = "administracion.html";
    } 
    else {
        window.location.href = "estudiante.html";
    }
}

// VER PASSWORD
function togglePass(id){
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}
