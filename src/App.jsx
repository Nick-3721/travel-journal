import './App.css'
import Nav from '../components/Nav.jsx'
import Card from '../components/Card.jsx'
import locationData from '../data.js'


function App() {
  const locations = locationData.map(card => {
    return <Card 
      key = {card.id}
      {...card}
    />
  })
  return (
    <>
      <Nav />
      <section className="content">
        {locations}
      </section>
    </>
  )
}

export default App
