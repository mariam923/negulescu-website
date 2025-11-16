# Quick Start Guide

## Step-by-Step Setup

### 1. Copy Media Files

Run the PowerShell script to automatically copy all images and video:

```powershell
.\copy-media.ps1
```

This will:
- Copy all 31 portfolio images to `public/portfolio/`
- Copy the video file to `public/video/showcase.mp4`

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## What You'll See

- **Home Page** (`/`): Hero section, video showcase, portfolio preview, services grid
- **Services** (`/services`): Complete list of services
- **Portfolio** (`/portfolio`): Full gallery with lightbox (click any image)
- **About** (`/about`): Company information
- **Contact** (`/contact`): Contact form and information

## Features Included

✅ Ultra-minimalistic white design  
✅ Framer Motion animations (fade-in, slide-up, parallax)  
✅ Video section with auto-play and modal  
✅ Dynamic portfolio loading (all 31 images)  
✅ Lightbox gallery with navigation  
✅ shadcn/ui components  
✅ Fully responsive  
✅ TypeScript  
✅ Tailwind CSS  

## Design Specifications Met

✅ White background (#FFFFFF)  
✅ Black titles (#000000)  
✅ Deep Gray paragraphs (#1A1A1A)  
✅ Soft Gray sections (#F4F4F4)  
✅ Glass Blue accents (#3A79FF)  
✅ Inter Tight/Sora headings  
✅ Inter body text  
✅ NEGULESCU logo with letter-spacing  

## Contact Information

- Phone: +40 763 564 072
- Email: contact@negulescu.ro
- Directed by: Gheorghe Negulescu

## Build for Production

```bash
npm run build
npm start
```

## Troubleshooting

**TypeScript errors?**
- These are expected before `npm install`
- They will resolve after installing dependencies

**Images not showing?**
- Make sure `copy-media.ps1` ran successfully
- Check that `public/portfolio/` contains all 31 JPG files
- Verify filenames match exactly (case-sensitive)

**Video not playing?**
- Ensure `public/video/showcase.mp4` exists
- Check browser console for errors
- Try a different browser if needed
