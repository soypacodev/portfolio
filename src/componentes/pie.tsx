import Link from 'next/link';
import type { Contenido } from '@/content';
import type { Idioma } from '@/lib/i18n';
import { SITIO } from '@/lib/sitio';

export function Pie({ lang, c }: { lang: Idioma; c: Contenido }) {
  return (
    <footer className="pie">
      <div className="contenedor pie__rejilla">
        <p>
          © {new Date().getFullYear()} {c.pie.derechos}
        </p>
        <p>{c.pie.privacidad}</p>
        <ul className="pie__enlaces">
          <li>
            <Link href={`/${lang}/privacidad`}>{c.pie.enlacePrivacidad}</Link>
          </li>
          <li>
            <Link href={`/${lang}/aviso-legal`}>{c.pie.enlaceAvisoLegal}</Link>
          </li>
          <li>
            <a href={SITIO.repositorio}>{c.pie.codigo}</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
