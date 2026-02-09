import { motion } from 'framer-motion'

export default function CallToAction() {
  return (
    <section className="reveal-section relative py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal/30 via-accent/30 to-primary/30 rounded-full blur-[100px]" />

          <div className="relative">
            <motion.div
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-teal via-accent to-primary mb-8"
              style={{ backgroundSize: '200% 200%' }}
            >
              <span className="font-semibold text-black text-sm">
                Join the movement
              </span>
            </motion.div>

            <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-teal to-accent bg-clip-text text-transparent">
                From 2 years late
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-teal bg-clip-text text-transparent">
                to 2 weeks early
              </span>
            </h2>

            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Help us build the mental health infrastructure Ireland needs. Whether you're a service provider, researcher, or policymaker — there's a place for you.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(78, 205, 196, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-5 bg-gradient-to-r from-teal to-cyan-400 text-black font-bold rounded-full text-lg overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ opacity: 0.2 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Get Early Access
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white font-bold rounded-full text-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                Contact mentalweather@tcd.ie
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-8 text-sm text-white/50"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>4-week pilot complete</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal rounded-full animate-pulse" />
                <span>TCD × QUB validated</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span>Ready to scale</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
