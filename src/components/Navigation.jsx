import { motion } from 'framer-motion'

export default function Navigation({ activeView, setActiveView }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'regional', label: 'Regional', icon: '🗺️' },
    { id: 'forecast', label: 'Forecast', icon: '🌤️' },
    { id: 'actions', label: 'Actions', icon: '🎯' },
    { id: 'data', label: 'Data', icon: '💾' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b-4 border-irish-green shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">

          {/* Logo - More personality */}
          <div className="flex items-center gap-3">
            <motion.div
              className="text-3xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              ☘️
            </motion.div>
            <div>
              <div className="font-black text-xl tracking-tight text-irish-green">MENTAL WEATHER</div>
              <div className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">All-Island System</div>
            </div>
          </div>

          {/* Navigation - Not perfectly rounded */}
          <ul className="hidden md:flex gap-2">
            {navItems.map(item => (
              <li key={item.id}>
                <motion.button
                  onClick={() => setActiveView(item.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 transition-all font-bold text-xs uppercase tracking-wide ${
                    activeView === item.id
                      ? 'bg-irish-green text-white border-b-4 border-emerald-800'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-irish-green border-b-4 border-transparent'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </motion.button>
              </li>
            ))}
          </ul>

          {/* Irish Flag - Different style */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="text-[9px] text-gray-600 font-black uppercase tracking-widest">🇮🇪 Ireland</div>
            <div className="flex gap-[2px]">
              <div className="w-4 h-8 bg-irish-green"></div>
              <div className="w-4 h-8 bg-white border-y-2 border-gray-300"></div>
              <div className="w-4 h-8 bg-irish-orange"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
