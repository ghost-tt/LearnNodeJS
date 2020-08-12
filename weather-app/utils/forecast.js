const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/d817bbd5976bc113c56a4406cf79cfb5/${latitude},${longitude}?units=us`;

    request({
        url,
        json: true
    }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined);
        } else if(body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, {
                temperature: body.currently.temperature,
                visibility: body.currently.visibility
            });
        }
    })
}



module.exports = forecast;