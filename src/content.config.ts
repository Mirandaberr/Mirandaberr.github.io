import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const escritos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/escritos' }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),
    fecha: z.coerce.date(),
    etiquetas: z.array(z.string()).default([]),
    // Los borradores no se publican; sirven para escribir con calma.
    borrador: z.boolean().default(false),
  }),
});

export const collections = { escritos };
