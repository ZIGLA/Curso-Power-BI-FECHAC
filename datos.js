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
      aprendemos: ["Conectar Power BI a un Excel", "Moverse entre las vistas Informe, Tabla y Modelo", "Armar barras, tarjetas y segmentadores", "Desconfiar de un total que no cierra"],
      presentacion: "", grabacion: "",
      guia: doc("14N-FSMQV6LL4K8gBhEF3qUqj144Wx_z6DPI9KPmaFBs"),
      tarea: { url: doc("17XxBAFB_ZmoncR5cvYwlB9bRdD5sl9QIGZdo9sIT6RM"), entrega: "Miércoles 28 de octubre", resumen: "Dos gráficos nuevos y una lista de datos raros." },
      complementario: [
        { titulo: "Base de datos aprobados 2026 (.xlsx)", url: carpeta("1J1zqH6fC52tHJtacYFlf2_MF6pa7bK57"), tipo: "base" },
        { titulo: "Introducción a Power BI Desktop (Microsoft Learn)", url: "https://learn.microsoft.com/es-es/power-bi/fundamentals/desktop-getting-started", tipo: "lectura" },
        { titulo: "Vista de informes en Power BI Desktop", url: "https://learn.microsoft.com/es-es/power-bi/create-reports/desktop-report-view", tipo: "lectura" }
      ]
    },
    {
      n: 2, fecha: "2026-10-29", titulo: "Limpieza y transformación de datos",
      resumen: "En Power Query dejamos la base lista para analizar: sin filas de más y con nombres unificados.",
      aprendemos: ["Filtrar filas y cambiar tipos de dato", "Dividir columnas y reemplazar valores", "Crear una columna condicional", "Ver y editar los pasos aplicados"],
      presentacion: "", grabacion: "",
      guia: doc("1oWyiLfNIf52PGW-eFRR9BgqBnT3ItOTaze-zbb7V3Yw"),
      tarea: { url: doc("1yD0SH03vGn5Q-0yxnlIMhjidnbq7MjCXhJbURj2twWM"), entrega: "Miércoles 4 de noviembre", resumen: "Limpiar un reporte de informes de seguimiento y graficar pendientes por ejecutivo." },
      complementario: [
        { titulo: "Base 2026 limpia (resultado esperado)", url: carpeta("1J1zqH6fC52tHJtacYFlf2_MF6pa7bK57"), tipo: "base" },
        { titulo: "Tarea S2: informes de seguimiento (datos simulados)", url: carpeta("1J1zqH6fC52tHJtacYFlf2_MF6pa7bK57"), tipo: "base" },
        { titulo: "¿Qué es Power Query? (Microsoft Learn)", url: "https://learn.microsoft.com/es-es/power-query/power-query-what-is-power-query", tipo: "lectura" }
      ]
    },
    { n: 3, fecha: "2026-11-05", titulo: "Modelo relacional: trabajar con varias tablas",
      resumen: "Relacionamos proyectos, informes y ministraciones en un modelo estrella.",
      aprendemos: ["Qué es una relación uno a varios", "Armar un modelo estrella", "Filtrar entre tablas"],
      presentacion: "", grabacion: "", guia: "", tarea: null, complementario: [] },
    { n: 4, fecha: "2026-11-12", titulo: "Gráficos: cuál usar para cada pregunta",
      resumen: "Elegimos el gráfico según la pregunta: comparar, ver evolución, ubicar en el mapa.",
      aprendemos: ["Barras, líneas, mapas y tablas", "Formato y etiquetas claras", "Mapas por municipio sin errores"],
      presentacion: "", grabacion: "", guia: "", tarea: null, complementario: [] },
    { n: 5, fecha: "2026-11-19", titulo: "Fórmulas: medidas con DAX",
      resumen: "Calculamos totales, porcentajes y días de atraso con medidas.",
      aprendemos: ["Medidas frente a columnas", "SUM, DIVIDE, CALCULATE", "Días de atraso por proyecto"],
      presentacion: "", grabacion: "", guia: "", tarea: null, complementario: [] },
    { n: 6, fecha: "2026-11-26", titulo: "Tableros operativos y estratégicos",
      resumen: "Diseñamos los dos tableros del curso: uno para Dirección y otro para Seguimiento.",
      aprendemos: ["Ordenar un tablero según quién lo usa", "Colores y alertas", "Interacciones entre gráficos"],
      presentacion: "", grabacion: "", guia: "", tarea: null, complementario: [] },
    { n: 7, fecha: "2026-12-03", titulo: "Conexión a los datos y publicación",
      resumen: "Publicamos en Power BI en la web y compartimos con el equipo.",
      aprendemos: ["Publicar desde Desktop", "Áreas de trabajo y permisos", "Actualizar los datos"],
      presentacion: "", grabacion: "", guia: "", tarea: null, complementario: [] },
    { n: 8, fecha: "2026-12-10", titulo: "Caso FECHAC: presentamos los tableros",
      resumen: "Cada persona presenta su tablero y definimos cómo seguir con datos reales.",
      aprendemos: ["Contar una historia con datos", "Recibir y dar devoluciones", "Plan de uso después del curso"],
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
