//https://api.openweathermap.org/data/2.5/weather?q=bhopal&appid=4bc613201b51d88b2e97fdc4af29fbf0&units=metric

const apikey = "4bc613201b51d88b2e97fdc4af29fbf0";

const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector("#inputfeild");
const searchbutton = document.querySelector("#buttonfield");

async function checkweather(city){
    const response  = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".information").style.display ="none";
    }
    else{
        var data = await response.json();
        console.log(data);
    
    
        document.querySelector(".city_name").innerHTML = data.name;
        document.querySelector(".degree").innerHTML = data.main.temp + "°C";
        document.querySelector(".humiditytobeused").innerHTML = data.main.humidity + "%";
        document.querySelector(".weather_help").innerHTML = `${data.wind.speed}km/hr`;

        document.querySelector(".information").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchbutton.addEventListener("click",function(){
    checkweather(searchbox.value);
});



