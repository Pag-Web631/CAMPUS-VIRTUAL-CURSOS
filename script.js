let user = null;

// FLIP
document.addEventListener("DOMContentLoaded", () => {

    const flipCard = document.getElementById("flipCard");

    document.getElementById("registerText").onclick = () => {
        flipCard.classList.add("active");
    };

    document.getElementById("loginText").onclick = () => {
        flipCard.classList.remove("active");
    };

});

// 🔥 TOAST
function showToast(msg, type = "success"){
    const toast = document.getElementById("toast");

    toast.innerText = msg;
    toast.className = "";
    toast.classList.add("show", type);

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// LOGIN
function login(){
    const userInput = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;

    const saved = JSON.parse(localStorage.getItem("usuario"));

    if(!saved){
        showToast("No hay usuario registrado", "warning");
        return;
    }

    if(saved.user !== userInput || saved.pass !== pass){
        showToast("Datos incorrectos", "error");
        return;
    }

    showToast("Bienvenido ✔", "success");

    setTimeout(() => {
        if(saved.rol === "docente"){
            location.href = "docente.html";
        } else {
            location.href = "estudiante.html";
        }
    }, 1000);
}

// REGISTRO
function registrar(){
    const user = document.getElementById("regUser").value;
    const pass = document.getElementById("regPass").value;
    const rol = document.getElementById("regRol").value;

    if(!user || !pass || !rol){
        showToast("Completa todos los campos", "warning");
        return;
    }

    localStorage.setItem("usuario", JSON.stringify({
        nombre: user,
        user,
        pass,
        rol
    }));

    showToast("Usuario registrado ✔", "success");

    document.getElementById("flipCard").classList.remove("active");
}
function toggleInfo(){
    const panel = document.getElementById("infoPanel");
    panel.classList.toggle("active");
}
