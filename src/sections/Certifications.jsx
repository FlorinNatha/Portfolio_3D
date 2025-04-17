import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Particles from "../components/ParticleDesign";

// Local image imports

import CourseraAI from "public/assets/courseraAI.png";
import CourseraBackendIntro from "../../public/assets/certificateLogo/courseraBackendIntro.png";
import CourseraFrontEndIntro from "../../public/assets/certificateLogo/courseraFrontEndIntro.png";
import Hackerrank from "../../public/assets/certificateLogo/hackerrank_css.png";
import javascript from "../../public/assets/certificateLogo/javascript_basic.png";
import googlecloud1 from "../../public/assets/certificateLogo/googleCloud1.png";
import googlecloud2 from "../../public/assets/certificateLogo/googleCloud2.png";
import googlecloud3 from "../../public/assets/certificateLogo/googleCloud3.png";
import googlecloud4 from "../../public/assets/certificateLogo/googlecloud4.png";
import googlecloud5 from "../../public/assets/certificateLogo/googleCloud5.png";
import googlecloud6 from "../../public/assets/certificateLogo/googlecloud6.png";
import googlecloud7 from "../../public/assets/certificateLogo/googleCloud7.png";

const certifications = [
  
    {
        name: "Meta - Introduction to Back-End Development",
        logo: CourseraBackendIntro,
        link: "https://www.coursera.org/account/accomplishments/verify/5UITENPA1X45",
      },

      {
        name: "Meta - Introduction to Front_End Development",
        logo: CourseraFrontEndIntro,
        link: "https://www.coursera.org/account/accomplishments/verify/JQ8SPBP7CQJJ",
      },
  {
    name: "Css (Basic) Certificate",
    logo: Hackerrank,
    link: "https://www.hackerrank.com/certificates/e446f206ff25",
  },
  
  {
    name: "Javascript (Basic) Certificate",
    logo: javascript,
    link: "https://www.hackerrank.com/certificates/e446f206ff25",
  },
 
  {
    name: "DeepLearning.AI",
    logo: CourseraAI,
    link: "https://www.hackerrank.com/certificates/e446f206ff25",
  },
  
  {
    name: "Skills Boost Arcade Trivia March 2025 Week 2",
    logo: googlecloud1,
    link: "https://www.cloudskillsboost.google/public_profiles/843edc3a-74d4-4442-b5c9-b784e63c6035/badges/14499227",
  },
  {
    name: "Skills Boost Arcade Trivia March 2025 Week 3",
    logo: googlecloud2,
    link: "https://www.cloudskillsboost.google/public_profiles/843edc3a-74d4-4442-b5c9-b784e63c6035/badges/14488367",
  },
  {
    name: "Skills Boost Arcade Trivia February 2025 Week 3",
    logo: googlecloud3,
    link: "https://www.cloudskillsboost.google/public_profiles/843edc3a-74d4-4442-b5c9-b784e63c6035/badges/14145678",
  },
  {
    name: "Skills Boost Arcade Trivia February 2025 Week 2",
    logo: googlecloud4,
    link: "https://www.cloudskillsboost.google/public_profiles/843edc3a-74d4-4442-b5c9-b784e63c6035/badges/14139282",
  },
  {
    name: "Skills Boost Arcade Trivia February 2025 Week 1",
    logo: googlecloud5,
    link: "https://www.cloudskillsboost.google/public_profiles/843edc3a-74d4-4442-b5c9-b784e63c6035/badges/14083108",
  },
  {
    name: "The Arcade Trivia January 2025 Week 2",
    logo: googlecloud6,
    link: "https://www.cloudskillsboost.google/public_profiles/843edc3a-74d4-4442-b5c9-b784e63c6035/badges/13709926",
  },
  {
    name: "The Arcade Trivia January 2025 Week 1",
    logo: googlecloud7,
    link: "https://www.cloudskillsboost.google/public_profiles/843edc3a-74d4-4442-b5c9-b784e63c6035/badges/13700888",
  },
  
];

const tileVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function CertificationsPage() {
  return (
    <div className="w-full h-auto md:h-screen bg-gradient-to-br from-black to-darkMaroon text-gold flex flex-col items-center py-4">
      <Particles />
  
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full h-auto flex flex-col justify-center items-center"
      >
        <div className="mt-12 w-full flex flex-col justify-center items-center">
          <h1 className="text-1xl md:text-3xl font-bold text-yellow-400 w-full text-center">
            <span>
              <Typewriter
                words={["Licenses and Certifications"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-white text-sm w-3/4 text-center mt-4">
            I have completed several courses and certifications to enhance my
            skills and knowledge. I am always eager to learn new technologies
            and tools to improve my work. Here are some of the certifications I
            have completed so far in my career.
          </p>
        </div>
      </motion.main>

      <div className="w-full flex flex-wrap justify-center items-center mt-4">
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              variants={tileVariants}
              initial="hidden"
              animate="visible"
              className="w-full"
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 rounded-lg transition transform hover:scale-105 duration-500 ease-in-out bg-black p-2 hover:bg-darkMaroon hover:shadow-lg"
              >
                <img
                  src={cert.logo}
                  alt={cert.name}
                  width={25}
                  height={25}
                  className="rounded-lg"
                />
                <span className="text-white text-sm w-full">
                  <h1 className="text-sm text-left">{cert.name}</h1>
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <p
        className="text-white text-sm w-3/4 text-center mt-4"
        style={{ zIndex: 21 }}
      >
        You may visit my{" "}
        <a
          href="https://www.linkedin.com/in/nathasha-florin-7413b6268/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold cursor-pointer"
        >
          LinkedIn
        </a>{" "}
        profile or{" "}
        <a
          href="https://github.com/FlorinNatha"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold cursor-pointer"
        >
          Github
        </a>{" "}
        repository to see more certifications I possess.
      </p>
    </div>
  );
}

export default CertificationsPage;