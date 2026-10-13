import Image from 'next/image';
import type { Contenido, Trabajo } from '@/content';

function Proyecto({ t, e }: { t: Trabajo; e: Contenido['trabajos']['etiquetas'] }) {
  const [principal, ...resto] = t.imagenes;
  return (
    <article className={`trabajo trabajo--${t.tema}`} data-tema={t.tema} aria-labelledby={`t-${t.id}`}>
      <div className="contenedor trabajo__rejilla">
        <header className="trabajo__cabecera">
          <p className="trabajo__tipo">{t.tipo}</p>
          <h3 id={`t-${t.id}`}>{t.nombre}</h3>
          <p className="trabajo__resumen">{t.resumen}</p>
          <p className="trabajo__beneficio">
            <strong>{e.beneficio}.</strong> {t.beneficio}
          </p>
          <div className="acciones">
            {t.enlaces.map((l, i) => (
              <a key={l.href} className={`boton ${i === 0 ? 'boton--proyecto' : 'boton--contorno'}`} href={l.href}>
                {l.etiqueta}
              </a>
            ))}
          </div>
        </header>

        <div className="trabajo__vitrina">
          {principal && (
            <Image className="captura captura--principal" src={principal.src} alt={principal.alt} width={principal.ancho} height={principal.alto} sizes="(min-width: 1100px) 840px, 92vw" quality={90} />
          )}
          {resto.map((im, i) => (
            <Image key={im.src} className={`captura captura--${i + 2}`} src={im.src} alt={im.alt} width={im.ancho} height={im.alto} sizes="(min-width: 1100px) 600px, 60vw" quality={90} />
          ))}
        </div>

        <div className="trabajo__cuerpo">
          <section>
            <h4>{e.problema}</h4>
            <p>{t.problema}</p>
          </section>
          <section>
            <h4>{e.solucion}</h4>
            <p>{t.solucion}</p>
          </section>
          <section>
            <h4>{e.construccion}</h4>
            <p>{t.construccion}</p>
          </section>
        </div>

        <div className="trabajo__pie">
          <section className="trabajo__datos">
            <h4>{e.datos}</h4>
            <ul>
              {t.datos.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </section>
          <section className="trabajo__pila">
            <h4>{e.pila}</h4>
            <ul>
              {t.pila.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}

export function Trabajos({ c }: { c: Contenido }) {
  return (
    <section id="trabajos" className="trabajos" aria-labelledby="trabajos-titulo">
      <div className="contenedor seccion__cabecera">
        <h2 id="trabajos-titulo" className="seccion__titulo">
          {c.trabajos.titulo}
        </h2>
        <p className="seccion__intro">{c.trabajos.intro}</p>
      </div>
      {c.trabajos.items.map((t) => (
        <Proyecto key={t.id} t={t} e={c.trabajos.etiquetas} />
      ))}
    </section>
  );
}
