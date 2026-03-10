# 🌐 Adolphe HABIYAREMYE — Portfolio

A modern, responsive personal portfolio website built with **React**, **Tailwind CSS**, and **Framer Motion**. Features dark/light theme, smooth animations, and a clean professional design.

🔗 **Live Demo:** [habiyaremyeadolphe.netlify.app](https://habiyaremyeadolphe.netlify.app/)

---

## ✨ Features

- **Responsive Design** — Optimized for all screen sizes (mobile, tablet, desktop)
- **Dark/Light Theme** — Toggle with localStorage persistence and system preference detection
- **Smooth Animations** — Powered by Framer Motion with scroll-triggered entrances
- **Dynamic Navigation** — Scroll spy highlights active section, smooth scrolling
- **Contact Form** — Integrated with Netlify Forms for real email delivery
- **Project Showcase** — Filterable project gallery with category tags
- **Certifications** — Dedicated section for courses and professional certifications
- **Downloadable CV** — Resume available for direct download
- **SEO Optimized** — Open Graph meta tags, proper title/description, semantic HTML

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI Framework |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first CSS |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [React Query](https://tanstack.com/query) | Data fetching & caching |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |
| [Inter Font](https://fonts.google.com/specimen/Inter) | Typography |
| [Netlify](https://www.netlify.com/) | Hosting & Forms |

---

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── projects/              # Project screenshot images
│   ├── HABIYAREMYE Adolphe Resume.pdf
│   └── index.html             # SEO meta tags, OG tags, fonts
├── src/
│   ├── api/
│   │   └── portfolioAPI.js    # Project data
│   ├── assets/
│   │   └── profile.jpg        # Profile photo
│   ├── components/
│   │   ├── animations/        # FadeInSection, ParticleBackground, TypewriterText
│   │   ├── layout/            # Navbar, Footer
│   │   ├── sections/          # Hero, About, Skills, Projects, Certifications,
│   │   │                      # Education, Experience, Contact
│   │   ├── ui/                # Button, Card, Modal
│   │   └── ThemeToggle.js
│   ├── hooks/
│   │   ├── useTheme.js        # Dark/light mode hook
│   │   ├── useIntersectionObserver.js
│   │   └── useScrollSpy.js
│   ├── App.js
│   ├── index.js
│   ├── index.css              # Global styles, animations, scrollbar
│   └── tailwind.css           # Tailwind directives
├── netlify.toml               # Netlify build config
├── tailwind.config.js
└── package.json
```

---

## 📝 Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Full-screen intro with profile image, gradient text, CTA buttons |
| 2 | **About** | Bio, focus areas, stats, tech stack, download CV |
| 3 | **Skills** | Frontend, Backend, Database & Tools with animated progress bars |
| 4 | **Projects** | 9 projects with category filtering, live/GitHub links |
| 5 | **Certifications** | Professional courses and certifications |
| 6 | **Education** | Academic background with achievements and skills |
| 7 | **Experience** | Professional work history |
| 8 | **Contact** | Netlify-powered form, email, phone, location, social links |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mugisha19/my-portfolio.git

# Navigate to the directory
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

---

## 🌍 Deployment

This project is configured for **Netlify** deployment:

1. Push your code to GitHub
2. Connect the repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

The `netlify.toml` file handles this configuration automatically.

---

## 📬 Contact

- **Email:** [habiyaadolphe19@gmail.com](mailto:habiyaadolphe19@gmail.com)
- **LinkedIn:** [Habiyaremye Adolphe](https://www.linkedin.com/in/habiyaremye-adolphe-1968792aa/)
- **GitHub:** [@mugisha19](https://github.com/mugisha19)
- **X/Twitter:** [@habiya_adolphe](https://x.com/habiya_adolphe)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with ❤️ by Adolphe HABIYAREMYE
