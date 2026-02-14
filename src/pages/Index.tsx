
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SongList from "@/components/SongList";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Social from "@/components/Social";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Video />
      <Testimonials />
      <About />
      <SongList />
      <Social />
      <Footer />
    </div>
  );
};

export default Index;
