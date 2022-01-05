let message

document.forms.publish.onsubmit = function() {
    message = this.message.value;

};

let city = message
city = String(city)

fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=1db8ff782e87fb04869d2bb62b829987`)
    .then(function (resp) {return resp.json() })
    .then(function (data){
        document.querySelector('.city-name').innerHTML = data.name
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg'
        document.querySelector('.wind').innerHTML = data.weather[0]['description']


    })

