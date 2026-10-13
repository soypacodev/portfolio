import Link from 'next/link';
import { Cabecera } from '@/componentes/cabecera';
import { Pie } from '@/componentes/pie';
import type { Contenido } from '@/content';
import type { Idioma } from '@/lib/i18n';

export function PaginaLegal({ lang, c, documento }: { lang: Idioma; c: Contenido; documento: 'privacidad' | 'avisoLegal' }) {
  const d = c.legal[documento];
  return (
    <div className="pagina">
      <a className="saltar" href="#principal">
        {c.accesibilidad.saltar}
      </a>
      <Cabecera lang={lang} c={c} ruta={documento === 'privacidad' ? '/privacidad' : '/aviso-legal'} />
      <main id="principal" tabIndex={-1} className="legal">
        <div className="contenedor legal__contenido">
          <p>
            <Link href={`/${lang}`}>{c.legal.volver}</Link>
          </p>
          <h1>{d.titulo}</h1>
          <p className="legal__fecha">
            {c.legal.actualizado}: {d.fecha}
          </p>
          {d.secciones.map((s) => (
            <section key={s.titulo}>
              <h2>{s.titulo}</h2>
              {s.parrafos.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>
          ))}
        </div>
      </main>
      <Pie lang={lang} c={c} />
    </div>
  );
}
