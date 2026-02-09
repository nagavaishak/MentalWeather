import { motion } from 'framer-motion'

export default function Problem() {
  const comparisons = [
    { icon: '🌤️', label: 'Weather', time: '10 Days', color: 'from-blue-400 to-cyan-300', available: true },
    { icon: '🦠', label: 'Flu', time: 'Weekly', color: 'from-purple-400 to-pink-300', available: true },
    { icon: '💨', label: 'Air Quality', time: 'Hourly', color: 'from-green-400 to-teal-300', available: true },
    { icon: '🧠', label: 'Mental Health', time: '2 Years', color: 'from-red-500 to-orange-400', available: false },
  ]

  const stats = [
    { value: '13 Years', label: 'Children wait for psychologist', icon: '👶' },
    { value: '€11.6B', label: 'Annual economic cost', icon: '💰' },
    { value: '42%', label: 'Adults affected lifetime', icon: '👥' },
    { value: '#1', label: 'Cause of death (young people)', icon: '⚠️' },
  ]

  return (
    <section className="reveal-section relative py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold text-sm mb-6">
            THE UNCOMFORTABLE TRUTH
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              We track everything
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent">
              except what matters most
            </span>
          </h2>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {comparisons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
              <div className={`relative ${item.available ? 'bg-white/5' : 'bg-red-500/10 border-red-500/30'} backdrop-blur-xl rounded-3xl p-8 border ${item.available ? 'border-white/10' : 'border-red-500/50'} hover:border-white/30 transition-all duration-300`}>
                <div className="text-6xl mb-4">{item.icon}</div>
                <div className="text-xs uppercase tracking-wider text-white/50 mb-2">{item.label}</div>
                <div className={`font-serif text-4xl font-bold bg-gradient-to-br ${item.color} bg-clip-text text-transparent`}>
                  {item.time}
                </div>
                {!item.available && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-red-500/20 to-orange-500/20 rounded-3xl blur-3xl" />
          <div className="relative bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-xl rounded-3xl p-12 border border-red-500/30">
            <h3 className="text-3xl font-bold mb-8 text-center text-white/90">The Human Cost</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-3">{stat.icon}</div>
                  <div className="font-serif text-4xl font-bold mb-2 bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
