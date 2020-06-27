import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import FiveDayForecast from "../components/fiveDayForecast";
import CurrentWeather from "../components/currentWeather";
import FavToggle from "../components/favToggle";
import Search from "./search";
import { bindActionCreators } from "redux";
import { resetSearch, toggleFavCity } from "../actions";
import { connect } from "react-redux";
import {autoComplete} from "../helpers";


function CityExpansion({ cityKey , favCities, toggleFavCity, isFahrenheit , match, resetSearch }) {

    const paramKey = match.params.id;

    useEffect(() => {
        resetSearch()

        return () => {}
    }, [cityKey]);

    return (
        <>
        <Search />
        <section className="city-detail">
            <div className="city-detail__stats">
                <CurrentWeather cityKey={paramKey} isFahrenheit={isFahrenheit}/>
                <FavToggle cityKey={paramKey} favCities={favCities} toggleFavCity={toggleFavCity}/>
            </div>
            <FiveDayForecast cityKey={paramKey} baseClassName={'forecast'} isFahrenheit={isFahrenheit}/>
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
    toggleFavCity,
    resetSearch
}, dispatch);



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityExpansion);