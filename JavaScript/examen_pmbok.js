const questions = [
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