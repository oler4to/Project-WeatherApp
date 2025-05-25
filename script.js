
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

