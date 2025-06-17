
const ficksburg = JSON.parse(localStorage.getItem('ficksburg'));

async function getData(city){
  
  operateLoadingScreen(true);
  
  try {
  
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=YA3JYGZUNLJTQX73DKKAMD87Q&unitGroup=uk`);
    const data = await response.json();
    const forecast = await currentForecast(data);
    console.log(data)
    fillDetails(forecast);
 
 
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
  
  return {
    city: data.address,
    postalAddress: getPostalAddress(data),
    description: data.description,
    condition: data.currentConditions.icon,
    currentTemp: data.currentConditions.temp,
    minTemp: data.days[0].tempmin,
    maxTemp: data.days[0].tempmax,
    humidity: Math.round(data.currentConditions.humidity) + '%',
    wind: Math.round(data.currentConditions.windspeed) + 'km/h',
    sunrise: data.currentConditions.sunrise,
    sunset: data.currentConditions.sunset
  };
}



async function ficks() {
  
  try{
  operateLoadingScreen(true);
   const h = await new Promise((resolve, reject) => {
    setTimeout(() => { return resolve( JSON.parse(localStorage.getItem('ficks')))}
      , 2000);
   });
   
   console.log(currentForecast(h));

  
}catch (e){
  console.error('Boom');
} finally {
  operateLoadingScreen(false);
}
}

const loadingScreen = document.getElementById('loading-screen');

function operateLoadingScreen(status){
  if(!status){
    loadingScreen.innerHTML = 'Done!';
    loadingScreen.style.display = 'none';
  } else {
    loadingScreen.style.display = "block";
    loadingScreen.innerHTML += ".";
  }
}

getData('Barbados');

const details = document.getElementById('details');

const detailFields = details.querySelectorAll('span');

function fillDetails(data){
  detailFields.forEach((field) => {
    
    let fieldClass = field.classList[0];
    
    if(Object.keys(data).includes(fieldClass)){
      field.innerHTML = data[fieldClass];
    } else if (Object.keys(data).includes(`${fieldClass}Temp`)){
      field.innerHTML = data[`${fieldClass}Temp`] + '°C';
    }
  })
}

