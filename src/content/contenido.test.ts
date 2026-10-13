import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { en } from './en';
import { es } from './es';
import type { Contenido } from './tipos';

const IDIOMAS: [string, Contenido][] = [
  ['es', es],
  ['en', en],
];
const RAIZ = join(__dirname, '..', '..');

/** Todos los textos de un contenido, para buscar cosas que no deben aparecer. */
function textos(valor: unknown): string[] {
  if (typeof valor === 'string') return [valor];
  if (Array.isArray(valor)) return valor.flatMap(textos);
  if (valor && typeof valor === 'object') return Object.values(valor).flatMap(textos);
  return [];
}

/** La forma (claves y longitudes de listas) sin los textos, para comparar idiomas. */
function forma(valor: unknown): unknown {
  if (Array.isArray(valor)) return valor.map(forma);
  if (valor && typeof valor === 'object') return Object.fromEntries(Object.entries(valor).map(([k, v]) => [k, forma(v)]));
  return typeof valor;
}

describe('contenido', () => {
  it('español e inglés tienen exactamente la misma estructura', () => {
    expect(forma(en)).toEqual(forma(es));
  });

  it('los datos que no cambian de idioma son idénticos (enlaces, imágenes, años, tecnologías)', () => {
    const fijos = (c: Contenido) => ({
      trabajos: c.trabajos.items.map((t) => ({ id: t.id, tema: t.tema, pila: t.pila, enlaces: t.enlaces.map((l) => l.href), imagenes: t.imagenes.map((i) => [i.src, i.ancho, i.alto]) })),
      servicios: c.servicios.items.map((s) => s.id),
      certificaciones: c.certificaciones.items.map((x) => [x.emisor, x.anio]),
      redes: c.contacto.redes.map((r) => r.href),
      nav: c.nav.map((n) => n.id),
    });
    expect(fijos(en)).toEqual(fijos(es));
  });

  it.each(IDIOMAS)('%s: ningún texto está vacío', (_idioma, c) => {
    for (const t of textos(c)) expect(t.trim(), 'texto vacío').not.toBe('');
  });

  it.each(IDIOMAS)('%s: título y descripción caben en los buscadores', (_idioma, c) => {
    expect(c.meta.titulo.length).toBeLessThanOrEqual(60);
    expect(c.meta.descripcion.length).toBeGreaterThanOrEqual(70);
    expect(c.meta.descripcion.length).toBeLessThanOrEqual(160);
  });

  it.each(IDIOMAS)('%s: no publica datos privados', (_idioma, c) => {
    const todo = textos(c).join('\n');
    // Teléfonos (secuencias de 9 o más cifras, con o sin separadores).
    expect(todo).not.toMatch(/(?<!\d)(\+?\d[\s.-]?){9,}(?!\d)/);
    // Documentos de identidad y direcciones.
    expect(todo).not.toMatch(/\b\d{8}[A-Z]\b|\b[XYZ]\d{7}[A-Z]\b/);
    expect(todo).not.toMatch(/\b(calle|c\/|avenida|avda\.|plaza)\s/i);
    expect(todo).not.toMatch(/fecha de nacimiento|date of birth|curr[ií]culum|\bCV\b/i);
    // El único correo es el de contacto.
    const correos = todo.match(/[\w.+-]+@[\w-]+\.[\w-]+(?:\.[\w-]+)*/g) ?? [];
    expect([...new Set(correos)]).toEqual(['soypacodev@gmail.com']);
  });

  it.each(IDIOMAS)('%s: todos los enlaces externos son https', (_idioma, c) => {
    const enlaces = [...c.trabajos.items.flatMap((t) => t.enlaces), ...c.contacto.redes];
    expect(enlaces.length).toBeGreaterThan(0);
    for (const e of enlaces) expect(e.href).toMatch(/^https:\/\//);
  });

  it.each(IDIOMAS)('%s: cada imagen existe, tiene texto alternativo y mide lo que dice', (_idioma, c) => {
    for (const t of c.trabajos.items) {
      expect(t.imagenes.length).toBeGreaterThan(0);
      for (const i of t.imagenes) {
        expect(i.alt.length, i.src).toBeGreaterThan(20);
        expect(existsSync(join(RAIZ, 'public', i.src)), i.src).toBe(true);
        expect(i.ancho).toBeGreaterThan(0);
        expect(i.alto).toBeGreaterThan(0);
      }
    }
  });

  it('los ids de las secciones del menú existen en la página', () => {
    const fuentes = ['trabajos', 'servicios', 'certificaciones', 'sobre', 'contacto'].map((f) => readFileSync(join(RAIZ, 'src', 'componentes', `${f}.tsx`), 'utf8')).join('\n');
    for (const n of es.nav) expect(fuentes).toContain(`id="${n.id}"`);
  });

  it('el sello de seguridad afirma lo que la web cumple (cabeceras y proxy)', () => {
    const config = readFileSync(join(RAIZ, 'next.config.ts'), 'utf8');
    expect(config).toContain('max-age=63072000');
    expect(config).toContain('poweredByHeader: false');
    expect(readFileSync(join(RAIZ, 'src', 'lib', 'seguridad', 'csp.ts'), 'utf8')).toContain("'strict-dynamic'");
  });
});
