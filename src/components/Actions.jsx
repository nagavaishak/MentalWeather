export default function Actions() {
  const priorityActions = [
    {
      organization: 'Samaritans Ireland',
      title: 'Extend Helpline Hours: 24/7 Coverage',
      description: 'Crisis risk forecast for Days 3-5. Pre-roster additional volunteers immediately. Expected surge: +45%',
      icon: '📞',
      borderColor: 'border-red-500',
      buttonColor: 'bg-red-600 hover:bg-red-700'
    },
    {
      organization: 'TCD & QUB Counseling',
      title: 'Double Appointment Slots',
      description: 'Student demand elevated (Belfast +52%). Open weekend availability Days 3-7. Coordinate emergency coverage.',
      icon: '🎓',
      borderColor: 'border-red-500',
      buttonColor: 'bg-red-600 hover:bg-red-700'
    }
  ]

  const upcomingActions = [
    {
      organization: 'SpunOut.ie',
      title: 'Increase Digital Support Capacity',
      description: 'Online engagement forecast +30%. Scale chat support team. Prepare crisis resources.',
      icon: '💬',
      borderColor: 'border-orange-400',
      buttonColor: 'bg-orange-600 hover:bg-orange-700',
      buttonText: 'Schedule'
    },
    {
      organization: 'HSE Mental Health Services',
      title: 'Activate Surge Protocol',
      description: 'High stress persisting through Day 7. Brief emergency staff. Coordinate with community partners.',
      icon: '🏥',
      borderColor: 'border-orange-400',
      buttonColor: 'bg-orange-600 hover:bg-orange-700',
      buttonText: 'Schedule'
    }
  ]

  const preventativeActions = [
    {
      organization: 'Jigsaw',
      title: 'Community Outreach Campaign',
      description: 'Forecast returning to baseline. Deploy preventative resources. Focus on early intervention.',
      icon: '🎯',
      borderColor: 'border-green-500',
      buttonColor: 'bg-green-600 hover:bg-green-700',
      buttonText: 'Plan Ahead'
    }
  ]

  const ActionCard = ({ action, buttonText = 'Deploy Now' }) => (
    <div className={`glass p-6 rounded-2xl border-l-4 ${action.borderColor} hover:shadow-xl transition-all`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">{action.organization}</div>
          <h4 className="font-bold text-lg mb-2">{action.title}</h4>
          <p className="text-gray-600 text-sm">{action.description}</p>
        </div>
        <div className="text-4xl">{action.icon}</div>
      </div>
      <div className="flex gap-3">
        <button className={`px-4 py-2 ${action.buttonColor} text-white rounded-lg text-sm font-semibold transition-colors`}>
          {buttonText}
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors">
          View Details
        </button>
      </div>
    </div>
  )

  return (
    <div className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Automated Recommendations</div>
          <h1 className="font-serif text-5xl font-bold mb-4">Action Cards</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            AI-generated recommendations for service providers based on current Mental Weather Index and forecast. Enable proactive response.
          </p>
        </div>

        {/* Priority Actions */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <h3 className="font-semibold text-xl">Priority Actions (Next 72 Hours)</h3>
          </div>
          <div className="space-y-4">
            {priorityActions.map((action, index) => (
              <ActionCard key={index} action={action} />
            ))}
          </div>
        </div>

        {/* Upcoming Actions */}
        <div className="mb-6">
          <h3 className="font-semibold text-xl mb-4">Upcoming Actions (Days 4-7)</h3>
          <div className="space-y-4">
            {upcomingActions.map((action, index) => (
              <ActionCard key={index} action={action} buttonText={action.buttonText} />
            ))}
          </div>
        </div>

        {/* Preventative Actions */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Preventative Actions (Days 8-14)</h3>
          <div className="space-y-4">
            {preventativeActions.map((action, index) => (
              <ActionCard key={index} action={action} buttonText={action.buttonText} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
