// Forma de los textos. Español e inglés cumplen el mismo tipo: si falta algo en un idioma, no compila.

export interface Enlace {
  etiqueta: string;
  href: string;
}

export type TemaProyecto = 'ovillo' | 'seguridad' | 'cachivache';

export interface Imagen {
  /** Ruta bajo /public. */
  src: string;
  ancho: number;
  alto: number;
  alt: string;
}

export interface Trabajo {
  id: string;
  tema: TemaProyecto;
  nombre: string;
  tipo: string;
  resumen: string;
  /** Qué gana un negocio con algo así, en una frase y sin inventar resultados. */
  beneficio: string;
  problema: string;
  solucion: string;
  construccion: string;
  /** Datos concretos y comprobables, no adjetivos. */
  datos: string[];
  pila: string[];
  enlaces: Enlace[];
  imagenes: Imagen[];
}

export interface Servicio {
  id: string;
  titulo: string;
  texto: string;
  incluye: string[];
}

export interface Paso {
  titulo: string;
  texto: string;
}

export interface Certificacion {
  nombre: string;
  emisor: string;
  anio: number;
}

export interface DocumentoLegal {
  titulo: string;
  descripcion: string;
  /** Fecha de la última revisión, ya escrita para leerse. */
  fecha: string;
  secciones: { titulo: string; parrafos: string[] }[];
}

export interface Contenido {
  idioma: string;
  meta: { titulo: string; descripcion: string; ogAlt: string; locale: string };
  accesibilidad: { saltar: string; irAlInicio: string };
  nav: { id: string; etiqueta: string }[];
  portada: {
    disponible: string;
    titular: [string, string];
    subtitulo: string;
    ctaContacto: string;
    ctaTrabajos: string;
    fotoAlt: string;
  };
  sello: {
    titulo: string;
    nota: string;
    detalle: string;
    verificar: string;
    cabeceras: string[];
  };
  disciplinas: { titulo: string; texto: string }[];
  trabajos: { titulo: string; intro: string; etiquetas: { beneficio: string; problema: string; solucion: string; construccion: string; datos: string; pila: string }; items: Trabajo[] };
  servicios: { titulo: string; intro: string; items: Servicio[]; incluyeEtiqueta: string; proceso: { titulo: string; pasos: Paso[] }; nota: string };
  certificaciones: { titulo: string; intro: string; items: Certificacion[]; nota: string };
  sobre: { titulo: string; parrafos: string[] };
  contacto: { titulo: string; texto: string; correoEtiqueta: string; asunto: string; cuerpo: string; redes: Enlace[]; respuesta: string; copiar: string; copiado: string };
  pie: { derechos: string; codigo: string; privacidad: string; enlacePrivacidad: string; enlaceAvisoLegal: string };
  legal: { volver: string; actualizado: string; privacidad: DocumentoLegal; avisoLegal: DocumentoLegal };
  noEncontrada: { titulo: string; texto: string; volver: string };
  error: { titulo: string; texto: string; reintentar: string };
}
