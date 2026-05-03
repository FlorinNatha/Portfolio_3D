import { motion } from "framer-motion";

const tileVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skills = {
  languages: [
    { name: "C", logo: "https://cdn.simpleicons.org/c/A8B9CC" },
    { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus/00599C" },
    { name: "Java", logo: "https://cdn.simpleicons.org/java/007396" },
    { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "PHP", logo: "https://cdn.simpleicons.org/php/777BB4" },
  ],
  frontend: [
    { name: "HTML5", logo: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS3", logo: "https://cdn.simpleicons.org/css3/1572B6" },
    { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/white" },
    { name: "Bootstrap", logo: "https://cdn.simpleicons.org/bootstrap/7952B3" },
    { name: "Redux", logo: "https://cdn.simpleicons.org/redux/764ABC" },
    { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "TailwindCSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  ],
  backend: [
    { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Express", logo: "https://cdn.simpleicons.org/express/white" },
    { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "SQLite", logo: "https://cdn.simpleicons.org/sqlite/003B57" },
    { name: "Prisma", logo: "https://cdn.simpleicons.org/prisma/2D3748" },
  ],
  devops: [
    { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
    { name: "GitHub", logo: "https://cdn.simpleicons.org/github/white" },
    { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "Jenkins", logo: "https://cdn.simpleicons.org/jenkins/D24939" },
    { name: "VS Code", logo: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
    { name: "Visual Studio", logo: "https://cdn.simpleicons.org/visualstudio/5C2D91" },
    { name: "Linux", logo: "https://cdn.simpleicons.org/linux/FCC624" },
    { name: "Ubuntu", logo: "https://cdn.simpleicons.org/ubuntu/E95420" },
  ],
};

const SkillSection = ({ title, data }) => (
  <div className="my-10">
    <h2 className="text-2xl font-semibold text-white/90 mb-6 border-l-4 border-yellow-400 pl-4">
      {title}
    </h2>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
      {data.map((tech, index) => (
        <motion.div
          key={tech.name}
          variants={tileVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="flex flex-col items-center group cursor-pointer"
        >
          <div className="w-16 h-16 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 group-hover:border-yellow-400/50 transition-all duration-300 shadow-xl backdrop-blur-sm">
            <img src={tech.logo} alt={tech.name} className="w-10 h-10 object-contain" />
          </div>
          <p className="text-gray-400 mt-3 text-xs font-medium group-hover:text-white transition-colors duration-300">
            {tech.name}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="min-h-screen bg-[#010103] text-white py-10 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray_gradient mb-4">
            Technical Proficiency
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical stack, ranging from core programming languages to modern web frameworks and DevOps tools.
          </p>
        </motion.div>

        <SkillSection title="Programming Languages" data={skills.languages} />
        <SkillSection title="Frontend Development" data={skills.frontend} />
        <SkillSection title="Backend & Databases" data={skills.backend} />
        <SkillSection title="DevOps & Tools" data={skills.devops} />
      </div>
    </section>
  );
};

export default Skills;
