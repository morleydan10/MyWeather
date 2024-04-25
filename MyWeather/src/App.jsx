import { useState, useEffect } from 'react'
import './App.css'
import Card from './Card'
import Navbar from './Navbar'
import Compass from '../src/assets/location-current.svg'

function App() {

  const [locationData, setLocationData] = useState(null);
  const [location, setLocation] = useState(null);
  const [hasSearched, setHasSearched] = useState(false)
  const [isCelcius, setIsCelcius] = useState(false);

  const apiKey = import.meta.env.VITE_GEOCODING_KEY; 

  // Retrieves user's current location 

  function getCurrentLocation() {
      navigator.geolocation.getCurrentPosition((position) => {
          const currentLocation = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
          };
          console.log(currentLocation);
          // fetch for reverse geocoding from google api
          fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${currentLocation.latitude},${currentLocation.longitude}&key=${apiKey}`)
              .then((res) => res.json())
              .then((data) => {
                  console.log(data);
                  const cityName = data.results[0].address_components[2].long_name;
                  setLocation(cityName);
              })
          })
      };

      // Sets location state as current location on initial page load
      useEffect(() =>{
        getCurrentLocation();
      }, []);

  // Sets the query from the searchbar to the location state
  function getSearchedLocation(searchedLocation){
      console.log(searchedLocation);
      setLocation(searchedLocation);
      setHasSearched(true);
  };
  
  // Sets the location state to the current location 
  const handleClick= (e) => {
    console.log("I was clicked");
    getCurrentLocation();
    setHasSearched(false);
  }
  
  // Fetch to weather api to retrieve current weather conditions
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
    }, [location, hasSearched]);

    const toggleCelcius = (e) => setIsCelcius(!isCelcius)



  return (
    <div>
      <Navbar apiKey={apiKey} getSearchedLocation={getSearchedLocation} />
      <br/>
      <br/>
      <div className="card">
        <div className='card-header'>
          <div className="current-location-div">
            <img src={Compass} alt="Compass icon"/>
            <a id="use-current-location" onClick={handleClick}>Use Current Location</a>
          </div>
          <div className='toggle-div'>
            <a id='celcius-toggle' onClick={toggleCelcius}>C°</a>
          </div>
        </div>
          {locationData && <Card location={locationData} isCelcius={isCelcius} />}
          <br/>
      </div>
    </div>
  );
}

export default App;
