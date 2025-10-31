const pmbok = [
  {
    question: "¿Cuál es el objetivo principal del PMBOK?",
    options: [
      "Describir metodologías ágiles",
      "Estandarizar la gestión de proyectos",
      "Enseñar programación",
      "Medir el rendimiento del equipo"
    ],
    answer: 1,
    feedback: "El PMBOK busca establecer estándares y buenas prácticas para la gestión de proyectos reconocidas por el PMI."
  },
  {
    question: "¿Qué significa PMI en relación con el PMBOK?",
    options: [
      "Project Management Institute",
      "Project Management Indicator",
      "Performance Management Index",
      "Program Management Information"
    ],
    answer: 0,
    feedback: "El PMI es la organización que publica y actualiza la guía PMBOK, encargada de promover las mejores prácticas en gestión de proyectos."
  },
  {
    question: "¿Cuántos grupos de procesos define el PMBOK?",
    options: ["4", "5", "6", "7"],
    answer: 1,
    feedback: "El PMBOK define cinco grupos de procesos: Inicio, Planificación, Ejecución, Monitoreo y Cierre."
  },
  {
    question: "¿Cuál de los siguientes es un área de conocimiento del PMBOK?",
    options: [
      "Gestión del tiempo",
      "Gestión del sprint",
      "Gestión ágil",
      "Gestión emocional"
    ],
    answer: 0,
    feedback: "La gestión del tiempo (ahora llamada gestión del cronograma) es una de las áreas clave de conocimiento del PMBOK."
  },
  {
    question: "¿Qué documento autoriza formalmente el inicio de un proyecto?",
    options: [
      "Acta de constitución del proyecto",
      "Plan de trabajo",
      "Cronograma",
      "Informe de avance"
    ],
    answer: 0,
    feedback: "El acta de constitución autoriza formalmente el proyecto y otorga autoridad al director del proyecto."
  },
  {
    question: "¿Qué herramienta se usa comúnmente para gestionar el cronograma en PMBOK?",
    options: [
      "Diagrama de Gantt",
      "Backlog",
      "Kanban",
      "Scrum board"
    ],
    answer: 0,
    feedback: "El diagrama de Gantt se usa en PMBOK para visualizar y controlar el cronograma del proyecto."
  },
  {
    question: "¿Qué área se encarga de asegurar que el proyecto cumpla con los requisitos establecidos?",
    options: [
      "Gestión de calidad",
      "Gestión de recursos",
      "Gestión de comunicaciones",
      "Gestión de riesgos"
    ],
    answer: 0,
    feedback: "La gestión de calidad se centra en cumplir los estándares definidos y satisfacer las expectativas del cliente."
  },
  {
    question: "¿Qué proceso implica monitorear el progreso y desempeño del proyecto?",
    options: [
      "Controlar el trabajo del proyecto",
      "Dirigir y gestionar el trabajo",
      "Cerrar el proyecto",
      "Identificar interesados"
    ],
    answer: 0,
    feedback: "Controlar el trabajo del proyecto implica comparar el desempeño real con el plan y aplicar acciones correctivas si es necesario."
  },
  {
    question: "¿Qué grupo de procesos se ejecuta más veces durante el ciclo de vida del proyecto?",
    options: [
      "Inicio",
      "Cierre",
      "Monitoreo y control",
      "Planificación"
    ],
    answer: 2,
    feedback: "El monitoreo y control se realiza de forma continua para asegurar que el proyecto se mantenga en línea con los objetivos."
  },
  {
    question: "¿Qué área gestiona la relación y comunicación con los interesados del proyecto?",
    options: [
      "Gestión de interesados",
      "Gestión de integración",
      "Gestión de comunicaciones",
      "Gestión de riesgos"
    ],
    answer: 0,
    feedback: "Esta área se enfoca en identificar, analizar y gestionar las expectativas e influencia de los interesados."
  },
  {
    question: "¿Cuál es el objetivo principal de la gestión del alcance en un proyecto?",
    options: [
      "Definir los recursos disponibles",
      "Asegurar que el proyecto incluya todo el trabajo requerido y solo ese trabajo",
      "Controlar los costos del proyecto",
      "Evaluar los riesgos potenciales"
    ],
    answer: 1,
    feedback: "La gestión del alcance busca garantizar que se incluya todo el trabajo necesario para completar el proyecto con éxito, sin tareas adicionales."
  },
  {
    question: "¿Qué documento define cómo se ejecutará, monitoreará y controlará el proyecto?",
    options: [
      "Acta de constitución",
      "Plan para la dirección del proyecto",
      "Registro de interesados",
      "Declaración de alcance"
    ],
    answer: 1,
    feedback: "El plan para la dirección del proyecto es la guía principal que describe cómo se ejecutará y controlará el proyecto."
  },
  {
    question: "¿Cuál de los siguientes procesos pertenece al grupo de procesos de planificación?",
    options: [
      "Dirigir y gestionar el trabajo del proyecto",
      "Definir las actividades",
      "Controlar los riesgos",
      "Cerrar el proyecto"
    ],
    answer: 1,
    feedback: "‘Definir las actividades’ forma parte de la planificación, donde se descomponen los entregables en tareas específicas."
  },
  {
    question: "¿Qué herramienta se usa comúnmente para identificar riesgos en un proyecto?",
    options: [
      "Diagrama de Gantt",
      "Análisis DAFO",
      "Lluvia de ideas",
      "Matriz RACI"
    ],
    answer: 2,
    feedback: "La lluvia de ideas permite identificar de manera colaborativa posibles riesgos del proyecto con la participación del equipo."
  },
  {
    question: "¿Qué representa la línea base del cronograma?",
    options: [
      "Las fechas planificadas y los costos estimados",
      "El registro de cambios",
      "Las restricciones del proyecto",
      "El plan de comunicación"
    ],
    answer: 0,
    feedback: "La línea base del cronograma muestra el plan aprobado con fechas y duración esperadas para comparar el progreso real."
  },
  {
    question: "¿Qué proceso implica aceptar formalmente los entregables del proyecto?",
    options: [
      "Controlar la calidad",
      "Validar el alcance",
      "Cerrar el proyecto",
      "Gestionar la configuración"
    ],
    answer: 1,
    feedback: "‘Validar el alcance’ implica la aceptación formal de los entregables por parte del cliente o patrocinador."
  },
  {
    question: "¿Cuál es una herramienta usada en la gestión de costos del proyecto?",
    options: [
      "Análisis del valor ganado",
      "Matriz de interesados",
      "Registro de lecciones aprendidas",
      "Gráfica de Pareto"
    ],
    answer: 0,
    feedback: "El análisis del valor ganado mide el desempeño del costo y el cronograma comparando el progreso real con el planificado."
  },
  {
    question: "¿Cuál de los siguientes documentos se utiliza para identificar y analizar a las partes interesadas del proyecto?",
    options: [
      "Registro de interesados",
      "Plan de gestión de comunicaciones",
      "Acta de constitución del proyecto",
      "Cronograma del proyecto"
    ],
    answer: 0,
    feedback: "El registro de interesados documenta la información relevante de las partes interesadas, sus intereses, poder e influencia en el proyecto."
  },
  {
    question: "¿Qué conocimiento es esencial para manejar cambios en un proyecto?",
    options: [
      "Gestión de recursos",
      "Gestión de la integración",
      "Gestión de adquisiciones",
      "Gestión de la calidad"
    ],
    answer: 1,
    feedback: "La gestión de la integración coordina todos los elementos del proyecto y es clave para manejar cambios de manera controlada."
  },
  {
    question: "¿Qué proceso pertenece al grupo de procesos de cierre según PMBOK?",
    options: [
      "Monitorear los riesgos",
      "Controlar la calidad",
      "Cerrar el proyecto o fase",
      "Desarrollar el acta de constitución"
    ],
    answer: 2,
    feedback: "Cerrar el proyecto o fase incluye obtener la aceptación final y documentar las lecciones aprendidas."
  }
];

const scrum = [
  {
    question: "¿Qué es Scrum?",
    options: [
      "Una metodología tradicional",
      "Un marco de trabajo ágil",
      "Un software de gestión",
      "Un tipo de diagrama"
    ],
    answer: 1,
    feedback: "Scrum es un marco de trabajo ágil usado para desarrollar proyectos de manera iterativa e incremental.",
  },
  {
    question: "¿Qué rol se encarga de eliminar los impedimentos del equipo Scrum?",
    options: [
      "Product Owner",
      "Scrum Master",
      "Project Manager",
      "Desarrollador"
    ],
    answer: 1,
    feedback: "El Scrum Master apoya al equipo eliminando obstáculos que impiden el progreso del sprint.",
  },
  {
    question: "¿Cuál es la duración recomendada de un sprint?",
    options: [
      "1 día",
      "1 a 4 semanas",
      "6 semanas",
      "3 meses"
    ],
    answer: 1,
    feedback: "Los sprints son ciclos cortos de trabajo que duran entre una y cuatro semanas, según la complejidad del proyecto.",
  },
  {
    question: "¿Qué documento contiene la lista priorizada de requerimientos del producto?",
    options: [
      "Product Backlog",
      "Sprint Backlog",
      "Incremento",
      "Roadmap"
    ],
    answer: 0,
    feedback: "El Product Backlog contiene todas las funcionalidades requeridas, priorizadas por el Product Owner.",
  },
  {
    question: "¿Qué evento marca el inicio de un sprint?",
    options: [
      "Sprint Review",
      "Sprint Planning",
      "Daily Scrum",
      "Retrospective"
    ],
    answer: 1,
    feedback: "El Sprint Planning define qué se va a realizar en el sprint y cómo se hará.",
  },
  {
    question: "¿Cuánto dura normalmente el Daily Scrum?",
    options: [
      "15 minutos",
      "1 hora",
      "30 minutos",
      "No tiene límite"
    ],
    answer: 0,
    feedback: "La reunión diaria dura 15 minutos y sirve para sincronizar el trabajo del equipo y planear el día.",
  },
  {
    question: "¿Quién es responsable del valor del producto en Scrum?",
    options: [
      "Scrum Master",
      "Product Owner",
      "Equipo de desarrollo",
      "Stakeholders"
    ],
    answer: 1,
    feedback: "El Product Owner gestiona el Product Backlog y asegura que el producto entregue el mayor valor posible.",
  },
  {
    question: "¿Qué artefacto muestra el progreso durante el sprint?",
    options: [
      "Burndown Chart",
      "Product Backlog",
      "Roadmap",
      "Retrospective"
    ],
    answer: 0,
    feedback: "El Burndown Chart muestra gráficamente la cantidad de trabajo restante a lo largo del sprint.",
  },
  {
    question: "¿Qué evento se realiza al final del sprint para inspeccionar el incremento?",
    options: [
      "Sprint Retrospective",
      "Sprint Review",
      "Daily Scrum",
      "Planning"
    ],
    answer: 1,
    feedback: "En la Sprint Review se revisa el incremento completado y se recibe retroalimentación de los interesados.",
  },
  {
    question: "¿Cuál es el propósito de la Sprint Retrospective?",
    options: [
      "Revisar el producto",
      "Planear el siguiente sprint",
      "Mejorar el proceso del equipo",
      "Reportar errores"
    ],
    answer: 2,
    feedback: "En la retrospectiva el equipo analiza qué funcionó bien y qué puede mejorar para el próximo sprint.",
  }
]

// Areas de PMBOK

const pmbokarea1 = [
  {
    question: "¿Cuántos grupos de procesos existen según el PMBOK 6ª edición?",
    options: ["3", "4", "5", "6"],
    answer: 2,
    feedback: "Los grupos son Inicio, Planificación, Ejecución, Monitoreo y Control, y Cierre."
  },
  {
    question: "¿En qué grupo de procesos se desarrolla el acta de constitución del proyecto?",
    options: ["Inicio", "Planificación", "Ejecución", "Cierre"],
    answer: 0,
    feedback: "El acta de constitución autoriza formalmente el proyecto y pertenece al grupo de Inicio."
  },
  {
    question: "El grupo de procesos que se enfoca en definir el alcance y planificar el trabajo del proyecto es:",
    options: ["Ejecución", "Planificación", "Monitoreo y Control", "Cierre"],
    answer: 1,
    feedback: "La planificación establece los planes de gestión de todas las áreas del proyecto."
  },
  {
    question: "¿Qué documento se actualiza más frecuentemente durante el ciclo de vida del proyecto?",
    options: ["Acta de constitución", "Línea base del alcance", "Plan para la dirección del proyecto", "Acta de cierre"],
    answer: 2,
    feedback: "Este plan es dinámico y se ajusta conforme se obtiene nueva información."
  },
  {
    question: "¿Qué grupo de procesos implica coordinar personas y recursos para ejecutar el plan del proyecto?",
    options: ["Ejecución", "Monitoreo y control", "Inicio", "Cierre"],
    answer: 0,
    feedback: "La ejecución convierte los planes en acciones para cumplir los objetivos."
  },
  {
    question: "¿Qué se realiza durante el grupo de Cierre?",
    options: ["Identificar interesados", "Controlar cambios", "Entregar resultados finales", "Definir el alcance"],
    answer: 2,
    feedback: "En el cierre se aceptan formalmente los entregables y se finaliza el proyecto."
  },
  {
    question: "¿Cuál es el propósito del grupo de Monitoreo y Control?",
    options: ["Supervisar y medir el desempeño del proyecto", "Contratar al equipo de trabajo", "Elaborar el acta de constitución", "Estimar costos"],
    answer: 0,
    feedback: "Este grupo garantiza que el proyecto se mantenga dentro de los parámetros planificados."
  },
  {
    question: "¿Cuál de los siguientes procesos pertenece al grupo de Ejecución?",
    options: ["Desarrollar el acta de constitución", "Dirigir y gestionar el trabajo del proyecto", "Controlar el cronograma", "Cerrar el proyecto"],
    answer: 1,
    feedback: "Este proceso implica liderar y realizar el trabajo definido en los planes."
  },
  {
    question: "En el PMBOK, los procesos están interrelacionados mediante:",
    options: ["Ciclo de vida de producto", "Entradas, herramientas y salidas", "Grupos funcionales", "Fases del contrato"],
    answer: 1,
    feedback: "Cada proceso utiliza entradas, aplica herramientas/técnicas y produce salidas."
  },
  {
    question: "¿Qué se hace al inicio de todo proyecto según el PMBOK?",
    options: ["Crear la EDT", "Elaborar el cronograma", "Identificar interesados", "Controlar el alcance"],
    answer: 2,
    feedback: "Identificar interesados es clave para definir expectativas y roles desde el inicio."
  }
];

const pmbokarea2 = [
  {
    question: "¿Cuántas áreas de conocimiento existen en el PMBOK 6ª edición?",
    options: ["9", "10", "11", "12"],
    answer: 1,
    feedback: "Las áreas son integración, alcance, tiempo, costo, calidad, recursos, comunicaciones, riesgos, adquisiciones e interesados."
  },
  {
    question: "El proceso 'Crear la EDT' pertenece al área de:",
    options: ["Gestión del alcance", "Gestión del cronograma", "Gestión de los costos", "Gestión de la integración"],
    answer: 0,
    feedback: "La EDT estructura jerárquicamente el trabajo del proyecto dentro del alcance."
  },
  {
    question: "En la gestión del cronograma, ¿qué técnica se usa para determinar la duración total del proyecto?",
    options: ["Valor ganado", "Ruta crítica (CPM)", "Análisis de Pareto", "AMEF"],
    answer: 1,
    feedback: "La ruta crítica muestra la secuencia más larga de actividades que determinan la duración mínima del proyecto."
  },
  {
    question: "¿Cuál es el objetivo principal de la gestión de la calidad?",
    options: ["Satisfacer al cliente", "Aumentar el costo del proyecto", "Reducir la duración", "Evitar auditorías"],
    answer: 0,
    feedback: "La calidad se enfoca en cumplir los requisitos y aumentar la satisfacción del cliente."
  },
  {
    question: "En gestión de recursos, ¿qué herramienta ayuda a definir roles y responsabilidades?",
    options: ["Matriz RACI", "EDT", "Diagrama de red", "Control de cambios"],
    answer: 0,
    feedback: "La matriz RACI muestra quién es Responsable, Aprobador, Consultado e Informado."
  },
  {
    question: "En la gestión de riesgos, ¿qué proceso se realiza primero?",
    options: ["Identificar riesgos", "Realizar análisis cualitativo", "Planificar la gestión de riesgos", "Monitorear riesgos"],
    answer: 2,
    feedback: "Primero se define cómo se gestionarán los riesgos antes de identificarlos."
  },
  {
    question: "El proceso 'Gestionar las comunicaciones' pertenece a:",
    options: ["Alcance", "Comunicaciones", "Interesados", "Recursos"],
    answer: 1,
    feedback: "Asegura que la información fluya de manera adecuada entre los miembros del proyecto."
  },
  {
    question: "En la gestión de adquisiciones, ¿qué documento se usa para solicitar ofertas de proveedores?",
    options: ["Acta de constitución", "Solicitud de propuesta (RFP)", "Plan de gestión", "Matriz de interesados"],
    answer: 1,
    feedback: "El RFP detalla los requerimientos que los proveedores deben cumplir en su oferta."
  },
  {
    question: "La gestión de interesados busca principalmente:",
    options: ["Reducir los costos", "Alinear expectativas y participación", "Aumentar la duración del proyecto", "Evitar reuniones"],
    answer: 1,
    feedback: "Se enfoca en mantener a los interesados comprometidos y satisfechos."
  },
  {
    question: "En integración, ¿qué proceso une todas las áreas del proyecto?",
    options: ["Desarrollar el plan para la dirección del proyecto", "Controlar el cronograma", "Planificar el alcance", "Monitorear riesgos"],
    answer: 0,
    feedback: "Este proceso coordina los planes de todas las áreas para unificarlos en un documento integral."
  }
];

const pmbokarea3 = [
  {
    question: "¿Quién es responsable final del éxito o fracaso del proyecto?",
    options: ["El patrocinador", "El director del proyecto", "El cliente", "El equipo"],
    answer: 1,
    feedback: "El director del proyecto lidera y coordina todas las áreas y recursos."
  },
  {
    question: "¿Qué herramienta se utiliza para identificar y analizar a los interesados?",
    options: ["Matriz de poder/interés", "Ruta crítica", "Valor ganado", "AMEF"],
    answer: 0,
    feedback: "Permite visualizar la influencia y el interés de cada interesado."
  },
  {
    question: "El documento que autoriza formalmente un proyecto es:",
    options: ["Plan de gestión", "Acta de constitución", "EDT", "Registro de interesados"],
    answer: 1,
    feedback: "Es el documento inicial que otorga autoridad al director del proyecto."
  },
  {
    question: "¿Qué herramienta se usa para medir el desempeño del proyecto en costo y tiempo?",
    options: ["Análisis de valor ganado", "Matriz RACI", "Diagrama de Gantt", "Brainstorming"],
    answer: 0,
    feedback: "Combina costo, tiempo y alcance para evaluar el rendimiento real del proyecto."
  },
  {
    question: "¿Cuál es el propósito del registro de riesgos?",
    options: ["Almacenar lecciones aprendidas", "Registrar todos los riesgos identificados", "Calcular el costo total", "Gestionar adquisiciones"],
    answer: 1,
    feedback: "Contiene información sobre riesgos, sus causas, respuestas y responsables."
  },
  {
    question: "¿Qué herramienta se usa para comunicar el avance del proyecto?",
    options: ["Informes de desempeño", "EDT", "Plan de riesgos", "Diagrama de Ishikawa"],
    answer: 0,
    feedback: "Muestran el progreso del proyecto frente a las metas establecidas."
  },
  {
    question: "¿Qué documento resume las lecciones aprendidas al final del proyecto?",
    options: ["Registro de cambios", "Informe final del proyecto", "Acta de constitución", "Plan de calidad"],
    answer: 1,
    feedback: "Resume logros, dificultades y aprendizajes obtenidos durante el proyecto."
  },
  {
    question: "¿Qué técnica se usa para analizar causas de problemas de calidad?",
    options: ["Diagrama de Ishikawa", "Ruta crítica", "Matriz de riesgos", "Benchmarking"],
    answer: 0,
    feedback: "También conocido como diagrama causa-efecto o espina de pescado."
  },
  {
    question: "¿Qué herramienta ayuda a visualizar dependencias y secuencia de actividades?",
    options: ["Diagrama de red", "Matriz RACI", "Registro de interesados", "Cronograma"],
    answer: 0,
    feedback: "Muestra cómo las tareas se conectan y en qué orden deben realizarse."
  },
  {
    question: "¿Qué documento contiene los objetivos, entregables y restricciones del proyecto?",
    options: ["Plan para la dirección del proyecto", "Registro de riesgos", "Acta de constitución", "EDT"],
    answer: 2,
    feedback: "Define los objetivos generales, alcance y criterios de éxito del proyecto."
  }
];

const pmbokarea4 = [
  {
    question: "¿Cuál es el objetivo principal de la gestión de riesgos?",
    options: [
      "Eliminar todos los riesgos",
      "Minimizar los efectos negativos y aprovechar oportunidades",
      "Aumentar la incertidumbre",
      "Evitar planificar riesgos"
    ],
    answer: 1,
    feedback: "La gestión de riesgos busca reducir amenazas y aprovechar oportunidades."
  },
  {
    question: "¿Qué proceso implica identificar los riesgos que pueden afectar al proyecto?",
    options: [
      "Planificar la gestión de riesgos",
      "Identificar los riesgos",
      "Controlar los riesgos",
      "Analizar cualitativamente los riesgos"
    ],
    answer: 1,
    feedback: "Este proceso documenta los riesgos potenciales del proyecto."
  },
  {
    question: "¿Qué documento se actualiza con los resultados del análisis de riesgos?",
    options: [
      "Plan de gestión del alcance",
      "Registro de riesgos",
      "Acta de constitución",
      "Estructura de desglose del trabajo"
    ],
    answer: 1,
    feedback: "El registro de riesgos contiene todos los riesgos identificados y sus respuestas."
  },
  {
    question: "¿Qué técnica se usa en el análisis cualitativo de riesgos?",
    options: [
      "Análisis de Monte Carlo",
      "Evaluación de probabilidad e impacto",
      "Valor presente neto",
      "Árbol de decisiones"
    ],
    answer: 1,
    feedback: "Evalúa la probabilidad de ocurrencia y el impacto en los objetivos del proyecto."
  },
  {
    question: "¿Qué salida produce el proceso 'Planificar la respuesta a los riesgos'?",
    options: [
      "Plan de gestión del proyecto",
      "Actualización del cronograma",
      "Actualización del registro de riesgos",
      "Acta de constitución"
    ],
    answer: 2,
    feedback: "El registro se actualiza con las respuestas planificadas para cada riesgo."
  },
  {
    question: "Un riesgo positivo se conoce como:",
    options: ["Amenaza", "Oportunidad", "Evento incierto", "Causa"],
    answer: 1,
    feedback: "Las oportunidades son eventos con impacto positivo."
  },
  {
    question: "¿Qué proceso implica implementar respuestas a los riesgos planificados?",
    options: [
      "Identificar riesgos",
      "Controlar los riesgos",
      "Implementar respuesta a los riesgos",
      "Monitorear los riesgos"
    ],
    answer: 2,
    feedback: "Este proceso garantiza la ejecución de las acciones definidas."
  },
  {
    question: "¿Qué herramienta se utiliza para priorizar riesgos?",
    options: [
      "Matriz de probabilidad e impacto",
      "Diagrama de Gantt",
      "Análisis de valor ganado",
      "Histograma"
    ],
    answer: 0,
    feedback: "Permite clasificar riesgos según su severidad."
  },
  {
    question: "¿Qué salida clave se obtiene del monitoreo de riesgos?",
    options: [
      "Plan de respuesta",
      "Solicitudes de cambio",
      "Plan de calidad",
      "Acta de constitución"
    ],
    answer: 1,
    feedback: "Pueden generarse solicitudes de cambio para ajustar la estrategia."
  },
  {
    question: "¿Qué documento detalla las responsabilidades y umbrales de riesgo?",
    options: [
      "Registro de interesados",
      "Plan de gestión de riesgos",
      "Plan de recursos",
      "Plan de comunicaciones"
    ],
    answer: 1,
    feedback: "Define cómo se planificará, monitoreará y controlará el riesgo."
  }
];

const pmbokarea5 = [
  {
    question: "¿Cuál es el objetivo de la gestión de la calidad?",
    options: [
      "Garantizar que el proyecto cumpla con los requisitos",
      "Reducir costos",
      "Aumentar la productividad",
      "Controlar el tiempo"
    ],
    answer: 0,
    feedback: "La calidad asegura que los entregables satisfagan las expectativas."
  },
  {
    question: "¿Qué proceso implica establecer los estándares de calidad?",
    options: [
      "Aseguramiento de la calidad",
      "Planificar la gestión de la calidad",
      "Controlar la calidad",
      "Verificar el alcance"
    ],
    answer: 1,
    feedback: "Aquí se definen los criterios, métricas y estándares."
  },
  {
    question: "¿Qué herramienta se usa para analizar causas de defectos?",
    options: [
      "Diagrama de Pareto",
      "Diagrama de causa-efecto",
      "Árbol de decisiones",
      "Diagrama de flujo"
    ],
    answer: 1,
    feedback: "Permite identificar las causas raíz de un problema."
  },
  {
    question: "¿Qué significa 'control de calidad'?",
    options: [
      "Medir resultados y compararlos con los estándares",
      "Verificar el presupuesto",
      "Crear el cronograma",
      "Aprobar el plan de comunicación"
    ],
    answer: 0,
    feedback: "Es el proceso que verifica si los resultados cumplen los requisitos definidos."
  },
  {
    question: "¿Qué herramienta de calidad ayuda a priorizar problemas?",
    options: [
      "Diagrama de Pareto",
      "Histograma",
      "Árbol jerárquico",
      "Lista de verificación"
    ],
    answer: 0,
    feedback: "Muestra los problemas más frecuentes o importantes."
  },
  {
    question: "¿Qué proceso implica mejorar continuamente la calidad?",
    options: [
      "Control de calidad",
      "Gestión del conocimiento",
      "Aseguramiento de la calidad",
      "Control de cambios"
    ],
    answer: 2,
    feedback: "Busca aumentar la eficacia y eficiencia de los procesos."
  },
  {
    question: "¿Qué salida produce el control de calidad?",
    options: [
      "Entregables validados",
      "Plan de gestión",
      "Registro de interesados",
      "Acta de constitución"
    ],
    answer: 0,
    feedback: "Los entregables validados son verificados antes de la aceptación formal."
  },
  {
    question: "¿Qué técnica se utiliza para evaluar el cumplimiento de procesos?",
    options: [
      "Auditoría de calidad",
      "Análisis de valor ganado",
      "Revisión de pares",
      "Control estadístico"
    ],
    answer: 0,
    feedback: "Permite identificar áreas de mejora en los procesos de calidad."
  },
  {
    question: "¿Qué principio de calidad se enfoca en la mejora continua?",
    options: [
      "Enfoque al cliente",
      "Mejora continua",
      "Liderazgo",
      "Toma de decisiones basada en evidencia"
    ],
    answer: 1,
    feedback: "Busca perfeccionar procesos y resultados constantemente."
  },
  {
    question: "¿Qué herramienta representa gráficamente los procesos?",
    options: [
      "Diagrama de flujo",
      "Diagrama de Gantt",
      "Matriz de probabilidad",
      "Árbol de objetivos"
    ],
    answer: 0,
    feedback: "Facilita la comprensión del flujo de actividades y controles."
  }
];

const pmbokarea6 = [
  {
    question: "¿Qué proceso implica identificar a las personas o grupos afectados por el proyecto?",
    options: [
      "Identificar interesados",
      "Planificar la gestión de interesados",
      "Monitorear la participación",
      "Dirigir el trabajo"
    ],
    answer: 0,
    feedback: "Es el primer paso para gestionar adecuadamente las expectativas."
  },
  {
    question: "¿Qué documento incluye la lista de interesados y sus expectativas?",
    options: [
      "Registro de interesados",
      "Registro de riesgos",
      "Plan de comunicaciones",
      "Acta de constitución"
    ],
    answer: 0,
    feedback: "Contiene los nombres, roles, nivel de influencia y estrategias de participación."
  },
  {
    question: "¿Qué proceso se encarga de desarrollar estrategias para involucrar a los interesados?",
    options: [
      "Identificar interesados",
      "Planificar la gestión de interesados",
      "Controlar interesados",
      "Dirigir el proyecto"
    ],
    answer: 1,
    feedback: "Define tácticas para mantener o aumentar la participación."
  },
  {
    question: "¿Qué proceso asegura la implementación de estrategias de participación?",
    options: [
      "Monitorear interesados",
      "Controlar interesados",
      "Gestionar la participación",
      "Comunicar desempeño"
    ],
    answer: 2,
    feedback: "Garantiza que las estrategias se apliquen correctamente durante la ejecución."
  },
  {
    question: "¿Qué técnica se usa para analizar la influencia de los interesados?",
    options: [
      "Matriz poder/interés",
      "Diagrama de flujo",
      "Árbol de decisiones",
      "Gráfico de control"
    ],
    answer: 0,
    feedback: "Permite clasificar a los interesados según su poder e interés en el proyecto."
  },
  {
    question: "¿Qué salida produce el proceso de monitoreo de interesados?",
    options: [
      "Actualizaciones al plan de gestión del proyecto",
      "Acta de constitución",
      "Plan de calidad",
      "Línea base de cronograma"
    ],
    answer: 0,
    feedback: "Los cambios en la participación pueden requerir ajustes al plan general."
  },
  {
    question: "¿Qué documento se actualiza cuando cambian los interesados?",
    options: [
      "Registro de interesados",
      "Registro de riesgos",
      "Plan de comunicaciones",
      "Cronograma"
    ],
    answer: 0,
    feedback: "Se debe mantener actualizado durante todo el ciclo de vida del proyecto."
  },
  {
    question: "¿Qué factor puede afectar la participación de los interesados?",
    options: [
      "Comunicación ineficaz",
      "Línea base de costos",
      "Plan de recursos",
      "Gestión del tiempo"
    ],
    answer: 0,
    feedback: "Una mala comunicación puede disminuir el compromiso o generar conflictos."
  },
  {
    question: "¿Qué herramienta se usa para evaluar el compromiso de los interesados?",
    options: [
      "Matriz de evaluación del compromiso",
      "Diagrama de red",
      "Árbol de decisiones",
      "Diagrama de flujo"
    ],
    answer: 0,
    feedback: "Mide el nivel actual y deseado de compromiso."
  },
  {
    question: "¿Por qué es importante la gestión de interesados?",
    options: [
      "Porque reduce la necesidad de control",
      "Porque evita el análisis de riesgos",
      "Porque mejora la aceptación del proyecto",
      "Porque elimina cambios"
    ],
    answer: 2,
    feedback: "Un manejo adecuado incrementa el apoyo y reduce la resistencia al proyecto."
  }
];

// Áreas de SCRUM

const scrumarea1 = [
  {
    question: "¿Cuál es el rol responsable de maximizar el valor del producto resultante del trabajo del Equipo de Desarrollo?",
    options: ["Scrum Master", "Stakeholder", "Product Owner", "Team Lead"],
    answer: 2,
    feedback: "El Product Owner gestiona el Product Backlog para maximizar el valor del producto."
  },
  {
    question: "¿Quién tiene la autoridad para gestionar y ordenar el Product Backlog?",
    options: ["Scrum Master", "Equipo de Desarrollo", "Stakeholders", "Product Owner"],
    answer: 3,
    feedback: "La autoridad final del contenido y orden del Product Backlog recae en el Product Owner."
  },
  {
    question: "¿Quién fomenta el entorno productivo y autoorganizado del equipo?",
    options: ["Product Owner", "Scrum Master", "Manager", "Cliente"],
    answer: 1,
    feedback: "El Scrum Master ayuda al equipo a comprender las prácticas y valores de Scrum."
  },
  {
    question: "¿Quién es responsable de la ejecución, calidad y creación del incremento 'Done'?",
    options: ["Product Owner", "Scrum Master", "Equipo de Desarrollo", "Líder de Proyecto"],
    answer: 2,
    feedback: "El equipo convierte los elementos del Product Backlog en incrementos funcionales."
  }
];

const scrumarea2 = [
  {
    question: "¿Cuál es el evento utilizado para inspeccionar el Incremento y adaptar el Product Backlog si es necesario?",
    options: ["Daily Scrum", "Retrospectiva del Sprint", "Planificación del Sprint", "Revisión del Sprint"],
    answer: 3,
    feedback: "Permite inspeccionar el Incremento y adaptar el Product Backlog según el feedback de stakeholders y el equipo."
  },
  {
    question: "¿Cuál es el propósito principal del evento Daily Scrum (Reunión Diaria)?",
    options: [
      "Asignar tareas a los miembros del equipo.",
      "Inspeccionar el progreso hacia el Objetivo del Sprint.",
      "Reprocesar el Sprint Backlog.",
      "Planificar el próximo Sprint."
    ],
    answer: 1,
    feedback: "Reunión de 15 minutos para que el Equipo de Desarrollo inspeccione el progreso y planifique las próximas 24 horas."
  },
  {
    question: "¿Cuál es la duración máxima (Time-box) para un Sprint de un mes?",
    options: ["Dos semanas", "Tres semanas", "Un mes o menos", "40 horas de trabajo"],
    answer: 2,
    feedback: "Los Sprints tienen una duración fija de un mes o menos para facilitar la planificación y limitar el riesgo."
  },
  {
    question: "¿Cuál es el evento que asegura que el Equipo Scrum inspeccionen el proceso de trabajo y se planifiquen mejoras para el próximo Sprint?",
    options: ["Daily Scrum", "Revisión del Sprint", "Planificación del Sprint", "Retrospectiva del Sprint"],
    answer: 3,
    feedback: "Se inspecciona el último Sprint respecto a personas, procesos y herramientas para crear un plan de mejoras."
  },
  {
    question: "¿Quién asiste al Daily Scrum y quién es el único que puede dirigirlo?",
    options: [
      "Todo el Equipo Scrum; lo dirige el Scrum Master.",
      "Stakeholders y Equipo de Desarrollo; lo dirige el Product Owner.",
      "Solo el Equipo de Desarrollo; lo dirige el Equipo de Desarrollo.",
      "Solo el Scrum Master y el Product Owner."
    ],
    answer: 2,
    feedback: "El Daily Scrum es para el Equipo de Desarrollo. Puede asistir Scrum Master o Product Owner, pero no lo dirigen."
  },
  {
    question: "¿Cuál es el propósito de la Planificación del Sprint (Sprint Planning)?",
    options: [
      "Priorizar el Product Backlog para el Product Owner.",
      "Definir el Objetivo del Sprint y el trabajo a realizar.",
      "Demostrar el Incremento a los stakeholders.",
      "Resolver impedimentos del Sprint anterior."
    ],
    answer: 1,
    feedback: "En este evento se determina qué se hará (Sprint Goal y elementos seleccionados) y cómo se realizará."
  },
  {
    question: "¿Es obligatorio cancelar un Sprint si el objetivo de este se vuelve obsoleto?",
    options: [
      "Sí, el Scrum Master debe hacerlo.",
      "Solo si lo deciden todos los stakeholders.",
      "No es obligatorio, pero es la única persona que puede hacerlo: el Product Owner.",
      "El Sprint nunca se puede cancelar."
    ],
    answer: 2,
    feedback: "Solo el Product Owner tiene la autoridad para cancelar un Sprint si el Objetivo del Sprint se vuelve obsoleto."
  },
  {
    question: "¿Qué evento proporciona una oportunidad formal para que el Product Owner reordene el Product Backlog basándose en la retroalimentación?",
    options: [
      "Daily Scrum",
      "Revisión del Sprint",
      "Retrospectiva del Sprint",
      "Planificación del Sprint"
    ],
    answer: 1,
    feedback: "Durante la Revisión del Sprint se obtiene feedback que puede llevar a reordenar el Product Backlog."
  },
  {
    question: "¿Cuál es la duración máxima (Time-box) para el Daily Scrum, independientemente de la duración del Sprint?",
    options: ["30 minutos", "20 minutos", "15 minutos", "10 minutos"],
    answer: 2,
    feedback: "El Daily Scrum tiene un límite de tiempo de 15 minutos cada día del Sprint."
  },
  {
    question: "¿Cuál es el evento principal que encapsula todos los demás eventos de Scrum?",
    options: ["Daily Scrum", "El Sprint", "La Planificación", "El Desarrollo"],
    answer: 1,
    feedback: "El Sprint es el contenedor que incluye Planificación, Daily Scrum, trabajo de desarrollo, Revisión y Retrospectiva."
  }
];

const scrumarea3 = [
  {
    question: "¿Cuál es el artefacto que representa una lista ordenada de todo lo que se conoce que es necesario en el producto?",
    options: ["Sprint Backlog", "Definición de 'Done'", "Product Backlog", "Gráfico Burn-down"],
    answer: 2,
    feedback: "El Product Backlog es la fuente única de requisitos para cualquier cambio en el producto."
  },
  {
    question: "¿Cuál es el objetivo de un Sprint, definido durante la Planificación del Sprint?",
    options: ["Product Backlog", "Objetivo del Sprint (Sprint Goal)", "Sprint Backlog", "Incremento"],
    answer: 1,
    feedback: "Es el compromiso del Sprint Backlog que provee enfoque y dirección al equipo durante el Sprint."
  },
  {
    question: "¿Qué artefacto representa la suma de todos los ítems del Product Backlog completados durante el Sprint y Sprints anteriores?",
    options: ["Sprint Backlog", "Incremento", "Definición de 'Done'", "Product Backlog"],
    answer: 1,
    feedback: "El Incremento es la suma de todos los elementos completados en el Sprint actual más los incrementos anteriores."
  },
  {
    question: "¿Cuál es el artefacto que se utiliza para rastrear el progreso del trabajo que el Equipo de Desarrollo planea hacer durante el Sprint?",
    options: ["Product Backlog", "Sprint Backlog", "Gráfico Burn-up", "Definición de 'Done'"],
    answer: 1,
    feedback: "El Sprint Backlog contiene los elementos seleccionados para el Sprint y el plan para entregarlos."
  },
  {
    question: "¿A qué se refiere el término 'Done' (Terminado) en Scrum?",
    options: [
      "Tareas de codificación completadas.",
      "Funcionalidad aceptada por el Product Owner.",
      "Una descripción formal del estado del Incremento cuando cumple la calidad.",
      "La finalización de la Revisión del Sprint."
    ],
    answer: 2,
    feedback: "La Definición de 'Done' describe el estado requerido para considerar un Incremento de calidad aceptable."
  },
  {
    question: "¿Quién es el responsable de asegurarse de que el Product Backlog sea transparente, visible y entendido?",
    options: ["Product Owner", "Scrum Master", "Equipo de Desarrollo", "Todos los anteriores"],
    answer: 0,
    feedback: "El Product Owner gestiona el Product Backlog y debe asegurar su transparencia y visibilidad."
  },
  {
    question: "¿El Sprint Backlog puede cambiar una vez que el Sprint ha comenzado?",
    options: [
      "No, el Sprint Backlog es fijo.",
      "Solo si el Product Owner lo autoriza.",
      "Sí, solo el Equipo de Desarrollo puede modificarlo.",
      "Sí, si el Scrum Master lo decide."
    ],
    answer: 2,
    feedback: "El Sprint Backlog es propiedad del Equipo de Desarrollo y puede ajustarse a medida que aprenden más durante el Sprint."
  },
  {
    question: "¿Cuál es el nombre del compromiso (Commitment) asociado al Product Backlog?",
    options: [
      "Objetivo del Sprint",
      "Meta del Producto (Product Goal)",
      "Incremento",
      "Definición de 'Done'"
    ],
    answer: 1,
    feedback: "La Product Goal es el compromiso del Product Backlog y describe un estado futuro deseado del producto."
  },
  {
    question: "¿Cuál es el artefacto principal que se presenta e inspecciona durante la Revisión del Sprint (Sprint Review)?",
    options: ["Product Backlog", "Sprint Backlog", "El Incremento (Increment)", "El Objetivo del Sprint"],
    answer: 2,
    feedback: "Durante la Revisión del Sprint, el Equipo de Desarrollo presenta el Incremento a los stakeholders para obtener feedback."
  },
  {
    question: "¿El Product Backlog se considera completo cuando se crea el producto?",
    options: [
      "Siempre está completo al inicio.",
      "Nunca, evoluciona continuamente.",
      "Sí, una vez que el Product Owner lo aprueba.",
      "Solo al final del último Sprint."
    ],
    answer: 1,
    feedback: "El Product Backlog es dinámico y cambia conforme el producto, entorno y tecnología evolucionan."
  }
];

const scrumarea4 = [
  {
    question: "¿Cuál de los siguientes valores de Scrum se relaciona con decir la verdad sobre el progreso y los desafíos?",
    options: ["Respeto", "Coraje", "Compromiso", "Enfoque"],
    answer: 1,
    feedback: "El valor de coraje en Scrum implica ser honesto y transparente frente a los problemas, permitiendo que el equipo los enfrente abiertamente.",
  },
  {
    question: "¿Qué valor promueve que los miembros del equipo Scrum trabajen juntos y se apoyen mutuamente?",
    options: ["Respeto", "Enfoque", "Apertura", "Compromiso"],
    answer: 0,
    feedback: "El respeto fomenta la colaboración y la confianza, fundamentales para un equipo Scrum efectivo.",
  },
  {
    question: "¿Cuál de los siguientes valores impulsa al equipo Scrum a centrarse en el trabajo más importante?",
    options: ["Compromiso", "Enfoque", "Apertura", "Coraje"],
    answer: 1,
    feedback: "El enfoque ayuda a priorizar tareas y esfuerzos hacia los objetivos del Sprint, evitando distracciones.",
  },
  {
    question: "¿Qué valor de Scrum se asocia con la disposición de compartir toda la información relevante con el equipo?",
    options: ["Apertura", "Respeto", "Enfoque", "Coraje"],
    answer: 0,
    feedback: "La apertura promueve la transparencia en el trabajo, facilitando la mejora continua y la comunicación honesta.",
  },
  {
    question: "¿Qué valor representa el compromiso del equipo para alcanzar los objetivos establecidos?",
    options: ["Compromiso", "Coraje", "Respeto", "Enfoque"],
    answer: 0,
    feedback: "El compromiso refleja la dedicación de cada miembro a cumplir con las metas del equipo y del proyecto.",
  },
  {
    question: "¿Qué valor ayuda al equipo a mantenerse enfocado en la entrega de valor al cliente?",
    options: ["Apertura", "Enfoque", "Coraje", "Compromiso"],
    answer: 1,
    feedback: "El enfoque garantiza que el equipo trabaje en lo que realmente genera valor, alineando esfuerzos con las prioridades del cliente.",
  },
  {
    question: "¿Cuál de los valores fomenta la disposición para asumir riesgos controlados en pro de la mejora?",
    options: ["Coraje", "Respeto", "Apertura", "Compromiso"],
    answer: 0,
    feedback: "El coraje impulsa la innovación, permite experimentar y aprender de los errores dentro del marco de Scrum.",
  },
  {
    question: "¿Qué valor refuerza la importancia de reconocer las habilidades y opiniones de cada miembro?",
    options: ["Respeto", "Compromiso", "Enfoque", "Apertura"],
    answer: 0,
    feedback: "El respeto fortalece las relaciones interpersonales y genera un ambiente de trabajo colaborativo y productivo.",
  },
  {
    question: "¿Qué valor está directamente relacionado con la transparencia dentro del equipo Scrum?",
    options: ["Apertura", "Coraje", "Enfoque", "Respeto"],
    answer: 0,
    feedback: "La apertura permite que todos los miembros del equipo compartan avances, problemas y aprendizajes sin temor.",
  },
  {
    question: "¿Cuál de los valores de Scrum motiva al equipo a cumplir lo prometido durante el Sprint?",
    options: ["Compromiso", "Respeto", "Coraje", "Apertura"],
    answer: 0,
    feedback: "El compromiso asegura que los miembros tomen responsabilidad de su trabajo y se esfuercen por cumplir los objetivos del Sprint.",
  },
];

const scrumarea5 = [
  {
    question: "¿Cuáles son los tres pilares fundamentales de Scrum?",
    options: [
      "Transparencia, Inspección, Adaptación",
      "Comunicación, Liderazgo, Resultados",
      "Planificación, Ejecución, Revisión",
      "Colaboración, Control, Evaluación"
    ],
    answer: 0,
    feedback: "Estos pilares sostienen todo el marco de Scrum y garantizan la mejora continua del equipo.",
  },
  {
    question: "¿Qué pilar permite que todos comprendan el estado real del trabajo?",
    options: ["Inspección", "Adaptación", "Transparencia", "Colaboración"],
    answer: 2,
    feedback: "La transparencia asegura que la información esté disponible para todos, promoviendo decisiones informadas.",
  },
  {
    question: "¿Qué pilar se aplica cuando el equipo revisa los resultados del Sprint para identificar mejoras?",
    options: ["Inspección", "Adaptación", "Transparencia", "Evaluación"],
    answer: 0,
    feedback: "La inspección permite detectar desviaciones y oportunidades de mejora para optimizar el trabajo futuro.",
  },
  {
    question: "¿Qué pilar implica realizar ajustes al proceso o producto tras identificar áreas de mejora?",
    options: ["Transparencia", "Adaptación", "Comunicación", "Inspección"],
    answer: 1,
    feedback: "La adaptación se basa en los hallazgos de la inspección para optimizar continuamente la entrega de valor.",
  },
  {
    question: "¿Qué pilar depende de que todos los artefactos de Scrum sean visibles y entendidos?",
    options: ["Transparencia", "Adaptación", "Inspección", "Evaluación"],
    answer: 0,
    feedback: "La transparencia crea un entorno donde la información fluye abiertamente, evitando malentendidos o errores.",
  },
];


// Lectura de URL y selección de exámen
// para procesar despues en la lógica

const urlParams = new URLSearchParams(window.location.search)
questions = urlParams.get('examen')

switch (questions) {
        case 'pmbok':
            questions = pmbok
            break; 
        case 'scrum':
            questions = scrum
            break;
        case 'pmbokarea1':
            questions = pmbokarea1
            break;
        case 'pmbokarea2':
            questions = pmbokarea2
            break;
        case 'pmbokarea3':
            questions = pmbokarea3
            break;
        case 'pmbokarea4':
            questions = pmbokarea4
            break;
        case 'pmbokarea5':
            questions = pmbokarea5
            break;
        case 'pmbokarea6':
            questions = pmbokarea6
            break;
        case 'scrumarea1':
            questions = scrumarea1
            break;
        case 'scrumarea2':
            questions = scrumarea2
            break;
        case 'scrumarea3':
            questions = scrumarea3
            break;
        case 'scrumarea4':
            questions = scrumarea4
            break;
        case 'scrumarea5':
            questions = scrumarea5
            break;
        default:
            error.log(`No encontramos el examen "${urlParams.get('examen')}"`);
            questions = 0
            break;
    }

