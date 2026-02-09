import { Line } from 'react-chartjs-2'

export default function Regional() {
  const regionalData = {
    labels: ['Day 1', 'Day 3', 'Day 5', 'Day 7', 'Day 9', 'Day 11', 'Day 14'],
    datasets: [
      {
        label: 'Belfast',
        data: [3.2, 3.5, 3.8, 3.1, 2.4, 1.8, 1.3],
        borderColor: '#e85d75',
        tension: 0.4
      },
      {
        label: 'Dublin',
        data: [2.3, 2.6, 2.9, 3.2, 2.7, 2.0, 1.4],
        borderColor: '#4ECDC4',
        tension: 0.4
      },
      {
        label: 'Cork',
        data: [1.8, 1.9, 2.1, 2.3, 2.0, 1.6, 1.2],
        borderColor: '#f4a261',
        tension: 0.4
      },
      {
        label: 'Galway',
        data: [1.2, 1.3, 1.4, 1.5, 1.3, 1.1, 0.9],
        borderColor: '#1a5336',
        tension: 0.4
      }
    ]
  }

  const regionalOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 4,
        ticks: {
          callback: function(value) {
            const labels = ['', '☀️', '⛅', '🌧️', '🌩️']
            return labels[value] || ''
          }
        }
      }
    }
  }

  const regions = [
    {
      name: 'Belfast',
      area: 'Northern Ireland',
      icon: '🌩️',
      status: 'Crisis Risk',
      statusColor: 'text-red-600',
      metrics: {
        helpline: '+45%',
        search: '+52%',
        counseling: '+38%',
        forecast: 'Surge 3-5d'
      }
    },
    {
      name: 'Dublin',
      area: 'Republic of Ireland',
      icon: '🌧️',
      status: 'High Stress',
      statusColor: 'text-orange-600',
      metrics: {
        helpline: '+28%',
        search: '+34%',
        counseling: '+22%',
        forecast: 'Surge 10-12d'
      }
    },
    {
      name: 'Cork',
      area: 'Republic of Ireland',
      icon: '⛅',
      status: 'Strained',
      statusColor: 'text-yellow-600',
      metrics: {
        helpline: '+18%',
        search: '+21%',
        counseling: '+15%',
        forecast: 'Stable 7d'
      }
    },
    {
      name: 'Galway',
      area: 'Republic of Ireland',
      icon: '☀️',
      status: 'Stable',
      statusColor: 'text-green-600',
      metrics: {
        helpline: '+7%',
        search: '+9%',
        counseling: '+5%',
        forecast: 'Stable 14d'
      }
    }
  ]

  return (
    <div className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Regional Analysis</div>
          <h1 className="font-serif text-5xl font-bold mb-4">Cross-Border Intelligence</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Belfast peaks 8-10 days before Dublin. Real-time regional breakdown enables coordinated early response across Ireland.
          </p>
        </div>

        {/* Regional Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {regions.map(region => (
            <div key={region.name} className="glass p-8 rounded-2xl hover:shadow-2xl transition-all">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-serif text-3xl font-bold mb-2">{region.name}</h3>
                  <div className="text-sm text-gray-500">{region.area}</div>
                </div>
                <div className="text-6xl weather-icon">{region.icon}</div>
              </div>
              <div className="mb-6">
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Current Index</div>
                <div className={`font-semibold text-2xl ${region.statusColor}`}>{region.status}</div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-500 mb-1">Helpline</div>
                  <div className="font-semibold">{region.metrics.helpline}</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Search</div>
                  <div className="font-semibold">{region.metrics.search}</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Counseling</div>
                  <div className="font-semibold">{region.metrics.counseling}</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Forecast</div>
                  <div className="font-semibold">{region.metrics.forecast}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regional Chart */}
        <div className="glass p-6 rounded-2xl">
          <h3 className="font-semibold text-lg mb-4">Regional Comparison (14 Days)</h3>
          <div style={{ height: '400px' }}>
            <Line data={regionalData} options={regionalOptions} />
          </div>
        </div>
      </div>
    </div>
  )
}
