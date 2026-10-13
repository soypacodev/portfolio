import type { Contenido } from './tipos';

export const es: Contenido = {
  idioma: 'es',
  meta: {
    titulo: 'Paco López · Desarrollador full-stack',
    descripcion:
      'Hago webs y aplicaciones a medida, y las hago seguras. Desarrollo web, ciberseguridad y datos desde Málaga, para clientes de cualquier lugar.',
    ogAlt: 'Paco López, desarrollador full-stack: webs y aplicaciones a medida, y seguras',
    locale: 'es_ES',
  },
  accesibilidad: {
    saltar: 'Saltar al contenido',
    irAlInicio: 'Ir al inicio',
  },
  nav: [
    { id: 'trabajos', etiqueta: 'Trabajos' },
    { id: 'servicios', etiqueta: 'Servicios' },
    { id: 'certificaciones', etiqueta: 'Certificaciones' },
    { id: 'sobre-mi', etiqueta: 'Sobre mí' },
    { id: 'contacto', etiqueta: 'Contacto' },
  ],
  portada: {
    disponible: 'Disponible para proyectos',
    titular: ['Hago webs y aplicaciones a medida.', 'Y las hago seguras.'],
    subtitulo:
      'Soy Paco López, desarrollador full-stack en Málaga. Me ocupo de todo el camino, de la idea a la web funcionando, y reviso la seguridad desde el primer día, no al final. Trabajo con pequeños negocios y autónomos.',
    ctaContacto: 'Cuéntame tu proyecto',
    ctaTrabajos: 'Ver trabajos',
    fotoAlt: 'Retrato de Paco López',
  },
  sello: {
    titulo: 'Esta web saca A+',
    nota: 'en mi propio analizador de seguridad (comprobado el 13 de octubre de 2026)',
    detalle: 'No te lo cuento yo: pega la dirección de esta web en ¿Es segura tu web? y míralo tú mismo.',
    verificar: 'Comprobarlo ahora',
    cabeceras: ['Protegida contra código inyectado', 'Conexión cifrada obligatoria durante dos años', 'Sin scripts de terceros', 'Sin cookies'],
  },
  disciplinas: [
    { titulo: 'Webs y apps a medida', texto: 'Tiendas, paneles y herramientas que se adaptan a cómo trabajas, no al revés.' },
    { titulo: 'Seguridad', texto: 'Revisión, refuerzo y diseño seguro: que lo que construyo aguante, y que lo que ya tienes también.' },
    { titulo: 'Datos e integraciones', texto: 'Conectar tus herramientas, automatizar lo repetitivo y convertir los datos en informes que se leen.' },
  ],
  trabajos: {
    titulo: 'Trabajos',
    intro: 'Tres proyectos propios, terminados y publicados. Puedes abrirlos, usarlos y leer el código. Ovillo & Co. es una tienda de demostración, sin cliente real; los otros dos son herramientas que cualquiera puede usar.',
    etiquetas: {
      beneficio: 'Para tu negocio',
      problema: 'El problema',
      solucion: 'Qué hice',
      construccion: 'Cómo está hecho',
      datos: 'En cifras',
      pila: 'Tecnologías',
    },
    items: [
      {
        id: 'ovillo-co',
        tema: 'ovillo',
        nombre: 'Ovillo & Co.',
        tipo: 'Tienda online completa (demo)',
        resumen: 'Tienda de demostración de un taller de crochet, con pago y panel del dueño, hecha de principio a fin. No hay un cliente real detrás.',
        beneficio:
          'Vender online sin atarte a una plantilla ni depender de nadie para cada cambio: pedidos, stock y encargos se gestionan desde un panel pensado para quien lleva el taller.',
        problema:
          'El caso que planteé: un negocio pequeño que vende piezas únicas y por encargo no encaja en una plantilla genérica: necesita plazos de confección, personalización y un panel que pueda usar sin saber de informática.',
        solucion:
          'Una tienda con catálogo y filtros, cesta que no pierde nada, pago con Stripe, cuentas de clientes, encargos con fotos de referencia y un panel del taller con ventas, pedidos, stock y mensajes. En cuatro idiomas.',
        construccion:
          'Casi todo se pinta en el servidor y el navegador solo recibe el JavaScript de lo interactivo. La seguridad vive en la base de datos (políticas RLS), el precio se recalcula siempre en el servidor y el pago ocurre en Stripe, así que la tienda nunca ve una tarjeta.',
        datos: ['Más de 220 pruebas de lógica y más de 200 comprobaciones sobre PostgreSQL real', '4 idiomas: español, inglés, francés y alemán', 'Lighthouse: accesibilidad 100 en todas las páginas'],
        pila: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'Stripe', 'Vercel'],
        enlaces: [
          { etiqueta: 'Ver la tienda', href: 'https://ovillo-co.vercel.app' },
          { etiqueta: 'Código en GitHub', href: 'https://github.com/soypacodev/ovillo-co' },
        ],
        imagenes: [
          { src: '/img/ovillo-portada.webp', ancho: 1440, alto: 900, alt: 'Portada de Ovillo & Co.: titular «Cositas blanditas, de una en una» y la foto de un cervatillo de ganchillo' },
          { src: '/img/ovillo-panel.webp', ancho: 1440, alto: 900, alt: 'Panel del taller con las ventas del mes, el ticket medio, los pedidos por preparar y un gráfico de ventas por día' },
          { src: '/img/ovillo-movil.webp', ancho: 520, alto: 1125, alt: 'La tienda en un móvil: cabecera compacta y tarjetas de producto a todo el ancho' },
        ],
      },
      {
        id: 'es-segura-tu-web',
        tema: 'seguridad',
        nombre: '¿Es segura tu web?',
        tipo: 'Herramienta de seguridad gratuita',
        resumen: 'Pegas la dirección de una web y recibes una nota de la A+ a la F, con qué falla y cómo arreglarlo.',
        beneficio:
          'Saber en un minuto, sin jerga, si tu web tiene problemas y qué arreglar primero. Es el mismo tipo de revisión que ofrezco como servicio, siempre con permiso de su titular.',
        problema:
          'Los pequeños negocios no saben si su web está bien protegida, y los informes técnicos no los entiende nadie que no sea del gremio. Muchos ni siquiera saben qué preguntar.',
        solucion:
          'Un analizador que revisa nueve áreas (conexión, dominio y correo, cabeceras, cookies, privacidad, archivos expuestos…), lo explica en español claro y genera un informe en PDF y un enlace para compartir.',
        construccion:
          'Solo mira lo que ve cualquier visitante y no guarda nada de la web analizada. El resultado llega por streaming mientras se calcula; los informes compartidos se guardan firmados (HMAC) en Supabase y caducan solos. Él mismo está protegido con una CSP con nonce por petición.',
        datos: ['Más de 1.000 pruebas automáticas', '9 áreas de análisis con nota de A+ a F', 'Enlaces compartibles firmados que caducan a los 30 días'],
        pila: ['Next.js 16', 'React 19', 'TypeScript', 'Zod', 'Supabase', 'Vercel'],
        enlaces: [
          { etiqueta: 'Revisar una web', href: 'https://es-segura-tu-web.vercel.app' },
          { etiqueta: 'Código en GitHub', href: 'https://github.com/soypacodev/es-segura-tu-web' },
        ],
        imagenes: [
          { src: '/img/seguridad-informe.webp', ancho: 1640, alto: 1037, alt: 'Informe de un ejemplo inseguro: nota F con 63 de 100, seis áreas con su puntuación y un gráfico de araña' },
          { src: '/img/seguridad-portada.webp', ancho: 1640, alto: 1037, alt: 'Portada del analizador: campo para la dirección y la escala de notas de A+ a F' },
        ],
      },
      {
        id: 'cachivache',
        tema: 'cachivache',
        nombre: 'Cachivache',
        tipo: 'Aplicación de escritorio para Windows',
        resumen: 'Libera espacio en Windows y te explica qué va a borrar y qué pasa si lo borras. Solo toca lo que marcas.',
        beneficio:
          'Demuestra mi criterio: software que explica lo que hace y no toca nada sin avisar. Es la misma forma de trabajar que aplico a lo que construyo para un cliente.',
        problema:
          'Los limpiadores piden un acto de fe: una barra de progreso, «has recuperado 12 GB» y ni idea de qué era. Borrar mal puede romper el equipo, y son programas poco transparentes.',
        solucion:
          'Un limpiador que explica cada elemento: qué es, cuánto ocupa y qué ocurre si se borra. Nada viene marcado si tiene riesgo, todo va a la papelera y hay un modo simulación que lo recorre todo sin tocar un archivo.',
        construccion:
          'Sin dependencias: PowerShell y WPF, que ya vienen con Windows. La seguridad es una lista blanca (solo se borra lo que cuelga de una carpeta autorizada), cada ruta se vuelve a comprobar justo antes de tocarla y no hay conexión a internet salvo que pulses «Buscar actualización».',
        datos: ['Más de 2.300 pruebas automáticas', '21 módulos de análisis independientes', 'Cada versión publica el SHA-256 de sus archivos'],
        pila: ['PowerShell', 'WPF', 'C#', 'Pester', 'GitHub Actions'],
        enlaces: [
          { etiqueta: 'Descargar', href: 'https://github.com/soypacodev/cachivache/releases/latest' },
          { etiqueta: 'Código en GitHub', href: 'https://github.com/soypacodev/cachivache' },
        ],
        imagenes: [
          { src: '/img/cachivache-resultados.webp', ancho: 1237, alto: 756, alt: 'Resultados de un análisis: cada elemento con su tamaño, su riesgo y qué pasa si se borra' },
          { src: '/img/cachivache-inicio.webp', ancho: 1234, alto: 754, alt: 'Pantalla de inicio: perfiles de limpieza, módulos con su nivel de riesgo y estado de los discos' },
        ],
      },
    ],
  },
  servicios: {
    titulo: 'Servicios',
    intro: 'Hago tres cosas y las hago a la vez. Una web que funciona, que está protegida y que te da información útil.',
    incluyeEtiqueta: 'Incluye',
    items: [
      {
        id: 'webs',
        titulo: 'Webs y aplicaciones a medida',
        texto: 'Desde una web corporativa hasta una tienda o una herramienta interna. Pensadas para móvil, rápidas y fáciles de mantener.',
        incluye: ['Diseño y desarrollo completo', 'Tiendas online y pasarelas de pago', 'Paneles de gestión y cuentas de usuario', 'Posicionamiento y accesibilidad de serie'],
      },
      {
        id: 'seguridad',
        titulo: 'Seguridad',
        texto: 'Revisar lo que ya tienes o construirlo bien desde el principio. Con informe claro y lista de lo que hay que arreglar, por orden de importancia. Solo reviso webs con permiso por escrito de su titular.',
        incluye: ['Revisión técnica y refuerzo de webs existentes', 'Autenticación y control de accesos', 'Protección de datos: medidas técnicas básicas (RGPD)', 'Cabeceras, CSP y configuración segura'],
      },
      {
        id: 'datos',
        titulo: 'Datos e integraciones',
        texto: 'Conectar las herramientas que ya usas y sacar partido a tus datos, sin que dependas de una persona ni de una hoja de cálculo.',
        incluye: ['Integración de APIs, pagos, correo y mensajería', 'Automatización de tareas repetitivas', 'Cuadros de mando e informes con Power BI', 'Bases de datos PostgreSQL y MySQL'],
      },
    ],
    proceso: {
      titulo: 'Cómo trabajo',
      pasos: [
        { titulo: 'Una conversación', texto: 'Me cuentas qué necesitas y qué problema quieres resolver. Sin compromiso y sin jerga.' },
        { titulo: 'Una propuesta clara', texto: 'Por escrito: qué haré, en qué fases, cuánto tarda y cuánto cuesta. Sin sorpresas después.' },
        { titulo: 'Entrega por fases', texto: 'Ves avances reales desde la primera semana, puedes corregir el rumbo y al final el código es tuyo.' },
      ],
    },
    nota: 'Cada proyecto es distinto, así que no publico tarifas: te las doy después de escucharte.',
  },
  certificaciones: {
    titulo: 'Certificaciones',
    intro: 'Formación de nivel introductorio en ciberseguridad, redes y soporte técnico.',
    items: [
      { nombre: 'Certified in Cybersecurity (CC)', emisor: '(ISC)²', anio: 2023 },
      { nombre: 'NSE 1 · Information Security Awareness', emisor: 'Fortinet', anio: 2023 },
      { nombre: 'NSE 2 · The Evolution of Cybersecurity', emisor: 'Fortinet', anio: 2023 },
      { nombre: 'NSE 3 · Fortinet Product Awareness', emisor: 'Fortinet', anio: 2023 },
      { nombre: 'Certificado profesional de Soporte de TI', emisor: 'Google', anio: 2023 },
      { nombre: 'Networking Basics', emisor: 'Cisco', anio: 2023 },
      { nombre: 'Curso básico de ciberseguridad', emisor: 'CCN-CERT', anio: 2023 },
      { nombre: 'Introduction to Cyber Security', emisor: 'Great Learning', anio: 2023 },
    ],
    nota: 'Son certificados de formación, no de auditoría oficial. Si necesitas verificar alguno, te paso el original.',
  },
  sobre: {
    titulo: 'Sobre mí',
    parrafos: [
      'Soy programador de Málaga. Me gusta entender cómo funciona algo de arriba abajo, desde la pantalla hasta la base de datos, y no dejar cabos sueltos.',
      'Mi formación viene de la ciberseguridad, las redes y el soporte técnico, y se nota en cómo construyo: pienso siempre desde las dos orillas, la de quien lo usa y la de quien intenta romperlo. Los tres proyectos de arriba son mi manera de enseñarlo en vez de contarlo.',
      'Trabajo en remoto, en español o en inglés, y prefiero pocos proyectos bien hechos a muchos a medias.',
    ],
  },
  contacto: {
    titulo: 'Hablemos',
    texto: 'Cuéntame qué quieres hacer. Si no sabes por dónde empezar, también vale: lo vemos juntos.',
    correoEtiqueta: 'Escríbeme un correo',
    asunto: 'Hola Paco, quiero hablar de un proyecto',
    cuerpo: 'Hola Paco:\n\nQuiero hablar contigo de este proyecto:\n\n',
    redes: [
      { etiqueta: 'GitHub', href: 'https://github.com/soypacodev' },
      { etiqueta: 'Instagram', href: 'https://www.instagram.com/soypacodev' },
    ],
    respuesta: 'Suelo contestar en un día laborable.',
    copiar: 'Copiar correo',
    copiado: 'Correo copiado',
  },
  pie: {
    derechos: 'Paco López',
    codigo: 'Código de esta web',
    privacidad: 'Esta web no usa cookies, no tiene analítica ni scripts de terceros y no guarda datos tuyos por su cuenta.',
    enlacePrivacidad: 'Privacidad',
    enlaceAvisoLegal: 'Aviso legal',
  },
  legal: {
    volver: 'Volver al inicio',
    actualizado: 'Última revisión',
    privacidad: {
      titulo: 'Política de privacidad',
      descripcion: 'Qué datos trata esta web: ninguno de forma automática. Sin cookies, sin analítica y sin scripts de terceros.',
      fecha: '13 de octubre de 2026',
      secciones: [
        {
          titulo: 'Resumen',
          parrafos: ['Esta web no usa cookies, no tiene analítica, no carga scripts ni tipografías de terceros y no tiene formularios. No guarda datos tuyos por su cuenta; solo el proveedor de alojamiento puede registrar datos técnicos de la conexión (ver «Alojamiento»).'],
        },
        {
          titulo: 'Quién es el responsable',
          parrafos: ['Paco López. Puedes escribirme a soypacodev@gmail.com para cualquier duda sobre tus datos.'],
        },
        {
          titulo: 'Si me escribes',
          parrafos: [
            'Los enlaces de contacto abren tu programa de correo: el mensaje no pasa por esta web, llega directamente a mi bandeja. Uso tu mensaje y tus datos solo para responderte y, si lo decides, preparar una propuesta. La base legal es tu consulta y las medidas previas a un posible contrato (art. 6.1.b del RGPD) o, si solo me haces una pregunta, mi interés legítimo en responderte (art. 6.1.f). Mi correo funciona sobre Gmail (Google), que actúa como proveedor del servicio de correo.',
            'Conservo la conversación mientras dure y, si no llega a haber contrato, la borro a los 12 meses del último mensaje. Si hubo una relación comercial, la conservo el tiempo que obligue la ley. No cedo tus datos a nadie, salvo obligación legal o a los proveedores de correo y alojamiento citados.',
          ],
        },
        {
          titulo: 'Alojamiento',
          parrafos: [
            'La web se aloja en Vercel. Como cualquier servidor, Vercel puede registrar datos técnicos de la conexión (como la dirección IP) para el funcionamiento y la seguridad del servicio. Vercel es una empresa de EE. UU.; las transferencias fuera del Espacio Económico Europeo se amparan en cláusulas contractuales tipo. Las tipografías se sirven desde esta misma web, sin pasar por Google.',
          ],
        },
        {
          titulo: 'Tus derechos',
          parrafos: [
            'Puedes pedirme acceso, rectificación, supresión, oposición, limitación o portabilidad de tus datos escribiéndome al correo anterior. Si crees que no he tratado bien tus datos, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).',
          ],
        },
      ],
    },
    avisoLegal: {
      titulo: 'Aviso legal',
      descripcion: 'Quién está detrás de esta web, condiciones de uso y propiedad intelectual.',
      fecha: '13 de octubre de 2026',
      secciones: [
        {
          titulo: 'Titular',
          parrafos: ['Esta web es el portfolio profesional de Paco López, desarrollador, con sede en Málaga (España). Contacto: soypacodev@gmail.com.',
            'Todavía no ejerzo como autónomo. Me daré de alta al empezar el primer proyecto con un cliente y, entonces, publicaré aquí mi NIF y mi domicilio profesional.',
          ],
        },
        {
          titulo: 'Objeto',
          parrafos: ['Presentar mis trabajos y servicios. La información de la web es orientativa y no constituye una oferta vinculante: cada proyecto se concreta en una propuesta por escrito.'],
        },
        {
          titulo: 'Propiedad intelectual',
          parrafos: [
            'Los textos, el diseño y las fotos son míos y no entran en la licencia MIT, que cubre solo el código de esta web, público en GitHub. Las capturas muestran proyectos propios; los nombres y marcas de terceros que aparecen (Stripe, Supabase, Vercel y otros) pertenecen a sus dueños.',
          ],
        },
        {
          titulo: 'Enlaces',
          parrafos: ['La web enlaza a otros sitios. No me hago responsable de su contenido ni de su política de privacidad.'],
        },
        {
          titulo: 'Ley aplicable',
          parrafos: ['Esta web se rige por la legislación española.'],
        },
      ],
    },
  },
  noEncontrada: { titulo: 'No encuentro esa página', texto: 'La dirección no existe o ha cambiado de sitio.', volver: 'Ir al inicio' },
  error: { titulo: 'Algo ha fallado', texto: 'No es culpa tuya. Vuelve a intentarlo y, si sigue igual, escríbeme.', reintentar: 'Reintentar' },
};
