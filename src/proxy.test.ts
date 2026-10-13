import { NextRequest } from 'next/server';
import { describe, expect, it } from 'vitest';
import { proxy } from './proxy';

const pedir = (ruta: string, cabeceras: Record<string, string> = {}) => proxy(new NextRequest(`https://soypacodev.vercel.app${ruta}`, { headers: cabeceras }));

describe('proxy', () => {
  it('lleva la raíz al idioma del navegador', () => {
    const r = pedir('/', { 'accept-language': 'en-GB,en;q=0.9' });
    expect(r.status).toBe(307);
    expect(new URL(r.headers.get('location') ?? '').pathname).toBe('/en');
    expect(r.headers.get('vary')).toContain('accept-language');
  });

  it('usa español si no hay preferencia', () => {
    expect(new URL(pedir('/').headers.get('location') ?? '').pathname).toBe('/es');
  });

  it('antepone el idioma a rutas sin él', () => {
    expect(new URL(pedir('/privacidad', { 'accept-language': 'en' }).headers.get('location') ?? '').pathname).toBe('/en/privacidad');
  });

  it('no redirige las rutas que ya llevan idioma, y les pone una CSP con nonce propio', () => {
    const a = pedir('/es');
    const b = pedir('/en');
    expect(a.status).toBe(200);
    const politicaA = a.headers.get('content-security-policy') ?? '';
    const politicaB = b.headers.get('content-security-policy') ?? '';
    expect(politicaA).toMatch(/script-src 'self' 'nonce-[^']+' 'strict-dynamic'/);
    expect(politicaA).toContain("frame-ancestors 'none'");
    expect(politicaA).toContain('upgrade-insecure-requests');
    const scripts = politicaA.split(';').find((d) => d.trim().startsWith('script-src')) ?? '';
    expect(scripts).not.toContain('unsafe-inline');
    expect(scripts).not.toContain('unsafe-eval');
    expect(politicaA).not.toBe(politicaB);
  });

  it('no deja pasar un idioma que no existe', () => {
    expect(pedir('/fr').status).toBe(307);
    expect(new URL(pedir('/fr').headers.get('location') ?? '').pathname).toBe('/es/fr');
  });
});
