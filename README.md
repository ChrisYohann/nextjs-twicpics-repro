# TwicPics Image Loading Issue Reproduction

This repository demonstrates an issue with TwicPics React components where images continue to load after component unmount when the `eager` prop is set to `true`.

## Description

When using TwicPics React components with the `eager` prop set to `true`, images continue to load even after the component has been unmounted (e.g., when navigating away from the page). This behavior can be observed in the browser console, where image state changes are still being logged after the component is no longer mounted.

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your TwicPics domain in `.env`:
   ```
   NEXT_PUBLIC_TWICPICS_DOMAIN=your-domain.twic.pics
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Steps to Reproduce

1. Start the development server
2. Open the browser console
3. Navigate to the Gallery page
4. Navigate to the About page
5. Observe the network requests logs showing that images are still being loaded, without size constraint this time

## Project Structure

- `/components/Image.tsx`: Custom image component wrapping TwicPics
- `/components/ImageGallery.tsx`: Gallery component displaying multiple images
- `/data/images.json`: Image paths configuration
- `/pages/*`: Next.js pages using the legacy pages router

## Customizing Image Data

To test with your own images, modify the `data/images.json` file with your image paths:

```json
{
  "images": [
    "path/to/your/image1",
    "path/to/your/image2"
  ]
}
```

## Technologies

- Next.js (Pages Router)
- TwicPics Components
- TypeScript
- Tailwind CSS
- shadcn/ui