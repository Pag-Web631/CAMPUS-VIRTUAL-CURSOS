document.addEventListener("DOMContentLoaded", () => {

    const panel = document.getElementById("infoPanel");
    const overlay = document.getElementById("overlay");
    const flipCard = document.getElementById("flipCard");

    // 🔥 INFO + FLIP (AQUI ESTA LA MAGIA)
    document.querySelectorAll(".toggleInfo").forEach(el => {
        el.addEventListener("click", () => {

            // abrir panel
            if(panel) panel.classList.add("active");
            if(overlay) overlay.classList.add("active");

            // girar tarjeta
            if(flipCard) flipCard.classList.toggle("active");
        });
    });

    // ❌ CERRAR INFO
    const closeBtn = document.getElementById("closeInfo");
    if(closeBtn){
        closeBtn.onclick = () => {
            if(panel) panel.classList.remove("active");
            if(overlay) overlay.classList.remove("active");
        };
    }

    if(overlay){
        overlay.onclick = () => {
            if(panel) panel.classList.remove("active");
            overlay.classList.remove("active");
        };
    }

    // 🔁 FLIP NORMAL
    const reg = document.getElementById("registerText");
    const log = document.getElementById("loginText");

    if(reg){
        reg.onclick = () => {
            flipCard.classList.add("active");
        };
    }

    if(log){
        log.onclick = () => {
            flipCard.classList.remove("active");
        };
    }

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
