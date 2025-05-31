
import Hero from "@/components/Hero";
import About from "@/components/About";
import SongList from "@/components/SongList";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Social from "@/components/Social";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <SongList />
      <Testimonials />
      <Video />
      <Social />
    </div>
  );
};

export default Index;
