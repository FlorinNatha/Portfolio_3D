import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Particles from "../components/ParticleDesign";

import gcp1 from "../assets/achievements/gcp_1.jpeg";
import gcp2 from "../assets/achievements/gcp_2.jpeg";
import idealize1 from "../assets/achievements/idealize_1.jpg";
import idealize2 from "../assets/achievements/idealize_2.jpg";

const achievementsData = [
  {
    title: "🎉 My Google Cloud Arcade swags - 2025",
    description: "Successfully completed the Google Cloud Arcade challenges. As a reward for my skills and efforts, I received exclusive Google Cloud swag, including a branded mug, t-shirt, pins, and a laptop stand. 🎒👕\n\nBut honestly, the swags are just the cherry on top. The real reward has been the hands-on cloud skills, the labs, and the knowledge I've gained through Google Cloud Skills Boost. This journey has been one of the most engaging and rewarding learning experiences I've had.\n\nA huge thank you to the Google Arcade team for building such an incredible platform. 🚀\n\n#Googlecloud #GoogleArcade #CloudSkills",
    images: [
      gcp1,
      gcp2,
    ],
  },
  {
    title: "IDEALIZE 2025 - Semi-Finalists - 2025 ",
    description: "Participated in the IDEALIZE 2025 competition organized by AIESEC in University of Moratuwa. Our team 'SimpleDevs' proudly advanced to the semi-finals in the Open Category with our innovative app 'RedAlert'.",
    images: [
      idealize1,
      idealize2,
    ],
  }
];

const tileVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Achievements() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black to-darkMaroon text-gold flex flex-col items-center py-4">
      <Particles />

      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full h-auto flex flex-col justify-center items-center mb-8"
      >
        <div className="mt-12 w-full flex flex-col justify-center items-center">
          <h1 className="text-1xl md:text-3xl font-bold text-yellow-400 w-full text-center">
            <span>
              <Typewriter
                words={["My Achievements"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-white text-sm w-3/4 md:w-1/2 text-center mt-4 leading-relaxed">
            A showcase of my recent milestones, competition participations, and rewards. These represent my continuous dedication to learning, building, and collaborating.
          </p>
        </div>
      </motion.main>

      <div className="w-full flex flex-col justify-center items-center relative z-10 pb-12">
        <div className="w-11/12 md:w-3/4 flex flex-col gap-10">
          {achievementsData.map((achievement, idx) => (
            <motion.div
              key={idx}
              variants={tileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="w-full bg-black/60 border border-yellow-600/30 rounded-2xl p-6 shadow-[0_0_15px_rgba(255,215,0,0.1)] hover:shadow-[0_0_25px_rgba(255,215,0,0.2)] transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-yellow-400 mb-3">{achievement.title}</h2>
              <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed whitespace-pre-wrap">{achievement.description}</p>

              <div className="flex flex-wrap gap-6 justify-center">
                {achievement.images.map((img, i) => (
                  <div key={i} className="w-full md:w-[47%] overflow-hidden rounded-xl border border-gray-800 relative group">
                    <img
                      src={img}
                      alt={`${achievement.title} image ${i + 1}`}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
