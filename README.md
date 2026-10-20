# Peeky Task Web
### Official promotional website & landing page for Peeky Task.

<div align="center">

![status](https://img.shields.io/badge/status-active-22C55E?style=flat-square)
![platform](https://img.shields.io/badge/platform-Next.js%2016-000000?style=flat-square)
![styling](https://img.shields.io/badge/styling-Tailwind%20CSS-38BDF8?style=flat-square)
![language](https://img.shields.io/badge/language-TypeScript-3178C6?style=flat-square)
![bundler](https://img.shields.io/badge/bundler-Turbopack-FF4088?style=flat-square)

</div>

---

## Overview

**Peeky Task Web** is the official promotional website and interactive web showcase for **Peeky Task**, the minimalist screen-edge floating daily task widget for Windows 10 & 11. Designed with dark aesthetics, glassmorphism UI components, responsive layout previews, interactive color pickers, and live product feature showcases, the site provides everything visitors need to discover, explore, and download Peeky Task.

---

## Features

- **Hero & Live Widget Demonstration** — Interactive mockups showing the rested 7px edge slivers expanding into sticky task tabs.
- **Dynamic Color Showcase** — Live preview of Peeky Task's signature pastel palette (Mint, Sky, Butter, Peach, Blush, Lilac, Blue, Slate).
- **Interactive FAQ Accordion** — Comprehensive product questions with smooth expanding drawers and keyboard accessibility.
- **Product Walkthrough & Screenshots** — Showcase of the First-Launch Onboarding Flow, formatting toolbars, and task management dashboard.
- **Fully Responsive & Dark-Themed** — Handcrafted with Tailwind CSS, optimized for desktop, tablet, and mobile viewports.
- **SEO & Social Metadata Ready** — Open Graph tags, Twitter card tags, and semantic HTML structure for optimal discovery.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 (App Router) | React application framework & SSG generation |
| React 19 | Declarative component UI engine |
| TypeScript | Type safety and maintainable codebase |
| Tailwind CSS | Utility-first CSS styling & dark mode system |
| Lucide React | Clean, modern iconography |
| Turbopack | Next-generation ultra-fast bundler |

---

## Project Structure

```
peeky-task-web/
├── public/                 # Static assets, logos, and product graphics
├── src/
│   ├── app/                # Next.js App Router (page.tsx, layout.tsx, changelog, privacy, terms)
│   ├── components/         # Reusable UI components, hero, showcase, FAQ, navigation
│   └── lib/                # Utilities and styling helpers
├── package.json            # Project dependencies and build scripts
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS theme and color tokens
└── tsconfig.json           # TypeScript configuration
```

---

## Run Locally

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation
```bash
# Clone repository
git clone https://github.com/Pro-Prince/peeky-task-web.git
cd peeky-task-web

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the live site.

---

## Build for Production

```bash
# Build optimized production bundle
npm run build

# Start production server
npm start
```

---

## Related Repositories

- **[Peeky Task Desktop App](https://github.com/Pro-Prince/peeky-task-app)** — The Windows 10 & 11 floating desktop application built with Electron.

---

## Author

**Prince Patel** — CS Student & Builder

- Portfolio: https://prince-patel-portfolio.vercel.app
- GitHub: https://github.com/Pro-Prince
- X: https://x.com/Pro_Prince_1
- LinkedIn: https://www.linkedin.com/in/prince-patel476/

---

## License

This project is licensed under the MIT License.
