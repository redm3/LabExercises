import React from "react"

function HookWeather() {

    const [weather, setWeather] = React.useState('sunny')
    const [temperature, setTemperature] = React.useState(27)
    const [forecast, setForecast] = React.useState('scattered showers')

    const weatherOptions = ['sunny', 'windy', 'cloudy', 'snowing', 'rainy', 'hail']


    //add another button and function sunShines() to set the weather bsck to sunny
    const sunShines = () => {
        setWeather('sunny')
        setTemperature(temperature + 5);
    }
    const windBlows = () => {
        setWeather('windy')
        setTemperature(temperature - 5);
    }

    const changeWeather = () => {
        const randomIndex = Math.floor(Math.random() * weatherOptions.length);
        const randomWeather = weatherOptions[randomIndex];
        setWeather(randomWeather);
    }


    return (
        <div className="Weather componentBox">
            <h2>Weather Hook Example</h2>
            <div>Weather Today: {weather}. Temp is {temperature}&deg;C</div>
            <div>Weather Tomorrow: {forecast}</div>
            <div>Weather Forecast: {forecast}</div>

            {/* what happens if the onclick isn't wrapped in an arrow function? 
            The This keyword looses refernce */}
            <button onClick={windBlows}>Wind Blows</button>
            <button onClick={sunShines}>Sun Shines</button>
            <button onClick={changeWeather}>Change Weather</button>
            {/* <button onClick={WeatherState}>Change Weather</button> */}
        </div>
    )


}

export default HookWeather