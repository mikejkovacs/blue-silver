
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Video = () => {
  return (
    <section id="video" className="py-20 bg-gradient-to-b from-blue-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-12 text-white">
            Experience Blue Silver
          </h2>
          
          <div className="relative group cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl overflow-hidden glass-effect">
              {/* Video placeholder - you can replace this with actual video embed */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-800/50 to-blue-800/50">
                <div className="text-center">
                  <div className="w-20 h-20 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-slate-900 ml-1" />
                  </div>
                  <p className="text-white text-xl font-semibold">Watch Blue Silver Live</p>
                  <p className="text-gray-300 mt-2">Experience the Duran Duran magic</p>
                </div>
              </div>
            </div>
          </div>
          
          <Button 
            size="lg"
            className="mt-8 bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Watch More Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Video;
