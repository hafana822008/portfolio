import React from "react";

function Home() {
  return (
    <div
      id="home"
      className="min-h-screen bg-gradient-to-br from-pink-100 via-fuchsia-100 to-purple-200 flex items-center justify-center px-6 py-10 overflow-hidden"
    >

      {/* BACKGROUND BLUR CIRCLES */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl w-full bg-white/40 backdrop-blur-2xl border border-white/30 shadow-[0_20px_80px_rgba(0,0,0,0.15)] rounded-[45px] p-8 md:p-16 flex flex-col-reverse lg:flex-row items-center gap-16">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left">

          {/* SMALL TEXT */}
          <p className="uppercase tracking-[6px] text-pink-500 font-bold text-sm md:text-base mb-5 animate-bounce">
            Welcome To My Portfolio
          </p>

          {/* TITLE */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 leading-tight mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              Hafana
            </span>
          </h1>

          {/* SUBTITLE */}
          <h2 className="text-2xl md:text-4xl font-bold text-purple-600 mb-8">
            Frontend Developer & UI Designer
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-lg leading-9 mb-6 max-w-2xl">
            I create premium, modern and responsive websites
            with beautiful user interfaces and smooth user experiences.
            Passionate about React, Tailwind CSS, animations,
            and creative frontend development.
          </p>

          <p className="text-gray-500 text-lg leading-9 mb-10 max-w-2xl">
            My mission is to improve my technical skills,
            build innovative digital products, and become
            a successful software developer in the IT industry.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5 justify-center lg:justify-start">

            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-bold rounded-full shadow-xl hover:scale-110 hover:shadow-pink-400/50 transition-all duration-500">
              Hire Me
            </button>

            <button className="px-8 py-4 border-2 border-pink-500 text-pink-500 font-bold rounded-full hover:bg-pink-500 hover:text-white hover:scale-105 transition-all duration-500">
              My Projects
            </button>

          </div>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">

            <span className="px-5 py-2 bg-pink-500 text-white rounded-full shadow-lg hover:scale-105 transition">
              React
            </span>

            <span className="px-5 py-2 bg-purple-500 text-white rounded-full shadow-lg hover:scale-105 transition">
              Tailwind CSS
            </span>

            <span className="px-5 py-2 bg-fuchsia-500 text-white rounded-full shadow-lg hover:scale-105 transition">
              JavaScript
            </span>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center items-center relative">

          {/* GLOW EFFECT */}
          <div className="absolute w-[420px] h-[420px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-full blur-[120px] opacity-40 animate-pulse"></div>

          {/* IMAGE */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop"
              alt="AI Gamer Girl"
              className="
                relative
                z-10

                w-[420px]
                md:w-[550px]
                lg:w-[650px]

                rounded-[40px]

                object-cover

                border-[6px]
                border-white/70

                shadow-[0_20px_80px_rgba(168,85,247,0.45)]

                hover:scale-105
                hover:-translate-y-3
                hover:rotate-1

                transition-all
                duration-700
              "
            />

            {/* GLASS EFFECT */}
            <div className="
              absolute
              inset-0
              rounded-[40px]
              bg-gradient-to-t
              from-pink-500/10
              via-transparent
              to-cyan-400/10
              backdrop-blur-[2px]
            "></div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;