# Ajil C — Developer Portfolio

A personal portfolio website for **Ajil C**, Python Full Stack & Frontend Developer based in Kayamkulam, Kerala, India. Built as a clean, responsive, three-file static site — no frameworks, no build tools, no dependencies except Google Fonts.

---

## Live Preview

> Open `index.html` directly in a browser, or deploy the folder to any static host.

---

## Project Structure

```
portfolio/
├── index.html      # Markup — all sections and semantic HTML
├── style.css       # All styles, design tokens, and embedded hero photo
├── script.js       # Nav toggle, scroll-spy, scroll reveal, typewriter effect
└── README.md       # This file
```

> All three files must stay in the **same folder** for the site to work correctly.

---

## Sections

| Section  | ID            | Description                                                                            |
| -------- | ------------- | -------------------------------------------------------------------------------------- |
| Hero     | `#hero`       | Full-viewport intro with photo background, name typewriter effect, CTAs, and key stats |
| About    | `#about`      | Two-paragraph bio + quick-facts card with language proficiency bars                    |
| Skills   | `#skills`     | Terminal-window styled grid grouped by category (Frontend, Backend, Database, Tools)   |
| Projects | `#projects`   | Three project cards with descriptions, tech badges, and GitHub links                   |
| Journey  | `#experience` | Education and training timeline from 2019 to present                                   |
| Contact  | `#contact`    | Email link, LinkedIn, GitHub, phone — with footer signature                            |

---

## Design System

### Color Palette

| Token           | Hex       | Role                                        |
| --------------- | --------- | ------------------------------------------- |
| `--navy`        | `#0C0606` | Page background                             |
| `--navy-card`   | `#140808` | Card and section surfaces                   |
| `--navy-border` | `#371010` | Dividers and borders                        |
| `--navy-mid`    | `#4A1515` | Terminal bar and mid surfaces               |
| `--cyan`        | `#B32624` | Primary accent — links, CTAs, active states |
| `--cyan-dim`    | `#8F1D1C` | Hover / dimmed accent                       |
| `--text-hi`     | `#F5ECEC` | Headings and high-emphasis text             |
| `--text-mid`    | `#B89090` | Body copy                                   |
| `--text-lo`     | `#6E4848` | Labels, metadata, placeholders              |

### Typography

| Face               | Usage                                                  |
| ------------------ | ------------------------------------------------------ |
| **Space Grotesk**  | Display headings, nav logo, CTAs, section titles       |
| **Inter**          | All body copy and paragraph text                       |
| **JetBrains Mono** | Section eyebrows, skill tags, terminal UI, code labels |

### Breakpoints

| Breakpoint               | Behaviour                                                        |
| ------------------------ | ---------------------------------------------------------------- |
| `> 768px`                | Full desktop layout — two-column about, multi-column skills grid |
| `≤ 768px`                | Single column, hamburger nav with slide-down drawer              |
| `≤ 480px`                | Stacked CTAs, single-column skills terminal                      |
| `prefers-reduced-motion` | All animations and transitions disabled                          |

---

## Features

- **Sticky glass-morphism nav** with scroll-spy — active section highlights automatically as you scroll
- **Hero photo background** — illustration embedded as base64 JPEG (no external image file needed)
- **Typewriter effect** on hero name with blinking cursor
- **Scroll reveal** — sections animate in as they enter the viewport using `IntersectionObserver`
- **Mobile hamburger nav** — toggles between ☰ and ✕ icons, closes on outside click or `Escape`
- **Accessible** — semantic HTML5, ARIA labels, visible keyboard focus states, sufficient color contrast
- **Zero dependencies** — only Google Fonts loaded externally; everything else is vanilla HTML/CSS/JS

---

## Customisation Guide

### Change the accent color

Open `style.css` and update these four tokens in `:root`:

```css
--cyan: #b32624; /* primary accent */
--cyan-dim: #8f1d1c; /* hover / dimmed */
--cyan-glow: rgba(179, 38, 36, 0.14); /* glow fills */
--cyan-glow-lg: rgba(179, 38, 36, 0.06); /* subtle glow */
```

Also update the overlay colors in `.hero-overlay` to match.

### Replace the hero background photo

The photo is stored as a base64 string in the `--hero-photo` CSS variable inside `:root`. To swap it:

1. Convert your new image to base64:
   ```bash
   base64 -i your-photo.jpg | tr -d '\n'
   ```
2. In `style.css`, find `--hero-photo: url("data:image/jpeg;base64,...` and replace the base64 string.

### Add or edit projects

Each project is an `<article class="project-card">` inside `#projects`. Copy an existing card and update:

- `.project-type` — label (e.g. "Personal Project · 2025")
- `.project-title` — name
- `.project-desc` — description paragraph
- `.project-stack` — tech badges (use `.stack-badge`, `.stack-badge.violet`, `.stack-badge.green`)
- `.project-links` — GitHub / live demo `<a>` tags

### Update personal details

All personal content is in `index.html`. Key spots:

| What         | Where in index.html                                          |
| ------------ | ------------------------------------------------------------ |
| Name         | `<h1 class="hero-name">` and `<title>`                       |
| Role         | `<p class="hero-role">`                                      |
| Email        | `href="mailto:..."` (appears in nav CTA and contact section) |
| LinkedIn URL | `<a href="https://www.linkedin.com/in/...">`                 |
| GitHub URL   | `<a href="https://github.com/...">`                          |
| Phone        | `<a href="tel:...">`                                         |
| Location     | `.footer-loc` and `.about-fact-list`                         |

---

## Deployment

### GitHub Pages

1. Push all three files to a GitHub repository
2. Go to **Settings → Pages → Source** → select `main` branch → `/ (root)`
3. Your site is live at `https://<username>.github.io/<repo>/`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` from the project folder and follow prompts
3. Or drag-and-drop the folder at [vercel.com/new](https://vercel.com/new)

### Netlify

1. Drag the project folder to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Site goes live instantly at a generated URL

### Local

```bash
# Any of these work:
open index.html                        # macOS
start index.html                       # Windows
python3 -m http.server 8000            # Local dev server at localhost:8000
npx serve .                            # Node-based server
```

---

## Tech Stack

| Layer   | Technology                                          |
| ------- | --------------------------------------------------- |
| Markup  | HTML5 (semantic elements, ARIA)                     |
| Styles  | CSS3 (custom properties, Grid, Flexbox, `clamp()`)  |
| Scripts | Vanilla JavaScript (ES6+, `IntersectionObserver`)   |
| Fonts   | Google Fonts (Space Grotesk, Inter, JetBrains Mono) |
| Hosting | Any static host (GitHub Pages, Vercel, Netlify)     |

---

## Contact

**Ajil C**
📧 ajilsreemol960@gmail.com
📞 +91 73066 68470
🔗 [linkedin.com/in/ajil-c-237661319](https://www.linkedin.com/in/ajil-c-237661319/)
🐙 [github.com/ajil101](https://github.com/ajil101)
📍 Kayamkulam, Kerala, India
