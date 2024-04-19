import { useState, useEffect } from 'react'
import './App.css'
import Card from './Card'
import Navbar from './Navbar'

function App() {

  const [colorTheme, setColorTheme] = useState('light')
  const [location, setLocation] = useState("")
  // get request to weather api


  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${}&q=${location}&aqi=no`)
    .then((res) =>
      res.json())
    .then((data) => {
      console.log(data);
      setLocation(data);
    })
  }, [])

  const toggleTheme = (e) => {
    e.preventDefault;
    console.log("theme changed");
    console.log(colorTheme);
    setColorTheme(!colorTheme);
  }
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setColorTheme(prefersDarkMode ? 'light' : 'dark');
  }, [toggleTheme]);

  const style = {
    backgroundColor: colorTheme === 'light' ? 'white': '#242424',
    color: colorTheme === 'light' ? '#213547' : 'rgba(255, 255, 255, 0.87)',
  }

  return (
    <div style={style}>
      <Navbar />
      <div className="toggle-div">
        <label className='toggle'>
          <input 
            type='checkbox'
            onChange={toggleTheme}
          />
          <span className='slider'></span>
        </label>
      </div>
      <div className="card">
        <Card location={location}/> 
        <br/>
      </div>
    </div>
  )
}

export default App
