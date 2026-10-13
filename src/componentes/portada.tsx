import Image from 'next/image';
import type { Contenido } from '@/content';
import { SITIO, enlaceCorreo } from '@/lib/sitio';

export function Portada({ c }: { c: Contenido }) {
  const p = c.portada;
  return (
    <>
      <section className="portada" aria-labelledby="titular">
        <div className="contenedor portada__rejilla">
          <div className="portada__texto">
            <p className="disponible">
              <span className="disponible__punto" aria-hidden="true" />
              {p.disponible}
            </p>
            <h1 id="titular" className="titular">
              <span className="titular__linea">{p.titular[0]}</span> <span className="titular__linea titular__linea--2">{p.titular[1]}</span>
            </h1>
            <p className="portada__subtitulo">{p.subtitulo}</p>
            <div className="acciones">
              <a className="boton boton--primario" href={enlaceCorreo(c.contacto.asunto, c.contacto.cuerpo)}>
                {p.ctaContacto}
              </a>
              <a className="boton boton--secundario" href="#trabajos">
                {p.ctaTrabajos}
              </a>
            </div>
          </div>
          <figure className="retrato">
            <div className="retrato__sol" aria-hidden="true" />
            <Image className="retrato__foto" src={SITIO.foto} alt={p.fotoAlt} width={480} height={480} sizes="(min-width: 960px) 340px, 240px" priority />
          </figure>
        </div>

        <div className="contenedor">
          <ul className="disciplinas">
            {c.disciplinas.map((d) => (
              <li key={d.titulo}>
                <h2>{d.titulo}</h2>
                <p>{d.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sello" aria-labelledby="sello-titulo">
        <div className="contenedor sello__rejilla">
          <div className="sello__nota" aria-hidden="true">
            <span className="sello__flecha">A+</span>
          </div>
          <div className="sello__texto">
            <h2 id="sello-titulo">
              {c.sello.titulo} <span>{c.sello.nota}</span>
            </h2>
            <p>{c.sello.detalle}</p>
            <a className="boton boton--sol" href={SITIO.analizador}>
              {c.sello.verificar}
            </a>
          </div>
          <ul className="sello__lista">
            {c.sello.cabeceras.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
