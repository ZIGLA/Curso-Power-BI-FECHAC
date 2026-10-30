/*
  CONTENIDO DEL SITIO — este es el único archivo que hay que editar.

  Por sesión:
    presentacion : enlace a la presentación en Google Drive / Google Slides
    grabacion    : ID del video en Google Drive (lo que va entre /d/ y /view en el enlace)
                   o un enlace de YouTube. El video tiene que estar compartido con "cualquier persona con el enlace".
    guia, tarea  : enlaces a los documentos (tarea lleva además la fecha de entrega)
    complementario: lista de { titulo, url, tipo }  (tipo: "lectura" | "video" | "base" | "plantilla")
    abrir        : true para mostrar los materiales antes de la fecha de la sesión
*/
const doc = id => "https://docs.google.com/document/d/" + id + "/edit";
const carpeta = id => "https://drive.google.com/drive/folders/" + id;

window.CURSO = {
  titulo: "Curso de Microsoft Power BI",
  organizacion: "FECHAC",
  horario: "Jueves de 9:00 a 11:00 · hora del centro de México · Google Meet",
  meet: "",                  // enlace fijo de Google Meet del curso (opcional)
  mostrarRecursos: true,     // false para ocultar la sección Recursos
  portada: 2,                // clase a la que lleva el botón de la portada (null = la última con grabación)

  carpetas: {
    guias: carpeta("1lZKPSeqY1PLd_Vgzjn-t5UjXjWrhWOY6"),
    bases: carpeta("1J1zqH6fC52tHJtacYFlf2_MF6pa7bK57"),
    presentaciones: carpeta("1ME0XKVHOkrP9oRUCXNAtySpMbcYAmACG"),
    grabaciones: carpeta("1oIyYtETxCUg4GG34R-SwVOi72fLb7f_Q"),
    buzon: carpeta("19LUchXMoxVDSC88YtRbaxhUOrHCYc2rV")
  },

  sesiones: [
    {
      n: 1, fecha: "2026-10-22", titulo: "Primeros pasos en Microsoft Power BI",
      resumen: "Instalamos Power BI Desktop, cargamos la base de proyectos 2026 y armamos el primer tablero.",
      aprendemos: ["Qué es Power BI, su historia y qué hace", "Power Query (lenguaje M) y DAX: bajo código", "Conectar un Excel, recorrer las vistas y paneles", "Primera medida (Proyectos), tarjetas, barras, anillo, torta y formato básico"],
      presentacion: "https://docs.google.com/presentation/d/1AybYu8gh1QmGImIEtQkd0QoIm7VcOhHTpY930VuKAZE/edit", grabacion: "1JpLwbbwZPJyZwP2fI2iJG0mxFmSH3lXj", abrir: true,
      guia: doc("14N-FSMQV6LL4K8gBhEF3qUqj144Wx_z6DPI9KPmaFBs"),
      tarea: { url: doc("17XxBAFB_ZmoncR5cvYwlB9bRdD5sl9QIGZdo9sIT6RM"), entrega: "Miércoles 28 de octubre", resumen: "Completar el tablero y sumar un gráfico de inversión por Consejo (proyectos por mes, opcional)." },
      complementario: [
        { titulo: "Base de datos aprobados 2026 (.xlsx)", url: carpeta("1J1zqH6fC52tHJtacYFlf2_MF6pa7bK57"), tipo: "base" },
        { titulo: "Introducción a Power BI Desktop (Microsoft Learn)", url: "https://learn.microsoft.com/es-es/power-bi/fundamentals/desktop-getting-started", tipo: "lectura" },
        { titulo: "Vista de informes en Power BI Desktop", url: "https://learn.microsoft.com/es-es/power-bi/create-reports/desktop-report-view", tipo: "lectura" }
      ]
    },
    {
      n: 2, fecha: "2026-10-29", titulo: "Limpieza y transformación de datos",
      resumen: "En Power Query dejamos la base lista para analizar y damos los primeros pasos con DAX.",
      aprendemos: ["Power Query: tipos de dato, quitar filas que sobran, dividir columnas, reemplazar valores, columna condicional", "Pasos aplicados: la limpieza queda grabada", "Lo básico de DAX: medida o columna, SUM, DIVIDE, DISTINCTCOUNT"],
      presentacion: "https://docs.google.com/presentation/d/1ueypP5CuF6y6dQH7ZHmBIuONbRDkBnVRpERG0W0dBBs/edit", grabacion: "15eqJ37-LaQRC9v_uGr9qGDrnKppD_AMH",
      guia: doc("1oWyiLfNIf52PGW-eFRR9BgqBnT3ItOTaze-zbb7V3Yw"),
      tarea: { url: doc("1yD0SH03vGn5Q-0yxnlIMhjidnbq7MjCXhJbURj2twWM"), entrega: "Miércoles 4 de noviembre", resumen: "Limpiar un reporte de informes de seguimiento y graficar pendientes por ejecutivo." },
      complementario: [
        { titulo: "Base 2026 limpia (resultado esperado)", url: carpeta("1J1zqH6fC52tHJtacYFlf2_MF6pa7bK57"), tipo: "base" },
        { titulo: "Tarea S2: informes de seguimiento (datos simulados)", url: carpeta("1J1zqH6fC52tHJtacYFlf2_MF6pa7bK57"), tipo: "base" },
        { titulo: "¿Qué es Power Query? (Microsoft Learn)", url: "https://learn.microsoft.com/es-es/power-query/power-query-what-is-power-query", tipo: "lectura" }
      ]
    },
    { n: 3, fecha: "2026-11-05", titulo: "Modelo relacional: trabajar con varias tablas",
      resumen: "Relacionamos proyectos, informes, ministraciones y ejecutivos en un modelo estrella.",
      aprendemos: ["Tablas de hechos y dimensiones, modelo estrella", "Relaciones uno a varios y cómo filtran", "Base de seguimiento: proyectos, informes, ministraciones y ejecutivos"],
      presentacion: "", grabacion: "", guia: "", tarea: null, complementario: [] },
    { n: 4, fecha: "2026-11-12", titulo: "Fórmulas DAX y otras transformaciones",
      resumen: "Calculamos con CALCULATE y fechas: acumulados, comparación con el año anterior y días de atraso.",
      aprendemos: ["CALCULATE y el contexto de filtro", "Tabla de calendario con CALENDARAUTO", "Inteligencia de tiempo: acumulado del año y comparación con el año anterior", "Otras fórmulas: DATEDIFF para días de atraso", "Anular dinamización (unpivot) para preguntas de selección múltiple"],
      presentacion: "", grabacion: "", guia: "", tarea: null, complementario: [] },
    { n: 5, fecha: "2026-11-19", titulo: "Diseño de tableros",
      resumen: "Elegimos el gráfico para cada pregunta y armamos páginas claras, con el tema de FECHAC y navegación.",
      aprendemos: ["Qué gráfico usar para cada pregunta", "Paleta de colores y tema de FECHAC, portadas y orden de la página", "Mapas por municipio sin errores", "Interacción y navegación: segmentadores sincronizados, interacciones entre gráficos, botones, información sobre herramientas"],
      presentacion: "", grabacion: "", guia: "", tarea: null, complementario: [] },
    { n: 6, fecha: "2026-11-25", titulo: "Tableros según quién los usa: operativos y estratégicos",
      resumen: "Partimos de quién usa el tablero para definir preguntas e indicadores, y armamos uno operativo con indicadores de FECHAC.",
      aprendemos: ["Del público a las preguntas y los indicadores", "Tableros operativos y estratégicos: ejemplos", "Semáforos y formato condicional", "Un tablero operativo con indicadores de FECHAC (por diseñar)"],
      presentacion: "", grabacion: "", guia: "", tarea: null, complementario: [] },
    { n: 7, fecha: "2026-12-03", titulo: "Conexión a los datos y publicación",
      resumen: "Conectamos a otras fuentes, publicamos en Power BI en la web y dejamos la actualización programada.",
      aprendemos: ["Conectar a SharePoint, Google Sheets, una API o SQL", "Publicar y compartir en Power BI en la web", "Actualización programada, puerta de enlace y licencias (Pro y no Pro)", "Opcional: seguridad por fila y vista para celular"],
      presentacion: "", grabacion: "", guia: "", tarea: null, complementario: [] },
    { n: 8, fecha: "2026-12-10", titulo: "Caso FECHAC: presentamos los tableros",
      resumen: "Cada persona presenta su tablero y cerramos con buenas prácticas y uso responsable de la IA.",
      aprendemos: ["Cada persona presenta su tablero", "Devolución y buenas prácticas", "Uso responsable de la IA con datos institucionales"],
      presentacion: "", grabacion: "", guia: "", tarea: null, complementario: [] }
  ],

  recursos: [
    { grupo: "Aprender Power BI", items: [
      { titulo: "Introducción a Power BI Desktop", url: "https://learn.microsoft.com/es-es/power-bi/fundamentals/desktop-getting-started", fuente: "Microsoft Learn" },
      { titulo: "Dashboard in a Day: taller en línea paso a paso", url: "https://learn.microsoft.com/es-es/training/paths/dashboard-in-a-day/", fuente: "Microsoft Learn" },
      { titulo: "Taller: introducción y requisitos previos", url: "https://learn.microsoft.com/es-es/training/modules/intro-power-bi/", fuente: "Microsoft Learn" },
      { titulo: "¿Qué es Power Query?", url: "https://learn.microsoft.com/es-es/power-query/power-query-what-is-power-query", fuente: "Microsoft Learn" }
    ]},
    { grupo: "Instalación y ayuda", items: [
      { titulo: "Descargar Power BI Desktop: opciones y requisitos", url: "https://learn.microsoft.com/es-es/power-bi/fundamentals/desktop-get-the-desktop", fuente: "Microsoft Learn" },
      { titulo: "Foro oficial de la comunidad de Power BI y Fabric", url: "https://community.fabric.microsoft.com/t5/Forums/ct-p/PBI_Comm_Forums", fuente: "Comunidad Microsoft" }
    ]},
    { grupo: "Materiales del curso", items: [
      { titulo: "Bases de datos del curso", url: carpeta("1J1zqH6fC52tHJtacYFlf2_MF6pa7bK57"), fuente: "Google Drive" },
      { titulo: "Guías y ejercicios", url: carpeta("1lZKPSeqY1PLd_Vgzjn-t5UjXjWrhWOY6"), fuente: "Google Drive" },
      { titulo: "Todas las grabaciones", url: carpeta("1oIyYtETxCUg4GG34R-SwVOi72fLb7f_Q"), fuente: "Google Drive" }
    ]}
  ]
};
