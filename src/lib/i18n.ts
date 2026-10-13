// Idiomas del sitio. El idioma va en la ruta (/es, /en); la raíz redirige al del navegador.

export const IDIOMAS = ['es', 'en'] as const;
export type Idioma = (typeof IDIOMAS)[number];
export const IDIOMA_POR_DEFECTO: Idioma = 'es';

export function esIdioma(valor: string): valor is Idioma {
  return (IDIOMAS as readonly string[]).includes(valor);
}

/** Elige idioma a partir de la cabecera Accept-Language (respeta el orden de preferencia y los pesos q). */
export function elegirIdioma(acceptLanguage: string | null | undefined): Idioma {
  if (!acceptLanguage) return IDIOMA_POR_DEFECTO;
  const candidatos = acceptLanguage
    .split(',')
    .map((trozo, indice) => {
      const [etiqueta = '', ...parametros] = trozo.trim().split(';');
      const q = parametros.map((p) => p.trim()).find((p) => p.startsWith('q='));
      const peso = q ? Number.parseFloat(q.slice(2)) : 1;
      return { base: etiqueta.trim().toLowerCase().split('-')[0] ?? '', peso: Number.isFinite(peso) ? peso : 0, indice };
    })
    .filter((c) => c.peso > 0)
    .sort((a, b) => b.peso - a.peso || a.indice - b.indice);
  for (const c of candidatos) if (esIdioma(c.base)) return c.base;
  return IDIOMA_POR_DEFECTO;
}

export const OTRO_IDIOMA: Record<Idioma, Idioma> = { es: 'en', en: 'es' };
