import type { Contenido } from '@/content';
import { CopiarCorreo } from '@/componentes/copiar-correo';
import { SITIO, enlaceCorreo } from '@/lib/sitio';

export function Contacto({ c }: { c: Contenido }) {
  const k = c.contacto;
  return (
    <section id="contacto" className="contacto" aria-labelledby="contacto-titulo">
      <div className="contenedor contacto__rejilla">
        <div>
          <h2 id="contacto-titulo" className="contacto__titulo">
            {k.titulo}
          </h2>
          <p className="contacto__texto">{k.texto}</p>
        </div>
        <div className="contacto__acciones">
          <a className="contacto__correo" href={enlaceCorreo(k.asunto, k.cuerpo)}>
            <span className="visualmente-oculto">{k.correoEtiqueta}: </span>
            {SITIO.correo}
          </a>
          <CopiarCorreo correo={SITIO.correo} etiqueta={k.copiar} confirmacion={k.copiado} />
          <p className="contacto__respuesta">{k.respuesta}</p>
          <ul className="contacto__redes">
            {k.redes.map((r) => (
              <li key={r.href}>
                <a href={r.href}>{r.etiqueta}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
