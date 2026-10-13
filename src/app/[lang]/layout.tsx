import type { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { connection } from 'next/server';
import '@fontsource-variable/bricolage-grotesque/wdth.css';
import '@fontsource-variable/atkinson-hyperlegible-next/wght.css';
import '../globals.css';
import { obtenerContenido } from '@/content';
import { IDIOMAS, esIdioma } from '@/lib/i18n';
import { SITIO } from '@/lib/sitio';

export function generateStaticParams() {
  return IDIOMAS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!esIdioma(lang)) return {};
  const c = obtenerContenido(lang);
  return {
    metadataBase: new URL(SITIO.url),
    title: c.meta.titulo,
    description: c.meta.descripcion,
    applicationName: SITIO.nombre,
    authors: [{ name: SITIO.nombre, url: SITIO.github }],
    alternates: { canonical: `/${lang}`, languages: { es: '/es', en: '/en', 'x-default': '/es' } },
    openGraph: {
      type: 'website',
      url: `/${lang}`,
      siteName: SITIO.nombre,
      title: c.meta.titulo,
      description: c.meta.descripcion,
      locale: c.meta.locale,
      alternateLocale: lang === 'es' ? ['en_GB'] : ['es_ES'],
    },
    twitter: { card: 'summary_large_image', title: c.meta.titulo, description: c.meta.descripcion },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F2F5F9' },
    { media: '(prefers-color-scheme: dark)', color: '#070F1C' },
  ],
};

export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  // Las páginas se generan en cada petición: cada una lleva su propio nonce de CSP.
  await connection();
  const { lang } = await params;
  if (!esIdioma(lang)) notFound();
  const nonce = (await headers()).get('x-nonce') ?? undefined;
  const c = obtenerContenido(lang);

  const datosEstructurados = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITIO.url}/#paco`,
        name: SITIO.nombre,
        url: `${SITIO.url}/${lang}`,
        image: `${SITIO.url}${SITIO.foto}`,
        jobTitle: lang === 'es' ? 'Desarrollador full-stack' : 'Full-stack developer',
        description: c.meta.descripcion,
        address: { '@type': 'PostalAddress', addressLocality: 'Málaga', addressCountry: 'ES' },
        knowsLanguage: ['es', 'en'],
        knowsAbout: ['Web development', 'Cybersecurity', 'Next.js', 'TypeScript', 'Supabase', 'Power BI'],
        sameAs: [SITIO.github, SITIO.instagram],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITIO.url}/#web`,
        url: SITIO.url,
        name: c.meta.titulo,
        inLanguage: lang,
        author: { '@id': `${SITIO.url}/#paco` },
      },
    ],
  };

  return (
    <html lang={lang} data-scroll-behavior="smooth">
      <body>
        <script type="application/ld+json" nonce={nonce} dangerouslySetInnerHTML={{ __html: JSON.stringify(datosEstructurados).replace(/</g, '\\u003c') }} />
        {children}
      </body>
    </html>
  );
}
