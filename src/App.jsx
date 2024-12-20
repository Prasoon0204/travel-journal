import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import data from './data'
function App() {
  return (
    <>
      <Header />
      {data.map((items) => (
        <Card 
        key={items.id}
        {...items}
        />
      ))}
    </>
  )
}

export default App
