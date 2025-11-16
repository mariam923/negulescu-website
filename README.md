# Negulescu - Premium Glass Installation Website

A modern, minimalistic website for Negulescu, a company specialized in the installation of glass doors and glass windows.

## Features

- **Ultra-modern Design**: Minimalistic, clean white background with premium aesthetics
- **Framer Motion Animations**: Smooth fade-in, slide-up, and staggered animations
- **Video Integration**: Dedicated video section on homepage with modal player
- **Dynamic Portfolio**: Automatic loading of portfolio images with lightbox viewer
- **Responsive Design**: Optimized for all devices
- **shadcn/ui Components**: Modern UI components with Tailwind CSS
- **TypeScript**: Type-safe development

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Set up media files:

**Portfolio Images:**
Copy all portfolio images to `/public/portfolio/` directory.
The website will automatically load all images from this folder.

**Video File:**
Copy the video file to `/public/video/showcase.mp4`.

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Project Structure

```
negulescu-website/
├── app/
│   ├── layout.tsx           # Root layout with navbar and footer
│   ├── page.tsx             # Home page
│   ├── services/
│   │   └── page.tsx         # Services page
│   ├── portfolio/
│   │   └── page.tsx         # Portfolio page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   └── globals.css          # Global styles
├── components/
│   ├── navbar.tsx           # Navigation component
│   ├── footer.tsx           # Footer component
│   ├── video-section.tsx    # Video player component
│   ├── portfolio-preview.tsx # Portfolio preview component
│   ├── portfolio-gallery.tsx # Full portfolio gallery with lightbox
│   └── ui/                  # shadcn/ui components
├── lib/
│   └── utils.ts             # Utility functions
└── public/
    ├── portfolio/           # Portfolio images (to be added)
    └── video/               # Video files (to be added)
```

## Pages

- **Home** (`/`): Hero section, video showcase, portfolio preview, services grid, CTA
- **Services** (`/services`): Detailed list of all services offered
- **Portfolio** (`/portfolio`): Full gallery of completed projects with lightbox
- **About** (`/about`): Company information and leadership
- **Contact** (`/contact`): Contact form and contact information

## Color Palette

- **White**: `#FFFFFF` (background)
- **Black**: `#000000` (titles)
- **Deep Gray**: `#1A1A1A` (paragraphs)
- **Soft Gray**: `#F4F4F4` (section backgrounds)
- **Glass Blue Accent**: `#3A79FF` (small accents)

## Typography

- **Headings**: Inter Tight / Sora
- **Body**: Inter

## Contact Information

- **Phone**: +40 763 564 072
- **Email**: contact@negulescu.ro

## License

© 2024 Negulescu. Directed by Gheorghe Negulescu.
