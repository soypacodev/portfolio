import Link from 'next/link';
import { headers } from 'next/headers';
import { obtenerContenido } from '@/content';
import { elegirIdioma, esIdioma } from '@/lib/i18n';

export default async function NoEncontrada() {
  // El idioma lo anota el proxy según la ruta; si no está, el del navegador.
  const h = await headers();
  const candidato = h.get('x-lang') ?? '';
  const lang = esIdioma(candidato) ? candidato : elegirIdioma(h.get('accept-language'));
  const c = obtenerContenido(lang);
  return (
    <main className="vacio" id="principal">
      <p className="vacio__codigo" aria-hidden="true">
        404
      </p>
      <h1>{c.noEncontrada.titulo}</h1>
      <p>{c.noEncontrada.texto}</p>
      <Link className="boton boton--primario" href={`/${lang}`}>
        {c.noEncontrada.volver}
      </Link>
    </main>
  );
}
