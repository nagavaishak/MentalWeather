import { motion } from 'framer-motion'

export default function Trust() {
  const partners = [
    { name: 'Samaritans', role: 'Helpline Data Partner' },
    { name: 'Pieta House', role: 'Crisis Support Partner' },
    { name: 'SpunOut.ie', role: 'Youth Mental Health Partner' },
    { name: 'TCD', role: 'Research Partner' },
    { name: 'QUB', role: 'Research Partner' },
  ]

  const endorsements = [
    {
      org: 'NESC',
      quote: 'Cross-border mental health intelligence is unprecedented in Ireland',
      color: 'from-teal to-cyan-400'
    },
    {
      org: 'Nature Medicine',
      quote: '64% reduction in suicide rates with early warning systems',
      color: 'from-accent to-pink-400'
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
            TRUSTED BY
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Built with Ireland's
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal via-accent to-primary bg-clip-text text-transparent">
              leading organizations
            </span>
          </h2>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-teal/50 transition-all duration-300 text-center"
            >
              <div className="font-bold text-white/90 mb-2">{partner.name}</div>
              <div className="text-xs text-white/50">{partner.role}</div>
            </motion.div>
          ))}
        </div>

        {/* Endorsements */}
        <div className="grid md:grid-cols-2 gap-8">
          {endorsements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-2xl opacity-10 group-hover:opacity-30 transition-all duration-500`} />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${item.color} mb-4 text-sm font-semibold text-black`}>
                  {item.org}
                </div>
                <p className="text-lg text-white/80 leading-relaxed">"{item.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
