
const ficksburg = JSON.parse(localStorage.getItem('ficksburg'));

async function getData(city){
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=YA3JYGZUNLJTQX73DKKAMD87Q`);
    const data = await response.json();
    console.log(data);
  } catch(error){
    console.error('There was a problem.');
  }
}

function getResolvedAdd(address){
  return address.slice(address.indexOf(' ')+1);
}

function convertToCelcius(temp){
  return Math.round((temp-32)*(5/9));
}

function currentForecast(data){
  return {
    city: data.address,
    resolvedAddress: getResolvedAdd(data.resolvedAddress),
    descrip: data.description,
    currentTemp: convertToCelcius(data.currentConditions.temp),
    maxTemp: convertToCelcius(data.days[0].tempmax),
    minTemp: convertToCelcius(data.days[0].tempmin),
    humidity: convertToCelcius(data.currentConditions.humidity),
  };
}


