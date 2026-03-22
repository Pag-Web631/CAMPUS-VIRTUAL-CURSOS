document.addEventListener("DOMContentLoaded", () => {

    const panel = document.getElementById("infoPanel");
    const overlay = document.getElementById("overlay");
    const flipCard = document.getElementById("flipCard");

    // 🔥 ABRIR INFO
    document.querySelectorAll(".toggleInfo").forEach(el => {
        el.addEventListener("click", () => {
            panel.classList.add("active");
            overlay.classList.add("active");
        });
    });

    // ❌ CERRAR
    document.getElementById("closeInfo").onclick = () => {
        panel.classList.remove("active");
        overlay.classList.remove("active");
    };

    overlay.onclick = () => {
        panel.classList.remove("active");
        overlay.classList.remove("active");
    };

    // 🔁 FLIP (DOBLE CLICK)
    document.getElementById("registerText").ondblclick = () => {
        flipCard.classList.add("active");
    };

    document.getElementById("loginText").ondblclick = () => {
        flipCard.classList.remove("active");
    };

    // BOTONES
    document.getElementById("btnLogin").onclick = login;
    document.getElementById("btnRegistrar").onclick = registrar;
});

// LOGIN
function login(){
    alert("Login funcionando");
}

// REGISTRO
function registrar(){
    alert("Registro funcionando");
}
