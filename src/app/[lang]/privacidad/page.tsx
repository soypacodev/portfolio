import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PaginaLegal } from '@/componentes/pagina-legal';
import { obtenerContenido } from '@/content';
import { esIdioma } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!esIdioma(lang)) return {};
  const d = obtenerContenido(lang).legal.privacidad;
  return {
    title: `${d.titulo} · Paco López`,
    description: d.descripcion,
    alternates: { canonical: `/${lang}/privacidad`, languages: { es: '/es/privacidad', en: '/en/privacidad', 'x-default': '/es/privacidad' } },
  };
}

export default async function Pagina({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!esIdioma(lang)) notFound();
  return <PaginaLegal lang={lang} c={obtenerContenido(lang)} documento="privacidad" />;
}
