// GIRAR A REGISTRO
function goRegister(){
    document.getElementById("flipInner").style.transform = "rotateY(180deg)";
    document.getElementById("registerCard").style.display = "flex";
    document.getElementById("infoCard").style.display = "none";
}

// VOLVER A LOGIN
function goLogin(){
    document.getElementById("flipInner").style.transform = "rotateY(0deg)";
    document.getElementById("infoCard").style.display = "none";
}

// MOSTRAR INFO (MISMA CARA QUE REGISTRO)
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
        return alert("No hay usuario registrado");
    }

    if(saved.user !== user || saved.pass !== pass){
        return alert("Datos incorrectos");
    }

    alert("Bienvenido ✔");
}

// REGISTRO
function registrar(){
    const user = document.getElementById("regUser").value;
    const pass = document.getElementById("regPass").value;
    const rol = document.getElementById("regRol").value;

    if(!user || !pass || !rol){
        return alert("Completa todo");
    }

    localStorage.setItem("usuario", JSON.stringify({
        user,
        pass,
        rol
    }));

    alert("Registrado ✔");
}

// VER / OCULTAR PASSWORD
function togglePass(id, icon){
    const input = document.getElementById(id);
    const i = icon.querySelector("i");

    if(input.type === "password"){
        input.type = "text";
        i.classList.remove("fa-eye");
        i.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        i.classList.remove("fa-eye-slash");
        i.classList.add("fa-eye");
    }
}
