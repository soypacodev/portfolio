import type { Contenido } from '@/content';

export function Sobre({ c }: { c: Contenido }) {
  return (
    <section id="sobre-mi" className="seccion sobre" aria-labelledby="sobre-titulo">
      <div className="contenedor sobre__rejilla">
        <h2 id="sobre-titulo" className="seccion__titulo">
          {c.sobre.titulo}
        </h2>
        <div className="sobre__texto">
          {c.sobre.parrafos.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
