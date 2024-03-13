import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Heading from './Components/Header';
import Footer from './Components/Footer';
import { FcSearch } from "react-icons/fc";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { BsWind } from "react-icons/bs";
import { GiWindsock } from "react-icons/gi";
import { WiWindDeg } from "react-icons/wi";
function App() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const [input, setInput] = useState("");
    const [myData, setMyData] = useState({
        main: { temp: null, humidity: null, pressure:null,feels_like:null },
        weather: [{ description: "" }],
        sys: {country:null},
        wind:{speed:null,deg:null}
    })
    const [submitted, setSubmitted] = useState(false);
    const [isError, setIsError] = useState("");
    const [weatherImage, setWeatherImage] = useState(null);
    const weatherImages = {
        "clear sky": "clear-sky.png",
        "few clouds": "few-clouds.png",
        "scattered clouds": "scattered-clouds.png",
        "broken clouds": "broken-clouds.png",
        "overcast clouds":"overcast-clouds.png",
        "mist":"mist.png",
        "fog":"fog.png",
        "smoke":"smoke.png",
        "haze":"haze.png",
        "dust":"dust.png",
        "sand":"sand.png",
        "ash":"ash.png",
        "squalls":"squalls.png",
        "tornado":"tornado.png",
        "thunderstorm":"thunderstorm.png",
        "rain":"rain.png",
        "snow":"snow.png",
        "drizzle":"drizzle.png",
        "shower rain":"shower-rain.png",
        "freezing rain":"freezing-rain.png"
    };
    useEffect(() => {
        if (myData && myData.weather && myData.weather.length > 0) {
            const weatherDescription = myData.weather[0].description.toLowerCase();
            const imageName = weatherImages[weatherDescription];
            if (imageName) {
                setWeatherImage(`/Images/${imageName}`);
            }
        }
    }, [myData]);

{
     

    const handleClick = (event) => {
        event.preventDefault();
        setSubmitted(true);
        getApiData();
    }
     function handleChange(event){
        event.preventDefault();
        setInput(event.target.value);
        setMyData(null);
     }
    

    useEffect(() => {
        if (submitted && input.trim() !== '') {
            getApiData();
            setSubmitted(false); // Reset submitted state
        }
        
    }, [submitted,input]);

    const getApiData = async () => {
        try {
            
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`);
            setMyData(res.data);
            setIsError("");
        } catch (error) {
            setIsError(error.message);
        }
    };

    return (
        <>
        <div className="Box">
        <Heading />
            
        <form className='Form'> 
                <input id="in" type="text" name='input' onChange={handleChange} value={input} placeholder="Search your City" />
                <button id = "btn" type="button" onClick={handleClick}><FcSearch /></button>
            </form>
            <div className="container">
                 {isError && <h1>{isError}</h1>} 
                <h3>Weather in {input}</h3>
                 {myData && (
                    <div className='content'>
                        <div className='upper'>
                        <div className='box1'>
                            {weatherImage && <img src={weatherImage} style={{width:'100px', height:'100px', paddingLeft:'100px'}} alt='{myData.weather[0].description}'/>}
                        <h1>{Math.round(myData.main.temp-273)}°C</h1>
                        <p>{myData.weather[0].description}</p>
                         <p>{input},{myData.sys.country}</p>
                        </div>
                        <div className='box2'>
                        <h1>Wind</h1>
                        <p>Pressure:<BsWind style={{color:'#4169E1', width:'25px',height:'25px', paddingLeft:'5px'}}/>{myData.main.pressure} mb.</p>
                        <p>Speed:<GiWindsock style={{color:'#4169E1', width:'25px',height:'25px', paddingLeft:'5px'}}/>{myData.wind.speed} mph.</p>
                        <p>Direction:<WiWindDeg style={{color:'#4169E1', width:'25px',height:'25px', paddingLeft:'5px'}}/>{myData.wind.deg} deg.</p>                            
                        </div>
                        </div>
                        <div className='lower'>
                        <div className='box3'>
                        <p><FaTemperatureThreeQuarters style={{color:'#4169E1', width:'50px',height:'50px'}} />{Math.round(myData.main.feels_like-273)}°C</p>
                        <p style={{paddingLeft:'50px'}}>feels like.</p>
                        </div>
                        <div className='box4'>
                        <p><WiHumidity style={{color:'#4169E1', width:'50px',height:'50px'}}/>{myData.main.humidity}%</p>
                        <p style={{paddingLeft:'50px'}}>Humdity.</p>
                        </div>
                        </div>
                   
                    </div>
                )} 
            </div>
        </div>
            < Footer/>
    </>
    );
}
}
export default App;
