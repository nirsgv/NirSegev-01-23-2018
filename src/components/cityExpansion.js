import React from 'react';
import PropTypes from 'prop-types';
import FiveDayForecast from "./fiveDayForecast";
import CurrentWeather from "./currentWeather";
import FavToggle from "./favToggle";


function CityExpansion({ cityKey, favCities, toggleFavCity }) {
    return (
        <section className="city-expanded">
            <CurrentWeather cityKey={cityKey} />
            <FavToggle cityKey={cityKey} favCities={favCities} toggleFavCity={(cityKey) => toggleFavCity(cityKey)}/>
            <FiveDayForecast cityKey={cityKey} />
        </section>
    )
}

CityExpansion.defaultProps = {
    baseClassName: 'list',
};

CityExpansion.propTypes = {
    baseClassName: PropTypes.string,
    children: PropTypes.node,
};


export default CityExpansion;