
const SongList = () => {
  const songs = [
    "Planet Earth",
    "Is There Something I Should Know?",
    "Hungry Like The Wolf",
    "Careless Memories",
    "Come Undone",
    "My Own Way",
    "Wild Boys",
    "A View To A Kill",
    "Hold Back The Rain",
    "New Moon on Monday",
    "Ordinary World",
    "Anyone Out There",
    "Friends of Mine",
    "Notorious",
    "The Chauffeur",
    "Sunrise",
    "Girls On Film",
    "Union of the Snake",
    "Reflex",
    "Save A Prayer",
    "Rio"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-12 text-white">
            Song List
          </h2>
          
          <div className="bg-gradient-to-r from-slate-800/60 to-purple-800/60 rounded-2xl p-8 glass-effect">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {songs.map((song, index) => (
                <div 
                  key={index}
                  className="p-3 bg-slate-700/30 rounded-lg hover:bg-slate-600/40 transition-all duration-300 hover:scale-105 cursor-default"
                >
                  <p className="text-gray-300 font-medium">
                    {song}
                  </p>
                </div>
              ))}
            </div>
            
            <p className="text-cyan-400 mt-8 text-lg font-semibold">
              ...and many more Duran Duran classics!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SongList;
