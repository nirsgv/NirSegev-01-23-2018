import React from 'react';
import PropTypes from 'prop-types';
import FiveDayForecast from "../components/fiveDayForecast";
import CurrentWeather from "../components/currentWeather";
import FavToggle from "../components/favToggle";
import Search from "./search";
import { bindActionCreators } from "redux";
import { toggleFavCity } from "../actions";
import { connect } from "react-redux";


function CityExpansion({ cityKey , favCities, toggleFavCity, isFahrenheit ,match, history}) {
    console.log(match);
    console.log(cityKey);
    const t = match.params.id;
    return (
        <>
        <Search />
        <section className="city-detail">
            <div className="city-detail__stats">
                <CurrentWeather cityKey={t} isFahrenheit={isFahrenheit}/>
                <FavToggle cityKey={t} favCities={favCities} toggleFavCity={toggleFavCity}/>
            </div>
            <FiveDayForecast cityKey={t} baseClassName={'forecast'} isFahrenheit={isFahrenheit}/>
        </section>
        </>
    )
}

CityExpansion.defaultProps = {
    baseClassName: 'list',
};

CityExpansion.propTypes = {
    baseClassName: PropTypes.string,
    children: PropTypes.node,
};


const mapStateToProps = state => ({
    cityKey: state.appData.mainCityDisplayKey,
    favCities: state.appData.favCities,
    isFahrenheit: state.appData.isFahrenheit,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleFavCity
}, dispatch);



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityExpansion);