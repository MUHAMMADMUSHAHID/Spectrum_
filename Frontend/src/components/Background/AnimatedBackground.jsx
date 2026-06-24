import { motion } from "framer-motion";

export default function AnimatedBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute -top-72 -left-72 h-[700px] w-[700px] rounded-full bg-violet-500 blur-[170px] opacity-20"
      />

      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 70, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute -bottom-72 -right-72 h-[700px] w-[700px] rounded-full bg-cyan-400 blur-[170px] opacity-20"
      />

      {/* Pink Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute top-1/3 left-1/2 h-[450px] w-[450px] rounded-full bg-fuchsia-400 blur-[170px] opacity-10"
      />

      <div className="relative z-10">{children}</div>

    </div>
  );
}