import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuItems = ["Home", "Services", "About", "FAQ", "Contact"];

  return (
    <nav className="sticky top-0 z-50 shadow-lg">
      <div className="bg-gradient-to-r from-[#000000] to-[#3533cd]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">ARS Soft Tech</h1>

          <ul className="hidden md:flex space-x-8 text-lg text-white">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-300 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-gradient-to-r from-[#000000] to-[#3533cd] text-center py-6 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block text-lg text-white hover:text-blue-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
