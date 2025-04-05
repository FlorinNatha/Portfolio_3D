const About = () => {
  return (
    <section className="c-space my-20">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

          <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
              <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
              <div>
                <p className="grid-headtext">🚀Hi, I'm Nathasha Florin,</p>
                <p className="grid-subtext">a passionate Software Engineer currently studying at the University of Sri Jayewardenepura, Faculty of Computing. I thrive on exploring new technologies, enhancing my skills in software development, algorithms, data structures, and software design. My goal is to build efficient, scalable, and impactful software solutions.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
              <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w[276px] h-fit object-contain" />
              <div>
                <p className="grid-headtext">🎯Tech Stack</p>
                <p className="grid-subtext">My coding journey includes hands-on experience with HTML, CSS,JavaScript, Python, Java, C ,C++, React, Node.js, MySQL, Bootstrap, and Tailwind CSS. I enjoy problem-solving, tackling real-world challenges, and collaborating on innovative projects.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 xl:row-span-4">
            <div className="grid-container">
              <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                
              </div>
            </div>
          </div>

        </div>
    </section>
  )
}

export default About
