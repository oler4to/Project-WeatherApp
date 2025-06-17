
const ficksburg = JSON.parse(localStorage.getItem('ficksburg'));

async function getData(city){
  
  operateLoadingScreen(true)
  
  try {
  
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=YA3JYGZUNLJTQX73DKKAMD87Q&unitGroup=uk`);
    const data = await response.json();
    const forecast = await currentForecast(data);
    return forecast;
 
 
  } catch(error){
    console.error('There was a problem.');
  } finally {
    operateLoadingScreen(false)
  }
}

function getPostalAddress(data){
  return data.resolvedAddress
          .split((data.address + ","))
            .join('').trim()
}

function currentForecast(data){
  return {
    city: data.address,
    postalAddress: getPostalAddress(data),
    descrip: data.description,
    currentTemp: data.currentConditions.temp,
    maxTemp: data.days[0].tempmax,
    minTemp: data.days[0].tempmin,
    humidity: Math.floor(data.currentConditions.humidity),
  };
}



async function ficks() {
  
  try{
  operateLoadingScreen(true)
   const h = await new Promise((resolve, reject) => {
    setTimeout(() => { return resolve( JSON.parse(localStorage.getItem('ficks')))}
      , 2000);
   })
   
   console.log(currentForecast(h))

  
}catch (e){
  console.error('Boom')
} finally {
  operateLoadingScreen(false)
}
}

const loadingScreen = document.getElementById('loading-screen');

function operateLoadingScreen(status){
  if(!status){
    loadingScreen.innerHTML = 'Done!'
    loadingScreen.style.display = 'none'
  } else {
    loadingScreen.style.display = "block";
    loadingScreen.innerHTML += "."
  }
}

getData('Barbados')
