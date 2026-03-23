let session = JSON.parse(localStorage.getItem("session"));

if(!session || session.rol !== "docente"){
    alert("Acceso denegado");
    location.href = "index.html";
}

function cargarCursos(){
    let cursos = JSON.parse(localStorage.getItem("cursos")) || [];

    let html = "";

    cursos
    .filter(c => c.docente === session.user)
    .forEach(c => {

        html += `
        <div class="course-card">
            <h3>${c.nombre}</h3>

            <input id="tarea_${c.id}" placeholder="Nueva tarea">
            <button onclick="crearTarea(${c.id})">Crear Tarea</button>

            <input id="quiz_${c.id}" placeholder="Nuevo cuestionario">
            <button onclick="crearQuiz(${c.id})">Crear Quiz</button>

            <div class="list">
                <b>Tareas:</b>
                ${c.tareas.map(t => `<div>${t.nombre}</div>`).join("")}
            </div>

            <div class="list">
                <b>Cuestionarios:</b>
                ${c.cuestionarios.map(q => `<div>${q.nombre}</div>`).join("")}
            </div>
        </div>`;
    });

    document.getElementById("misCursos").innerHTML = html;
}

function crearTarea(id){
    let cursos = JSON.parse(localStorage.getItem("cursos"));
    let curso = cursos.find(c => c.id === id);

    let nombre = document.getElementById("tarea_"+id).value;

    if(!nombre) return alert("Escribe tarea");

    curso.tareas.push({ nombre });

    localStorage.setItem("cursos", JSON.stringify(cursos));
    cargarCursos();
}

function crearQuiz(id){
    let cursos = JSON.parse(localStorage.getItem("cursos"));
    let curso = cursos.find(c => c.id === id);

    let nombre = document.getElementById("quiz_"+id).value;

    if(!nombre) return alert("Escribe cuestionario");

    curso.cuestionarios.push({ nombre });

    localStorage.setItem("cursos", JSON.stringify(cursos));
    cargarCursos();
}

function logout(){
    localStorage.removeItem("session");
    location.href = "index.html";
}

cargarCursos();
