import { useState, useEffect } from 'react'
import Lenis from 'lenis'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard'
import Regional from './components/Regional'
import Forecast from './components/Forecast'
import Actions from './components/Actions'
import DataView from './components/DataView'
import Footer from './components/Footer'

function App() {
  const [activeView, setActiveView] = useState('dashboard')

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  const renderView = () => {
    switch(activeView) {
      case 'dashboard':
        return <Dashboard />
      case 'regional':
        return <Regional />
      case 'forecast':
        return <Forecast />
      case 'actions':
        return <Actions />
      case 'data':
        return <DataView />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-orange-50/30 via-white to-emerald-50/40 overflow-x-hidden min-h-screen">
      <Navigation activeView={activeView} setActiveView={setActiveView} />

      <main className="pt-24 min-h-screen">
        <div className="view-transition">
          {renderView()}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
