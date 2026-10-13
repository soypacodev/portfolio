'use client';

import { useEffect, useRef, useState } from 'react';

/** Copia el correo al portapapeles. Si el navegador no lo permite, el botón no hace nada y el enlace de correo sigue funcionando. */
export function CopiarCorreo({ correo, etiqueta, confirmacion }: { correo: string; etiqueta: string; confirmacion: string }) {
  const [copiado, setCopiado] = useState(false);
  const temporizador = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (temporizador.current) clearTimeout(temporizador.current);
    },
    [],
  );

  async function copiar() {
    try {
      await navigator.clipboard.writeText(correo);
    } catch {
      return;
    }
    setCopiado(true);
    if (temporizador.current) clearTimeout(temporizador.current);
    temporizador.current = setTimeout(() => setCopiado(false), 2500);
  }

  return (
    <>
      <button type="button" className="contacto__copiar" onClick={copiar}>
        {copiado ? confirmacion : etiqueta}
      </button>
      <span className="visualmente-oculto" role="status" aria-live="polite">
        {copiado ? confirmacion : ''}
      </span>
    </>
  );
}
