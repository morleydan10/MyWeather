# MyWeather

## Overview
MyWeather is a simple application that provides users with weather information based on either their current location or any location they search. It displays current weather conditions, temperature, and other relevant data, along with icons representing different weather conditions.

<img src='MyWeather/src/assets/MyWeather Home Snap.png' height="620.5vh" width="600vw"/>

## Features
- Current weather information display
- Dynamic weather icons based on weather conditions
- Support for both daytime and nighttime weather icons
- Searchbar to look up conditions around the globe

## Technologies Used
- HTML/CSS/React(JavaScript) for frontend development
- [WeatherAPI](https://www.weatherapi.com/) for weather data
- [Google Maps API](https://developers.google.com/maps) for reverse geocoding
- [Meteocons](https://bas.dev/work/meteocons) for SVG weather icons

## Installation
1. Clone the repository to your local machine:

```bash
git clone https://github.com/morleydan10/MyWeather.git
```

2. Navigate to the project directory:

```bash
cd MyWeather
```

3. Run the server in your terminal:

```bash
npm run dev
```

## Usage
- Upon opening the app, users will be prompted to allow access to their location.
- Once permission is granted, the app will fetch weather data for the user's location and display it on the screen.
- Users can see the current weather condition, temperature, and additional information.
- Users can search the weather for other locations using the search bar
- Weather icons will dynamically change based on the current weather condition and the location's local time
- Users have the ability to toggle between Fahrenheit and Celcius

## Future Plans
- Add 5 day forecast for locations
- Adjust styling for hourly forecast
- Give users the ability to change the language of the application

## Credits
- Weather icons provided by [Meteocons](https://bas.dev/work/meteocons)
- This project utilizes the [WeatherAPI](https://www.weatherapi.com/) to fetch weather data.
- This project utilizes the [Google Maps API](https://developers.google.com/maps) for reverse geocoding.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Please feel free to fork the repository and submit pull requests with your improvements.
