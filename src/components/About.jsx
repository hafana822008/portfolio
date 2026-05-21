import React from "react";

function About() {
  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-pink-200 flex items-center justify-center px-6 py-12"
    >

      {/* MAIN CARD */}
      <div className="max-w-6xl w-full bg-white/70 backdrop-blur-lg rounded-[40px] shadow-2xl border border-white/40 overflow-hidden flex flex-col lg:flex-row items-center">

        {/* LEFT IMAGE SECTION */}
        <div className="flex-1 relative flex justify-center items-center p-10">

          {/* Glow Effect */}
          <div className="absolute w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-40"></div>

          {/* PREMIUM GLOW */}
          <div className="absolute w-[450px] h-[450px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-[130px] opacity-40 animate-pulse"></div>

          {/* IMAGE CONTAINER */}
          <div className="relative">

            {/* NEON BORDER */}
            <div className="
              absolute
              -inset-2
              rounded-[45px]
              bg-gradient-to-r
              from-cyan-400
              via-purple-500
              to-pink-500
              blur-md
              opacity-70
            "></div>

           <img
  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop"
  alt="Developer Girl"
  className="
    relative
    z-10

    w-[420px]
    md:w-[550px]
    lg:w-[650px]

    rounded-[40px]

    object-cover

    border-[5px]
    border-white/40

    shadow-[0_20px_100px_rgba(59,130,246,0.4)]

    hover:scale-105
    hover:rotate-1
    hover:-translate-y-4

    transition-all
    duration-700
  "
/>

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 p-10 md:p-14 text-center lg:text-left">

          <p className="text-pink-500 font-bold tracking-[4px] uppercase mb-4">
            About Me
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-[#831843] leading-tight mb-6">
            Hi, I'm{" "}
            <span className="text-fuchsia-600">
              Hafana
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-violet-600 mb-8">
            Frontend Developer & React Learner
          </h2>

          <p className="text-gray-600 text-lg leading-9 mb-6">
            I am passionate about coding and modern web development.
            I love creating beautiful, responsive, and user-friendly
            websites using React and modern technologies.
          </p>

          <p className="text-gray-500 text-lg leading-9 mb-6">
            My dream is to become a successful IT professional
            and continuously improve my technical and creative skills
            through innovative projects and learning experiences.
          </p>

          <p className="text-gray-500 text-lg leading-9 mb-10">
            I enjoy exploring new technologies, designing premium UI,
            and building creative digital experiences that make
            websites attractive and interactive.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5 justify-center lg:justify-start">

            <button className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transition duration-300">
              Read More
            </button>

            <button className="px-8 py-4 border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-bold rounded-full transition duration-300">
              My Projects
            </button>

          </div>

          {/* SKILLS TAGS */}
          <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">

            <span className="bg-pink-500 text-white px-5 py-2 rounded-full shadow-md text-sm font-semibold">
              React
            </span>

            <span className="bg-purple-500 text-white px-5 py-2 rounded-full shadow-md text-sm font-semibold">
              JavaScript
            </span>

            <span className="bg-blue-500 text-white px-5 py-2 rounded-full shadow-md text-sm font-semibold">
              Tailwind CSS
            </span>

            <span className="bg-fuchsia-500 text-white px-5 py-2 rounded-full shadow-md text-sm font-semibold">
              UI Design
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;