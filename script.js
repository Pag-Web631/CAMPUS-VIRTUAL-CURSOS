// CAMBIOS DE PANTALLA
function goRegister(){
    document.getElementById("flipInner").style.transform = "rotateY(180deg)";
    document.getElementById("registerCard").style.display = "flex";
    document.getElementById("infoCard").style.display = "none";
}

function goLogin(){
    document.getElementById("flipInner").style.transform = "rotateY(0deg)";
}
// USUARIOS BASE (SE CREA ADMIN AUTOMATICO)
if(!localStorage.getItem("usuarios")){
    localStorage.setItem("usuarios", JSON.stringify([
        { user: "admin", pass: "123", rol: "admin" }
    ]));
}

// CAMBIOS DE VISTA
function goRegister(){
    document.getElementById("flipInner").style.transform = "rotateY(180deg)";
    document.getElementById("registerCard").style.display = "flex";
    document.getElementById("infoCard").style.display = "none";
}

function goLogin(){
    document.getElementById("flipInner").style.transform = "rotateY(0deg)";
}

function goInfo(){
    document.getElementById("flipInner").style.transform = "rotateY(180deg)";
    document.getElementById("registerCard").style.display = "none";
    document.getElementById("infoCard").style.display = "flex";
}

// REGISTRO (SOLO ESTUDIANTE)
function registrar(){
    const user = document.getElementById("regUser").value;
    const pass = document.getElementById("regPass").value;

    if(!user || !pass){
        return alert("Completa todo");
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    if(usuarios.find(u => u.user === user)){
        return alert("Usuario ya existe");
    }

    usuarios.push({
        user,
        pass,
        rol: "estudiante"
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cuenta creada como estudiante ✔");
}

// LOGIN
function login(){
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    const encontrado = usuarios.find(u => u.user === user && u.pass === pass);

    if(!encontrado){
        return alert("Datos incorrectos");
    }

    localStorage.setItem("session", JSON.stringify(encontrado));

    // REDIRECCIÓN
    if(encontrado.rol === "admin"){
        location.href = "administracion.html";
    }
    else if(encontrado.rol === "docente"){
        location.href = "docente.html";
    }
    else{
        location.href = "estudiante.html";
    }
}

// TOGGLE PASSWORD
function togglePass(id){
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}
function goInfo(){
    document.getElementById("flipInner").style.transform = "rotateY(180deg)";
    document.getElementById("registerCard").style.display = "none";
    document.getElementById("infoCard").style.display = "flex";
}

// SCROLL BOTONES ◀ ▶
function scrollInfo(dir){
    const container = document.getElementById("infoContainer");

    container.scrollBy({
        left: dir * 250,
        behavior: "smooth"
    });
}

// LOGIN
function login(){
    alert("Login funcionando ✔");
}

// REGISTRO
function registrar(){
    alert("Registro funcionando ✔");
}

// VER PASSWORD
function togglePass(id, el){
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}
