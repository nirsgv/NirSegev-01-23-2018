import { key } from "./env_pre";

const getCity = async (cityKey) => {
    try {
        const response = await fetch (`https://dataservice.accuweather.com/locations/v1/${cityKey}?apikey=${key}`),
              data = await response.json();

        return data;

    } catch (err){
        console.log(err);
        return null;
    }
};

const getCurrentConditions = async (cityKey) => {
    try {
        const response = await fetch (`https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${key}`),
            data = await response.json();
        return data[0]
    } catch (err){
        console.log(err);
        return null;
    }
};

const getFiveDayForecast = async (cityKey, isFahrenheit) => {
    try {
        const response = await fetch (`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?metric=${!isFahrenheit}&apikey=${key}`),
            data = await response.json();

        return data;
    } catch (err){
        console.log(err);
        return null;
    }
};

const autoComplete = async (city) => {
    const response = await fetch (`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`),
      data = await response.json();

    return data;
};

const getAverage = (numA, numB) => Math.floor((Number(numA) + Number(numB)) / 2);

const getType = (isFahrenheit) => isFahrenheit ? '°F' : '°C';

const checkLocal = () => {
    const localData = localStorage.getItem("weather-spa");
    return localData ? JSON.parse(localData) : []
};

const isItEveningYet = () => new Date().getHours() >= 17;

const weatherIconsMap = {
    '1':'SUNNY',
    '2':'MOSTLY_SUNNY',
    '3':'PARTLY_SUNNY',
    '4':'INTERMITTENT_CLOUDS',
    '5':'HAZY_SUNSHINE',
    '6':'MOSTLY_CLOUDY',
    '7':'CLOUDY',
    '8':'HAZY_SUNSHINE',
    '9':'',
    '10':'',
    '11':'OVERCAST',
    '12':'FOG',
    '13':'SHOWERS',
    '14':'MOSTLY_CLOUDY_WITH_SHOWERS',
    '15':'PARTLY_CLOUDY_WITH_SHOWERS',
    '16':'THUNDER_STORMS',
    '17':'MOSTLY_CLOUDY_WITH_THUNDER_STORMS',
    '18':'PARTLY_CLOUDY_WITH_THUNDER_STORMS',
    '19':'RAIN',
    '20':'FLURRIES',
    '21':'MOSTLY_CLOUDY_WITH_FLURRIES',
    '22':'SUNNY',
    '23':'MOSTLY_SUNNY',
    '24':'ICE',
    '25':'INTERMITTENT_CLOUDS',
    '26':'HAZY_SUNSHINE',
    '27':'MOSTLY_CLOUDY',
    '28':'CLOUDY',
    '29':'HAZY_SUNSHINE',
    '30':'HOT',
    '31':'COLD',
    '32':'WINDY',
    '33':'FOG',
    '34':'SHOWERS',
    '35':'MOSTLY_CLOUDY_WITH_SHOWERS',
    '36':'PARTLY_CLOUDY_WITH_SHOWERS',
    '37':'THUNDER_STORMS',
    '38':'MOSTLY_CLOUDY_WITH_THUNDER_STORMS',
    '39':'PARTLY_CLOUDY_WITH_THUNDER_STORMS',
    '40':'RAIN',
    '41':'FLURRIES',
    '42':'MOSTLY_CLOUDY_WITH_FLURRIES',
    '43':'PARTLY_CLOUDY_WITH_SHOWERS',
    '44':'THUNDER_STORMS',
};


export {
    getCity,
    autoComplete,
    getCurrentConditions,
    getFiveDayForecast,
    getAverage,
    getType,
    weatherIconsMap,
    checkLocal,
    isItEveningYet,
}