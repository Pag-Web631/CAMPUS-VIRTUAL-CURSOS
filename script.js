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
    const user = document.getElementById("docUser").value.trim();
    const pass = document.getElementById("docPass").value.trim();

    if(!user || !pass){
        alert("Completa todos los campos ❌");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si ya existe
    if(usuarios.some(u => u.user === user)){
        alert("Ese usuario ya existe ❌");
        return;
    }

    // 🔥 CREAR DOCENTE (rol fijo)
    const nuevoDocente = {
        user: user,
        pass: pass,
        rol: "docente"
    };

    usuarios.push(nuevoDocente);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Docente creado correctamente ✔");

    // limpiar campos
    document.getElementById("docUser").value = "";
    document.getElementById("docPass").value = "";
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
// 🔄 IR A REGISTRO
function goRegister(){
    document.getElementById("flipInner").style.transform = "rotateY(180deg)";
    document.getElementById("registerCard").style.display = "flex";
    document.getElementById("infoCard").style.display = "none";
}

// 🔄 VOLVER A LOGIN
function goLogin(){
    document.getElementById("flipInner").style.transform = "rotateY(0deg)";
    document.getElementById("registerCard").style.display = "flex";
    document.getElementById("infoCard").style.display = "none";
}

// ℹ️ MOSTRAR INFO
function goInfo(){
    document.getElementById("flipInner").style.transform = "rotateY(180deg)";
    document.getElementById("registerCard").style.display = "none";
    document.getElementById("infoCard").style.display = "flex";
}
let index = 0;

function scrollInfo(direction){
    const container = document.getElementById("infoContainer");
    const cards = document.querySelectorAll(".mini-card");

    index += direction;

    if(index < 0) index = cards.length - 1;
    if(index >= cards.length) index = 0;

    const width = cards[0].offsetWidth + 10;

    container.style.transform = `translateX(-${index * width}px)`;
}

// 🔥 AUTO SCROLL (AQUI VA)
setInterval(() => {
    scrollInfo(1);
}, 3000);
