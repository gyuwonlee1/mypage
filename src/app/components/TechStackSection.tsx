import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const techStack = [
  { name: "Python (Beginner)", color: "from-blue-400 to-blue-600" },
  { name: "Figma (Beginner)", color: "from-purple-500 to-pink-500" },
  { name: "Git & GitHub (Beginner)", color: "from-orange-400 to-red-500" },
];

export function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {techStack.map((tech, index) => {
            const [label, level] = tech.name.split(" (");
            return (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`px-5 py-2.5 bg-gradient-to-r ${tech.color} text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 cursor-pointer`}
              >
                <span>{label}</span>
                {level && (
                  <span className="ml-1 text-xs opacity-80">
                    ({level.replace(")", "")})
                  </span>
                )}
              </motion.span>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}