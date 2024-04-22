import { useState, useEffect } from 'react'
import './App.css'
import Card from './Card'
import Navbar from './Navbar'

function App() {

  const [colorTheme, setColorTheme] = useState('light');
  const [locationData, setLocationData] = useState(null);
  const [location, setLocation] = useState(getCurrentLocation());

  const apiKey = import.meta.env.VITE_GEOCODING_KEY; 

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
    const currentLocation = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };

    console.log(currentLocation);


    // fetch for reverse geocoding
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${currentLocation.latitude},${currentLocation.longitude}&key=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const cityName = data.results[0].address_components[2].long_name
      setLocation(cityName);
    })
  });
};
  
  // Change this to a function getSearchedLocation(){} and pass in input from searchbar (i.e searchedLocation) as an argument
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

  // const toggleTheme = (e) => {
  //   e.preventDefault();
  //   console.log("theme changed");
  //   console.log(colorTheme);
  //   setColorTheme(!colorTheme);
  // };

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
      <Navbar apiKey={apiKey} />
      <div className="card">
        {locationData && <Card location={locationData} />}
        <br/>
      </div>
    </div>
  );
}

export default App;
