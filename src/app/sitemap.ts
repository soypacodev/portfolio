import type { MetadataRoute } from 'next';
import { IDIOMAS } from '@/lib/i18n';
import { SITIO } from '@/lib/sitio';

const RUTAS = [
  { ruta: '', prioridad: 1 },
  { ruta: '/privacidad', prioridad: 0.2 },
  { ruta: '/aviso-legal', prioridad: 0.2 },
] as const;

/** Fecha de la última revisión del contenido; se actualiza al tocar los textos. */
const ULTIMA_REVISION = new Date('2026-10-13');

export default function sitemap(): MetadataRoute.Sitemap {
  return RUTAS.flatMap(({ ruta, prioridad }) => {
    const idiomas = Object.fromEntries(IDIOMAS.map((i) => [i, `${SITIO.url}/${i}${ruta}`]));
    return IDIOMAS.map((i) => ({ url: `${SITIO.url}/${i}${ruta}`, lastModified: ULTIMA_REVISION, changeFrequency: 'monthly' as const, priority: prioridad, alternates: { languages: idiomas } }));
  });
}
