import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import concertCrowdHero from '@/assets/concert-crowd-hero-optimized.webp'

// Preload hero image as early as possible to speed up first paint
(function preloadHero() {
  try {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = concertCrowdHero;
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);

    // Prime the browser cache as a fallback
    const img = new Image();
    img.src = concertCrowdHero;
  } catch (e) {
    // no-op
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
