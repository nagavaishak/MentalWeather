import { motion } from 'framer-motion'

export default function Impact() {
  const benefits = [
    { value: '64%', label: 'Suicide reduction', source: 'Nature Medicine, 2023', color: 'from-teal to-cyan-400' },
    { value: '1-2 weeks', label: 'Advance notice', source: 'Pilot validation', color: 'from-accent to-pink-400' },
    { value: '€11.6B', label: 'Annual cost saved', source: 'HSE Economic Report', color: 'from-primary to-green-400' },
    { value: '7M', label: 'People protected', source: 'All-island population', color: 'from-purple-400 to-blue-400' },
  ]

  return (
    <section className="reveal-section relative py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-teal/10 border border-teal/30 text-teal font-semibold text-sm mb-6">
            PROVEN IMPACT
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-teal via-cyan-300 to-white bg-clip-text text-transparent">
              Real results.
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
              Real lives saved.
            </span>
          </h2>
        </motion.div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-500`} />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-white/30 transition-all duration-300">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15, type: 'spring' }}
                  className={`font-serif text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-br ${item.color} bg-clip-text text-transparent`}
                >
                  {item.value}
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-white/90">{item.label}</h3>
                <p className="text-white/50 text-sm">{item.source}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-teal/10 rounded-3xl blur-2xl" />
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
            <div className="text-6xl text-teal mb-6">"</div>
            <p className="text-2xl md:text-3xl text-white/80 leading-relaxed mb-8 font-light">
              We're not building a startup.
              <br />
              We're building <span className="text-teal font-semibold">infrastructure Ireland forgot to build.</span>
            </p>
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-gradient-to-b from-teal to-accent rounded-full" />
              <div>
                <div className="font-semibold text-white/90">Mental Weather Team</div>
                <div className="text-sm text-white/50">TCD × QUB</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
