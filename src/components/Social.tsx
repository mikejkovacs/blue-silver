
import { Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Social = () => {
  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-8 text-white">
            Connect & Book
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Follow us on social media and get in touch for booking inquiries
          </p>
          
          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="https://www.instagram.com/bluesilvertribute/#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 glass-effect group"
            >
              <Instagram className="w-8 h-8 text-gray-300 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a 
              href="https://www.facebook.com/bluesilvertrib"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 glass-effect group"
            >
              <Facebook className="w-8 h-8 text-gray-300 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a 
              href="https://www.youtube.com/@BlueSilverTribute"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 glass-effect group"
            >
              <Youtube className="w-8 h-8 text-gray-300 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>
          
          {/* Booking CTA */}
          <div className="bg-gradient-to-r from-blue-800/50 to-purple-800/50 rounded-2xl p-8 glass-effect">
            <h3 className="font-orbitron text-2xl font-bold text-white mb-4">
              Ready to Book Blue Silver?
            </h3>
            <p className="text-gray-300 mb-6">
              Bring the ultimate Duran Duran experience to your venue or event
            </p>
            <a href="mailto:bluesilvertribute@gmail.com">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Contact for Booking
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
