import React, { useState , useEffect } from 'react'

const WeatherCard = ({temp, humidity, pressure, weathermood, name, speed, country, sunset}) => {

    const [weatherIcon , setWeatherIcon] = useState("")

    useEffect(() => {
        if (weathermood) {
          switch (weathermood) {
            case "Clouds":
              setWeatherIcon("wi-day-cloudy");
              break;
            case "Haze":
              setWeatherIcon("wi-fog");
              break;
            case "Clear":
              setWeatherIcon("wi-day-sunny");
              break;
            case "Mist":
              setWeatherIcon("wi-dust");
              break;
    
            default:
              setWeatherIcon("wi-day-sunny");
              break;
          }
        }
      }, [weathermood]);
    return (
        <>
           <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherIcon}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{Math.floor(parseInt(temp)-272)}&deg;C</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">{name} , {country}</div>
          </div>
        </div>

        <div className="date">{new Date().toLocaleString()}</div>

        {/* four column section */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {sunset} pm <br />
                sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-wind-beaufort-1"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                wind speed
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-barometer"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                mmHg
              </p>
            </div>
          </div>
        </div>
      </article>  
        </>
    )
}

export default WeatherCard
