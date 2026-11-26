# Agencias Poc Chuc — Sitio web

Sitio oficial de **Agencias Poc Chuc**, agencia de viajes boutique mexicana especialista
en *viajes de deber*: competencias deportivas, viajes de trabajo recurrentes y
obligaciones familiares.

> **Precisión suiza. Carácter mexicano.**
> Viajar bien no es suerte. Depende de quién lo arme.

Dominio: **[pocchuc.mx](https://pocchuc.mx)**

> ⚠️ En desarrollo activo. Las páginas interiores son stubs y se irán construyendo por fases.

## Stack

- **[Astro](https://astro.build) 4.x** — generación de sitios estáticos (SSG), óptimo para SEO
- **[Tailwind CSS](https://tailwindcss.com) 3.x** — vía `@astrojs/tailwind`, con los tokens del design system
- **Fuente única:** Inter (300–700) vía Google Fonts
- **Tipografía fluida** y **dark theme** por defecto
- **Deploy:** Netlify desde GitHub

## Comandos

Todos se ejecutan desde la raíz del proyecto:

| Comando            | Acción                                             |
| ------------------ | -------------------------------------------------- |
| `npm install`      | Instala las dependencias                           |
| `npm run dev`      | Servidor de desarrollo en `http://localhost:4321`  |
| `npm run build`    | Compila el sitio de producción en `./dist/`        |
| `npm run preview`  | Previsualiza el build localmente                   |

## Estructura

```
src/
  layouts/   BaseLayout.astro   — layout global, SEO, tipografía fluida, fuentes
  components/ Nav.astro, Footer.astro — navegación y pie de página globales
  pages/     index.astro + stubs (grupos-deportivos, ejecutivos, como-trabajamos,
             casos, sobre, contacto)
```

## Contacto

roberto@pocchuc.mx
