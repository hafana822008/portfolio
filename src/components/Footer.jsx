import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white py-8 px-6">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold tracking-wide">
            Hafana Portfolio
          </h2>

          <p className="text-white/80 mt-2 text-sm md:text-base">
            Creating modern and beautiful web experiences.
          </p>
        </div>

        {/* CENTER LINKS */}
        <div className="flex gap-6 text-lg font-semibold">

          <a
            href="#home"
            className="hover:text-pink-200 transition duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-pink-200 transition duration-300"
          >
            About
          </a>

          <a
            href="#education"
            className="hover:text-pink-200 transition duration-300"
          >
            Education
          </a>

          <a
            href="#skills"
            className="hover:text-pink-200 transition duration-300"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="hover:text-pink-200 transition duration-300"
          >
            Contact
          </a>

        </div>

        {/* RIGHT */}
        <div className="flex gap-4 text-2xl">

          <a
            href="/"
            className="hover:scale-125 transition duration-300"
          >
            🌐
          </a>

          <a
            href="/"
            className="hover:scale-125 transition duration-300"
          >
            💻
          </a>

          <a
            href="/"
            className="hover:scale-125 transition duration-300"
          >
            📱
          </a>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/20 mt-8 pt-5 text-center text-sm text-white/80">
        © 2025 Hafana Portfolio | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;