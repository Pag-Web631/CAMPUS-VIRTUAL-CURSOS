// CREAR USUARIOS BASE
if(!localStorage.getItem("usuarios")){
    localStorage.setItem("usuarios", JSON.stringify([
        { user: "admin", pass: "123", rol: "admin" },
        { user: "profe", pass: "123", rol: "docente" }
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

// SCROLL INFO
function scrollInfo(dir){
    document.getElementById("infoContainer")
    .scrollBy({ left: dir * 200, behavior: "smooth" });
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

    alert("Registrado ✔");
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

// VER PASSWORD
function togglePass(id){
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}
