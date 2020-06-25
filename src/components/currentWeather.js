import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {getAverage, getCity, getCurrentConditions} from "../helpers";
import RasterSprite from "./rasterSprite";



function CurrentWeather({ cityKey }) {

    const [ cityWeather, setCityWeather ] = useState({});
    const [ cityName, setCityName ] = useState('');
    const [ countryName, setCountryName ] = useState('');

    useEffect(() => {
        cityKey && getCurrentConditions(cityKey)
            .then(data => Object.assign({}, {
                weatherIcon: data.WeatherIcon,
                weatherText: data.WeatherText,
                temp: data.Temperature
            }))
            .then(data => setCityWeather(data));

        cityKey && getCity(cityKey)
            .then(data => {
                setCityName(data.EnglishName);
                setCountryName(data.Country.EnglishName)
            });

        return () => {}
    }, [cityKey]);


    return (
        <>
            <RasterSprite className="icon" iconNum={cityWeather.weatherIcon}/>
            <div className="city-details">
                <div className="city-name">{`${cityName}, ${countryName}`}</div>
                <div className="text">{cityWeather.weatherText}</div>
                <div className="temp">{cityWeather.temp && cityWeather.temp.Imperial.Value}</div>
            </div>
            {/*<div className="temp">{cityWeather.temp && cityWeather.temp.Maximum && getAverage(cityWeather.temp.Maximum.Value, cityWeather.temp.Minimum.Value)}</div>*/}
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