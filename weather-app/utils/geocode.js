const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYXNoaXNoMDAxIiwiYSI6ImNqdXB4aXRoNjM4Ymo0MW9hd2s1cDVmbzMifQ.E2Woj11GCHEfSvLS0IiQCw`; 
    request({
        url,
        json: true
    }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to location services', undefined);
        } else if(body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined);
        } else {
            const latitude = body.features[0].center[0];
            const longitude = body.features[0].center[1];
            const location = body.features[0].place_name;
            callback(undefined, {latitude, longitude, location});
        }
    })
}

module.exports = geocode