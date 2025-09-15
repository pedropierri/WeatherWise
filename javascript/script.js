const cityNameInput = document.querySelector('#city-input')
const searchBtn = document.querySelector('.search-btn')
const cityName = document.querySelector('#city-name')
const temp = document.querySelector('#temperature')
const humidity = document.querySelector('#humidity')
const windSpeed = document.querySelector('#wind-speed')

const API_KEY = '21ef802a34c403fb671820438d5f4248'

searchBtn.addEventListener('click', setNewURL)

function setNewURL(event) {
    event.preventDefault()

    if (cityNameInput.value.trim() !== '') {
        const newURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameInput.value.trim()}&appid=${API_KEY}&units=metric`
        fetchWeather(newURL)
    }
}

async function fetchWeather(newURL) {
    console.log('start fetch')
    console.log(newURL)
    try {
        if (cityNameInput !== '') {
        const response = await fetch(newURL)
        const data = await response.json()

        const city = data.name
        const tempNumber = data.main.temp 
        const windSpeedNumber = data.wind.speed
        const humidityNumber = data.main.humidity
        
        showData(city, tempNumber, windSpeedNumber, humidityNumber)
        }
        
    } catch {
        console.log('teste erro')
    }
}

function showData(city, tempNumber, windSpeedNumber, humidityNumber) {
    cityName.textContent = city
    temp.textContent = tempNumber
    windSpeed.textContent = windSpeedNumber
    humidity.textContent = humidityNumber
}