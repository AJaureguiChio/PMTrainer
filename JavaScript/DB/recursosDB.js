// Base de datos en donde se guardan los recursos

// Metodología 1 = PMBOK
// Metodología 2 = SCRUM

// Plantilla de recursos
//          {
//             tipo: "",
//             svg: ``,
//             link: "",
//             nombre: "",
//             descripcion: "",
//             metodologia: 1 o 2
//         },


const recursos = [

    // ─── Artículos ─────────────────────────────────────────────

    {
        tipo: "articulo",
        svg: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                class="icon icon-tabler icons-tabler-outline icon-tabler-article">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                <path d="M7 8h10" />
                <path d="M7 12h10" />
                <path d="M7 16h10" />
            </svg>
        `,
        link: "https://www.scrum.org/",
        nombre: "Guía Oficial de Scrum",
        descripcion: "The Scrum Guide. Ken Schwaber & Jeff Sutherland",
        metodologia: 2
    },
    {
        tipo: "articulo",
        svg: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                class="icon icon-tabler icons-tabler-outline icon-tabler-article">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                <path d="M7 8h10" />
                <path d="M7 12h10" />
                <path d="M7 16h10" />
            </svg>
        `,
        link: "https://scrumguides.org/scrum-guide.html",
        nombre: "Guía de Scrum",
        descripcion: "La guía definitva de SCRUM",
        metodologia: 2
    },
    {
        tipo: "articulo",
        svg: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                class="icon icon-tabler icons-tabler-outline icon-tabler-article">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                <path d="M7 8h10" />
                <path d="M7 12h10" />
                <path d="M7 16h10" />
            </svg>
        `,
        link: "https://www.atlassian.com/agile/scrum",
        nombre: "¿Qué es scrum y como empezar?",
        descripcion: "Guía Scrum - Qué es, como funciona y como empezar",
        metodologia: 2
    },

    // ─── Libros ────────────────────────────────────────────────

    {
        tipo: "libro",
        svg: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="#137fec" 
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                class="icon icon-tabler icons-tabler-outline icon-tabler-book">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6l0 13" />
                <path d="M12 6l0 13" />
                <path d="M21 6l0 13" />
            </svg>
        `,
        link: "https://www.pmi.org/standards/pmbok#:~:text=te%20puede%20interesar-,Descripci%C3%B3n%20general,los%20r%C3%A1pidos%20cambios%20del%20mercado",
        nombre: "Project Management Institute. (2021)",
        descripcion: "Guía de los Fundamentos para la Dirección de Proyectos (PMBOK® Guide) – 7ma Edición.",
        metodologia: 1
    },
    {
        tipo: "libro",
        svg: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="#137fec" 
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                class="icon icon-tabler icons-tabler-outline icon-tabler-book">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6l0 13" />
                <path d="M12 6l0 13" />
                <path d="M21 6l0 13" />
            </svg>
        `,
        link: "https://www.amazon.com.mx/Fast-Forward-Project-Management-Comprehensive/dp/1119700760",
        nombre: "The Fast Forward MBA in Project Management. 6ª edición",
        descripcion: "El MBA de avance rápido en gestión de proyectos: el manual completo y fácil de leer para principiantes y profesionales",
        metodologia: 1
    },
    {
        tipo: "libro",
        svg: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="#137fec" 
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                class="icon icon-tabler icons-tabler-outline icon-tabler-book">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6l0 13" />
                <path d="M12 6l0 13" />
                <path d="M21 6l0 13" />
            </svg>
        `,
        link: "https://www.amazon.com.mx/Essential-Scrum-Practical-Addison-Wesley-Signature-ebook/dp/B0DG6DTFLL/ref=sr_1_1",
        nombre: "Essential Scrum: A Practical Guide to the Most Popular Agile Process",
        descripcion: "Guía completa y de una sola fuente sobre Scrum para todos los miembros del equipo, gerentes y ejecutivos",
        metodologia: 2
    },
    {
        tipo: "libro",
        svg: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="#137fec" 
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                class="icon icon-tabler icons-tabler-outline icon-tabler-book">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6l0 13" />
                <path d="M12 6l0 13" />
                <path d="M21 6l0 13" />
            </svg>
        `,
        link: "https://www.amazon.com.mx/Succeeding-Agile-Software-Development-Using/dp/0321579364",
        nombre: "Succeeding with Agile: Software Development Using Scrum",
        descripcion: "Guía probada y 100 % práctica para hacer que Scrum y Agile funcionen en cualquier organización",
        metodologia: 2
    },

    // ─── Videos ────────────────────────────────────────────────
    // {
    //     tipo: "video",
    //     svg: `
    //         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    //             viewBox="0 0 24 24" fill="none" stroke="currentColor" 
    //             stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
    //             class="icon icon-tabler icons-tabler-outline icon-tabler-video">
    //             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //             <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
    //             <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
    //         </svg>
    //     `,
    //     link: "#",
    //     nombre: "Introducción a Scrum (Video)",
    //     descripcion: "Video explicativo sobre los fundamentos de Scrum y su aplicación práctica.",
    //     metodologia: 2
    // },
    // {
    //     tipo: "video",
    //     svg: `
    //         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    //             viewBox="0 0 24 24" fill="none" stroke="currentColor" 
    //             stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
    //             class="icon icon-tabler icons-tabler-outline icon-tabler-video">
    //             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //             <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
    //             <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
    //         </svg>
    //     `,
    //     link: "#",
    //     nombre: "Gestión de proyectos con PMBOK (Video)",
    //     descripcion: "Introducción visual a la gestión de proyectos según la guía PMBOK.",
    //     metodologia: 1
    // }
];


// Leer llaves
// console.log(Object.keys(recursos).length)

// Leer cantidad de objetos en cada sección
// console.log(recursos.libros.length + recursos.articulos.length)
