import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Line, Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export default function Dashboard() {
  const [helplineVolume, setHelplineVolume] = useState(247)
  const [searchTrends, setSearchTrends] = useState('+32%')
  const [counselingDemand, setCounselingDemand] = useState(189)

  useEffect(() => {
    const interval = setInterval(() => {
      setHelplineVolume(Math.floor(Math.random() * 50) + 220)
      setSearchTrends('+' + Math.floor(Math.random() * 20 + 25) + '%')
      setCounselingDemand(Math.floor(Math.random() * 40) + 170)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const trendData = {
    labels: ['Day 1', 'Day 3', 'Day 5', 'Day 7', 'Day 9', 'Day 11', 'Day 14'],
    datasets: [{
      label: 'Mental Weather Index',
      data: [2.1, 2.3, 3.2, 3.4, 2.8, 1.9, 1.2],
      borderColor: '#169B62',
      backgroundColor: 'rgba(22, 155, 98, 0.15)',
      tension: 0.4,
      fill: true,
      borderWidth: 3,
    }]
  }

  const trendOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 4,
        ticks: {
          callback: function(value) {
            const labels = ['', '☀️ Stable', '⛅ Strained', '🌧️ High', '🌩️ Crisis']
            return labels[value] || ''
          }
        }
      }
    }
  }

  const sourcesData = {
    labels: ['Helplines', 'Search Trends', 'Counseling', 'Universities'],
    datasets: [{
      data: [35, 28, 22, 15],
      backgroundColor: ['#169B62', '#4ECDC4', '#FF883E', '#e85d75']
    }]
  }

  const sourcesOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }

  return (
    <div className="px-6 py-8">
      <div className="max-w-7xl mx-auto">

        {/* Header - Asymmetric design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 relative"
        >
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-irish-green via-irish-orange to-irish-green rounded-full"></div>
          <div className="pl-8">
            <div className="inline-block px-3 py-1 bg-irish-green/10 border-l-4 border-irish-green mb-3">
              <span className="text-xs uppercase tracking-widest text-irish-green font-bold">Real-Time Intelligence</span>
            </div>
            <h1 className="font-serif text-6xl font-bold mb-3 text-gray-900 leading-tight">
              Mental Weather<br/>
              <span className="text-irish-green">Dashboard</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl border-l-2 border-gray-300 pl-4">
              Population-level mental health demand forecasting for Ireland. Real-time data, 1-2 weeks advance notice, zero individual tracking.
            </p>
          </div>
        </motion.div>

        {/* Current Index - Unique shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 relative"
        >
          <div className="absolute -top-3 -left-3 w-full h-full bg-orange-200 rounded-[2rem] -z-10"></div>
          <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-10 rounded-[2rem] border-4 border-orange-300 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gray-400"></div>
              <span className="text-xs uppercase tracking-widest text-gray-600 font-bold">Current Index</span>
              <div className="h-px w-12 bg-gray-400"></div>
            </div>

            <div className="weather-icon text-[8rem] mb-4 inline-block">🌧️</div>
            <h2 className="font-serif text-5xl font-bold mb-2 text-gray-900">High Stress</h2>
            <p className="text-gray-600 text-base mb-8 max-w-lg mx-auto">Elevated demand expected across services in 1-2 weeks</p>

            {/* Index Scale - Mixed corners */}
            <div className="grid grid-cols-4 gap-3 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-5 rounded-tl-3xl rounded-br-3xl bg-green-200 border-b-4 border-r-4 border-green-500 cursor-pointer"
              >
                <div className="text-4xl mb-2">☀️</div>
                <div className="font-bold text-xs uppercase tracking-wide text-gray-900">Stable</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-5 rounded-tr-3xl rounded-bl-3xl bg-yellow-200 border-b-4 border-r-4 border-yellow-500 cursor-pointer"
              >
                <div className="text-4xl mb-2">⛅</div>
                <div className="font-bold text-xs uppercase tracking-wide text-gray-900">Strained</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-5 rounded-tl-3xl rounded-br-3xl bg-orange-300 border-b-4 border-r-4 border-orange-600 cursor-pointer"
              >
                <div className="text-4xl mb-2">🌧️</div>
                <div className="font-bold text-xs uppercase tracking-wide text-gray-900">High Stress</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-5 rounded-tr-3xl rounded-bl-3xl bg-red-200 border-b-4 border-r-4 border-red-500 cursor-pointer"
              >
                <div className="text-4xl mb-2">🌩️</div>
                <div className="font-bold text-xs uppercase tracking-wide text-gray-900">Crisis Risk</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics - Different shapes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="bg-emerald-100 p-5 rounded-2xl border-l-[6px] border-irish-green shadow-sm"
          >
            <div className="text-[10px] uppercase tracking-widest text-gray-600 mb-2 font-bold">Helpline (24h)</div>
            <div className="font-serif text-5xl font-bold text-irish-green mb-1">{helplineVolume}</div>
            <div className="text-[10px] text-green-800 font-bold">+12% vs avg</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="bg-orange-100 p-5 rounded-2xl border-l-[6px] border-irish-orange shadow-sm"
          >
            <div className="text-[10px] uppercase tracking-widest text-gray-600 mb-2 font-bold">Search Trends</div>
            <div className="font-serif text-5xl font-bold text-orange-700 mb-1">{searchTrends}</div>
            <div className="text-[10px] text-orange-800 font-bold">Elevated</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-blue-100 p-5 rounded-2xl border-l-[6px] border-blue-500 shadow-sm"
          >
            <div className="text-[10px] uppercase tracking-widest text-gray-600 mb-2 font-bold">Counseling</div>
            <div className="font-serif text-5xl font-bold text-blue-700 mb-1">{counselingDemand}</div>
            <div className="text-[10px] text-blue-800 font-bold">+8% vs avg</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-purple-100 p-5 rounded-2xl border-l-[6px] border-purple-500 shadow-sm"
          >
            <div className="text-[10px] uppercase tracking-widest text-gray-600 mb-2 font-bold">Forecast</div>
            <div className="font-serif text-5xl font-bold text-purple-700 mb-1">8-10d</div>
            <div className="text-[10px] text-purple-800 font-bold">Belfast → Dublin</div>
          </motion.div>
        </div>

        {/* Charts - Asymmetric layout */}
        <div className="grid md:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="md:col-span-3 bg-white p-6 border-4 border-emerald-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-irish-green"></div>
              <h3 className="font-bold text-lg text-gray-900 uppercase tracking-wide text-sm">14-Day Trend</h3>
            </div>
            <div style={{ height: '300px' }}>
              <Line data={trendData} options={trendOptions} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="md:col-span-2 bg-white p-6 border-4 border-orange-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-irish-orange"></div>
              <h3 className="font-bold text-lg text-gray-900 uppercase tracking-wide text-sm">Data Sources</h3>
            </div>
            <div style={{ height: '300px' }}>
              <Doughnut data={sourcesData} options={sourcesOptions} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
