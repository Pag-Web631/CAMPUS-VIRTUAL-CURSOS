// GIRAR A REGISTRO
function goRegister(){
    document.getElementById("flipInner").style.transform = "rotateY(180deg)";
    document.getElementById("registerCard").style.display = "flex";
    document.getElementById("infoCard").style.display = "none";
}

// VOLVER LOGIN
function goLogin(){
    document.getElementById("flipInner").style.transform = "rotateY(0deg)";
    document.getElementById("registerCard").style.display = "flex";
    document.getElementById("infoCard").style.display = "none";
}

// MOSTRAR INFO
function goInfo(){
    document.getElementById("flipInner").style.transform = "rotateY(180deg)";
    document.getElementById("registerCard").style.display = "none";
    document.getElementById("infoCard").style.display = "flex";
}

// LOGIN
function login(){
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;

    const saved = JSON.parse(localStorage.getItem("usuario"));

    if(!saved){
        alert("No hay usuario registrado");
        return;
    }

    if(saved.user !== user || saved.pass !== pass){
        alert("Datos incorrectos");
        return;
    }

    alert("Bienvenido ✔");

    // REDIRECCIÓN
    if(saved.rol === "docente"){
        window.location.href = "docente.html";
    } else {
        window.location.href = "estudiante.html";
    }
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
        user,
        pass,
        rol
    }));

    alert("Registrado ✔");
}

// MOSTRAR / OCULTAR PASSWORD
function togglePass(id, icon){
    const input = document.getElementById(id);
    const i = icon.querySelector("i");

    if(input.type === "password"){
        input.type = "text";
        i.classList.replace("fa-eye","fa-eye-slash");
    } else {
        input.type = "password";
        i.classList.replace("fa-eye-slash","fa-eye");
    }
}
