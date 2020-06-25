import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {getAverage, getCity, getCurrentConditions} from "../helpers";
import RasterSprite from "./rasterSprite";



function CurrentWeather({ cityKey }) {

    const [ cityWeather, setCityWeather ] = useState({});
    const [ cityName, setCityName ] = useState('');

    useEffect(() => {
        cityKey && getCurrentConditions(cityKey)
            // .then(data => {console.log(data);return data;})
            .then(data => Object.assign({}, {
                weatherIcon: data.WeatherIcon,
                weatherText: data.WeatherText,
                temp: data.Temperature
            }))
            .then(data => setCityWeather(data));

        cityKey && getCity(cityKey)
            .then(data => {console.log(data);return data;})
            .then(data => setCityName(data.EnglishName));

        return () => {}
    }, [cityKey]);


    return (
        <>
            <div className="city-name">{cityName}</div>
            <RasterSprite className="icon" iconNum={cityWeather.weatherIcon}/>
            <div className="text">{cityWeather.weatherText}</div>
            {/*<div className="temp">{cityWeather.temp && cityWeather.temp.Maximum && getAverage(cityWeather.temp.Maximum.Value, cityWeather.temp.Minimum.Value)}</div>*/}
            <div className="temp">{cityWeather.temp && cityWeather.temp.Imperial.Value}</div>
        </>
    )
}


CurrentWeather.defaultProps = {
    baseClassName: 'list',
};

CurrentWeather.propTypes = {
    baseClassName: PropTypes.string,
    children: PropTypes.node,
};


export default CurrentWeather;