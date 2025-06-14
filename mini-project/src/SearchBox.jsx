import TextField from '@mui/material/TextField';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
function SearchBox({updateinfo}){
    let [city,setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "312144d8d39ae25056ec934d8f79bc21";
    let getweatherinfo = async ()=>{
       let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
       let jsonrespone = await res.json();
       console.log(jsonrespone);
       let result = {
        city : city,
        temp: jsonrespone.main.temp,
        max_temp: jsonrespone.main.temp_max,
        min_temp: jsonrespone.main.temp_min,
        humidity: jsonrespone.main.humidity,
        weather: jsonrespone.weather[0].description,
        longitude:jsonrespone.coord.lon,
        latitude:jsonrespone.coord.lat
       };
       console.log(result);
       return result;
    };
    
    let handlechange = (evt)=>{
      setCity(evt.target.value);
    }    
    let handlesubmit = async (evt)=>{
    evt.preventDefault();
 console.log(city);
    let newestinfo = await getweatherinfo();
     updateinfo(newestinfo);
     setCity("");
    }
    return(
 <div className='SearchBox'>
 <h3>Search the city for its weather </h3>
 <form onSubmit={handlesubmit}>
 <TextField
          required
          id="city"
          label="City name"
          value={city}
          onChange={handlechange}
        />
       <Button variant="outlined" type="submit"   sx={{ marginLeft: '20px', marginTop: '15px', color: 'aqua' }}>
                  <Icon>
            <svg xmlns="http://www.w3.org/2000/svg">
    <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 19.585938 21.585938 C 20.137937 22.137937 21.033938 22.137938 21.585938 21.585938 C 22.137938 21.033938 22.137938 20.137938 21.585938 19.585938 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
</svg>
</Icon>
       </Button>

      
        
 </form>
</div>
    );
}

export default SearchBox;