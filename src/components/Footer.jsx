import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <div className="bg-black py-10 px-16">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-white">
        {/* Logo + Description + Social */}
        <div className="space-y-4">
          <h1 className="text-red text-2xl font-extrabold">POPCORN</h1>
          <h4 className="font-semibold text-sm">ONLINE STREAMING WEBSITE</h4>
          <div className="flex space-x-4">
            <Instagram />
            <Twitter />
            <Facebook />
          </div>
        </div>

        {/* Column 1 */}
        <ul className="space-y-2 font-semibold text-sm">
          <li>About</li>
          <li>Help</li>
          <li>Contact</li>
          <li>FAQ</li>
        </ul>

        {/* Column 2 */}
        <ul className="space-y-2 font-semibold text-sm">
          <li>Movies</li>
          <li>Shows</li>
          <li>Kids</li>
          <li>Live TV</li>
        </ul>

        {/* Column 3 */}
        <ul className="space-y-2 font-semibold text-sm">
          <li>Action</li>
          <li>Sci-fi</li>
          <li>Thriller</li>
          <li>Horror</li>
        </ul>

        {/* Column 4 — New Grid */}
        <ul className="space-y-2 font-semibold text-sm">
          <li>Careers</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
