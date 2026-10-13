import type { Contenido } from '@/content';

export function Servicios({ c }: { c: Contenido }) {
  const s = c.servicios;
  return (
    <section id="servicios" className="seccion servicios" aria-labelledby="servicios-titulo">
      <div className="contenedor">
        <div className="seccion__cabecera">
          <h2 id="servicios-titulo" className="seccion__titulo">
            {s.titulo}
          </h2>
          <p className="seccion__intro">{s.intro}</p>
        </div>

        <ul className="servicios__lista">
          {s.items.map((it) => (
            <li key={it.id} className="servicio">
              <h3>{it.titulo}</h3>
              <p>{it.texto}</p>
              <h4>{s.incluyeEtiqueta}</h4>
              <ul>
                {it.incluye.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="proceso">
          <h3>{s.proceso.titulo}</h3>
          <ol>
            {s.proceso.pasos.map((p) => (
              <li key={p.titulo}>
                <h4>{p.titulo}</h4>
                <p>{p.texto}</p>
              </li>
            ))}
          </ol>
          <p className="proceso__nota">{s.nota}</p>
        </div>
      </div>
    </section>
  );
}
