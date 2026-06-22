# Computational Neuroanatomy Lab — Website

Source for the [Computational Neuroanatomy Lab](https://cnalab.dev) website, led by
Dr. Ali Abdollahzadeh at the A.I. Virtanen Institute for Molecular Sciences,
University of Eastern Finland.

The lab studies the statistical properties and organizational principles of brain
tissue microstructure — bridging electron-microscopy ultrastructure and the
macroscopic diffusion-MRI signal.

## Tech

A static site hosted on **GitHub Pages** (custom domain set via [`CNAME`](CNAME)).
The home page is a single page that loads each section as an HTML fragment.

## Structure

| File | Purpose |
| --- | --- |
| [`index.html`](index.html) | Shell: header, nav, footer, and the tab/section loader |
| [`team_members.html`](team_members.html) | Team section fragment |
| [`research.html`](research.html) | Research section fragment |
| [`publications.html`](publications.html) | Publications section fragment |
| [`resources.html`](resources.html) | Resources section fragment |
| [`theme.css`](theme.css) | Design tokens (light/dark) and shared component styles |
| [`theme.js`](theme.js) | Theme toggle, OS-preference detection, persistence |
| `*.css` | Per-section styles (`team_members.css`, `research.css`, `publications.css`) |
| `images/` | Logos, photos, and project figures |

## Theming

Colors are defined once as CSS custom properties in [`theme.css`](theme.css).
Light is the default; dark mode applies via `[data-theme="dark"]` on `<html>`.
The toggle in the header remembers the choice in `localStorage` and falls back to
the visitor's OS preference (`prefers-color-scheme`) on first visit.

To adjust the palette, edit the `:root` (light) and `[data-theme="dark"]` token
blocks at the top of `theme.css` — no component CSS needs to change.

## Local preview

Because sections are fetched at runtime, open the site through a local server
(not `file://`):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Editing content

- **Team members** — edit [`team_members.html`](team_members.html). Photos live in
  `images/`; add the `circular` class to a `team-photo` for a round crop.
- **Publications / Research / Resources** — edit the matching fragment file.
