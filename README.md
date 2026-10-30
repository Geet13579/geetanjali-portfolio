# Geetanjali Jangde – Portfolio

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · Framer Motion · GSAP + ScrollTrigger · React Three Fiber + drei · Lucide

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Where things live

```
public/
  images/geetanjali-portrait.png        your uploaded portrait (used via next/image)
  resume/Geetanjali-Jangde-Resume.pdf   your uploaded resume (Download Resume buttons)
src/
  data/portfolio.ts    ALL content (resume data, projects, links). Edit text here.
  app/                 layout.tsx (SEO + JSON-LD), page.tsx, globals.css
  components/          Navbar, Hero, ThreeScene, About, Skills, Experience,
                       Projects (+ ProjectCard, ProjectDetail, ProjectMockup),
                       Services, Education, Contact, Footer
  components/ui/       CustomCursor, ParticleField, MagneticButton, TiltCard,
                       Reveal, SectionHeading
  lib/hooks.ts         reduced-motion, fine-pointer, active-section hooks
```

## Notes

- Project links are the hyperlinks embedded in your resume PDF. SPARKCARS has none, so no link is shown.
- Project visuals are CSS illustrations labelled "Illustrative visual", not screenshots. To use real
  screenshots, add images to `public/` and swap `ProjectMockup` for an `<Image>` in `ProjectCard` / `ProjectDetail`.
- The contact form has no backend: it opens a pre-filled draft in the visitor's email app.
- Honors `prefers-reduced-motion` (3D scene, particles, cursor trail, tilt and reveals all calm down).
  Custom cursor and tilt only run on devices with a mouse.
