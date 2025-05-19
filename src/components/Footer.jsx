import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import HorizontalBar from "./ui/HorizontalBar";

function Footer() {
  return (
    <footer className="bg-gray-100 text-secondary py-10 px-6 text-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo and Name */}
        <div>
          <h2 className="text-2xl font-bold mb-2">TrekMate</h2>
          <p className="text-sm text-accent">
            Discover India's wild side with curated treks and trails.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-accent">
            <li><a href="#">Home</a></li>
            <li><a href="#">Treks</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="space-y-1">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-accent">Email: info@trekmate.in</p>
          <p className="text-sm text-accent">Phone: +91 8340112134</p>
          <p className="text-sm text-accent">Address: Bangalore, India</p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 items-center justify-center">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-zinc-400 hover:text-accent" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="w-5 h-5 text-zinc-400 hover:text-accent" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-zinc-400 hover:text-accent" />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube className="w-5 h-5 text-zinc-400 hover:text-accent" />
            </a>
          </div>
        </div>
      </div>

      <HorizontalBar className="mx-20"/>
      <div className="text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} TrekMate. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;