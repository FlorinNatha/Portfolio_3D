import Globe from "react-globe.gl"
import Button from '../components/Button.jsx';
import { useState } from 'react';

const About = () => {

  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' florinnathasha6@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/image.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain rounded-full" />
            <div>
              <p className="grid-headtext">🚀Hi, I'm Nathasha Florin,</p>
              <p className="grid-subtext">I’m a Software Engineer focused on Full Stack Development, DevOps, and Machine Learning. I build scalable web applications, real-time systems, and data-driven solutions using modern technologies.<br />xperience includes MERN stack development, real-time features with WebRTC and Socket.IO, and deploying applications using Docker, CI/CD pipelines, and AWS.<br />also exploring Machine Learning and Deep Learning to develop intelligent, AI-driven systems, while continuously improving my skills in system design and cloud engineering.</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">🎯Tech Stack</p>
              <p className="grid-subtext">I work across full stack development, DevOps, and machine learning, using technologies like React, Node.js, and modern JavaScript frameworks to build scalable applications.
                <br />I have hands-on experience with backend systems, REST APIs, and databases such as MongoDB and MySQL, along with DevOps practices including Docker, CI/CD, and AWS deployments.
                <br />I’m also expanding my knowledge in Machine Learning with Python to build intelligent, data-driven solutions.</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I'm based in Colombo, Sri Lanka , with remote work available.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-14" />
            </div>
          </div>
        </div>


        <div className="xl:col-span-2 xl:row-span-3">
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
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
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
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
