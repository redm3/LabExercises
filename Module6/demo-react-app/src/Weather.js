import React from 'react';


class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = { weather: 'sunny', temperature: 27, forecast: 'scattered showers' };

        this.weatherOptions = ['sunny', 'windy', 'cloudy','snowing', 'rainy','hail']
    }



    windBlows() {

        this.setState({ weather: 'windy', temperature:this.state.temperature-5 });

    }

    //add another button and function sunShines() to set the weather bsck to sunny
    sunShines() {

        this.setState({ weather: 'sunny', temperature:this.state.temperature-5 });

    }

    //add another button and function changeWeather() to toggle the weather between windy and sunny
    changeWeather() {
        const randomIndex = Math.floor(Math.random() * this.weatherOptions.length);
        const randomWeather = this.weatherOptions[randomIndex];
        this.setState({ weather: randomWeather });
      }

    //how could we switch between multiple possible weather states? 
    //array of weather states

/*     WeatherState = () => {
        const [weatherIndex, setWeatherIndex] = useState(0);
        const weatherStates = ['sunny', 'cloudy', 'windy', 'rainy'];
    } */

    render() {
        return (
            <div className="Weather componentBox">
                <h2>Weather State Example</h2>
                <div>Weather Today: {this.state.weather}. Temp is {this.state.temperature}&deg;C</div>
                <div>Weather Tomorrow: {this.state.forecast}</div>
                <div>Weather Forecast: {this.state.forecast}</div>

                {/* what happens if the onclick isn't wrapped in an arrow function? 
                The This keyword looses refernce */}
                <button onClick={() => this.windBlows()}>Wind Blows</button> {/* we can use event listeners like onClick, onSubmit, onChange but they need to be camelcased */}
                <button onClick={() => this.sunShines()}>Sun Shines</button>
                <button onClick={() => this.changeWeather()}>Change Weather</button>
                {/* <button onClick={WeatherState}>Change Weather</button> */}
            </div>
        )
    }
}

export default Weather;

//now create hooks based functional component equivalent