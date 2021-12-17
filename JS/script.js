//Todo use for common JS Interaction
const cityForm=document.querySelector("form");
const updateCityDetails = async(city)=>{
    const cityDet=await getKey(city);
    const cityWeather=await getWeather(cityDet.Key);
    return {cityDetails:cityDet,cityWeatherConditions:cityWeather};
}
cityForm.addEventListener("submit",e=>{
    e.preventDefault();
    const city= cityForm.city.value.trim();
    cityForm.reset();
    //update the UI
    updateCityDetails(city).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
});