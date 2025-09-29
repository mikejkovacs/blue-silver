import { Button } from "@/components/ui/button";
import { Music, Calendar, Users, Instagram, Facebook, Youtube } from "lucide-react";
import concertCrowdHero from "@/assets/hero-bg-optimized.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with concert crowd image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${concertCrowdHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-purple-900/60 to-blue-900/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.2),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        {/* Logo/Title */}
        <div className="mb-8">
          <h1 className="font-orbitron font-black text-6xl md:text-8xl mb-4 text-white drop-shadow-2xl" style={{ textShadow: '3px 3px 0 rgba(0, 0, 0, 0.8), -1px -1px 0 rgba(0, 0, 0, 0.8), 1px -1px 0 rgba(0, 0, 0, 0.8), -1px 1px 0 rgba(0, 0, 0, 0.8), 1px 1px 0 rgba(0, 0, 0, 0.8), 0 0 0 2px #3b82f6, 0 0 0 4px #1d4ed8' }}>
            BLUE SILVER
          </h1>
          
          <p className="font-orbitron font-bold text-xl md:text-2xl text-cyan-300 tracking-wider">
            THE DURAN DURAN EXPERIENCE
          </p>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          An unforgettable experience in celebration of one of the most enduring & iconic pop bands of all time.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-10">
          <a 
            href="https://www.instagram.com/bluesilvertribute/#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 glass-effect group backdrop-blur-sm border border-cyan-400/30"
          >
            <Instagram className="w-6 h-6 text-cyan-300 group-hover:text-cyan-100 transition-colors" />
          </a>
          <a 
            href="https://www.facebook.com/bluesilvertrib"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 glass-effect group backdrop-blur-sm border border-cyan-400/30"
          >
            <Facebook className="w-6 h-6 text-cyan-300 group-hover:text-cyan-100 transition-colors" />
          </a>
          <a 
            href="https://www.youtube.com/@BlueSilverTribute"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 glass-effect group backdrop-blur-sm border border-cyan-400/30"
          >
            <Youtube className="w-6 h-6 text-cyan-300 group-hover:text-cyan-100 transition-colors" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:bluesilvertribute@gmail.com">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Book Blue Silver
            </Button>
          </a>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Watch Video
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
