import React from "react";

function Navbar() {

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Education", link: "#education" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-lg shadow-lg border-b border-white/20">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 py-4 md:py-5">

        {/* LOGO */}
        <h1 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Hafana
        </h1>

        {/* MENU */}
        <ul className="flex gap-4 sm:gap-6 md:gap-10 flex-wrap justify-center">

          {navItems.map((item, index) => (
            <li key={index}>

              <a
                href={item.link}
                className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 hover:text-pink-500 transition duration-300"
              >
                {item.name}
              </a>

            </li>
          ))}

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;