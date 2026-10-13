import { ImageResponse } from 'next/og';
import { MARCA } from '@/lib/sitio';
import { PUNTO, TRAZO_P } from '@/componentes/marca';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

// iOS recorta las esquinas por su cuenta: el fondo va a sangre.
export default function IconoApple() {
  return new ImageResponse(
    (
      <svg width={180} height={180} viewBox="0 0 64 64">
        <rect width="64" height="64" fill={MARCA.tinta} />
        <path d={TRAZO_P} fill="#fff" fillRule="evenodd" />
        <circle {...PUNTO} fill={MARCA.sol} />
      </svg>
    ),
    size,
  );
}
