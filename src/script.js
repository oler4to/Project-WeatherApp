import './styles.css';
import searchIcon from './assets/search-icon-white.png';

const searchInput = document.querySelector('header #search-bar .search-input');
const searchButton = document.querySelector('header #search-bar button');

    searchButton.firstElementChild.src = searchIcon;
    
    searchButton.onclick = () => {
      getData(searchInput.value);
      searchInput.value = '';
    };

async function getData(city){
  
  operateLoadingScreen(true);
  
  try {
  
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=YA3JYGZUNLJTQX73DKKAMD87Q&unitGroup=uk`);
    const data = await response.json();
    const forecast = await currentForecast(data);
    
    fillDetails(forecast);
    changeBackground(forecast);
 
 
  } catch(error){
    console.error('There was a problem.');
  } finally {
    operateLoadingScreen(false);
  }
}

function getPostalAddress(data){
  if(data.resolvedAddress !== data.address)
    return data.resolvedAddress
            .split(",").filter((e) => e !== data.address)
              .join(',').trim();
  else return data.address;
}

function currentForecast(data){
  
  let forecast = {
    conditions: { 
      icon: data.currentConditions.icon,
      humidity: Math.round(data.currentConditions.humidity) + '%',
      wind: Math.round(data.currentConditions.windspeed) + 'km/h',
    },
    address: {
      city: data.address,
      postalAddress: getPostalAddress(data),
    },
    description: data.description,
    condition: data.currentConditions.conditions,
    temps: {
      current: data.currentConditions.temp,
      min: data.days[0].tempmin,
      max: data.days[0].tempmax,
    },
    times: {
      current: data.currentConditions.datetime,
      sunrise: data.currentConditions.sunrise,
      sunset: data.currentConditions.sunset
    },
    
  };
  
  let round = (() => {
      for (let temp in forecast.temps){
        forecast.temps[temp] = Math.round(forecast.temps[temp]) + '°C';
      }
      
      for (let time in forecast.times){
        forecast.times[time] = forecast.times[time].slice(0, -3);
      }
    })();
    
    function hour(){
      let currentTime = forecast.times.current;
      let currentHour = Number(currentTime.slice(0, currentTime.search(':')));
      
      let hours = [6, 12, 17, 20];
      
      hours.every((hour) => {
        if(currentHour < 12){
          forecast.hour = 6;
        } else if(currentHour < 17){
          forecast.hour = 12;
        } else if(currentHour < 20){
          forecast.hour = 17;
        } else if(currentHour < 6 || currentHour >= 20) {
          forecast.hour = 20;
        }
      });
    }
    
    hour();
  
  return forecast;
}

const loadingScreen = document.getElementById('loading-screen');

const welcome = document.getElementById('welcome');

function operateLoadingScreen(status){
  if(!status){
    loadingScreen.innerHTML = 'Getting Data <br/>';
    loadingScreen.style.display = 'none';
  } else {
    forecast.style.display = 'none';
    welcome.style.display = 'none';
    loadingScreen.style.display = "block";
    
    setInterval(function(){
    if(!loadingScreen.innerHTML.includes('...')){
        loadingScreen.innerHTML += '.';
    } else loadingScreen.innerHTML = '<span>Getting Data</span> <br/>';
      
    } , 600);
    
  }}

function changeBackground(data){
  const background = document.querySelector('body');
  
  let colours = {
    6: ['#255389', '#002d61', '#7d97c0'],
    12: ['skyblue', '#d7d682', '#c8bb32'],
    17: ['#6f3800', '#0a0a1a'],
    20: ['#000526', '#090d20', '#000e14']
  };
  
  if(Object.keys(colours).includes(data.hour.toString())){
    let colourIndex = Number(data.hour);
    
    if(colours[data.hour].length < 3){
      background.style.background = `
      linear-gradient(
        ${colours[colourIndex][0]},
        ${colours[colourIndex][1]}
      )`;
    } else {
      background.style.background = `
        linear-gradient(
          ${colours[colourIndex][0]},
          ${colours[colourIndex][1]},
          ${colours[colourIndex][2]}
        )`;
    }
  }
}

const forecast = document.getElementById('forecast');

function fillDetails(data){
  forecast.style.display = 'flex';
  
  detailFields.forEach((field) => {
    
    let fieldClass = field.className;
    
    if(Object.keys(data).includes(fieldClass) && fieldClass !== 'description'){
        
        import (`./assets/${data.conditions.icon}.svg`)
          .then((icon) => {
            field
              .firstElementChild
                .src = icon.default;
          });
        
        field.querySelectorAll('span')
          .forEach((child) => {
            let childClass = child.className;
            
            if(Object.keys(data[fieldClass]).includes(childClass)){
              child.lastElementChild.innerHTML = data[fieldClass][childClass];
            }
          
        });
          
      } else field.innerHTML = `
      <p>
        <strong>Conditions:</strong>
              ${data.condition}
      </p>
      <br/>
      <br/>
       <p>
        <strong>Description:</strong>
              ${data.description}
      </p>
      `;
  });
}
