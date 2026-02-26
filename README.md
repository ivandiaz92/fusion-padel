# Fusion Padel — Sitio web

Sitio oficial de **Fusion Padel**, el primer club de pádel con canchas climatizadas en Monterrey, NL.

## Características

- **Responsive**: Diseño fluido y adaptable a móvil, tablet y desktop.
- **SEO**: Meta tags, Open Graph, Twitter Cards, JSON-LD (Schema.org) y sitemap.
- **Accesibilidad**: Enfoque en contraste, focus visible y navegación por teclado.
- **Microinteracciones**: Reveal al scroll, hover en tarjetas y botones, animación del hero.

## Estructura del proyecto

```
fusion-padel/
├── index.html          # Página principal
├── css/
│   ├── variables.css   # Tokens (colores, tipografía, espaciado)
│   ├── base.css       # Reset y estilos base
│   ├── components.css # Header, nav, botones, logo
│   ├── sections.css   # Hero, servicios, stats, membresías, coaches, contacto, footer
│   └── responsive.css # Breakpoints, reduced motion, print
├── js/
│   └── main.js        # Menú móvil, scroll reveal, header, formulario
├── images/            # Logo e imágenes (añade aquí tu logo e imágenes)
├── robots.txt
├── sitemap.xml
└── README.md
```

## Cómo añadir logo e imágenes

1. **Logo**  
   Coloca tu archivo de logo en `images/logo.svg` (o `logo.png`).  
   Si usas PNG, en `index.html` cambia `images/logo.svg` por `images/logo.png` en los dos `<img class="logo__img">`.

2. **Imágenes de instalaciones**  
   En la sección “Instalaciones”, sustituye el bloque con clase `instalaciones__placeholder` por:
   ```html
   <img src="images/instalaciones.jpg" alt="Canchas climatizadas Fusion Padel">
   ```

3. **Fotos de coaches**  
   En cada `coach-card`, reemplaza el `div.coach-card__placeholder` por:
   ```html
   <img src="images/coach-mauri.jpg" alt="Mauri Andrini - Coach Fusion Padel">
   ```
   (y equivalentes para los otros coaches).

## Ejecutar en local

Abre `index.html` en el navegador o sirve la carpeta con un servidor local, por ejemplo:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .
```

Luego visita `http://localhost:8000`.

## SEO y redes sociales

- Actualiza la URL canónica y las de Open Graph en `<head>` cuando tengas el dominio definitivo.
- Añade una imagen para redes (por ejemplo `og-image.jpg` en la raíz) y referénciala en `og:image` y `twitter:image`.

---

© Fusion Padel. Proyecto base listo para personalizar con tu marca e imágenes.
