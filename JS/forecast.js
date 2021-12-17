//Todo use for forecast
const key="	4NnxoTKabE7gE6UoVlYzsmR3pPpAbOS4";
//get weather conditions of the specified API
const getWeather = async(location_key)=>{
    const base="http://dataservice.accuweather.com/currentconditions/v1/";
    const query=`${location_key}?apikey=${key}`;
    const response=await fetch (base+query);
    const weather_condition=await response.json();
    // console.log(weather_condition);
    return weather_condition[0];
}
//location Api invocation
const getKey= async(city)=>{
    const base ='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`;
    const response=await fetch(base+query);
    const cityData=await response.json();

    return cityData[0];

}
// getKey("Nairobi").then((data)=>{
//         // console.log(data);
//         return getWeather(data.Key);
//     }).then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// // getWeather("224758")