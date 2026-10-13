import type { Idioma } from '@/lib/i18n';
import { en } from './en';
import { es } from './es';
import type { Contenido } from './tipos';

const CONTENIDOS: Record<Idioma, Contenido> = { es, en };

export function obtenerContenido(idioma: Idioma): Contenido {
  return CONTENIDOS[idioma];
}
export type { Contenido, Trabajo } from './tipos';
