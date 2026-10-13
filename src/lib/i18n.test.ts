import { describe, expect, it } from 'vitest';
import { elegirIdioma, esIdioma } from './i18n';

describe('elegirIdioma', () => {
  it('usa español si no hay cabecera', () => {
    expect(elegirIdioma(null)).toBe('es');
    expect(elegirIdioma('')).toBe('es');
  });
  it('elige inglés para variantes del inglés', () => {
    expect(elegirIdioma('en')).toBe('en');
    expect(elegirIdioma('en-GB,en;q=0.9')).toBe('en');
    expect(elegirIdioma('EN-us')).toBe('en');
  });
  it('respeta el orden de preferencia y los pesos', () => {
    expect(elegirIdioma('es-ES,es;q=0.9,en;q=0.8')).toBe('es');
    expect(elegirIdioma('en;q=0.9,es;q=0.5')).toBe('en');
    expect(elegirIdioma('fr,en;q=0.8,es;q=0.7')).toBe('en');
  });
  it('ignora idiomas rechazados (q=0) y desconocidos', () => {
    expect(elegirIdioma('en;q=0,es')).toBe('es');
    expect(elegirIdioma('de,fr;q=0.8')).toBe('es');
    expect(elegirIdioma('*')).toBe('es');
  });
  it('no se rompe con basura', () => {
    expect(elegirIdioma(';;;,,,q=')).toBe('es');
    expect(elegirIdioma('en;q=abc')).toBe('es');
  });
});

describe('esIdioma', () => {
  it('solo acepta los idiomas del sitio', () => {
    expect(esIdioma('es')).toBe(true);
    expect(esIdioma('en')).toBe(true);
    expect(esIdioma('fr')).toBe(false);
    expect(esIdioma('')).toBe(false);
    expect(esIdioma('constructor')).toBe(false);
  });
});
