import Link from 'next/link';
import { Marca } from '@/componentes/marca';
import type { Contenido } from '@/content';
import { OTRO_IDIOMA, type Idioma } from '@/lib/i18n';
import { SITIO } from '@/lib/sitio';

const NOMBRE_IDIOMA: Record<Idioma, string> = { es: 'Español', en: 'English' };

/** `ruta` es la parte tras el idioma (p. ej. `/privacidad`): el cambio de idioma te deja en la misma página. */
export function Cabecera({ lang, c, ruta = '' }: { lang: Idioma; c: Contenido; ruta?: string }) {
  const otro = OTRO_IDIOMA[lang];
  return (
    <header className="cabecera">
      <div className="contenedor cabecera__barra">
        <Link className="marca" href={`/${lang}`} aria-label={`${SITIO.nombre}. ${c.accesibilidad.irAlInicio}`}>
          <Marca tamano={34} />
          <span>{SITIO.nombre}</span>
        </Link>
        <nav className="menu" aria-label={lang === 'es' ? 'Secciones' : 'Sections'}>
          <ul>
            {c.nav.map((n) => (
              <li key={n.id}>
                <a href={`/${lang}#${n.id}`}>{n.etiqueta}</a>
              </li>
            ))}
          </ul>
        </nav>
        <Link className="idioma" href={`/${otro}${ruta}`} hrefLang={otro} lang={otro}>
          {NOMBRE_IDIOMA[otro]}
        </Link>
      </div>
    </header>
  );
}
