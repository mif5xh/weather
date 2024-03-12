
const textInput = document.getElementById('text-input')




const apiKey = '0157d128b11d32b6fea7f1efe6f3ec28'

document.querySelector('form').addEventListener('submit', (e)=>{
  e.preventDefault()
   
  getWeather(textInput.value)
})


async function getWeather(param){
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${apiKey}&units=metric`)

    if (!response.ok){
      throw Error ('Get Elnurdan sorus')
    }

    const data = await response.json()
    console.log(data)
    document.getElementById('icon').innerHTML = `
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">
    `
    document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`

    document.getElementById('condition').textContent = `
    ${data.weather[0].description}
    `
    document.getElementById('details').innerHTML = `
        <p>feels like: ${Math.round(data.main.feels_like)}</p>
         <p>Humidity: ${data.main.humidity}</p>
         <p>Wind speed: ${Math.round(data.wind.speed)} m/s</p>
    `

  } catch (error) {
    document.getElementById('icon').textContent = error
    document.getElementById('temperature').textContent = ''
    document.getElementById('condition').textContent = ''
    document.getElementById('details').innerHTML = ''
  }
}