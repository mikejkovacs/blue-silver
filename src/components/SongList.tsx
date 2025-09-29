
import { Music2, Play, Disc3, Star } from "lucide-react";
import duranAlbumBg from "@/assets/duran-album-bg.jpg";

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
              {songs.filter(song => song.featured).map((song, index) => (
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
                    <Play className="w-6 h-6 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-medium">Fan Favorite</span>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-purple-400/0 group-hover:from-cyan-400/10 group-hover:to-purple-400/10 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

          {/* All Songs Grid */}
          <div className="bg-gradient-to-br from-slate-800/50 via-purple-900/40 to-blue-900/30 rounded-3xl p-8 glass-effect backdrop-blur-md border border-white/10">
            <h3 className="text-2xl font-orbitron font-bold text-white mb-8 text-center">
              Complete Performance Repertoire
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {songs.map((song, index) => (
                <div 
                  key={index}
                  className="group relative p-4 bg-gradient-to-r from-slate-700/40 to-purple-700/30 rounded-xl hover:from-slate-600/50 hover:to-purple-600/40 transition-all duration-300 hover:scale-105 cursor-pointer border border-transparent hover:border-cyan-400/30"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                        {song.title}
                      </p>
                      <p className="text-gray-500 text-xs mt-1 group-hover:text-gray-400 transition-colors duration-300">
                        {song.year}
                      </p>
                    </div>
                    {song.featured && (
                      <Star className="w-4 h-4 text-yellow-400 fill-current ml-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </div>
                  
                  {/* Subtle hover indicator */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-xl"></div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full glass-effect border border-cyan-400/30">
                <Music2 className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-orbitron font-semibold">...and many more Duran Duran classics!</span>
                <Music2 className="w-5 h-5 text-purple-400" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SongList;
