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

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* LOGO */}
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Hafana
        </h1>

        {/* MENU */}
        <ul className="hidden md:flex gap-10">

          {navItems.map((item, index) => (
            <li key={index}>

              <a
                href={item.link}
                className="text-lg font-semibold text-gray-700 hover:text-pink-500 transition duration-300"
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