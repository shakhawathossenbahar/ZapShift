import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi";
import Logo from "../../../components/Logo/Logo";

export default function Footer() {
  return (
    <footer className="pb-10 px-4">
      <div className="w-full bg-[#0B0B0B] text-white py-12 rounded-4xl px-4">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <Logo></Logo>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>

          {/* Divider */}
          <div className="border-t border-dashed border-secondary w-full"></div>

          {/* Nav Links */}
          <ul
            className="
          flex flex-wrap justify-center gap-6 
          text-gray-300 text-sm md:text-base
        "
          >
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Coverage</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>

          {/* Divider */}
          <div className="border-t border-dashed border-secondary w-full"></div>

          {/* Social Icons */}
          <div className="flex justify-center gap-5">
            <a className="p-3 rounded-full bg-white text-black hover:scale-110 transition">
              <FaLinkedinIn size={18} />
            </a>

            <a className="p-3 rounded-full bg-white text-black hover:scale-110 transition">
              <PiXLogoBold size={18} />
            </a>

            <a className="p-3 rounded-full bg-white text-black hover:scale-110 transition">
              <FaFacebookF size={18} />
            </a>

            <a className="p-3 rounded-full bg-white text-black hover:scale-110 transition">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
