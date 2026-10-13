import type { Contenido } from '@/content';

export function Certificaciones({ c }: { c: Contenido }) {
  const s = c.certificaciones;
  return (
    <section id="certificaciones" className="seccion certificaciones" aria-labelledby="cert-titulo">
      <div className="contenedor">
        <div className="seccion__cabecera">
          <h2 id="cert-titulo" className="seccion__titulo">
            {s.titulo}
          </h2>
          <p className="seccion__intro">{s.intro}</p>
        </div>
        <ul className="certificados">
          {s.items.map((it) => (
            <li key={it.nombre}>
              <span className="certificados__nombre">{it.nombre}</span>
              <span className="certificados__emisor">{it.emisor}</span>
              <span className="certificados__anio">{it.anio}</span>
            </li>
          ))}
        </ul>
        <p className="certificaciones__nota">{s.nota}</p>
      </div>
    </section>
  );
}
