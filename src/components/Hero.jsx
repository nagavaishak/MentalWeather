import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const weatherIcons = ['☀️', '⛅', '🌧️', '🌩️']
  const [currentIcon, setCurrentIcon] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % weatherIcons.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-32 overflow-hidden">

      {/* Floating Weather Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl opacity-10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {weatherIcons[Math.floor(Math.random() * weatherIcons.length)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block mb-8"
        >
          <div className="px-6 py-3 rounded-full bg-gradient-to-r from-teal/20 to-accent/20 border border-teal/30 backdrop-blur-xl">
            <span className="text-sm font-semibold bg-gradient-to-r from-teal to-accent bg-clip-text text-transparent">
              🏆 Inspire Impact Ideathon Finalist
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
          }}
        >
          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-teal to-accent bg-clip-text text-transparent">
              Ireland forecasts
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal via-accent to-primary bg-clip-text text-transparent">
              weather 10 days out.
            </span>
            <br />
            <span className="text-white/90">
              Mental health?
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent">
              2+ years late.
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          Mental Weather is Ireland's first <span className="text-teal font-semibold">real-time early warning system</span> for mental health demand.
          <br />
          Predict crisis surges <span className="text-accent font-semibold">1-2 weeks ahead</span>. Enable proactive response.
        </motion.p>

        {/* Weather Index Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative inline-block mb-16"
        >
          <div className="relative">
            <motion.div
              key={currentIcon}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="text-9xl"
            >
              {weatherIcons[currentIcon]}
            </motion.div>

            {/* Pulsing Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-teal"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-12"
        >
          {[
            { value: '1-2', label: 'Weeks Ahead', color: 'from-teal to-cyan-400' },
            { value: '7M', label: 'Population', color: 'from-accent to-pink-400' },
            { value: '0', label: 'Personal Data', color: 'from-primary to-green-400' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-teal/50 transition-all duration-300">
                <div className={`font-serif text-5xl font-bold mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(78, 205, 196, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-teal to-cyan-400 text-black font-bold rounded-full text-lg relative overflow-hidden group"
          >
            <span className="relative z-10">Explore Dashboard</span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
              style={{ opacity: 0.2 }}
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold rounded-full text-lg hover:bg-white/20 transition-all duration-300"
          >
            Learn More ↓
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ opacity: { delay: 1.5 }, y: { duration: 2, repeat: Infinity } }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
