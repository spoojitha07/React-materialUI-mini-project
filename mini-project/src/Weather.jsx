import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';
function Weather(){
   let [newweather,setweather] = useState({
        city: "Mumbai",
        Latitude:35.88,
        Longitude:98.44,
        humidity:25,
        max_temp: 311.95,
        min_temp: 311.95,
        temp: 311.95,
        weather: "cloudy"
   })
   let updateinfo = (newestinfo)=>{
      setweather(newestinfo);
   }
    return(
       <div style={{textAlign:"center"}}>
        <h1>Welcome to Weather App</h1>
        <SearchBox updateinfo={updateinfo}/>
        <InfoBox weatherinfo={newweather}/>
       </div>
    )
}

export default Weather;