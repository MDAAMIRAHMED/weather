let inputvalue = document.querySelector('#cityinput');
let btn = document.querySelector('#add');
let city = document.querySelector('#cityoutput');
let description = document.querySelector('#description');
let temp = document.querySelector("#temp");
let wind = document.querySelector('#wind');

apik = "4096eb6858f42636f8555fbda5cda6e2";

function convertion(val){
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>{
        let nameval = data['name'];
        let descrip = data['weather']['0']['description'];
        let temperature = data['main']["temp"];
        let windspeed = data['wind']['speed'];

        city.innerHTML=`Weather of <span>${nameval}</span>`;
        temp.innerHTML=`Temperature: <span>${convertion(temperature)}</span>`;
        description.innerHTML = `Sky Conditions: <span>${descrip}<span>`;
        wind.innerHTML= `Wind Speed: <span>${windspeed} km/h<span>`;
    })

    .catch(err => alert('You entered wrong city name'))
})