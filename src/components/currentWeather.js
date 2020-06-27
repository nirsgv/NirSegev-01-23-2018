import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCity, getCurrentConditions, getType } from "../helpers";
import RasterSprite from "./rasterSprite";
import { weatherIconsMap } from '../helpers';
import SvgSprite from "./svgSprite";


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
            .then(data => setCityWeather(data))
            .catch(e => (alert(e)));

        cityKey && getCity(cityKey)
            .then(data => {
                setCityName(data.EnglishName);
                setCountryName(data.Country.EnglishName)
            });

        return () => {}
    }, [cityKey]);


    return (
        <>
            <div className="city-details" onClick={() => setDisplayedCity ? setDisplayedCity(cityKey) : null}>
                <div className="city-details__weather-icon">
                    <SvgSprite name={weatherIconsMap[cityWeather.weatherIcon]} />
                </div>
                <div className="city-details__aside">
                    <div className="city-details__name">{`${cityName}, ${countryName}`}</div>
                    <div className="city-details__text">{cityWeather.weatherText}</div>
                    <div className="city-details__temp">{`${cityWeather.temp && cityWeather.temp[degreeType].Value}${getType(isFahrenheit)}`}</div>
                </div>
            </div>
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