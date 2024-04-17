import { useState, useEffect } from 'react'
import './App.css'
import Card from './Card'
import Navbar from './Navbar'

function App() {

  const [count, setCount] = useState(0)
  const [location, setLocation] = useState("")

  // get request to weather api
  useEffect(() => {
    fetch()
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setLocation(data);
    })
  })

  return (
    <>
      <Navbar />
      <h1>Welcome to the homepage</h1>
      <div className="card">
        <Card location={location}/> 
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
