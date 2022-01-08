const API_KEY = "24bc90876f6c41f0b279f629caa8fdd8";
const body = document.querySelector('body')//
let searchLabel = document.getElementsByClassName('search-label');//
let cityInput = document.querySelector('input');
const button = document.querySelector('.btn');//
let div = document.querySelector('div')//
const header = document.querySelector('.name')





//current weather variables
let firstDayWeather = document.querySelector("#currentWeather");//
let cityName = document.querySelector('.city-name');//
let temper = document.querySelector('.temp');//
let desc = document.querySelector('.desc');//
let hum = document.querySelector('.hum');//
let wind = document.querySelector('.wind');//
let iconImg = document.querySelector('img');//
let error = document.querySelector('.error')//
//5 days-variables
let fiveDaysWeather = document.querySelector('#fiveDaysWeather');//fem dagar div
//let fiveDay = document.querySelector('#weather-five');




//lägger till knapp för båda url
button.addEventListener('click', searchCity);

function searchCity(e) {
    e.preventDefault();
    const searchCity = cityInput.value;
    const current = currentWeather(searchCity);
    const forecast = forecastFive(searchCity);
    getCurrentWeather(current);
    getForecastFive(forecast);
    
    cityInput.value = "";//rensar sökrutan efter att jag klickat
    error.innerText = '';//rensat min error text
   // clearSecondDiv();
  let el = document.getElementById('test');
  
         

};
  
function currentWeather(city){
    return `https://api.weatherbit.io/v2.0/current?&lang=sv&city=${city}&key=${API_KEY}`
}    

function getCurrentWeather(current){//hämtar väder för current.
    fetch(current).then(
        function (resp){
            if(resp.status >=200 && resp.status <=300){
                // console.log(resp.status)
                return resp.json();
            }else{
                throw 'ngt har gått fel, kolla'
            }
        }
    ).then(function(data){
           console.log(data)
            const { city_name } = data.data[0]; 
            const { icon} = data.data[0].weather;
            const { description} = data.data[0].weather;
            const { temp } = data.data[0];
            const { rh } = data.data[0];
            const { wind_spd } = data.data[0];
                    
            cityName.innerText = 'Vädret i ' + city_name;
            temper.innerText = temp +" °C";
            hum.innerText = 'Fuktighet: ' + rh + "%";  
            desc.innerText =  description;
            wind.innerText = "Vind: "  + wind_spd + " m/s";
            iconImg.src = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
                
            
        }
    ).catch(//ok funkar
        function(err){
            console.log(err);
            error.innerText = 'Ngt har gått fel, kolla att du skrivit in orten korrekt';
          
            
        }
    )
 
}    
        
    //---------------------------------------------------------------------

function forecastFive(city){
    return `https://api.weatherbit.io/v2.0/forecast/daily?lang=sv&city=${city}&key=${API_KEY}`;
        
    }
    
function getForecastFive(forecast){//hämtar väder för fem dagar fram
    fetch(forecast).then(
        function (resp){
            if(resp.status >=200 && resp.status <=300){
            // console.log(resp.status)
                return resp.json();
            }else{
                throw 'ngt har gått fel'
            }
        }
    ).then(
        function(data){
            console.log(data)
            setForecastFive(data.data)
        })
       .catch(
        function(err){
            console.log(err)
            error.innerText = ' Ngt har gått fel, kolla att du skrivit in orten korrekt. '
           
        }
    );
    const divEl = document.querySelectorAll('#fiveDaysWeather *');
        for(let i=0; i<divEl.length; i++){
            let el = divEl[i];
            el.remove()
        } 
    }
        

      
function setForecastFive(dataArray){
    console.log(dataArray)
    for(let i=1; i<6; i++){
        let datum = dataArray[i].datetime
        let temp = dataArray[i].temp;
        let icon = dataArray[i].weather.icon;
        let description  = dataArray[i].weather.description;
       
      
        let div = document.createElement('div');//skapa div där vädret ska synas
        let datumEl = document.createElement('p')   
        let tempEl = document.createElement('p');
        let iconEl = document.createElement('img');
        let descEl = document.createElement('p');
                     
        datumEl.innerText = datum;
        tempEl.innerText = temp +  " °C ";
        iconEl.src = `https://www.weatherbit.io/static/img/icons/${icon}.png`
        descEl.innerText = description;
         
        div.className = 'div-one-day' //divar skapas
        div.appendChild(datumEl);
        div.appendChild(tempEl);
        div.appendChild(iconEl);
        div.appendChild(descEl);
        fiveDaysWeather.appendChild(div)
       
          
    }
}    

let bee = document.querySelector('.bee')//anime 1 bi.

    anime({
        targets: '.bee',
        scale: 1,
        translateX: 1000,
        easing: 'linear',
        direction: 'alternaive',
        
        duration: 9000,
        loop: true,
        
    }
    )


   
let bee2 = document.querySelector('.bee2')//anime 2 bi åt andra hållet. 

    anime({
        targets: '.bee2',
        scale: 1,
        translateX: 1000,
        easing: 'linear',
        direction: 'reverse',
        
        duration: 9000,
        loop: true,
        
    }
    )



let rotateMe = anime({ //Mikid väder flyttas när man tar musen över. Anime 3. 
    targets: '.nameHeader',
    scaleY: '1',
    scaleX: '1',
    translateX: '10%',
    rotate: '10deg',
    duration: 3000,
    autoplay: false
})
document.querySelector('h1').addEventListener('mouseover', ()=>{
    rotateMe.play();
});


    
//const resetMessage =document.querySelector('#div-one-day *');
/*function clearSecondDiv(){
    const divEl = document.querySelectorAll(".fiveDays row *");
    for(let i=0; i<divEl.length; i++){
        let el = divEl[i];
        el.remove()
    } 
}*/


    




           
            
  
    
       
  


        