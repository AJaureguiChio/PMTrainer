// Selectores
const contenedor = document.getElementById("contenedor-recursos");
const metodologia = document.querySelector("#metodologia");
const tipo = document.querySelector("#tipo");

// Objeto de filtros
const datosBusqueda = {
    tipo: '',
    metodologia: ''
};

document.addEventListener("DOMContentLoaded", () => {
    mostrarRecursos(recursos);
});

metodologia.addEventListener('change', e => {
    datosBusqueda.metodologia = e.target.value;
    filtros();
});

tipo.addEventListener('change', e => {
    datosBusqueda.tipo = e.target.value;
    filtros();
});

// Funciones
function mostrarRecursos(lista) {
    limpiarHTML();

    if (lista.length === 0) {
        contenedor.innerHTML = `<p class="no-result">No se encontraron resultados</p>`;
        return;
    }

    // Construir HTML una sola vez
    let html = "";
    lista.forEach(recurso => {
        html += `
            <a href="${recurso.link}" target="_blank">
                <div class="svg-text">
                    ${recurso.svg}
                    <h4>${recurso.tipo.charAt(0).toUpperCase() + recurso.tipo.slice(1)}</h4>
                </div>
                <p>${recurso.nombre}</p>
            </a>
        `;
    });

    contenedor.innerHTML = html;
}

function limpiarHTML() {
    contenedor.innerHTML = '';
}

// Filtros
function filtros() {
    const resultadoFiltrado = recursos.filter(recurso => {
        const coincideMetodologia = metodologia.value === 'todos' || recurso.metodologia === metodologia.value;
        const coincideTipo = tipo.value === 'todos' || recurso.tipo === tipo.value;
        return coincideMetodologia && coincideTipo;
    });

    mostrarRecursos(resultadoFiltrado);
}
