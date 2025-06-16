import { useEffect, useState } from "react";
import { Search, LogIn } from "lucide-react";

function Navbar({ onLoginClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-16 shadow-md transition-colors duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="flex space-x-[80px]">
        <h1 className="font-extrabold text-3xl text-red">POPCORN</h1>
        <div className="flex space-x-8 font-semibold text-sm text-white mt-3">
          <p className="hover:border-b-2 hover:border-red"><a href="#home">HOME</a></p>
          <p className="hover:border-b-2 hover:border-red"><a href="#movies">MOVIES</a></p>
          <p className="hover:border-b-2 hover:border-red"><a href="#shows">SHOWS</a></p>
        </div>
      </div>

      <div className="flex space-x-5">
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-3xl shadow-md w-[400px]">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none focus:ring-0 focus:outline-none border-none   text-white placeholder-white px-2 ml-3 w-full"
          />
          <Search className="text-red mr-4" />
        </div>
        <button onClick={onLoginClick} className="text-red ">
          <LogIn />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
