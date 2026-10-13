// Datos fijos del sitio. Todo lo que aquí se publica es público a propósito (no hay teléfono, dirección ni CV).

export const SITIO = {
  url: 'https://soypacodev.vercel.app',
  nombre: 'Paco López',
  correo: 'soypacodev@gmail.com',
  github: 'https://github.com/soypacodev',
  instagram: 'https://www.instagram.com/soypacodev',
  repositorio: 'https://github.com/soypacodev/portfolio',
  analizador: 'https://es-segura-tu-web.vercel.app',
  foto: '/paco-lopez.jpg',
} as const;

/** Colores de la marca, para las imágenes generadas (no pueden usar variables CSS). */
export const MARCA = { tinta: '#0A1B33', cobalto: '#1738C9', sol: '#FFB81C', cal: '#F2F5F9', verde: '#137A5A' } as const;

export function enlaceCorreo(asunto: string, cuerpo: string): string {
  return `mailto:${SITIO.correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
}
