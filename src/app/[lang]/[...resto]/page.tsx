import { notFound } from 'next/navigation';

// Cualquier ruta que no exista bajo /es o /en acaba en la página 404 con su idioma.
export default function NoExiste(): never {
  notFound();
}
