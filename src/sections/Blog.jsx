import { motion } from "framer-motion";
import { blogPosts } from "../constants";

const Blog = () => {
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
            Medium Blog Posts
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights into the world of software development, 3D web experiences, and DevOps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-yellow-400/50 transition-all duration-300 shadow-2xl backdrop-blur-sm group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <p className="text-yellow-400 text-xs font-semibold uppercase tracking-widest">
                    {post.date}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {post.desc}
                </p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-medium hover:text-yellow-400 transition-colors duration-300"
                >
                  Read on Medium
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
