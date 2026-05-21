import React from "react";

function Education() {
  return (
    <div
      id="education"
      className="min-h-screen bg-gradient-to-br from-pink-100 via-fuchsia-100 to-purple-200 flex items-center justify-center px-6 py-14 overflow-hidden relative"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-400 rounded-full blur-[120px] opacity-30 animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400 rounded-full blur-[120px] opacity-30 animate-pulse"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-6xl w-full bg-white/40 backdrop-blur-2xl border border-white/30 shadow-[0_20px_80px_rgba(0,0,0,0.15)] rounded-[45px] overflow-hidden flex flex-col lg:flex-row">

        {/* LEFT CONTENT */}
        <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">

          {/* SMALL TEXT */}
          <p className="uppercase tracking-[5px] text-pink-500 font-bold text-sm mb-5">
            My Education
          </p>

          {/* TITLE */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-8">
            Academic{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-lg leading-9 mb-8">
            Currently pursuing Polytechnic studies at
            <span className="font-bold text-pink-500">
              {" "}Kaimanam
            </span>.
            Passionate about frontend development, UI designing,
            and modern web technologies.
          </p>

          <p className="text-gray-500 text-lg leading-9 mb-10">
            I continuously improve my technical skills by
            learning React, JavaScript, Tailwind CSS,
            and creating innovative web projects with
            modern responsive designs.
          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-4">

            <span className="px-5 py-2 bg-pink-500 text-white rounded-full shadow-lg hover:scale-105 transition">
              React
            </span>

            <span className="px-5 py-2 bg-purple-500 text-white rounded-full shadow-lg hover:scale-105 transition">
              JavaScript
            </span>

            <span className="px-5 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:scale-105 transition">
              Tailwind CSS
            </span>

            <span className="px-5 py-2 bg-fuchsia-500 text-white rounded-full shadow-lg hover:scale-105 transition">
              Web Design
            </span>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex justify-center items-center p-10 relative">

          {/* GLOW */}
          <div className="absolute w-[320px] h-[320px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-full blur-[100px] opacity-40 animate-pulse"></div>

          {/* IMAGE CONTAINER */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Education"
              className="
                w-[320px]
                md:w-[450px]

                rounded-[35px]

                border-[5px]
                border-white/50

                object-cover

                shadow-[0_20px_80px_rgba(168,85,247,0.35)]
              "
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Education;