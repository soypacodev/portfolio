import { NextResponse, type NextRequest } from 'next/server';
import { elegirIdioma, esIdioma } from '@/lib/i18n';
import { politicaSeguridad } from '@/lib/seguridad/csp';

// Dos tareas: llevar a cada visitante a su idioma y ponerle a cada página su política de seguridad con un nonce nuevo.
export function proxy(peticion: NextRequest) {
  const { pathname } = peticion.nextUrl;
  const primero = pathname.split('/')[1] ?? '';

  if (!esIdioma(primero)) {
    const destino = peticion.nextUrl.clone();
    const resto = pathname === '/' ? '' : pathname;
    destino.pathname = `/${elegirIdioma(peticion.headers.get('accept-language'))}${resto}`;
    const respuesta = NextResponse.redirect(destino, 307);
    respuesta.headers.set('vary', 'accept-language');
    return respuesta;
  }

  const nonce = btoa(crypto.randomUUID());
  const https = peticion.nextUrl.protocol === 'https:' || peticion.headers.get('x-forwarded-proto') === 'https';
  const politica = politicaSeguridad(nonce, process.env.NODE_ENV === 'development', https);

  const cabeceras = new Headers(peticion.headers);
  cabeceras.set('x-nonce', nonce);
  cabeceras.set('x-lang', primero);
  cabeceras.set('content-security-policy', politica);

  const respuesta = NextResponse.next({ request: { headers: cabeceras } });
  respuesta.headers.set('content-security-policy', politica);
  return respuesta;
}

export const config = {
  matcher: [{ source: '/((?!_next/static|_next/image|favicon.ico|icon|apple-icon|robots.txt|sitemap.xml|img/|paco-lopez\\.jpg).*)' }],
};
