// Plantilla

// `<article class="card-repasos">
//                 <p>Procesos y grupos de procesos del PMBOK 6ª edición</p>
//                 <a href="#" class="exam-button">
//                     Comenzar examen
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
//                         stroke="currentColor">
//                         <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
//                     </svg>
//                 </a>
// </article>`

// Selectores
const resultado = document.querySelector("#resultado")
const metodologia = document.querySelector("#metodologia")
const titulo = document.querySelector("#titulo")

// Objetos

const datosBusqueda = {
    titulo : '',
    metodologia: '',
    preguntas: '',
    param: '',
}
let temas = []

// eventos
document.addEventListener('DOMContentLoaded', () =>{
    fetch("json/temas.json").then(response => response.json())
        .then(data => {
            temas = data.temas;
            mostrarTemas(temas);
            llenarTitulos();
        })
})

metodologia.addEventListener('change', e =>{
    datosBusqueda.metodologia = e.target.value
    // metodologiaFiltro(datosBusqueda.metodologia)
    filtros()
})

titulo.addEventListener('change', e =>{
    datosBusqueda.titulo = e.target.value
    filtros()
})

// Funciones

function mostrarTemas(lista){
    limpiarHTML()

    if (lista.length === 0) {
        resultado.innerHTML = `<p class="no-result">No se encontraron resultados</p>`;
        return;
    }

    lista.forEach(tema =>{
        const temaHTML = document.createElement('article')
        const {titulo, param, metodologia} = tema
        
        temaHTML.classList.add("card-repasos")
        temaHTML.classList.add(metodologia)
        temaHTML.innerHTML = `
            <p>${titulo}</p>
                <a href="examPage.html?examen=${param}" class="exam-button">
                    Comenzar examen
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
        `
        resultado.appendChild(temaHTML)
    })
}

function llenarTitulos() {
    temas.forEach(tema => {
        const opcion = document.createElement('option');

        opcion.textContent = `${tema.titulo}`
        opcion.value = `${tema.titulo}`
        
        titulo.appendChild(opcion)
    })
}

function limpiarHTML(){
    resultado.innerHTML = ""
}

// Filtros
function filtros() {
    const resultadoFiltrado = temas.filter(tema => {
        const coincideMetodologia = metodologia.value === 'todos' || tema.metodologia === metodologia.value;
        const coincideTitulo = titulo.value === 'todos' || tema.titulo === titulo.value;
        return coincideMetodologia && coincideTitulo;
    });

    mostrarTemas(resultadoFiltrado);    
}