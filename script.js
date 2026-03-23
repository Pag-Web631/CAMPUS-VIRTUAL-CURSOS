// 🔥 INICIALIZAR USUARIOS (SI NO EXISTEN)
function initUsuarios(){
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    if(!usuarios || usuarios.length === 0){
        usuarios = [
            { user: "profe", pass: "12", rol: "docente" },
            { user: "admin", pass: "123", rol: "admin" }
        ];
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
}

// EJECUTAR AL CARGAR
initUsuarios();


// 🔁 CAMBIOS DE TARJETA
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


// 📜 SCROLL INFO
function scrollInfo(dir){
    document.getElementById("infoContainer")
    .scrollBy({ left: dir * 250, behavior: "smooth" });
}


// 🧾 REGISTRAR (SOLO ESTUDIANTE)
function registrar(){
    const user = document.getElementById("regUser").value.trim();
    const pass = document.getElementById("regPass").value.trim();

    if(!user || !pass){
        alert("Completa todos los campos");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // VERIFICAR SI YA EXISTE
    if(usuarios.some(u => u.user === user)){
        alert("Usuario ya existe");
        return;
    }

    // CREAR ESTUDIANTE
    usuarios.push({
        user,
        pass,
        rol: "estudiante"
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Registrado correctamente ✔");

    goLogin();
}


// 🔐 LOGIN REAL
function login(){
    const user = document.getElementById("loginUser").value.trim();
    const pass = document.getElementById("loginPass").value.trim();

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    console.log("Usuarios guardados:", usuarios);

    const encontrado = usuarios.find(u => u.user === user && u.pass === pass);

    if(!encontrado){
        alert("Datos incorrectos ❌");
        return;
    }

    // GUARDAR SESIÓN
    localStorage.setItem("session", JSON.stringify(encontrado));

    alert("Bienvenido " + encontrado.user + " ✔");

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


// 👁️ VER / OCULTAR PASSWORD
function togglePass(id){
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}
