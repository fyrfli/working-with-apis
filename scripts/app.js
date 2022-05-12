// Full year for footer
const todayDate = new Date();
jsyear.innerText = todayDate.getFullYear();


//constants for the API calls
const lat = "37.828390";
const lon = "92.177300";
const zip = "65584";
const country = "US";
const APIkey = "e1ac0e1c65a04c2f96e43436221205";

const loc = document.querySelector(".loc-info");
const curr = document.querySelector(".current-info");
const fore = document.querySelector(".forecast-info");

const apiCall = "http://api.weatherapi.com/v1/current.json?key=" + APIkey + "&q=" + zip;

fetch(apiCall)
  .then(response => {
    return response.json();
  })
  .then(jsondata => {
    let whereAmI = jsondata.location.name + ", " + jsondata.location.region;
    let whatTimeIsIt = jsondata.location.localtime;
    let tempF = jsondata.current.temp_f + "F" + '\u00B0';
    let tempC = jsondata.current.temp_c + "C" + '\u00B0';
    let condition = jsondata.current.condition.text;
    let icon = jsondata.current.condition.icon;
    let windM = jsondata.current.wind_mph + "mph";
    let windK = jsondata.current.wind_kph + "kph";
    let windDir = jsondata.current.wind_dir;
    let pressM = jsondata.current.pressure_mb + "mb";
    let pressI = jsondata.current.pressure_in + "in";
    let humid = jsondata.current.humidity;
    let cloud = jsondata.current.cloud;
    let feelsF = jsondata.current.feelslike_f + "F" + '\u00B0';
    let feelsC = jsondata.current.feelslike_c + "C" + '\u00B0';
    loc.innerHTML = "Location: " + whereAmI + "<br/><br/>Local time: " + whatTimeIsIt;
    curr.innerHTML = "<p></p>Temperature is: " + tempF + " / " + tempC + "<br/><br/> It is " + condition + "<br/><br/> Wind out of " + windDir + " at " + windM + " / " + windK + "</p> <p>Pressure is at " + pressM + " / " + pressI + " with humidity at " + humid + "<br><br> Cloud cover is " + cloud + " and it feels like " + feelsF + " / " + feelsC + ".</p>";
  });



  // Sample data from API Call
  //location":{"name":"Saint Robert","region":"Missouri","country":"USA","lat":37.83,"lon":-92.2,"tz_id":"America/Chicago","localtime_epoch":1652330750,"localtime":"2022-05-11 23:45"},"current":{"last_updated_epoch":1652330700,"last_updated":"2022-05-11 23:45","temp_c":22.7,"temp_f":72.9,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":5.6,"wind_kph":9,"wind_degree":150,"wind_dir":"SSE","pressure_mb":1018,"pressure_in":30.07,"precip_mm":0,"precip_in":0,"humidity":76,"cloud":0,"feelslike_c":24.9,"feelslike_f":76.8,"vis_km":16,"vis_miles":9,"uv":1,"gust_mph":11.6,"gust_kph":18.7}}