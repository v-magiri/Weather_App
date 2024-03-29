//Todo use for common JS Interaction

//fetching the rquired elements of the UI
const cityForm=document.querySelector("form");
const card=document.querySelector(".city_card");
const city_name=document.querySelector(".city_name");
const CityWeather=document.querySelector(".weather_conditions");
const temp=document.querySelector(".temp");

//UI of time day weather condition
const time=document.querySelector(".time");
const icon=document.querySelector(".weather_icon img");
const forecast=new Forecast();

const updateUI= (data)=>{
    const cityDetails=data.cityDetails;
    const weather=data.cityWeatherConditions;
    const cityName=cityDetails.EnglishName;
    const cityWeather=weather.WeatherText;
    const cityTemperature=weather.Temperature.Metric.Value;
    city_name.innerText=cityName;
    CityWeather.innerText=cityWeather;
    temp.innerText=cityTemperature;

    //update the UI of the time of the day
    let timeSrc= weather.IsDayTime ? "img/day.svg": "img/night.svg";
    time.setAttribute("src",timeSrc);

    //adding the iconsrc
    let iconSrc=`img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute("src",iconSrc);

    card.style.display="block";
    // const weather=

}

cityForm.addEventListener("submit",e=>{
    e.preventDefault();
    const city= cityForm.city.value.trim();
    cityForm.reset();
    //save to local Storage
    localStorage.setItem("city",city);
    //update the UI
    forecast.updateCity(city).then((data)=>{
        console.log(data);
        updateUI(data);
    }).catch((err)=>{
        console.log(err);
    });
});
// if(localStorage.getItem("city")){
//     forecast.updateCity(localStorage.getItem("city")).then((data)=>{
//         console.log(data);
//         updateUI(data);
//     }).catch(()=>{
//         console.log(err);
//     })
// }