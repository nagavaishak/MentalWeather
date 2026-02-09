import { motion } from 'framer-motion'

export default function Solution() {
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
            THE FIX
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-teal via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Forecast. Don't React.
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Transform mental health services from <span className="text-red-400 line-through">reactive crisis management</span> to <span className="text-teal font-semibold">proactive population care</span>
          </p>
        </motion.div>

        {/* Before/After Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">

          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-2xl opacity-50" />
            <div className="relative bg-red-500/10 backdrop-blur-xl rounded-3xl p-10 border border-red-500/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center text-3xl">❌</div>
                <div>
                  <div className="text-2xl font-bold text-white/90">Before</div>
                  <div className="text-sm text-white/50">Reactive Response</div>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  'Wait for crisis to hit',
                  'Services overwhelmed',
                  'Burnout & long wait times',
                  'Data arrives 2+ years late',
                  'No advance planning',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3 text-white/70"
                  >
                    <span className="text-red-400">✗</span> {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-cyan-300/20 rounded-3xl blur-2xl opacity-50" />
            <div className="relative bg-teal/10 backdrop-blur-xl rounded-3xl p-10 border border-teal/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-teal/20 rounded-2xl flex items-center justify-center text-3xl">✓</div>
                <div>
                  <div className="text-2xl font-bold text-white/90">After</div>
                  <div className="text-sm text-white/50">Proactive Prevention</div>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  'Predict surge 1-2 weeks ahead',
                  'Pre-roster staff proactively',
                  'Extend hours before peak',
                  'Real-time intelligence',
                  'Prevent crisis before it hits',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3 text-white/90 font-medium"
                  >
                    <span className="text-teal">✓</span> {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: '⏰',
              title: 'Extended Hours',
              desc: 'Services scale capacity before peaks hit',
              color: 'from-purple-400 to-pink-400'
            },
            {
              icon: '👥',
              title: 'Surge Staffing',
              desc: 'Helplines pre-roster volunteers 1-2 weeks early',
              color: 'from-teal to-cyan-400'
            },
            {
              icon: '🎯',
              title: 'Preventative Care',
              desc: 'Deploy resources proactively, not reactively',
              color: 'from-accent to-red-400'
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white/90">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
