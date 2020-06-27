import React, { useEffect, useState } from 'react';
import FiveDayForecast from "../components/fiveDayForecast";
import CurrentWeather from "../components/currentWeather";
import FavToggle from "../components/favToggle";
import Search from "./search";
import { bindActionCreators } from "redux";
import { resetSearch, toggleFavCity } from "../actions";
import { connect } from "react-redux";


function CityExpansion({ cityKey , favCities, toggleFavCity, isFahrenheit , match, resetSearch }) {

    const paramKey = match.params.id;
    const [ entranceClassName, setEntranceClassName ] = useState('faded-in-from-bottom');

    useEffect(() => {
        resetSearch();

        return () => {}
    }, [cityKey]);

    return (
        <>
        <Search />
        <section className={`city-detail ${entranceClassName}`} onAnimationEnd={() => setEntranceClassName('')}>
            <div className="city-detail__stats">
                <CurrentWeather cityKey={paramKey} isFahrenheit={isFahrenheit}/>
                <FavToggle cityKey={paramKey} favCities={favCities} toggleFavCity={toggleFavCity}/>
            </div>
            <FiveDayForecast cityKey={paramKey} baseClassName={'forecast'} isFahrenheit={isFahrenheit}/>
        </section>
        </>
    )
}


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