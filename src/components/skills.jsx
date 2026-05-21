import React from "react";

function Skills() {
  const skills = [
    "Python",
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "GitHub",
    "Responsive Design",
  ];

  return (
    <div
      id="skills"
      className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-pink-200 flex items-center justify-center px-6 py-12"
    >

      {/* MAIN CARD */}
      <div className="max-w-6xl w-full bg-white/70 backdrop-blur-lg rounded-[40px] shadow-2xl border border-white/40 p-10 md:p-16">

        {/* TITLE */}
        <div className="text-center mb-14">

          <h2 className="text-5xl md:text-6xl font-extrabold text-pink-600 mb-4">
            My Skills
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-8">
            Passionate about creating modern websites and learning
            new technologies to improve my frontend development skills.
          </p>

        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white shadow-xl rounded-3xl p-8 flex flex-col items-center justify-center hover:-translate-y-3 hover:shadow-pink-300/50 transition duration-500 border border-pink-100"
            >

              {/* ICON */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg mb-5 group-hover:scale-110 transition duration-500">
                {skill.charAt(0)}
              </div>

              {/* SKILL NAME */}
              <h3 className="text-xl font-bold text-gray-700 group-hover:text-pink-500 transition duration-300">
                {skill}
              </h3>

            </div>
          ))}

        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-16 text-center">

          <button className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg font-bold rounded-full shadow-xl hover:scale-105 transition duration-300">
            Explore My Projects
          </button>

        </div>

      </div>

    </div>
  );
}

export default Skills;