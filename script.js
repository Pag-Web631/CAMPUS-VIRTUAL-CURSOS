// CAMBIOS DE PANTALLA
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
