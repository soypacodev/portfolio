import { notFound } from 'next/navigation';
import { Cabecera } from '@/componentes/cabecera';
import { Certificaciones } from '@/componentes/certificaciones';
import { Contacto } from '@/componentes/contacto';
import { Pie } from '@/componentes/pie';
import { Portada } from '@/componentes/portada';
import { Servicios } from '@/componentes/servicios';
import { Sobre } from '@/componentes/sobre';
import { Trabajos } from '@/componentes/trabajos';
import { obtenerContenido } from '@/content';
import { esIdioma } from '@/lib/i18n';

export default async function Pagina({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!esIdioma(lang)) notFound();
  const c = obtenerContenido(lang);
  // Un único contenedor: con varios nodos hermanos, Next hace scrollIntoView en cada uno al navegar y,
  // con el desplazamiento suave activado, la página acababa animándose hasta el final.
  return (
    <div className="pagina">
      <a className="saltar" href="#principal">
        {c.accesibilidad.saltar}
      </a>
      <Cabecera lang={lang} c={c} />
      <main id="principal" tabIndex={-1}>
        <Portada c={c} />
        <Trabajos c={c} />
        <Servicios c={c} />
        <Certificaciones c={c} />
        <Sobre c={c} />
        <Contacto c={c} />
      </main>
      <Pie lang={lang} c={c} />
    </div>
  );
}
