import { Quote, Music, Star, Users } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "I close my eyes and I'm at a Duran Duran concert again... Amazing!",
      author: "Fan Review",
      rating: 5,
      size: "large"
    },
    {
      text: "Every Duran Duran fan and any serious 80s fan needs to check them out. It's essential!",
      author: "@angeloforughi (Photographer)",
      rating: 5,
      size: "medium"
    },
    {
      text: "You guys transported me back to my childhood...where I grew up listening to Duran Duran.",
      author: "Concert Attendee",
      rating: 5,
      size: "medium"
    },
    {
      text: "Looking forward to seeing you again...Awesome show!",
      author: "Fan Review",
      rating: 5,
      size: "small"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-purple-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Music className="w-8 h-8 text-cyan-400 animate-pulse" />
              <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-white text-shimmer leading-tight py-2">
                A Legendary Experience
              </h2>
              <Music className="w-8 h-8 text-cyan-400 animate-pulse" />
            </div>
            <div className="h-1 w-64 bg-blue-silver-gradient mx-auto rounded-full mb-4"></div>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`
                  ${testimonial.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                  ${testimonial.size === 'medium' ? 'md:col-span-1 md:row-span-1' : ''}
                  ${testimonial.size === 'small' ? 'md:col-span-1 md:row-span-1' : ''}
                  group relative
                `}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="h-full bg-gradient-to-br from-slate-800/80 via-slate-700/70 to-purple-900/50 p-6 rounded-2xl glass-effect backdrop-blur-md border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-400/20 animate-fade-in">
                  {/* Quote Icon with Glow Effect */}
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className={`
                    text-gray-200 mb-6 italic leading-relaxed group-hover:text-white transition-colors duration-300
                    ${testimonial.size === 'large' ? 'text-xl' : 'text-base'}
                  `}>
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author Section */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors duration-300">
                        — {testimonial.author}
                      </p>
                    </div>
                    <Users className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-purple-400/0 group-hover:from-cyan-400/5 group-hover:to-purple-400/5 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Accent */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full glass-effect border border-cyan-400/30">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-white font-orbitron font-semibold">Consistently 5-Star Performances</span>
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
