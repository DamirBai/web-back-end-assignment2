//my api key: http://api.openweathermap.org/data/2.5/weather?q=Astana&appid=912dc01461cfc5c52bacba32ef5e1f58
//icon: https://openweathermap.org/img/wn/smth@2x.png
fetch('http://api.openweathermap.org/data/2.5/weather?q=Astana&units=metric&appid=912dc01461cfc5c52bacba32ef5e1f58')
.then(function (resp) {return resp.json() })
.then(function (data){
    let latitude = data.coord.lat;
    let longitude = data.coord.lon;
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temperature').innerHTML = `${Math.round(data.main.temp)}&deg`;
    document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="icon">`;
    document.querySelector('.description').innerHTML = data.weather[0]['description'];
    document.querySelector('.coorinates').innerHTML = `${latitude}&deg latitude <br>${longitude}&deg longitude`;
    document.querySelector('.feels-like').innerHTML = `${Math.round(data.main.feels_like)}&deg`;
    document.querySelector('.humidity').innerHTML = data.main.humidity;
    document.querySelector('.pressure').innerHTML = data.main.pressure;
    document.querySelector('.wind-speed').innerHTML = data.wind.speed;
    document.querySelector('.country-code').innerHTML = data.sys.country;
    document.querySelector('.rain-volume').innerHTML = `не нашёл в json`;
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: latitude, lng: longitude},
        zoom: 11
    });
})