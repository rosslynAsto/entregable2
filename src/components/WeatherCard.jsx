import React, { useState} from 'react'

const WeatherCard = ({weather, temperature}) => {
    const [isCelsius, setIsCelsius] = useState(true)
    const changeTemperature = () => setIsCelsius(!isCelsius)

    console.log(weather);
    return(
        <article className='card'>
            <h1>Weather App</h1>
            <h2>{`${weather?.name}, ${weather?.sys.country}`}</h2>
            <section>
                <img src={weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
               
            </section>
            <section>
                <h3>"{weather?.weather[0].description}"</h3>
                <ul>
                    <li> 
                        <span>Wind Speed</span> {weather?.wind.speed} m/s
                    </li>
                    <li>
                        <span>Clouds</span> {weather?.clouds.all} %
                    </li>
                    <li>
                        <span>Pressure</span> {weather?.main.pressure} hPa
                    </li>
                </ul>
            </section>
            <h2>{isCelsius ? `${temperature?.celsius} °C` : `${temperature?.farenheit} °F`}</h2>
            <button onClick={changeTemperature}>{isCelsius ? 'Change to °F': 'Change to °C'}</button>
        </article>
        
    )

}

export default WeatherCard