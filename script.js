document.addEventListener("DOMContentLoaded", () => {

    const flipCard = document.getElementById("flipCard");
    const registerText = document.getElementById("registerText");
    const loginText = document.getElementById("loginText");

    // 🔁 FLIP
    if(registerText){
        registerText.addEventListener("click", () => {
            flipCard.classList.add("active");
        });
    }

    if(loginText){
        loginText.addEventListener("click", () => {
            flipCard.classList.remove("active");
        });
    }

    // ℹ️ INFO PANEL
    const infoBtns = document.querySelectorAll(".infoToggle");

    infoBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const panel = document.getElementById("infoPanel");
            panel.classList.toggle("active");
        });
    });

    // 🔘 BOTONES
    const btnLogin = document.getElementById("btnLogin");
    const btnRegistrar = document.getElementById("btnRegistrar");

    if(btnLogin) btnLogin.addEventListener("click", login);
    if(btnRegistrar) btnRegistrar.addEventListener("click", registrar);

});


// 🔔 TOAST
function showToast(msg, type="success"){
    const t = document.getElementById("toast");
    if(!t) return;

    t.innerText = msg;
    t.className = "show " + type;

    setTimeout(() => t.classList.remove("show"), 2500);
}


// 🔐 LOGIN
function login(){
    const u = document.getElementById("loginUser").value;
    const p = document.getElementById("loginPass").value;

    const saved = JSON.parse(localStorage.getItem("usuario"));

    if(!saved){
        showToast("No hay usuario", "warning");
        return;
    }

    if(saved.user !== u || saved.pass !== p){
        showToast("Datos incorrectos", "error");
        return;
    }

    showToast("Bienvenido ✔");

    setTimeout(() => {
        location.href = saved.rol === "docente" ? "docente.html" : "estudiante.html";
    }, 1000);
}


// 📝 REGISTRO
function registrar(){
    const u = document.getElementById("regUser").value;
    const p = document.getElementById("regPass").value;
    const r = document.getElementById("regRol").value;

    if(!u || !p || !r){
        showToast("Completa todo", "warning");
        return;
    }

    localStorage.setItem("usuario", JSON.stringify({
        user: u,
        pass: p,
        rol: r
    }));

    showToast("Registrado ✔");

    document.getElementById("flipCard").classList.remove("active");
}
