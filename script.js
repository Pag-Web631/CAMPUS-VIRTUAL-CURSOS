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
    const user = document.getElementById("loginUser")?.value.trim();
    const pass = document.getElementById("loginPass")?.value.trim();

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
    const user = document.getElementById("regUser")?.value.trim();
    const pass = document.getElementById("regPass")?.value.trim();

    if(!user || !pass){
        return alert("Completa todo");
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if(usuarios.some(u => u.user === user)){
        return alert("Usuario ya existe");
    }

    usuarios.push({ user, pass, rol: "estudiante" });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Registrado ✔");
}


// 👑 ADMIN CREA DOCENTE
function crearDocente(){
    const user = document.getElementById("docUser")?.value.trim();
    const pass = document.getElementById("docPass")?.value.trim();

    if(!user || !pass){
        alert("Completa todos los campos ❌");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if(usuarios.some(u => u.user === user)){
        alert("Ese usuario ya existe ❌");
        return;
    }

    usuarios.push({ user, pass, rol: "docente" });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Docente creado ✔");

    if(document.getElementById("docUser")){
        document.getElementById("docUser").value = "";
        document.getElementById("docPass").value = "";
    }
}


// 🚪 LOGOUT
function logout(){
    localStorage.removeItem("session");
    location.href = "index.html";
}


// 👁️ PASSWORD
function togglePass(id){
    const input = document.getElementById(id);
    if(!input) return;

    input.type = input.type === "password" ? "text" : "password";
}


// 🔄 IR A REGISTRO
function goRegister(){
    const flip = document.getElementById("flipInner");
    const reg = document.getElementById("registerCard");
    const info = document.getElementById("infoCard");

    if(!flip) return;

    flip.style.transform = "rotateY(180deg)";

    if(reg) reg.style.display = "flex";
    if(info) info.style.display = "none";
}


// 🔄 VOLVER A LOGIN
function goLogin(){
    const flip = document.getElementById("flipInner");
    const reg = document.getElementById("registerCard");
    const info = document.getElementById("infoCard");

    if(!flip) return;

    flip.style.transform = "rotateY(0deg)";

    if(reg) reg.style.display = "flex";
    if(info) info.style.display = "none";
}


// ℹ️ MOSTRAR INFO
function goInfo(){
    const flip = document.getElementById("flipInner");
    const reg = document.getElementById("registerCard");
    const info = document.getElementById("infoCard");

    if(!flip) return;

    flip.style.transform = "rotateY(180deg)";

    if(reg) reg.style.display = "none";
    if(info) info.style.display = "flex";
}


// 🎞️ CARRUSEL INFO
let index = 0;

function scrollInfo(direction){
    const container = document.getElementById("infoContainer");
    const cards = document.querySelectorAll(".mini-card");

    if(!container || cards.length === 0) return;

    index += direction;

    if(index < 0) index = cards.length - 1;
    if(index >= cards.length) index = 0;

    const width = cards[0].offsetWidth + 10;

    container.style.transform = `translateX(-${index * width}px)`;
}


// 🔥 AUTO SCROLL SEGURO
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("infoContainer");

    if(container){
        setInterval(() => {
            scrollInfo(1);
        }, 3000);
    }
});
