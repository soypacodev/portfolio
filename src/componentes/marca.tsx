import { MARCA } from '@/lib/sitio';

/** Trazos de la «P» y el punto, en una cuadrícula de 64×64. Los usan la cabecera y los iconos. */
export const TRAZO_P = 'M19 13h16a12.5 12.5 0 0 1 0 25H29v13H19z M29 22v8h6a4 4 0 0 0 0-8z';
export const PUNTO = { cx: 47, cy: 47, r: 6 } as const;

export function Marca({ tamano = 36 }: { tamano?: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="15" fill={MARCA.tinta} />
      <path d={TRAZO_P} fill="#fff" fillRule="evenodd" />
      <circle {...PUNTO} fill={MARCA.sol} />
    </svg>
  );
}
