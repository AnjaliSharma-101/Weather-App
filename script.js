const inputBox = document.querySelector('.input_box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "7ecb337983c7a4f736a29735d2578a86";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    /* back ticks is for providing scope  from api and it wiill be access using dollor sign*/
    
    const weather_data = await fetch(`${url}`).then(response => response.json());
    /* to access our weather we are using fetch function the data is fetched from infomation provided by url*/
    /* response.json= it will convert json  data  provided by fetch function  .then will covert it into the string*/
    /* await is used in order to get whole data and store it in weather data*/



    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "https://www.freepnglogos.com/uploads/cloud-png/white-big-cloud-png-27.png";
            break;
        case 'Clear':
            weather_img.src = "https://www.nicepng.com/png/detail/61-617946_blue-and-white-clouds-jpg-free-stock-blue.png";
            break;
        case 'Rain':
            weather_img.src ="https://www.transparentpng.com/thumb/rain/PjzFVL-rain-png-images.png";
            break;
        case 'Mist':
            weather_img.src = "https://freepngimg.com/save/27989-mist-clipart/1024x819";
            break;
        case 'Snow':
            weather_img.src = "https://www.freepnglogos.com/uploads/snow-clipart/snow-cliparts-transparent-download-clip-art-34.png";
            break;
        case 'scattered clouds':
            weather_img.src="https://www.freepnglogos.com/uploads/cloud-png/white-big-cloud-png-27.png";
            break;
         case 'sunny':
            weather_img.src="https://www.freeiconspng.com/uploads/sunny-icon-0.png";
    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{checkWeather(inputBox.value);
});