import './App.css'
import Header from './components/header.jsx'
import Card from './components/card.jsx'
import data from './data.jsx'

function App() {

  const allData = data.map(d => {
    return <Card 
      key={d.id}
      img={d.imageUrl}
      title={d.title}
      location={d.location}
      maps={d.googleMapsUrl}
      startDate={d.startDate}
      endDate={d.endDate}
      description={d.description}
    />
  })

  return (
    <div className="container">
      <Header />
      {allData}
    </div>
  )
}

export default App
