export default function Data() {
  const dataSources = [
    {
      title: 'Helpline Volume',
      provider: 'Samaritans, Pieta House, Console',
      status: 'ACTIVE',
      statusColor: 'bg-green-100 text-green-700',
      value: '247',
      valueLabel: 'Calls in last 24 hours',
      update: 'Hourly',
      latency: '< 1hr',
      anonymized: '✓ Yes'
    },
    {
      title: 'Search Trends',
      provider: 'Google Trends API',
      status: 'ACTIVE',
      statusColor: 'bg-green-100 text-green-700',
      value: '+32%',
      valueLabel: 'Mental health keyword searches',
      update: 'Daily',
      latency: '24hrs',
      anonymized: '✓ Yes'
    },
    {
      title: 'Counseling Demand',
      provider: 'TCD, QUB, UCD, UCC',
      status: 'ACTIVE',
      statusColor: 'bg-green-100 text-green-700',
      value: '189',
      valueLabel: 'Appointments booked (7 days)',
      update: 'Daily',
      latency: '12hrs',
      anonymized: '✓ Yes'
    },
    {
      title: 'Economic Indicators',
      provider: 'CSO, NISRA',
      status: 'PLANNED',
      statusColor: 'bg-gray-200 text-gray-700',
      value: '-',
      valueLabel: 'Unemployment, inflation, housing stress',
      update: 'Weekly',
      latency: '7 days',
      anonymized: '✓ Yes'
    }
  ]

  const pipeline = [
    { icon: '📊', title: 'Aggregate', subtitle: 'Multiple sources' },
    { icon: '🔒', title: 'Anonymize', subtitle: 'GDPR compliant' },
    { icon: '🤖', title: 'Process', subtitle: 'ML models' },
    { icon: '🌧️', title: 'Forecast', subtitle: 'Mental Weather Index' },
    { icon: '🎯', title: 'Act', subtitle: 'Service providers' }
  ]

  return (
    <div className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Data Infrastructure</div>
          <h1 className="font-serif text-5xl font-bold mb-4">Data Sources</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Population-level aggregation from multiple anonymized sources. Zero individual tracking. GDPR compliant. Real-time processing.
          </p>
        </div>

        {/* Data Source Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {dataSources.map((source, index) => (
            <div
              key={index}
              className={`glass p-8 rounded-2xl hover:shadow-xl transition-all ${
                source.status === 'PLANNED' ? 'opacity-60' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-xl mb-2">{source.title}</h3>
                  <div className="text-sm text-gray-500">{source.provider}</div>
                </div>
                <div className={`px-3 py-1 ${source.statusColor} rounded-full text-xs font-semibold`}>
                  {source.status}
                </div>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-serif font-bold mb-2">{source.value}</div>
                <div className="text-sm text-gray-600">{source.valueLabel}</div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-gray-500">Update</div>
                  <div className="font-semibold">{source.update}</div>
                </div>
                <div>
                  <div className="text-gray-500">Latency</div>
                  <div className="font-semibold">{source.latency}</div>
                </div>
                <div>
                  <div className="text-gray-500">Anonymized</div>
                  <div className="font-semibold">{source.anonymized}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Data Pipeline */}
        <div className="glass p-8 rounded-2xl">
          <h3 className="font-semibold text-xl mb-6">Data Pipeline</h3>
          <div className="flex items-center justify-between">
            {pipeline.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center flex-1">
                  <div className="text-4xl mb-3">{step.icon}</div>
                  <div className="font-semibold mb-1">{step.title}</div>
                  <div className="text-xs text-gray-500">{step.subtitle}</div>
                </div>
                {index < pipeline.length - 1 && (
                  <div className="text-2xl text-gray-400 mx-4">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
