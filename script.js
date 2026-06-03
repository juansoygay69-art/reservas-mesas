// FECHAS OCUPADAS

let fechasOcupadas = [

    "2026-05-30",
    "2026-06-02",
    "2026-06-05",
    "2026-06-10"

];

let fechaSeleccionada = "";

let fechaActual = new Date();

let mes = fechaActual.getMonth();

let año = fechaActual.getFullYear();

const meses = [

    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];

function generarCalendario(){

    let diasContainer =
    document.getElementById("dias");

    diasContainer.innerHTML = "";

    document.getElementById("mesActual").innerHTML =
    `${meses[mes]} ${año}`;

    let primerDia =
    new Date(año, mes, 1).getDay();

    let totalDias =
    new Date(año, mes + 1, 0).getDate();

    // ESPACIOS VACÍOS

    for(let i = 0; i < primerDia; i++){

        let vacio =
        document.createElement("div");

        vacio.classList.add("vacio");

        diasContainer.appendChild(vacio);
    }

    // DÍAS

    for(let dia = 1; dia <= totalDias; dia++){

        let fechaCompleta =
        `${año}-${String(mes + 1).padStart(2,"0")}-${String(dia).padStart(2,"0")}`;

        let div =
        document.createElement("div");

        div.innerHTML = dia;

        // FECHA OCUPADA

        if(fechasOcupadas.includes(fechaCompleta)){

            div.classList.add("ocupada");
        }

        else{

            div.classList.add("disponible");

            div.onclick = function(){

                seleccionarFecha(
                    fechaCompleta,
                    div
                );
            };
        }

        diasContainer.appendChild(div);
    }
}

function seleccionarFecha(fecha, elemento){

    fechaSeleccionada = fecha;

    document.getElementById("fecha").value =
    fecha;

    let dias =
    document.querySelectorAll(".dias div");

    dias.forEach(d => {

        d.classList.remove("seleccionado");
    });

    elemento.classList.add("seleccionado");
}

function reservar(){

    let nombre =
    document.getElementById("nombre").value;

    let edad =
    document.getElementById("edad").value;

    let especialidad =
    document.getElementById("especialidad").value;

    let motivo =
    document.getElementById("motivo").value;

    let hora =
    document.getElementById("hora").value;

    let resultado =
    document.getElementById("resultado");

    if(
        nombre === "" ||
        edad === "" ||
        especialidad === "" ||
        motivo === "" ||
        fechaSeleccionada === "" ||
        hora === ""
    ){

        alert("⚠️ Completa todos los campos");
        return;
    }

    // VERIFICAR SI YA EXISTE ESA CITA

    let existe =
    fechasOcupadas.includes(fechaSeleccionada);

    if(existe){

        resultado.style.display = "block";

        resultado.className =
        "resultado error";

        resultado.innerHTML = `

            <h3>
            ❌ Fecha no disponible
            </h3>

            <p>
            La fecha seleccionada ya está ocupada.
            </p>

        `;

        return;
    }

    // GUARDAR FECHA OCUPADA

    fechasOcupadas.push(fechaSeleccionada);

    generarCalendario();

    resultado.style.display = "block";

    resultado.className =
    "resultado ok";

    resultado.innerHTML = `

        <h3>
        ✅ Cita Reservada
        </h3>

        <p>
        <strong>Paciente:</strong>
        ${nombre}
        </p>

        <p>
        <strong>Edad:</strong>
        ${edad}
        </p>

        <p>
        <strong>Especialidad:</strong>
        ${especialidad}
        </p>

        <p>
        <strong>Motivo:</strong>
        ${motivo}
        </p>

        <p>
        <strong>Fecha:</strong>
        ${fechaSeleccionada}
        </p>

        <p>
        <strong>Hora:</strong>
        ${hora}
        </p>

    `;

    document.getElementById("formulario").reset();

    fechaSeleccionada = "";
}

    // GUARDAR FECHA OCUPADA

    fechasOcupadas.push(fechaSeleccionada);

    generarCalendario();

    resultado.style.display = "block";

    resultado.className =
    "resultado ok";

    resultado.innerHTML = `

        <h3>
        ✅ Cita Reservada
        </h3>

        <p>
        <strong>Paciente:</strong>
        ${nombre}
        </p>

        <p>
        <strong>Edad:</strong>
        ${edad}
        </p>

        <p>
        <strong>Especialidad:</strong>
        ${especialidad}
        </p>

        <p>
        <strong>Motivo:</strong>
        ${motivo}
        </p>

        <p>
        <strong>Fecha:</strong>
        ${fechaSeleccionada}
        </p>

        <p>
        <strong>Hora:</strong>
        ${hora}
        </p>

    `;

    document.getElementById("formulario").reset();

    fechaSeleccionada = "";


function mesAnterior(){

    mes--;

    if(mes < 0){

        mes = 11;
        año--;
    }

    generarCalendario();
}

function mesSiguiente(){

    mes++;

    if(mes > 11){

        mes = 0;
        año++;
    }

    generarCalendario();
}

// INICIAR CALENDARIO

generarCalendario();