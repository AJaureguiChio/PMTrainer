document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-recursos");
    
    recursos.forEach(r => {
        contenedor.innerHTML += `
            <a href="${r.link}" target="_blank">
                <div class="svg-text">
                    ${r.svg}
                    <h4>${r.tipo.charAt(0).toUpperCase() + r.tipo.slice(1)}</h4>
                </div>
                <p>${r.nombre}</p>
            </a>
        `;
    });
})
