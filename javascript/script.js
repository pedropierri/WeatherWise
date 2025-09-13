const cityNameInput = document.querySelector('#city-input')
const searchBtn = document.querySelector('.search-btn')
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
    console.log('comecou a fetch')
    console.log(newURL)
    try {
        const response = await fetch(newURL)
        const data = await response.json()

        const cityName = data.name
        const temp = data.main.temp 
        const windSpeed = data.wind.speed
        const humidity = data.main.humidity
        console.log(data, cityName, temp, windSpeed, humidity)
    } catch {
        console.log('teste erro')
    }
}

