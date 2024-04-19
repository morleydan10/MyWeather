import { useState, useEffect } from 'react'
import './App.css'
import Card from './Card'
import Navbar from './Navbar'

function App() {

  const [colorTheme, setColorTheme] = useState('light')
  const [location, setLocation] = useState("")

  // get request to weather api
  // useEffect(() => {
  //   fetch()
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     setLocation(data);
  //   })
  // })

  const toggleTheme = () => console.log("I have been clicked")

  return (
    <>
      <Navbar />
      <h1>Welcome to the homepage</h1>
      <div className="card">
        <Card location={location}/> 
        <br/>
        <button className='toggle' onClick={toggleTheme}> toggle
        </button>
      </div>
    </>
  )
}

export default App
