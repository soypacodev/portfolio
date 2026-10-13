import { ImageResponse } from 'next/og';
import { Marca } from '@/componentes/marca';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icono() {
  return new ImageResponse(<Marca tamano={512} />, size);
}
