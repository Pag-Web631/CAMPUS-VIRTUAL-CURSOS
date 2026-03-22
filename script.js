document.addEventListener("DOMContentLoaded", () => {

    const flipCard = document.getElementById("flipCard");

    document.getElementById("registerText").onclick = () => {
        flipCard.classList.add("active");
    };

    document.getElementById("loginText").onclick = () => {
        flipCard.classList.remove("active");
    };

    // BOTONES INFO
    document.querySelectorAll(".infoToggle").forEach(btn => {
        btn.addEventListener("click", () => {
            document.getElementById("infoPanel").classList.toggle("active");
        });
    });

    // BOTONES
    document.getElementById("btnLogin").onclick = login;
    document.getElementById("btnRegistrar").onclick = registrar;
});

// TOAST
function showToast(msg, type="success"){
    const t = document.getElementById("toast");
    t.innerText = msg;
    t.className = "show " + type;
    setTimeout(()=>t.classList.remove("show"), 2500);
}

// LOGIN
function login(){
    const u = document.getElementById("loginUser").value;
    const p = document.getElementById("loginPass").value;
    const saved = JSON.parse(localStorage.getItem("usuario"));

    if(!saved) return showToast("No hay usuario", "warning");
    if(saved.user !== u || saved.pass !== p) return showToast("Datos incorrectos", "error");

    showToast("Bienvenido ✔");

    setTimeout(()=>{
        location.href = saved.rol === "docente" ? "docente.html" : "estudiante.html";
    },1000);
}

// REGISTRO
function registrar(){
    const u = document.getElementById("regUser").value;
    const p = document.getElementById("regPass").value;
    const r = document.getElementById("regRol").value;

    if(!u || !p || !r) return showToast("Completa todo", "warning");

    localStorage.setItem("usuario", JSON.stringify({user:u, pass:p, rol:r}));

    showToast("Registrado ✔");

    document.getElementById("flipCard").classList.remove("active");
}
