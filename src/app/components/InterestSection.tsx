import { Music, Plane, Beer, MonitorPlay, Gamepad2 } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const interests = [
  { icon: Music, title: "음악 감상", color: "from-indigo-500 to-purple-500" },
  { icon: MonitorPlay, title: "여행 유튜브", color: "from-sky-500 to-cyan-500" },
  { icon: Beer, title: "혼맥", color: "from-amber-500 to-orange-500" },
  { icon: MonitorPlay, title: "OTT", color: "from-pink-500 to-rose-500" },
  { icon: Gamepad2, title: "게임", color: "from-emerald-500 to-green-500" },
];

export function InterestSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
          My Interests
        </h2>
        <div className="flex justify-center gap-8 max-w-4xl mx-auto flex-wrap">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center gap-2 border border-transparent hover:border-purple-300 dark:hover:border-purple-700 w-28"
              >
                <div className={`p-2.5 bg-gradient-to-br ${interest.color} rounded-lg shadow-md`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xs text-gray-900 dark:text-white font-medium text-center">
                  {interest.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}