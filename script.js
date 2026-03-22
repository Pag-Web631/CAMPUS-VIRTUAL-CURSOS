// 🔥 VERIFICAR CARGA
console.log("JS cargado correctamente");

document.addEventListener("DOMContentLoaded", () => {

    console.log("DOM listo");

    const flipCard = document.getElementById("flipCard");

    // 🔁 REGISTRO
    const registerText = document.getElementById("registerText");
    if(registerText){
        registerText.addEventListener("click", () => {
            console.log("Click registrarse");
            flipCard.classList.add("active");
        });
    }

    // 🔁 VOLVER
    const loginText = document.getElementById("loginText");
    if(loginText){
        loginText.addEventListener("click", () => {
            console.log("Click volver");
            flipCard.classList.remove("active");
        });
    }

    // ℹ️ INFO
    document.querySelectorAll(".infoToggle").forEach(btn => {
        btn.addEventListener("click", () => {
            console.log("Click info");
            const panel = document.getElementById("infoPanel");
            panel.classList.toggle("active");
        });
    });

    // 🔐 LOGIN
    const btnLogin = document.getElementById("btnLogin");
    if(btnLogin){
        btnLogin.addEventListener("click", () => {
            console.log("Click login");
            login();
        });
    }

    // 📝 REGISTRO
    const btnRegistrar = document.getElementById("btnRegistrar");
    if(btnRegistrar){
        btnRegistrar.addEventListener("click", () => {
            console.log("Click registrar");
            registrar();
        });
    }

});


// LOGIN
function login(){
    const u = document.getElementById("loginUser").value;
    const p = document.getElementById("loginPass").value;

    const saved = JSON.parse(localStorage.getItem("usuario"));

    if(!saved){
        alert("No hay usuario");
        return;
    }

    if(saved.user !== u || saved.pass !== p){
        alert("Datos incorrectos");
        return;
    }

    alert("Bienvenido");
}


// REGISTRO
function registrar(){
    const u = document.getElementById("regUser").value;
    const p = document.getElementById("regPass").value;
    const r = document.getElementById("regRol").value;

    if(!u || !p || !r){
        alert("Completa todo");
        return;
    }

    localStorage.setItem("usuario", JSON.stringify({
        user: u,
        pass: p,
        rol: r
    }));

    alert("Registrado");
}
