
import { Button } from "@/components/ui/button";
import { Music, Calendar, Users, Instagram, Facebook, Youtube } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background with multiple gradient layers and lighting effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-800/70 to-cyan-900/80"></div>
        
        {/* Animated spotlight effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.4),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.3),transparent_50%),radial-gradient(circle_at_40%_80%,rgba(6,182,212,0.35),transparent_45%),radial-gradient(circle_at_90%_70%,rgba(139,92,246,0.25),transparent_40%)]"></div>
        
        {/* Moving light streaks */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform rotate-12 animate-pulse"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent transform -rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Subtle particle effect overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.05),transparent_20%),radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.03),transparent_15%),radial-gradient(circle_at_30%_90%,rgba(255,255,255,0.04),transparent_18%)]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        {/* Logo/Title */}
        <div className="mb-8">
          <h1 className="font-orbitron font-black text-6xl md:text-8xl mb-4 text-white drop-shadow-2xl" style={{ textShadow: '3px 3px 0 rgba(0, 0, 0, 0.8), -1px -1px 0 rgba(0, 0, 0, 0.8), 1px -1px 0 rgba(0, 0, 0, 0.8), -1px 1px 0 rgba(0, 0, 0, 0.8), 1px 1px 0 rgba(0, 0, 0, 0.8)' }}>
            BLUE SILVER
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto mb-6 rounded-full shadow-lg shadow-cyan-500/30"></div>
          <p className="font-orbitron text-xl md:text-2xl text-cyan-300 tracking-wider">
            THE DURAN DURAN EXPERIENCE
          </p>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          A collaborative project by seasoned musicians, together in celebration of one of the most enduring & iconic pop bands of all time.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-10">
          <a 
            href="https://www.instagram.com/bluesilvertribute/#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-gradient-to-br from-cyan-500/40 to-blue-600/40 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 glass-effect group backdrop-blur-sm border border-cyan-400/40 shadow-lg shadow-cyan-500/20"
          >
            <Instagram className="w-6 h-6 text-cyan-300 group-hover:text-cyan-100 transition-colors" />
          </a>
          <a 
            href="https://www.facebook.com/bluesilvertrib"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-gradient-to-br from-cyan-500/40 to-blue-600/40 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 glass-effect group backdrop-blur-sm border border-cyan-400/40 shadow-lg shadow-cyan-500/20"
          >
            <Facebook className="w-6 h-6 text-cyan-300 group-hover:text-cyan-100 transition-colors" />
          </a>
          <a 
            href="https://www.youtube.com/@BlueSilverTribute"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-gradient-to-br from-cyan-500/40 to-blue-600/40 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 glass-effect group backdrop-blur-sm border border-cyan-400/40 shadow-lg shadow-cyan-500/20"
          >
            <Youtube className="w-6 h-6 text-cyan-300 group-hover:text-cyan-100 transition-colors" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:bluesilvertribute@gmail.com">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/30"
            >
              Book Blue Silver
            </Button>
          </a>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-400/20"
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
