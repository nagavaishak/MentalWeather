# Mental Weather

Ireland's first all-island mental health early-warning system. Population-level forecasting with 1-2 weeks advance notice.

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Chart.js** - Data visualizations
- **React Chart.js 2** - Chart.js React wrapper

## Project Structure

```
mental-weather/
├── src/
│   ├── components/         # React components
│   │   ├── Dashboard.jsx   # Main dashboard view
│   │   ├── Regional.jsx    # Regional breakdown
│   │   ├── Forecast.jsx    # 14-day forecast
│   │   ├── Actions.jsx     # Action cards
│   │   ├── Data.jsx        # Data sources
│   │   ├── Navigation.jsx  # Nav bar
│   │   ├── Footer.jsx      # Footer
│   │   └── CursorBlob.jsx  # Interactive cursor effect
│   ├── styles/
│   │   └── index.css       # Global styles + Tailwind
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── public/
│   └── index.html          # HTML template
└── package.json            # Dependencies
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Opens at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Features

- **5 Interactive Views**: Dashboard, Regional, Forecast, Actions, Data
- **Real-time Updates**: Live data simulation every 4 seconds
- **Interactive Charts**: Line charts, doughnut charts with Chart.js
- **Cursor Effects**: Smooth gradient blob following mouse
- **Glassmorphism**: Modern frosted glass UI design
- **Responsive**: Mobile-first design with Tailwind CSS
- **Single Page App**: Fast client-side navigation

## Key Components

### Dashboard
- Current Mental Weather Index (☀️→⛅→🌧️→🌩️)
- Live metrics: helpline volume, search trends, counseling demand
- 14-day trend chart & data sources breakdown

### Regional
- Belfast, Dublin, Cork, Galway breakdowns
- Cross-border intelligence (Belfast peaks 8-10 days before Dublin)
- Multi-line regional comparison chart

### Forecast
- 14-day visual weather timeline
- AI confidence levels (72-87%)
- Peak alerts and insights

### Actions
- Priority actions (next 72 hours)
- Upcoming actions (days 4-7)
- Preventative actions (days 8-14)
- Deploy/Schedule/Plan buttons

### Data
- Data source transparency
- Update frequency, latency, anonymization status
- Visual pipeline diagram

## Mental Weather Index

- ☀️ **Stable**: Normal demand patterns
- ⛅ **Strained**: Elevated support needs
- 🌧️ **High Stress**: Surge expected 1-2 weeks
- 🌩️ **Crisis Risk**: Immediate action required

## Partners

TCD × QUB × Samaritans × SpunOut × Pieta House

## License

TCD × QUB 2026
