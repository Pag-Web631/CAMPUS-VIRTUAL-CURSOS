function goRegister(){
    flipInner.style.transform = "rotateY(180deg)";
    registerCard.style.display = "flex";
    infoCard.style.display = "none";
}

function goLogin(){
    flipInner.style.transform = "rotateY(0deg)";
}

function goInfo(){
    flipInner.style.transform = "rotateY(180deg)";
    registerCard.style.display = "none";
    infoCard.style.display = "flex";
}

function scrollInfo(dir){
    const container = document.getElementById("infoContainer");
    container.scrollBy({ left: dir * 220, behavior: "smooth" });
}

function login(){
    alert("Login funcionando");
}

function registrar(){
    alert("Registro funcionando");
}

function togglePass(id, el){
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}
