# PMTrainer
Plataforma de aprendizaje para PMBOK y Scrum por medio de exámenes interactivos y feedback detallado.

# Estilos

La aplicación cuenta con 4 archivos CSS para los estilos:

- **resetcss.css**
    - Este es una modificación del [Reset CSS de Josh Comeau](https://www.joshwcomeau.com/css/custom-css-reset/), el cual reestable los estilos que el navegador ejecuta por defecto, y a su vez normaliza algunos estilos extra, como:
        - Espacio entre los textos
        - Comportamiento mejorado de alunas etiquetas
        - Acciones al momento de salto de linea de parrafos, titulos y subtítulos
        - Sangrías

- **main.css**
    - Este contiene lo siguiente:
      - La gran mayoría de variables de los colores del proyecto
      - Barra navegadora
      - Pie de página
      - Algunas relas para textos junto a los svg

- **styles.css**
  - Contiene los estilos y etiquetas utilizados para todas las páginas que no sean la página de los exámenes

- **exams.css**
  - Estilos relacionados directamente con el exmen a presentar
  - Etiquetas e identificaciones necesarias para personalizar junto con JavaScript


# JavaScript
## Recursos

- **recursosDB.js**

    Archivo encargado de guardar todos los links y titulos del apartado de recursos

- **recursosLogica.js**

    Funcion encargada de mostrar cada boton de los recursos y su respectivo mensaje

## Exámenes   

Por el momento el archivo **examen_pmbok.js**, contiene tanto la lógica de las funciones para el despliege de las preguntas, como de las preguntas de Pmbok.

Para el momento del segundo sprint, estos archivos cambiarán a los siguente:

- **examenesDB.js**
- **examenesLogica.js**

# Acerca de :

**Link de la página:** [https://ajaureguichio.github.io/PMTrainer/](https://ajaureguichio.github.io/PMTrainer/)

**Borrador de UI:** [https://stitch.withgoogle.com/projects/8445131147098657961](https://stitch.withgoogle.com/projects/8445131147098657961)

## Capturas de pantalla de la plataforma:

### Incio
![Inicio](https://github.com/AJaureguiChio/PMTrainer/blob/main/images/image.png)![Inicio](https://github.com/AJaureguiChio/PMTrainer/blob/main/images/image-1.png)![Inicio](https://github.com/AJaureguiChio/PMTrainer/blob/main/images/image-2.png)

### Selector de exámenes

![Selector de exámenes](https://github.com/AJaureguiChio/PMTrainer/blob/main/images/image-3.png)

## Recursos

![Recursos](https://github.com/AJaureguiChio/PMTrainer/blob/main/images/image-4.png)
