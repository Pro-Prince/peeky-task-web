<div align="center">

# Peeky Task Web
### Official promotional website & landing page for Peeky Task.

![Status](https://img.shields.io/badge/status-live-22C55E?style=flat-square)
![Site](https://img.shields.io/badge/site-peekytask.in-6366F1?style=flat-square)
![Framework](https://img.shields.io/badge/framework-Next.js%2016-22D3EE?style=flat-square)
![Stack](https://img.shields.io/badge/stack-React%20%2B%20Tailwind-525252?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-F59E0B?style=flat-square)

**[→ View Live](https://peekytask.in)**

</div>

---

## Overview

Peeky Task Web is the official promotional website and interactive web showcase for **Peeky Task**, the minimalist screen-edge floating daily task and to-do widget for Windows 10 & 11. Built with Next.js 16 (App Router), React 19, and Tailwind CSS, the site is designed to demonstrate complete front-end product engineering — featuring high-fidelity responsive laptop mockups with uncropped video screen captures, instant pre-rendered asset delivery, continuous looping micro-interactions, interactive feature carousels, signature pastel color pickers, and live feature breakdowns.

---

## Live Demo

🔗 **[peekytask.in](https://peekytask.in)**

> High-performance static web application optimized for desktop, tablet, and mobile with instant media preloading and fluid micro-animations.

---

## Features

- **Hero & Native Laptop Demo** — pixel-perfect Windows laptop mockup running real, uncropped video demonstrations with automatic autoplay and seamless continuous looping
- **Pre-rendered Asset Architecture** — instant above-the-fold media delivery using `<link rel="preload">` in `<head>` and eager loading across all showcase screenshots
- **Every Surface Horizontal Carousel** — smooth sticky horizontal scroll engine exploring every application view (The Deck, Hover to Expand, Click to Edit, Archived Tasks, Settings, Licence)
- **Signature Pastel Swatch Showcase** — interactive preview of Peeky Task's 8 pastel colors (Mint, Sky, Butter, Peach, Blush, Lilac, Blue, Slate)
- **Interactive 10-Second Undo Demonstration** — animated task card simulating delete-and-undo safety with draining countdown bar
- **Keyboard Shortcuts Section** — clean card layout highlighting the three primary keys (`Alt + Space`, `Ctrl + .`, `Ctrl + N`) for zero-mouse task management
- **Interactive FAQ Accordion** — comprehensive questions and answers addressing licensing, multi-monitor setups, offline operation, and privacy
- **Fully Responsive & Clean Aesthetic** — crafted with subtle radial gradients, glassmorphism headers, custom minimalist scrollbars, and fluid typography

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework with Turbopack and static page generation (SSG) |
| React 19 | Core UI component engine |
| TypeScript | Strict type safety and maintainable codebase |
| Tailwind CSS | Utility-first design tokens and responsive styling |
| Lucide React | Modern minimalist iconography |
| Vercel | Global edge CDN deployment |

---

## Architecture

- **App Router Structure:** Modern Next.js App Router organization with dedicated routes for home (`/`), changelog (`/changelog`), buy/licence (`/buy`), privacy (`/privacy`), and terms (`/terms`).
- **Instant Pre-Rendering:** All media, hero mockups, and surface cards are pre-rendered into static HTML (`next build`), eliminating pop-in delays and layout shifts.
- **Eager Media Preloading:** Critical video assets and showcase screenshots are linked with `<link rel="preload">` inside the document `<head>` for zero-latency playback.
- **Scroll Reveal Provider:** Eager IntersectionObserver provider with generous view margins that pre-reveals content smoothly before entering the active viewport.

---

## Challenges Solved

**1. Reliable cross-browser video autoplay and infinite looping**
Modern browsers enforce strict autoplay policies that pause unmuted or un-interacted videos. Solved by binding an explicit React ref callback that sets DOM properties (`el.muted = true`, `el.playsInline = true`, `el.loop = true`) alongside an `onEnded` loop restart handler and pointer/scroll fallback listeners.

**2. Pixel-accurate laptop display integration without cropping**
Displaying standard 16:9 screen recordings inside 16:10 laptop screen mockups frequently causes unwanted edge clipping. Handcrafted an `object-contain` centered frame inside the laptop bezel so all edges of the Windows desktop and floating tasks remain 100% visible.

**3. Zero-delay asset pre-rendering**
Standard client-side animation frameworks often hide elements with `opacity: 0` until scroll triggers fire. Peeky Task Web delivers all content with pre-rendered `opacity: 1` visibility by default, combining instant static painting with delicate micro-animations.

**4. Smooth horizontal track translation**
Built a performant sticky horizontal scroll track for the "Every surface, at a glance" showcase that transforms vertical page scroll into precise horizontal translation using hardware-accelerated `translate3d`.

---

## Related Repositories

- **[Peeky Task Desktop App](https://github.com/Pro-Prince/peeky-task-app)** — The native Windows 10 & 11 floating task widget built with Electron.

---

## Author

**Prince Patel** — AI-Powered Product Developer

- 🌐 Portfolio: [prince-patel-portfolio.vercel.app](https://prince-patel-portfolio.vercel.app)
- 🐙 GitHub: [github.com/Pro-Prince](https://github.com/Pro-Prince)
- 𝕏 X: [@Pro_Prince_1](https://x.com/Pro_Prince_1)
- 💼 LinkedIn: [linkedin.com/in/prince-patel476](https://www.linkedin.com/in/prince-patel476/)

---

## License

This project is licensed under the MIT License.
