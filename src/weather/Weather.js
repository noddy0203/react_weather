import React , {useState , useEffect} from "react";
import "../App.css";
import WeatherCard from "./WeatherCard";

const Weather = () => {

    const [searchVal, setSearchVal] = useState("pune")
    const [tamp , setTemp] = useState({})

    const getWeatherInfo = async ()=>{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&appid=02a06edb101779892acb1187f05219d1`)
        const resData = await res.json()
        console.log(resData)

const {temp , humidity , pressure} = resData.main
const { main:weathermood} = resData.weather[0]
const {name} = resData
const {speed} = resData.wind
const {country , sunset} = resData.sys

const newWeatherInfo = {
temp, humidity, pressure, weathermood, name, speed, country, sunset
}

setTemp(newWeatherInfo)
  }

useEffect(() => {
    getWeatherInfo()
}, [])

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            id="search"
            placeholder="City Name"
            className="searchTerm"
            autoFocus
            value={searchVal}
onChange={(e)=>setSearchVal(e.target.value)}
          />
          <button className="searchButton" type="button" onClick={getWeatherInfo}>
            <i className="fas fa-search-location"></i>
          </button>
        </div>
      </div>

      {/* weather card */}
     <WeatherCard {...tamp} />
    </>
  );
};

export default Weather
