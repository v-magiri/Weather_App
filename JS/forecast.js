//Todo use for forecast
class Forecast{
    constructor(){
        this.key="VJcNusMGSpIY7GWdAvTtPNdXRbL6wn4b";
        this.cityWeather="http://dataservice.accuweather.com/currentconditions/v1/";
        this.cityURI='http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDet= await this.getKey(city);
        const cityWeather=await this.getWeather(cityDet.Key);
        return {cityDetails:cityDet,cityWeatherConditions:cityWeather};
    }
    //get weather conditions of the specified API
    async getWeather(id){
        const query=`${id}?apikey=${this.key}`;
        const response=await fetch (this.cityWeather+query);
        const weather_condition=await response.json();
        // console.log(weather_condition);
        return weather_condition[0];
    }
    //location Api invocation
    async getKey(city){
        const query=`?apikey=${this.key}&q=${city}`;
        const response=await fetch(this.cityURI+query);
        const cityData=await response.json();
    
        return cityData[0];
    
    }
}


// const getWeather = async(location_key)=>{

// }

// const getKey= async(city)=>{

// }
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