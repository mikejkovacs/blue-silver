import bluesilverLogo from "@/assets/blue-silver-logo.jpg";

const Header = () => {
  return (
    <header className="bg-black py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <img
          src={bluesilverLogo}
          alt="Blue Silver - The Duran Duran Experience"
          className="h-12 md:h-14 w-auto"
        />
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors duration-300 text-sm md:text-base"
        >
          Book Blue Silver
        </a>
      </div>
    </header>
  );
};

export default Header;
