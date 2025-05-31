
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
          
          <div className="relative group">
            <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl overflow-hidden glass-effect">
              <iframe
                src="https://www.youtube.com/embed/IQcZbFde5-U"
                title="Blue Silver - Duran Duran Experience"
                className="w-full h-full rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          
          <Button 
            size="lg"
            className="mt-8 bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://www.youtube.com/@BlueSlverDuranDuranExperience', '_blank')}
          >
            Watch More Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Video;
