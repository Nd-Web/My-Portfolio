# Ndubuisi's Portfolio

A high-end, visually stunning developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Features

### Design
- Dark theme with gradient accents (purple, blue, cyan)
- Glassmorphism and blur effects
- Smooth animations with Framer Motion
- Floating background elements
- Custom gradient scrollbar

### UX Improvements
- Back-to-top button
- Copy-to-clipboard for email
- Skip-to-content link (accessibility)
- Smooth scroll navigation
- Loading animation
- Custom 404 page

### Accessibility
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible styles
- Reduced motion support (`prefers-reduced-motion`)
- Skip-to-content link

### SEO
- Open Graph meta tags
- Twitter cards
- JSON-LD structured data
- Dynamic sitemap.xml
- robots.txt
- Auto-generated OG image

### Contact Form
- Ready for Formspree integration
- Fallback simulation mode
- Copy email to clipboard

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Navigate to the project folder:
   ```bash
   cd "C:\Users\HomePC\Desktop\Portfolio Website\portfolio"
   ```

2. Install dependencies (already installed):
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   copy .env.example .env.local
   ```

4. Update `.env.local` with your credentials:
   - `NEXT_PUBLIC_BASE_URL` - Your production URL
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT` - Your Formspree form endpoint (optional)

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contact Form Setup

To receive form submissions:

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Copy your unique endpoint URL
4. Add it to `.env.local`:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/yourFormId
   ```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy

Vercel Analytics is automatically enabled when deployed to Vercel.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── page.tsx              # Main page
│   ├── layout.tsx            # Root layout with SEO
│   ├── globals.css           # Global styles
│   ├── not-found.tsx         # Custom 404 page
│   ├── sitemap.ts            # Dynamic sitemap
│   ├── robots.ts             # robots.txt
│   ├── opengraph-image.tsx   # Auto-generated OG image
│   └── icon.ico              # Favicon
├── components/
│   ├── Navbar.tsx            # Sticky navigation
│   ├── Hero.tsx              # Hero section with typing effect
│   ├── About.tsx             # About section
│   ├── Skills.tsx            # Skills grid
│   ├── Projects.tsx          # Project cards
│   ├── Contact.tsx           # Contact form
│   ├── Footer.tsx            # Footer
│   ├── BackToTop.tsx         # Scroll-to-top button
│   ├── CopyEmail.tsx         # Copy-to-clipboard
│   ├── SkipToContent.tsx     # Accessibility skip link
│   └── Analytics.tsx         # Analytics wrapper
├── .env.example              # Environment variables template
└── package.json
```

## Customization

### Update Personal Info
- Edit text in `components/Hero.tsx`, `components/About.tsx`
- Update social links in `app/layout.tsx` (structured data) and `components/Footer.tsx`
- Change email in `components/Contact.tsx` and `components/CopyEmail.tsx`

### Add Projects
Edit the `projects` array in `components/Projects.tsx`:
```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Description...',
    techStack: ['Tech1', 'Tech2'],
    image: '🚀', // Or use actual images
    liveUrl: 'https://...',
    githubUrl: 'https://...',
    gradient: 'from-purple-600 to-blue-600',
  },
];
```

### Change Colors
Edit the gradient classes in components or update CSS variables in `app/globals.css`.

## Performance

- Uses Next.js App Router for optimal performance
- Static generation where possible
- Client components only where interactivity is needed
- Lazy loading with Framer Motion

## Accessibility Checklist

- [x] Skip-to-content link
- [x] Keyboard navigation
- [x] Focus visible styles
- [x] ARIA labels
- [x] Reduced motion support
- [x] Semantic HTML
- [x] Color contrast (WCAG AA)

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
