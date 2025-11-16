# Setup Instructions

## Step 1: Install Dependencies

Navigate to the project directory and install all dependencies:

```bash
cd negulescu-website
npm install
```

## Step 2: Set Up Media Files

### Portfolio Images

1. Create the portfolio directory in the public folder (if it doesn't exist):
   - Create: `/public/portfolio/`

2. Copy all 31 portfolio images from `../negu/` to `/public/portfolio/`:
   - IMG-20250826-WA0040.jpg
   - IMG-20250826-WA0041.jpg
   - ... (all images)

### Video File

1. Create the video directory in the public folder (if it doesn't exist):
   - Create: `/public/video/`

2. Copy one of the video files from `../negu/vidéo/` to `/public/video/showcase.mp4`:
   - Choose either VID-20250826-WA0074.mp4 or VID-20250826-WA0075.mp4
   - Rename it to `showcase.mp4`

## Step 3: Run Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:3000`

## Step 4: Build for Production (Optional)

```bash
npm run build
npm start
```

## Troubleshooting

### Images not loading
- Ensure all images are in `/public/portfolio/` directory
- Check that filenames match exactly (case-sensitive)

### Video not playing
- Ensure video is at `/public/video/showcase.mp4`
- Check browser console for errors
- Try a different video format if needed

### TypeScript errors
- Run `npm install` to ensure all dependencies are installed
- Delete `.next` folder and restart dev server
