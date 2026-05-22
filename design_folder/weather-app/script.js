//This is the code to use for my weather app

const mainDiv = document.querySelector('.main');
const emptyDiv = document.querySelector('.empty');
const apiKey = "f49a652c6ea10c5174df1fc83b5016eb";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const button = document.querySelector("button");

// mainDiv.classList.add('hidden');
// emptyDiv.classList.add('hidden');

document.querySelector('.main').style.display = 'none'; 


button.addEventListener("click", function () {

  const cityName = document.querySelector(".search-input").value;

  async function getWeather() {
    const response = await fetch(`${url}&appid=${apiKey}&q=${cityName}`);
    const data = await response.json();

    if (data.cod === 200){

        document.querySelector('.empty').style.display = 'none'; 
        document.querySelector('.main').style.display = 'block';
        document.querySelector('.temperature').innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('#humidity-val').innerHTML = `${data.main.humidity} %`;


        const weatherCondition = data.weather[0].main;

        if (weatherCondition === 'Clouds'){
            document.querySelector('.weather-img-type').src = './images/clouds.png';
        }else if (weatherCondition === 'Clear'){
            document.querySelector('.weather-img-type').src = './images/clear.png';
        }else if (weatherCondition === 'Drizzle'){
            document.querySelector('.weather-img-type').src = './images/drizzle.png';
        }else if (weatherCondition === 'Mist'){
            document.querySelector('.weather-img-type').src = './images/mist.png';
        }else if (weatherCondition === 'Snow'){
            document.querySelector('.weather-img-type').src = './images/snow.png';
        }else if (weatherCondition === 'Rain' || weatherCondition === 'Thunderstorm'){
            document.querySelector('.weather-img-type').src = './images/rain.png';
        }
    }else{
        // mainDiv.classList.add('hidden');
        // emptyDiv.classList.remove('hidden');

        document.querySelector('.empty').style.display = 'block'; 
        document.querySelector('.main').style.display = 'none';

    }
  }

  getWeather()
});
