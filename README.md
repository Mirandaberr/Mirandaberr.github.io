# mirandaberr.github.io

Sitio personal: experiencia, escritos técnicos y CV. Hecho con [Astro](https://astro.build) y
publicado en GitHub Pages con GitHub Actions (`.github/workflows/deploy.yml`) en cada push a `main`.

## Desarrollo

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Dónde editar

| Qué | Archivo |
|---|---|
| Datos generales (email, LinkedIn, URL) | `src/data/sitio.mjs` |
| Presentación, destacados, experiencia, habilidades | `src/data/perfil.ts` |
| Escritos | `src/content/escritos/*.md` |
| CV descargable (ES / EN) | `public/cv/CV_Jorge_Miranda_Software_Engineer.pdf`, `public/cv/CV_Jorge_Miranda_Software_Engineer_EN.pdf` |

## Escritos

Cada escrito es un `.md` con este frontmatter:

```yaml
titulo: "..."
resumen: "..."
fecha: 2026-10-01
etiquetas: ["Kafka"]
borrador: true   # no se publica mientras sea true
```

El enlace "Escritos" del menú aparece solo cuando hay al menos uno publicado.

Los borradores van en `src/content/escritos/borradores/`, que está en `.gitignore`: no se suben
al repo (que es público) hasta revisarlos. Para publicar uno, muévelo a `src/content/escritos/`
y cambia `borrador` a `false`.

## CV

Los PDFs públicos son la versión sin teléfono. Se generan desde las fuentes del CV con:

```sh
~/Documents/perfil-profesional/fuentes/generar_pdf.sh --web public/cv/CV_Jorge_Miranda_Software_Engineer.pdf
~/Documents/perfil-profesional/fuentes/generar_pdf.sh --en --web public/cv/CV_Jorge_Miranda_Software_Engineer_EN.pdf
```
