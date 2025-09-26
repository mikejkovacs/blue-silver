import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "I close my eyes and I'm at a Duran Duran concert again... Amazing!",
      author: "Fan Review"
    },
    {
      text: "Every Duran Duran fan and any serious 80s fan needs to check them out. It's essential!",
      author: "@angeloforughi (Photographer)"
    },
    {
      text: "You guys transported me back to my childhood...where I grew up listening to Duran Duran.",
      author: "Concert Attendee"
    },
    {
      text: "Looking forward to seeing you again...Awesome show!",
      author: "Fan Review"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-white text-center">
            A Legendary Experience
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 p-6 rounded-xl glass-effect hover:scale-105 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-cyan-400 mb-4" />
                <p className="text-gray-300 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="text-cyan-400 font-semibold text-sm">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
