import React, { useState, useEffect } from 'react';
import { getCity, getCurrentConditions, getType } from "../helpers";
import { weatherIconsMap } from '../helpers';
import SvgSprite from "./svgSprite";
import { Redirect } from "react-router-dom";


function CurrentWeather({ cityKey, isFahrenheit, setDisplayedCity }) {

    const [ cityWeather, setCityWeather ] = useState({}),
          [ cityName, setCityName ] = useState(''),
          [ countryName, setCountryName ] = useState(''),
          [ failRoute, setFailRoute ] = useState(false),
          degreeType = isFahrenheit ? 'Imperial' : 'Metric';

    useEffect(() => {

        cityKey && getCurrentConditions(cityKey)
            .then(data => {
                if (data) {
                    const compactData = Object.assign({}, {
                        weatherIcon: data.WeatherIcon,
                        weatherText: data.WeatherText,
                        temp: data.Temperature
                    });
                    return setCityWeather(compactData);
                } else {
                    setFailRoute(true);
                }
            });



        cityKey && getCity(cityKey)
            .then(data => {
                if (data) {
                    setCityName(data.EnglishName);
                    setCountryName(data.Country.EnglishName);
                }
            });

        return () => {}
    }, [cityKey]);


    return (
        <>
            {!failRoute ? (
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
            ) : <Redirect to="/missing" />}

        </>
    )
}


export default CurrentWeather;