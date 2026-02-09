import { motion } from 'framer-motion'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: '📊',
      title: 'Aggregate Data',
      desc: 'Collect anonymized signals from helplines, counseling demand, search trends, economic indicators',
      color: 'from-teal to-cyan-400'
    },
    {
      number: '02',
      icon: '🤖',
      title: 'AI Forecasting',
      desc: 'Mental Weather Index predicts stress levels 1-2 weeks ahead: Stable → Crisis Risk',
      color: 'from-accent to-pink-400'
    },
    {
      number: '03',
      icon: '🎯',
      title: 'Enable Action',
      desc: 'Services receive advance notice to extend hours, pre-roster staff, deploy resources',
      color: 'from-primary to-green-400'
    },
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
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold text-sm mb-6">
            HOW IT WORKS
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-teal via-accent to-primary bg-clip-text text-transparent">
              Three steps to prevention
            </span>
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-teal via-accent to-primary opacity-20" />

          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="relative"
              >
                {/* Number Badge */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative inline-block mb-8"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-50`} />
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-3 border border-white/20">
                    <span className={`font-serif text-3xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                      {step.number}
                    </span>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-500`} />
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                    <div className="text-6xl mb-6">{step.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-white/90">{step.title}</h3>
                    <p className="text-white/60 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal/20 via-accent/20 to-primary/20 rounded-3xl blur-3xl opacity-50 group-hover:opacity-70 transition-all duration-500" />
          <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-12 border border-white/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold mb-2 text-white/90">Mental Weather Dashboard</h3>
                <p className="text-white/50">Real-time population-level intelligence</p>
              </div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">LIVE</span>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: '☀️', label: 'Stable', value: 'Galway', color: 'text-green-400' },
                { icon: '⛅', label: 'Strained', value: 'Cork', color: 'text-yellow-400' },
                { icon: '🌧️', label: 'High Stress', value: 'Dublin', color: 'text-orange-400' },
                { icon: '🌩️', label: 'Crisis Risk', value: 'Belfast', color: 'text-red-400' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/5 rounded-2xl p-6 text-center border border-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <div className="text-sm text-white/50 mb-1">{item.label}</div>
                  <div className={`font-bold ${item.color}`}>{item.value}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="mt-8 text-center"
            >
              <p className="text-white/60">
                <span className="text-teal font-semibold">Belfast peaks 8-10 days before Dublin</span> — enabling coordinated early response
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
