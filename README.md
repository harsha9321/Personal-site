# Personal Site — Sreeharsha Dandamudi

A responsive, single-page personal website highlighting my work experience and
technical skills as a Senior Application Developer.

## Sections

- **Hero** — intro and quick links
- **About** — background and key stats
- **Skills** — languages, frameworks, cloud/DevOps, data & tooling
- **Experience** — timeline of roles (Barclays, PGIM, Broadridge, Rutgers)
- **Education** — B.S. Computer Science, Rutgers University
- **Contact** — email, phone, LinkedIn, GitHub

## Tech

Plain HTML, CSS, and vanilla JavaScript — no build step. Features a
light/dark theme toggle (persisted to `localStorage`), a responsive mobile
nav, and scroll-reveal animations.

## Running locally

It's a static site, so just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page markup and content |
| `styles.css` | Styling, theme variables, responsive layout |
| `script.js` | Theme toggle, mobile nav, scroll animations |
| `profile.jpg` | Profile photo |
