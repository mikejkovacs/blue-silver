
const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-inter text-4xl md:text-5xl font-semibold mb-8 text-white">
            An Unforgettable Experience
          </h2>
          
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 md:p-12 glass-effect">
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              <span className="text-cyan-400 font-semibold">BLUE SILVER</span> is the ultimate sonically authentic tribute to Duran Duran, weaving musical integrity & artistic commitment into an energetic performance of the best of the Duran Duran catalogue.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="text-left">
                <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-4">Musical Excellence</h3>
                <p className="text-gray-300">
                  Our seasoned musicians bring decades of experience to recreate the distinctive sound and energy that made Duran Duran legendary.
                </p>
              </div>
              
              <div className="text-left">
                <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-4">Authentic Experience</h3>
                <p className="text-gray-300">
                  From the iconic synthesizer lines to Simon Le Bon's distinctive vocals, every detail is crafted to transport audiences back to the golden age of new wave.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
