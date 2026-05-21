import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="min-h-screen bg-gradient-to-br from-pink-100 via-fuchsia-100 to-purple-200 flex items-center justify-center px-6 py-12 overflow-hidden relative"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-400 rounded-full blur-[120px] opacity-30 animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400 rounded-full blur-[120px] opacity-30 animate-pulse"></div>

      {/* MAIN CARD */}
      <div className="relative z-10 w-full max-w-5xl bg-white/40 backdrop-blur-2xl border border-white/30 shadow-[0_20px_80px_rgba(0,0,0,0.15)] rounded-[40px] overflow-hidden flex flex-col lg:flex-row">

        {/* LEFT SIDE */}
        <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">

          <p className="uppercase tracking-[5px] text-pink-500 font-bold text-sm mb-5">
            Contact Information
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-8">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-9 mb-10">
            Feel free to contact me for collaborations,
            projects, or creative web development ideas.
            I would love to connect and create amazing
            digital experiences together.
          </p>

          {/* CONTACT BOXES */}
          <div className="space-y-6">

            {/* EMAIL */}
            <div className="bg-white/50 backdrop-blur-lg border border-white/40 p-5 rounded-3xl shadow-lg hover:scale-105 hover:shadow-pink-300/40 transition-all duration-500">

              <p className="text-pink-500 text-lg font-bold mb-2">
                📧 Email
              </p>

              <p className="text-gray-700 text-lg">
                Hafanaafu@gmail.com
              </p>

            </div>

            {/* PHONE */}
            <div className="bg-white/50 backdrop-blur-lg border border-white/40 p-5 rounded-3xl shadow-lg hover:scale-105 hover:shadow-purple-300/40 transition-all duration-500">

              <p className="text-purple-500 text-lg font-bold mb-2">
                📱 Phone
              </p>

              <p className="text-gray-700 text-lg">
                +91 900078789
              </p>

            </div>

          </div>

          {/* BUTTON */}
          <button className="mt-10 w-fit px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg font-bold rounded-full shadow-xl hover:scale-110 hover:shadow-pink-400/50 transition-all duration-500">
            Get In Touch
          </button>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 flex justify-center items-center p-10 relative">

          {/* GLOW */}
          <div className="absolute w-[320px] h-[320px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-full blur-[100px] opacity-40 animate-pulse"></div>

          {/* IMAGE */}
          <div className="animate-[float_4s_ease-in-out_infinite] relative">

            <img
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop"
              alt="AI Girl"
              className="
                relative
                z-10

                w-[320px]
                md:w-[420px]

                rounded-[35px]

                border-[5px]
                border-white/50

                object-cover

                shadow-[0_20px_80px_rgba(168,85,247,0.35)]

                hover:scale-105
                hover:-translate-y-3

                transition-all
                duration-700
              "
            />

          </div>

        </div>

      </div>

      {/* FLOAT ANIMATION */}
      <style>{`
        @keyframes float {

          0%{
            transform: translateY(0px);
          }

          50%{
            transform: translateY(-20px);
          }

          100%{
            transform: translateY(0px);
          }

        }
      `}</style>

    </div>
  );
}

export default Contact;