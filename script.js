document.addEventListener("DOMContentLoaded", () => {

    const login = document.querySelector(".login");
    const register = document.querySelector(".register");
    const info = document.querySelector(".info");

    // MOSTRAR LOGIN POR DEFECTO
    show(login);

    // NAV
    document.getElementById("goRegister").onclick = () => show(register);
    document.getElementById("backLogin").onclick = () => show(login);

    document.getElementById("goInfo").onclick = () => show(info);
    document.getElementById("goInfo2").onclick = () => show(info);

    document.getElementById("backFromInfo").onclick = () => show(login);

    // BOTONES
    document.getElementById("btnLogin").onclick = loginUser;
    document.getElementById("btnRegistrar").onclick = registrarUser;
});

// CAMBIAR VISTA
function show(view){
    document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
    view.classList.add("active");
}

// LOGIN
function loginUser(){
    const u = document.getElementById("loginUser").value;
    const p = document.getElementById("loginPass").value;

    const saved = JSON.parse(localStorage.getItem("usuario"));

    if(!saved){
        return alert("No hay usuario");
    }

    if(saved.user !== u || saved.pass !== p){
        return alert("Datos incorrectos");
    }

    alert("Bienvenido ✔");
}

// REGISTRO
function registrarUser(){
    const u = document.getElementById("regUser").value;
    const p = document.getElementById("regPass").value;
    const r = document.getElementById("regRol").value;

    if(!u || !p || !r){
        return alert("Completa todo");
    }

    localStorage.setItem("usuario", JSON.stringify({
        user: u,
        pass: p,
        rol: r
    }));

    alert("Registrado ✔");
}
