import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCity, getCurrentConditions, getType } from "../helpers";
import RasterSprite from "./rasterSprite";



function CurrentWeather({ cityKey, isFahrenheit, setDisplayedCity }) {

    const [ cityWeather, setCityWeather ] = useState({}),
          [ cityName, setCityName ] = useState(''),
          [ countryName, setCountryName ] = useState(''),
          degreeType = isFahrenheit ? 'Imperial' : 'Metric';

    useEffect(() => {
        cityKey && getCurrentConditions(cityKey)
            .then(data => Object.assign({}, {
                weatherIcon: data.WeatherIcon,
                weatherText: data.WeatherText,
                temp: data.Temperature
            }))
            .then(data => {setCityWeather(data);console.log(data)});

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
            <div className="city-details" onClick={() => setDisplayedCity(cityKey)}>
                <div className="city-details__name">{`${cityName}, ${countryName}`}</div>
                <div className="city-details__text">{cityWeather.weatherText}</div>
                <div className="city-details__temp">{`${cityWeather.temp && cityWeather.temp[degreeType].Value}${getType(isFahrenheit)}`}</div>
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