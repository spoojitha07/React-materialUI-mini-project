import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
function InfoBox({weatherinfo}){
   const weatherImages = {
  clear: "https://plus.unsplash.com/premium_photo-1677105700661-dbfad22793ca?q=80&w=2936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  clouds: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3Vkc3xlbnwwfHwwfHx8MA%3D%3D",
  rain: "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fFJhaW55fGVufDB8fDB8fHww",
  snow: "https://images.unsplash.com/photo-1542601098-8fc114e148e2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  haze: "https://plus.unsplash.com/premium_photo-1667926195926-b210e1963e2f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  default: "https://images.unsplash.com/photo-1532178910-7815d6919875?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
  const keyword = weatherinfo.weather?.toLowerCase().split(" ").pop(); // e.g., "few clouds" -> "clouds"
  const imageUrl = weatherImages[keyword] || weatherImages["default"];
return(
    <div className="InfoBox">
        <h1>Climate - {weatherinfo.weather}</h1>
        <div className="card-container">
<Card sx={{width:700,height:600,border:'solid black'}}>
      <CardMedia
        sx={{ height:280}}
        image={imageUrl}
        title="photo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         <b>{weatherinfo.city.toUpperCase()}</b>
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
          <p>Longitude:{weatherinfo.longitude}</p>
          <p>latitude:{weatherinfo.latitude}</p>
        <p>temperature : {weatherinfo.temp}&deg c;</p>
        <p>maximum temperature : {weatherinfo.max_temp};</p>
        <p>minimum temperature :   {weatherinfo.min_temp};</p>
        <p> Humidity  :  {weatherinfo.humidity}</p>
        <p>The weather feels like a bit <b>{weatherinfo.weather}</b> <br />Have a Great Day !!</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    </div>
)
}

export default InfoBox;