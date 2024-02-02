const apiKey = 'ceb7e3369be27e645e2003b144cdbe05'; // Replace with your actual API key
const getWeatherButton = document.getElementById('get-weather');
const cityNameElement = document.getElementById('city-name');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

getWeatherButton.addEventListener('click', () => {
  const cityInput = document.getElementById('city-input').value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      cityNameElement.textContent = data.name;
      temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
      descriptionElement.textContent = `Description: ${data.weather[0].description}`;
    })
    .catch(error => console.error('Error fetching weather data:', error));
});
