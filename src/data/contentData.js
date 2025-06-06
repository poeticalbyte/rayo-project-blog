import React from 'react';

// Importaciones de imágenes y PDFs
import booksImage from '../assets/books.jpeg';
import rayoConceptImage from '../assets/rayoconcept.png';
import ventajasRayoImage from '../assets/ventajasrayo.png';
import esquemaImage from '../assets/esquema.jpg';
import fichaImage from '../assets/ficha.jpg';
import finanImage from '../assets/finan.jpg';
import scrumPdf from '../assets/scrum.pdf';
import i1 from '../assets/i1.png';
import i2 from '../assets/i2.png';
import uml from '../assets/uml.jpg';

const contentData = [
  {
    id: 'bio-rayo',
    title: '🧩 ¿Cómo se formó el proyecto Rayo?',
    image: booksImage, // Ahora es la variable importada
    paragraphs: [
      "En 2024, Juan Ramírez y Daniel Yepez comenzaron sus estudios en Ingeniería de Sistemas en la Universidad de Nariño, sede Ipiales. Desde el inicio, compartieron una gran pasión por la computación y el aprendizaje, lo que los llevó a colaborar en distintos proyectos académicos. En 2025, durante la asignatura de Ingeniería de Software I, la docente Gloria Thomé les asignó la tarea de desarrollar un proyecto de software que resolviera un problema real.",
      "Tras analizar diversas problemáticas en su entorno, identificaron la necesidad de mejorar los procesos de aprendizaje y evaluación en la educación. Convencidos del potencial de la Inteligencia Artificial, decidieron crear un software que optimizara la enseñanza y permitiera una experiencia más personalizada para estudiantes y docentes. Así nació RAYO, una herramienta diseñada para revolucionar la educación mediante IA.",
      "Lo que comenzó como un simple proyecto académico rápidamente evolucionó hacia una iniciativa con gran potencial de impacto. Impulsados por su deseo de innovación y su compromiso con la educación, Juan y Daniel se dedicaron a convertir RAYO en una solución real para mejorar el aprendizaje y las evaluaciones en el ámbito educativo."
    ]
  },
  {
    id: 'rayo-logo-concept',
    title: '✨ Les presentamos el logotipo de RAYO, nuestro proyecto de software.',
    image: rayoConceptImage, // Ahora es la variable importada
    paragraphs: [
      "¿Cuál es el significado detrás de sus colores?",
      "Amarillo claro (#fdf4b4): Representa creatividad, optimismo, claridad y enfoque. Es un color que inspira energía positiva y puede asociarse con la innovación y la facilidad de uso del software.",
      "Azul claro (#5cb7f2): Simboliza confianza, profesionalismo, tranquilidad y tecnología. Es ideal para transmitir seguridad y seriedad, especialmente en un entorno educativo.",
      "Para la creación del logotipo se usó la herramienta Photopea."
    ]
  },
  {
    id: 'rayo-reasons',
    title: '🧐 ¿Con qué fin se lleva a cabo este proyecto de software?',
    image: 'https://images.pexels.com/photos/29875053/pexels-photo-29875053/free-photo-of-dramatic-cumulus-clouds-in-blue-sky.jpeg', // Las URLs externas se mantienen
    paragraphs: [
      "El proyecto RAYO fue diseñado con el propósito de mejorar la eficiencia en el aprendizaje y las evaluaciones académicas. Mediante el uso de Inteligencia Artificial, busca personalizar la experiencia educativa en la asignatura de Programación 3 de la Universidad de Nariño, con la intención de expandir el software a otras materias en el futuro. RAYO ofrece soluciones innovadoras, como evaluaciones personalizadas para los estudiantes, basadas en parámetros definidos por los docentes. Además, incorpora un chatbot que asiste a los estudiantes en la resolución de dudas relacionadas con la clase de Programación 3. Nacido como una iniciativa académica, RAYO tiene el potencial de generar un impacto positivo en el ámbito educativo, promoviendo el desarrollo de nuevas metodologías de enseñanza y optimizando el proceso de aprendizaje."
    ]
  },
  {
    id: 'rayo-lema',
    title: '⚡ "Optimiza tu tiempo, impulsa su futuro."',
    image: 'https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Las URLs externas se mantienen
    paragraphs: [
      "Hemos escogido este como el lema de nuestra empresa proyecto debido a que enfatiza en nuestra misión: optimizar impulsar el futuro de los estudiantes a través de la optimización de procesos educativos."
    ]
  },
  {
    id: 'rayo-pros',
    title: '📈 ¿Qué ventajas tendría este software?"',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Las URLs externas se mantienen
    paragraphs: [
      "[IMAGEN_PARRAFO:../assets/ventajasrayo.png]",
      "El software RAYO presenta varias ventajas: permite una creación y calificación eficiente de evaluaciones, ofrece personalización en los procesos de evaluación, y genera informes detallados para estudiantes y docentes. Además, su diseño facilita la interacción a través del lenguaje natural y proporciona interfaces intuitivas. Esta herramienta es una iniciativa de desarrollo con IA impulsada por la UDENAR."
    ],
    inlineImages: {
      '../assets/ventajasrayo.png': { // La clave sigue siendo la ruta para que `MainContent` la encuentre
        alt: 'Ventajas del proyecto',
        className: 'inline-paragraph-image',
        src: ventajasRayoImage // Añade la referencia a la variable importada
      }
    },
  },
  {
    id: 'rayo-comparison',
    title: '📲 Comparación de RAYO con otros software.',
    image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg', // Las URLs externas se mantienen
    paragraphs: [
      "1️⃣ Generación de exámenes personalizados",
      "RAYO: Genera versiones diferentes de un mismo examen para cada estudiante.",
      "Comparación:",
      "- Google Forms permite crear cuestionarios, pero todos reciben el mismo examen. ",
      "- Quizizz & Kahoot! generan preguntas aleatorias, pero no exámenes únicos por estudiante. ",
      "- ExamView permite generar versiones diferentes, pero es más técnico y limitado en personalización. ",
      "✅ Diferencia clave: RAYO automatiza la generación de múltiples versiones con el mismo nivel de dificultad, evitando copias. ",
      "‎",
      "2️⃣ Revisión automatizada y detección de áreas de mejora",
      "Rayo: Corrige preguntas objetivas y sugiere mejoras en respuestas abiertas. ",
      "Comparación:",
      "- Google Forms & Microsoft Forms corrigen respuestas de opción múltiple, pero no analizan áreas de mejora.",
      "- Grammarly & Turnitin analizan texto, pero no aplican a exámenes educativos.",
      "- Edmodo permite calificaciones, pero sin sugerencias de mejora automatizadas. ",
      "✅ Diferencia clave: RAYO no solo califica, sino que también detecta patrones de error para guiar a los estudiantes. ",
      "‎",
      "3️⃣ Generación de reportes de desempeño",
      "Rayo: Analiza fortalezas y debilidades individuales y grupales.",
      "Comparación:",
      "- Moodle ofrece reportes de desempeño, pero es complejo de configurar. ",
      "- Khan Academy genera reportes de progreso, pero solo en su plataforma. ",
      "- Socrative ofrece análisis básicos, pero sin personalización avanzada. ",
      "✅ Diferencia clave: RAYO genera reportes detallados y accionables de forma automática. ",
    ]
  },
  {
    id: 'rayo-schema',
    title: '⚡ Esquema general del software RAYO.',
    image: 'https://images.pexels.com/photos/5324968/pexels-photo-5324968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Las URLs externas se mantienen
    paragraphs: [
      "Aquí presentamos el esquema general de la aplicación mostrando sus diferentes componentes:",
      "[IMAGEN_PARRAFO:../assets/esquema.jpg]",
    ],
    inlineImages: {
      '../assets/esquema.jpg': { // La clave sigue siendo la ruta
        alt: 'Esquema del proyecto',
        className: 'inline-paragraph-image',
        src: esquemaImage // Añade la referencia a la variable importada
      }
    },
  },
  {
    id: 'rayo-ficha',
    title: '📑 Ficha de caracterización del proyecto.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Las URLs externas se mantienen
    paragraphs: [
      "[IMAGEN_PARRAFO:../assets/ficha.jpg]",
      "El proyecto RAYO es liderado por Juan Camilo Ramírez Bastidas y Daniel Felipe Yepez Guerrero. Su objetivo principal es desarrollar una página web que genere exámenes de manera automática basándose en temáticas seleccionadas. Con un propósito claro de mejorar la eficiencia en el aprendizaje y las evaluaciones académicas, el proyecto tiene un tiempo estimado de ejecución de 4 a 10 meses, un presupuesto de $269.512.452, y su información está disponible en https://www.tumblr.com/rayoproject.",
    ],
    inlineImages: {
      '../assets/ficha.jpg': { // La clave sigue siendo la ruta
        alt: 'Ficha de caracterización',
        className: 'inline-paragraph-image',
        src: fichaImage // Añade la referencia a la variable importada
      }
    },
  },
  {
    id: 'rayo-financiacion',
    title: '💸 Posibles fuentes de financiación.',
    image: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Las URLs externas se mantienen
    paragraphs: [
      "[IMAGEN_PARRAFO:../assets/finan.jpg]",
      "El proyecto RAYO podría contar con el respaldo de la Universidad de Nariño, a través de su Dirección de Planeación y Desarrollo (Área Financiera y de Presupuesto), con la posible participación de su Directora de Planeación y Desarrollo. Asimismo, podría recibir apoyo del Ministerio de Educación, representado por el Viceministro, desde el Viceministerio de Educación Superior y la Dirección de Calidad de Educación.",
    ],
    inlineImages: {
      '../assets/finan.jpg': { // La clave sigue siendo la ruta
        alt: 'Ficha de posibles fuentes de financiación',
        className: 'inline-paragraph-image',
        src: finanImage // Añade la referencia a la variable importada
      }
    },
  },
  {
    id: 'rayo-uml',
    title: '📐 Consulta UML.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Las URLs externas se mantienen
    paragraphs: [
      "📖 Diagama de clases.",
      "¿Qué es UML?",
      "El Lenguaje Unificado de Modelado (UML, por sus siglas en inglés Unified Modeling Lenguaje) es el estándar más utilizado para visualizar, especificar, construir y documentar sistemas software complejos. UML fue desarrollado y estandarizado por el Object Management Group (OMG) con el fin de ofrecer una notación gráfica común que facilite la comunicación entre analistas, diseñadores y desarrolladores de distintos ámbitos y tecnologías.",
      "¿En qué consiste UML?",
      "UML se compone de un conjunto de diagramas y elementos de modelo (clases, actores,componentes, nodos, etc.) que cubren dos grandes aspectos de un sistema:",
      "Estructura estática",
      "- Diagramas de clases: muestran clases, atributos, operaciones y sus relaciones.",
      "- Diagramas de componentes: agrupan módulos o servicios y sus dependencias.",
      "- Diagramas de despliegue: representan la distribución física de software en hardware.",
      "- Diagramas de paquetes, objetos y estructuras compuestas, entre otros.",
      "Comportamiento dinámico",
      "- Diagramas de casos de uso: describen las interacciones usuario-sistema (actores y escenarios).",
      "- Diagramas de secuencia y colaboración: modelan el flujo de mensajes entre objetos a lo largo del tiempo.",
      "- Diagramas de actividades y de estados: ilustran flujos de procesos y ciclos de vida de objetos.",
      "- Diagramas de interacción general y temporización, etc.",
      "Cada diagrama emplea símbolos estandarizados (cajas, flechas, conectores) para capturar distintos puntos de vista del sistema, desde la visión de negocio hasta los detalles de implementación.",
      "A continuación, una representación en diagrama UML del software de RAYO:",
      "[IMAGEN_PARRAFO:../assets/uml.jpg]",
    ],
    inlineImages: {
      '../assets/uml.jpg': { // La clave sigue siendo la ruta
        alt: 'Ficha de posibles fuentes de financiación',
        className: 'inline-paragraph-image',
        src: uml // Añade la referencia a la variable importada
      }
    },
  },
  {
    id: 'rayo-videos',
    title: '📺 Vídeos relacionados.',
    image: 'https://images.pexels.com/photos/4144228/pexels-photo-4144228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    paragraphs: [
      "- TEDx Talks. (2023, 27 noviembre). IA en educación: Del miedo a la oportunidad | María Agustina Ibañez | TEDxUTNCórdoba [Vídeo]. YouTube. https://www.youtube.com/watch?v=MZhKDt86PX8",
      "- TEDx Talks. (2025, 8 enero). La inteligencia artificial y la educación | Sang Gunn Yoo Park | TEDxUISRAEL [Vídeo]. YouTube. https://www.youtube.com/watch?v=r23rNosmve0",
      "- DW Español. (2024, 21 diciembre). La IA en la educación: ¿mejora o perjudica el aprendizaje? [Vídeo]. YouTube. https://www.youtube.com/watch?v=Pka3NixwYmA",
      "- Aprendemos Juntos 2030. (2020, 7 octubre). Cómo la inteligencia artificial ayudará a los profesores. Kai-Fu Lee, experto en IA [Vídeo]. YouTube. https://www.youtube.com/watch?v=9N1iYDHRZ14",
      "- Canal UNTREF. (2025, 14 abril). IA y Educación Superior: el desafío de construir un modelo educativo soberano | Beatriz de Ansó [Vídeo]. YouTube. https://www.youtube.com/watch?v=taoMiPImQyc"
    ]
  },
  {
    id: 'rayo-scrum',
    title: '🌱 SCRUM (ACTUALIZADO).',
    image: 'https://images.pexels.com/photos/4623478/pexels-photo-4623478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Las URLs externas se mantienen
    paragraphs: [
      "[PDF:../assets/scrum.pdf]",
    ],
    inlinePdfs: {
      '../assets/scrum.pdf': { // La clave sigue siendo la ruta
        title: 'SCRUM de RAYO',
        width: '100%',
        height: '500px',
        src: scrumPdf // Añade la referencia a la variable importada
      }
    }
  },
  {
    id: 'rayo-interfaces',
    title: '📲 Interfaces.',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    paragraphs: [
      "[IMAGEN_PARRAFO:../assets/i1.png]",
      "[IMAGEN_PARRAFO:../assets/i2.png]",
    ],
    inlineImages: {
      '../assets/i1.png': { // La clave sigue siendo la ruta para que `MainContent` la encuentre
        alt: 'Ventajas del proyecto',
        className: 'inline-paragraph-image',
        src: i1 // Añade la referencia a la variable importada
      },
      '../assets/i2.png': { // La clave sigue siendo la ruta para que `MainContent` la encuentre
        alt: 'Ventajas del proyecto',
        className: 'inline-paragraph-image',
        src: i2 // Añade la referencia a la variable importada
      },
    },
  },
  {
    id: 'rayo-bibliografias',
    title: '📚 Bibliografía.',
    image: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    paragraphs: [
      "- Pombo, C. (2023, 15 diciembre). ¿Cómo integrar a la inteligencia artificial en la educación de manera responsable? Enfoque Educación. https://blogs.iadb.org/educacion/es/inteligencia-artificial-educacion/",
      "- Integración de la Inteligencia Artificial en la Educación superior: Desafíos y oportunidades. (s. f.). https://www.revistatransformar.cl/index.php/transformar/article/view/84/44",,
      "- Aplicación de la Inteligencia Artificial (IA) en Educación: Los beneficios y limitaciones de la IA percibidos por el profesorado de educación primaria, educación secundaria y educación superior. (s. f.). https://revistas.um.es/reifop/article/view/577211/356891",
      "- Incidencias de la inteligencia artificial en la educación. (2023, 23 junio). recimundo.com. Recuperado 5 de junio de 2025, de https://recimundo.com/index.php/es/article/view/2045/2555",
      "- Futuro De La Inteligencia Artificial Para La Educación En Las Instituciones De Educación Superior. (2023, julio). http://scielo.sld.cu/pdf/rc/v19n93/1990-8644-rc-19-93-27.pdf",
      "- Inteligencia artificial y sus implicaciones en la educación superior. (2019, 4 enero). http://www.scielo.org.pe/pdf/pyr/v7n2/a21v7n2.pdf",
      "- ",
    ]
  },
];

export default contentData;