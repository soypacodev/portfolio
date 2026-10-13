import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { notFound } from 'next/navigation';
import { obtenerContenido } from '@/content';
import { esIdioma } from '@/lib/i18n';
import { MARCA } from '@/lib/sitio';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Paco López · Desarrollador full-stack · Full-stack developer';

async function fuentes() {
  const leer = (a: string) => readFile(join(process.cwd(), 'assets/fuentes', a));
  const [titulo, texto, negrita] = await Promise.all([
    leer('bricolage-grotesque-latin-800-normal.woff'),
    leer('atkinson-hyperlegible-next-latin-400-normal.woff'),
    leer('atkinson-hyperlegible-next-latin-700-normal.woff'),
  ]);
  return [
    { name: 'Bricolage', data: titulo, weight: 800 as const, style: 'normal' as const },
    { name: 'Atkinson', data: texto, weight: 400 as const, style: 'normal' as const },
    { name: 'Atkinson', data: negrita, weight: 700 as const, style: 'normal' as const },
  ];
}

export default async function Imagen({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!esIdioma(lang)) notFound();
  const c = obtenerContenido(lang);
  const foto = `data:image/jpeg;base64,${(await readFile(join(process.cwd(), 'public/paco-lopez.jpg'))).toString('base64')}`;
  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', background: MARCA.tinta, color: '#fff', fontFamily: 'Atkinson', position: 'relative' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 780, padding: '0 0 0 72px' }}>
          <div style={{ display: 'flex', fontSize: 34, fontWeight: 700, color: MARCA.sol, marginBottom: 22 }}>Paco López · {lang === 'es' ? 'Desarrollador full-stack' : 'Full-stack developer'}</div>
          <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Bricolage', fontWeight: 800, fontSize: 78, lineHeight: 1.02, letterSpacing: -2 }}>
            <div style={{ display: 'flex' }}>{c.portada.titular[0]}</div>
            <div style={{ display: 'flex', color: '#8FA8FF' }}>{c.portada.titular[1]}</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 420 }}>
          <div style={{ display: 'flex', width: 310, height: 310, borderRadius: 310, background: MARCA.sol, alignItems: 'center', justifyContent: 'center' }}>
            <img src={foto} alt="" width={286} height={286} style={{ borderRadius: 286 }} />
          </div>
        </div>
        <div style={{ display: 'flex', position: 'absolute', left: 72, bottom: 40, fontSize: 28, color: '#A5B4CC' }}>soypacodev.vercel.app</div>
      </div>
    ),
    { ...size, fonts: await fuentes() },
  );
}
