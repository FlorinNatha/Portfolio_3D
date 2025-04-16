import { motion } from "framer-motion";

const tileVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// Sample skills (use your full list here)
const skills = {
  frontend: [
    { name: "HTML", logo: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS", logo: "https://cdn.simpleicons.org/css3/1572B6" },
    { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "TailwindCSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  ],
  backend: [
    { name: "NodeJS", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "ExpressJS", logo: "https://cdn.simpleicons.org/express/000000" },
    { name: "Java",  logo: "https://cdn.simpleicons.org/java"  },
    { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
  ],
  
  devops: [
    { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws/232F3E" },
    { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "GitHub", logo: "https://cdn.simpleicons.org/github/181717" },
  ],
};

const SkillSection = ({ title, data }) => (
  <div className="my-6">
    <h2 className="text-2xl font-semibold text-yellow-300 text-center mb-4">{title}</h2>
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 justify-items-center">
      {data.map((tech) => (
        <motion.div
          key={tech.name}
          variants={tileVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <img src={tech.logo} alt={tech.name} width={50} height={50} />
          <p className="text-white mt-2 text-sm">{tech.name}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold text-center text-yellow-400 mb-8">
        Tech Stack Showcase
      </h1>
      <SkillSection title="Frontend" data={skills.frontend} />
      <SkillSection title="Backend" data={skills.backend} />
      
      <SkillSection title="DevOps" data={skills.devops} />
    </div>
  );
}

export default App;
