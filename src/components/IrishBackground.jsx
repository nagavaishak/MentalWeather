import { motion } from 'framer-motion'

export default function IrishBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

      {/* Colorful Gradient Orbs - More visible */}
      <motion.div
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(255, 136, 62, 0.4) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(22, 155, 98, 0.4) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-[450px] h-[450px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(78, 205, 196, 0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Shamrocks */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-irish-green opacity-[0.05] text-6xl"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 2,
          }}
        >
          ☘️
        </motion.div>
      ))}
    </div>
  )
}
