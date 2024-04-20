import { useState, useEffect } from 'react'
import './App.css'
import Card from './Card'
import Navbar from './Navbar'

function App() {

  const [colorTheme, setColorTheme] = useState('light');
  const [locationData, setLocationData] = useState(null);
  const [location, setLocation] = useState("New York");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_KEY}&q=${location}&aqi=no`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setLocationData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [location]);

  // Color scheme/theme logic----------------------------------------------------------

  const toggleTheme = (e) => {
    e.preventDefault();
    console.log("theme changed");
    console.log(colorTheme);
    setColorTheme(!colorTheme);
  };

  // useEffect(() => {
  //   const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //   setColorTheme(prefersDarkMode ? 'light' : 'dark');
  // }, []);

  // const style = {
  //   backgroundColor: colorTheme === 'light' ? 'white': '#242424',
  //   color: colorTheme === 'light' ? '#213547' : 'rgba(255, 255, 255, 0.87)',
  // };
  // -------------------------------------------------------------------------------------


  return (
    // <div style={style}>
    <div>
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
        {locationData && <Card location={locationData} />}
        <br/>
      </div>
    </div>
  );
}

export default App;
