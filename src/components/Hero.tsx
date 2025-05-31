
import { Button } from "@/components/ui/button";
import { Music, Calendar, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with concert lighting effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_40%_80%,rgba(120,119,198,0.2),transparent_50%)]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        {/* Logo/Title */}
        <div className="mb-8">
          <h1 className="font-orbitron font-black text-6xl md:text-8xl mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
            BLUE SILVER
          </h1>
          <div className="h-1 w-32 bg-blue-silver-gradient mx-auto mb-6 rounded-full"></div>
          <p className="font-orbitron text-xl md:text-2xl text-cyan-300 tracking-wider">
            THE DURAN DURAN EXPERIENCE
          </p>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          A collaborative project by seasoned musicians, together in celebration of one of the most enduring & iconic pop bands of all time.
        </p>

        {/* Key Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base">
          <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
            <Music className="w-4 h-4 text-cyan-400" />
            <span>Sonically Authentic</span>
          </div>
          <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
            <Users className="w-4 h-4 text-cyan-400" />
            <span>Seasoned Musicians</span>
          </div>
          <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>Available for Booking</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Blue Silver
          </Button>
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
