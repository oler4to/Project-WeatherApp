import './styles.css';


const ficksburg = JSON.parse(localStorage.getItem('ficksburg'));

async function getData(city){
  
  operateLoadingScreen(true);
  
  try {
  
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=YA3JYGZUNLJTQX73DKKAMD87Q&unitGroup=uk`);
    const data = await response.json();
    const forecast = await currentForecast(data);
    console.log(forecast);
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
  
  let forecast = {
    condition: data.currentConditions.icon,
    address: {
      city: data.address,
      postalAddress: getPostalAddress(data),
    },
    description: data.description,
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
    humidity: Math.round(data.currentConditions.humidity) + '%',
    wind: Math.round(data.currentConditions.windspeed) + 'km/h',
    
  };
  
  let round = (() => {
      for (let temp in forecast.temps){
        forecast.temps[temp] = Math.round(forecast.temps[temp]) + '°C';
      }
      
      for (let time in forecast.times){
        forecast.times[time] = forecast.times[time].slice(0, -3);
      }
    })();
  
  return forecast;
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
    loadingScreen.innerHTML = 'Getting Data <br/>';
    loadingScreen.style.display = 'none';
  } else {
    loadingScreen.style.display = "block";
    setInterval(function(){
      
    if(!loadingScreen.innerHTML.includes('...')){
        loadingScreen.innerHTML += '.';
    } else loadingScreen.innerHTML = 'Getting Data <br/>';
  } , 400);
    
  }
}

getData('Ficksburg');

const detailFields = document.querySelectorAll('#details > span');

function fillDetails(data){
  detailFields.forEach((field) => {
    
    let fieldClass = field.className;
    
    if(Object.keys(data).includes(fieldClass)){
      
      if(fieldClass == 'condition'){
        import (`./icons/${data.condition}.svg`)
          .then((icon) => {
            field
              .firstElementChild
                .src = icon.default;
          });
          
      } else if (fieldClass == 'temps' || fieldClass == 'times' || fieldClass == 'address' ){
        let fields = field.querySelectorAll('span');
        
        fields.forEach((child) => {
          let childClass = child.className;
          
          if(Object.keys(data[fieldClass]).includes(childClass)){
            child.innerHTML = data[fieldClass][childClass];
          }
          
        });
          
      } else field.innerHTML = data[fieldClass];}
  });
}
