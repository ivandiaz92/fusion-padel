# SEO — Fusion Padel

This document describes everything implemented for **search engine optimization** and discoverability of the Fusion Padel website.

---

## 1. Basic meta tags (`index.html`)

| Tag | Purpose |
|-----|--------|
| `charset="UTF-8"` | Correct character encoding. |
| `name="viewport"` | Responsive behavior (also relevant for mobile-first indexing). |
| `name="description"` | Primary meta description with key terms: Fusion Padel, club de pádel, canchas climatizadas, Monterrey, instalaciones, membresías, clases, torneos. |
| `name="keywords"` | Keywords: pádel, padel, Monterrey, canchas climatizadas, club padel, clases padel, membresías padel, Fusion Padel. |
| `name="author"` | Brand attribution. |
| `name="robots"` | `index, follow` so search engines can index and follow links. |
| `link rel="canonical"` | Canonical URL `https://fusionpadel.com/` to avoid duplicate content. |

---

## 2. Title tag

- **Value**: `Fusion Padel | El primer club de pádel con canchas climatizadas en Monterrey, NL`
- Single, descriptive title with brand and main value proposition and location (Monterrey, NL).

---

## 3. Open Graph (Facebook / social)

All in `<head>`:

- `og:type` = website  
- `og:url` = canonical URL  
- `og:title` = short, shareable title  
- `og:description` = share description  
- `og:image` = `https://fusionpadel.com/og-image.jpg` (to be added by you)  
- `og:locale` = es_MX  
- `og:site_name` = Fusion Padel  

This ensures consistent, rich previews when the site is shared on Facebook and other OG-supported platforms.

---

## 4. Twitter Cards

- `twitter:card` = summary_large_image  
- `twitter:title` = short title  
- `twitter:description` = one-line description  

Twitter will show a large-image card when `og:image` (or a dedicated `twitter:image`) is available.

---

## 5. Performance hints (crawlability / UX)

- **Preconnect**: `preconnect` to `fonts.googleapis.com` and `fonts.gstatic.com` to speed up font loading, which can help Core Web Vitals and perceived performance (indirectly favorable for SEO).

---

## 6. Structured data (JSON-LD)

A single `<script type="application/ld+json">` block in the `<head>` describes the business as a **SportsActivityLocation** (Schema.org):

- **@type**: SportsActivityLocation  
- **name**: Fusion Padel  
- **description**: Full sentence including instalaciones, membresías, clases, torneos, tienda.  
- **url**: https://fusionpadel.com  
- **address**: addressLocality (Monterrey), addressRegion (Nuevo León), addressCountry (MX).  
- **sport**: Padel  
- **amenityFeature**: Canchas climatizadas, Clases privadas, Tienda, Renta de complejo (all true).  

This helps search engines understand the business type, location, and services and can enable rich results (e.g. local panels, knowledge cards).

---

## 7. Sitemap & robots

- **sitemap.xml**: One URL (`https://fusionpadel.com/`) with `lastmod`, `changefreq` (weekly), `priority` (1.0).  
- **robots.txt**: `User-agent: *` with `Allow: /` and `Sitemap: https://fusionpadel.com/sitemap.xml`.  

This guides crawlers to the canonical homepage and confirms the site is open to indexing.

---

## 8. Semantic HTML & accessibility (SEO-related)

- **Language**: `<html lang="es">` so search engines know the content is in Spanish.  
- **Landmarks**: `<header role="banner">`, `<main id="main">`, `<footer role="contentinfo">`, `<nav aria-label="…">`.  
- **Headings**: Single `<h1>` in the hero; sections use `<h2>` and cards use `<h3>` in a logical order.  
- **Section labels**: `aria-labelledby` and `id` linking section titles (e.g. `id="instalaciones-title"`).  
- **Skip link**: “Ir al contenido principal” links to `#main` for keyboard users; improves usability and crawlability of main content.  

Good structure and accessibility support both users and search engines.

---

## 9. Summary

The project is **optimized for SEO** with: unique title and meta description, canonical URL, Open Graph and Twitter Cards, JSON-LD structured data (SportsActivityLocation), sitemap and robots.txt, semantic HTML, correct language, and performance hints. No changes were made for this confirmation; this document only describes what is already implemented. When you add the logo and images, remember to add **og-image.jpg** (and optionally **twitter:image**) for full social and SEO benefit.
