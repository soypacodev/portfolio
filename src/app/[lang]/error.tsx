'use client';

import { useParams } from 'next/navigation';
import { obtenerContenido } from '@/content';
import { esIdioma } from '@/lib/i18n';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  const { lang } = useParams<{ lang: string }>();
  const c = obtenerContenido(esIdioma(lang) ? lang : 'es');
  return (
    <main className="vacio" id="principal">
      <h1>{c.error.titulo}</h1>
      <p>{c.error.texto}</p>
      <button type="button" className="boton boton--primario" onClick={reset}>
        {c.error.reintentar}
      </button>
    </main>
  );
}
