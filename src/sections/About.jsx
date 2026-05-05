import { useState, Suspense } from 'react';
import Globe from "react-globe.gl";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";

import Button from '../components/Button.jsx';
import TechStack3D from "../components/TechStack3D.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('florinnathasha6@gmail.com');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full"
      >
        {/* ── Intro Card ─────────────────────────────────────────── */}
        <motion.div variants={itemVariants} className="col-span-1 xl:row-span-3">
          <div className="grid-container group overflow-hidden">
            <div className="flex justify-center items-center py-2">
              <div className="relative">
                <img
                  src="/assets/image.png"
                  alt="Nathasha Florin"
                  className="w-44 h-44 md:w-56 md:h-56 object-contain rounded-full ring-2 ring-yellow-400/30 transition-all duration-500 group-hover:ring-yellow-400/70 group-hover:scale-105"
                />
                {/* online dot */}
                <span className="absolute bottom-3 right-3 w-4 h-4 bg-green-400 rounded-full border-2 border-black animate-pulse" />
              </div>
            </div>
            <div>
              <p className="grid-headtext text-yellow-400 mb-1">🚀 Hi, I'm Nathasha Florin</p>
              <p className="grid-subtext text-gray-300 leading-relaxed text-sm">
                Software Engineer focused on <span className="text-white font-semibold">Full Stack</span>,{' '}
                <span className="text-white font-semibold">DevOps</span>, and{' '}
                <span className="text-white font-semibold">Machine Learning</span>.
                <br /><br />
                I build scalable web apps, real-time systems with WebRTC &amp; Socket.IO, and deploy to AWS with Docker and CI/CD pipelines.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── 3D Orbital Tech Stack Card ─────────────────────────── */}
        <motion.div variants={itemVariants} className="col-span-1 xl:row-span-3">
          <div className="grid-container group" style={{ background: 'rgba(1,1,20,0.7)' }}>
            {/* Canvas area */}
            <div className="w-full sm:h-[276px] h-64 relative rounded-2xl overflow-hidden">
              <Canvas camera={{ position: [0, 3, 11], fov: 52 }}>
                <Suspense fallback={<CanvasLoader />}>
                  <TechStack3D />
                  {/* Core glow */}
                  <pointLight position={[0, 0, 0]} intensity={5} color="#00d4ff" distance={6} />
                  {/* Fill lights in brand colours */}
                  <pointLight position={[6, 4, 6]}   intensity={2} color="#61DAFB" />
                  <pointLight position={[-6, -4, -6]} intensity={1.5} color="#339933" />
                  <ambientLight intensity={0.3} />
                </Suspense>
              </Canvas>
              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[rgba(1,1,20,0.9)] to-transparent pointer-events-none" />
              {/* Tech pill badges */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 flex-wrap px-3 pointer-events-none">
                {['React', 'Node.js', 'Docker', 'Python', 'MongoDB', 'AWS'].map(t => (
                  <span
                    key={t}
                    className="text-[9px] text-cyan-300/70 bg-cyan-900/20 border border-cyan-400/10 rounded-full px-2 py-0.5 backdrop-blur-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="grid-headtext text-yellow-400">🎯 Tech Orbit</p>
              <p className="grid-subtext text-gray-300 text-sm">
                Core techs (React, Node.js, Docker, Python) in inner orbit. Mid-ring holds databases &amp; cloud (MongoDB, MySQL, AWS, GitHub). Outer ring: TypeScript, Jenkins, Linux, Next.js.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Globe Card ─────────────────────────────────────────── */}
        <motion.div variants={itemVariants} className="col-span-1 xl:row-span-4">
          <div className="grid-container group">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center overflow-hidden">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 6.9271, lng: 79.8612, text: '📍 Colombo, Sri Lanka', color: '#facc15', size: 18 }]}
              />
            </div>
            <div>
              <p className="grid-headtext text-yellow-400">Global Availability</p>
              <p className="grid-subtext text-gray-300 text-sm">
                Based in Colombo, Sri Lanka. Open to remote collaboration across all time zones.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </motion.div>

        {/* ── Passion Card ─ original layout ─────────────────────── */}
        <motion.div variants={itemVariants} className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Contact Card ─ original layout ─────────────────────── */}
        <motion.div variants={itemVariants} className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-lg md:text-lg font-medium text-gray_gradient text-white">florinnathasha6@gmail.com</p>
              </div>
              <a
                href="https://www.linkedin.com/in/nathasha-florin-7413b6268/"
                target="_blank"
                rel="noopener noreferrer"
                className="copy-container hover:opacity-80 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0A66C2" className="w-5 h-5 shrink-0">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <p className="lg:text-lg md:text-lg font-medium text-gray_gradient text-white">linkedin.com/in/nathasha-florin</p>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
