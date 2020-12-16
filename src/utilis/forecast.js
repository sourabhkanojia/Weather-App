const request = require("request");

const forecast = (latitude,longitude,callback) => {

    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=d8f789f7e92c0a47367b22d476e5cc54';
    request({url, json: true},(error,{body}) => {
            if(error) callback('Unable to connect weather service!',undefined);
            else if(!body.main) console.log('Unable to find location.',undefined);
            else callback(undefined,"It is currently "+body.main.temp+" Kelvin.");
    })

}

module.exports = forecast