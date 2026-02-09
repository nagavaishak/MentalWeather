export default function Forecast() {
  const forecastDays = [
    { day: 'Today', icon: '🌧️', status: 'High Stress' },
    { day: 'Day 2', icon: '🌧️', status: 'High Stress' },
    { day: 'Day 3', icon: '🌩️', status: 'Crisis Risk' },
    { day: 'Day 5', icon: '🌩️', status: 'Crisis Risk' },
    { day: 'Day 7', icon: '🌧️', status: 'High Stress' },
    { day: 'Day 10', icon: '⛅', status: 'Strained' },
    { day: 'Day 14', icon: '☀️', status: 'Stable' },
  ]

  const insights = [
    {
      icon: '⚠️',
      title: 'Peak Alert: Days 3-5',
      description: 'Expect 40-50% surge in helpline volume. Crisis risk elevated. Immediate action required.',
      confidence: '87%',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      icon: '📈',
      title: 'Gradual Decline: Days 7-10',
      description: 'Stress levels beginning to normalize. Maintain elevated staffing through Day 10.',
      confidence: '79%',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      icon: '✅',
      title: 'Return to Baseline: Days 12-14',
      description: 'Demand patterns returning to normal. Standard capacity sufficient.',
      confidence: '72%',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ]

  return (
    <div className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Predictive Intelligence</div>
          <h1 className="font-serif text-5xl font-bold mb-4">14-Day Forecast</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            AI-powered demand forecasting with 1-2 week advance notice. Enables proactive resource allocation and preventative action.
          </p>
        </div>

        {/* Forecast Timeline */}
        <div className="glass p-8 rounded-2xl mb-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-semibold text-xl">Ireland-Wide Forecast</h3>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-primary text-white rounded-lg font-semibold text-sm">All-Island</button>
              <button className="px-4 py-2 bg-gray-200 rounded-lg font-semibold text-sm hover:bg-gray-300 transition-colors">Belfast</button>
              <button className="px-4 py-2 bg-gray-200 rounded-lg font-semibold text-sm hover:bg-gray-300 transition-colors">Dublin</button>
            </div>
          </div>

          {/* Forecast Days */}
          <div className="grid grid-cols-7 gap-4">
            {forecastDays.map((day, index) => (
              <div
                key={index}
                className={`text-center p-4 bg-white/50 rounded-xl ${
                  index === 0 ? 'border-2 border-green-200' : ''
                }`}
              >
                <div className="text-xs text-gray-500 mb-2">{day.day}</div>
                <div className="text-4xl mb-2">{day.icon}</div>
                <div className="text-xs font-semibold">{day.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Forecast Insights */}
        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <div key={index} className={`${insight.bgColor} border-2 ${insight.borderColor} p-6 rounded-2xl`}>
              <div className="text-3xl mb-4">{insight.icon}</div>
              <h4 className="font-bold text-lg mb-2">{insight.title}</h4>
              <p className="text-gray-700 text-sm mb-4">{insight.description}</p>
              <div className="text-xs text-gray-600">Confidence: {insight.confidence}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
