import { Music2, Play, Disc3, Star } from "lucide-react";
import duranAlbumBg from "@/assets/duran-album-bg.jpg";
import songsVocalist from "@/assets/songs-vocalist.jpg";
import songsKeyboardist from "@/assets/songs-keyboardist.jpg";
import songsBassist from "@/assets/songs-bassist.jpg";

const SongList = () => {
  const songs = [
    { title: "Planet Earth", album: "Duran Duran", year: "1981", featured: false },
    { title: "Is There Something I Should Know?", album: "Single", year: "1983", featured: true },
    { title: "Hungry Like The Wolf", album: "Rio", year: "1982", featured: true },
    { title: "Careless Memories", album: "Duran Duran", year: "1981", featured: false },
    { title: "Come Undone", album: "Duran Duran", year: "1993", featured: false },
    { title: "My Own Way", album: "Rio", year: "1981", featured: false },
    { title: "Wild Boys", album: "Arena", year: "1984", featured: true },
    { title: "A View To A Kill", album: "Single", year: "1985", featured: true },
    { title: "Hold Back The Rain", album: "Rio", year: "1982", featured: false },
    { title: "New Moon on Monday", album: "Seven and the Ragged Tiger", year: "1984", featured: false },
    { title: "Ordinary World", album: "Duran Duran", year: "1993", featured: true },
    { title: "Anyone Out There", album: "Seven and the Ragged Tiger", year: "1983", featured: false },
    { title: "Friends of Mine", album: "Seven and the Ragged Tiger", year: "1983", featured: false },
    { title: "Notorious", album: "Notorious", year: "1986", featured: true },
    { title: "The Chauffeur", album: "Rio", year: "1982", featured: false },
    { title: "Sunrise", album: "Seven and the Ragged Tiger", year: "1983", featured: false },
    { title: "Girls On Film", album: "Duran Duran", year: "1981", featured: true },
    { title: "Union of the Snake", album: "Seven and the Ragged Tiger", year: "1983", featured: false },
    { title: "Reflex", album: "Seven and the Ragged Tiger", year: "1984", featured: true },
    { title: "Save A Prayer", album: "Rio", year: "1982", featured: true },
    { title: "Rio", album: "Rio", year: "1982", featured: true }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with album cover inspiration */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${duranAlbumBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-purple-900/80 to-blue-900/85"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-white text-shimmer leading-tight py-2">
              All The Iconic Hits
            </h2>
            
          </div>

          {/* Featured Songs Section */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {songs.map((song, index) => (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-800/80 via-purple-800/60 to-blue-900/40 p-6 rounded-2xl glass-effect backdrop-blur-md border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {song.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {song.album} • {song.year}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-purple-400/0 group-hover:from-cyan-400/10 group-hover:to-purple-400/10 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Performance Photos */}
          <div className="grid grid-cols-3 gap-3 mt-14 max-w-5xl mx-auto">
            {[songsVocalist, songsKeyboardist, songsBassist].map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl aspect-[4/3] group">
                <img
                  src={src}
                  alt="Blue Silver live performance"
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`}
                  style={i === 2 ? { objectPosition: '50% 33%' } : undefined}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 border border-cyan-400/20 rounded-xl group-hover:border-cyan-400/40 transition-colors duration-500"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SongList;
