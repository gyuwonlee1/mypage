import { motion } from "motion/react";

export function ProfileSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4"
    >
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
        <div className="relative w-32 h-32 rounded-full flex items-center justify-center shadow-xl ring-4 ring-white dark:ring-gray-800 text-5xl bg-white dark:bg-gray-900">
          💻
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
        반갑습니다, 이규원입니다
      </h1>
      <p className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-400">
        이제 막 시작하는 초보 바이브 코더
      </p>
      <p className="max-w-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
        필요한 것을 바로 만들어 내고 상상을 현실로 바꿀 수 있도록 성장하는 중인 초보
        개발자입니다.
      </p>
    </motion.section>
  );
}