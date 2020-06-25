import React, { useState } from 'react';
import { connect } from "react-redux";
import { toggleFavCity } from "../actions";
import { bindActionCreators } from "redux";
import CurrentWeather from "../components/currentWeather";
import List from "../components/list";
import FavToggle from "../components/favToggle";
import { Router, Switch, Route, Link, NavLink } from "react-router-dom";


function Favorites({ favCities, isFahrenheit }) {

    return (
        <List baseClassName={'favorites'}>
            {favCities.map((item, index) => <span key={index}>
                <Link to={`weather/${item}`} className={`track__text-wrap`}>
                     <FavToggle cityKey={item} favCities={favCities} toggleFavCity={toggleFavCity} />
                    {/*<button onClick={toggleFavCity}*/}
                    <CurrentWeather cityKey={item} isFahrenheit={isFahrenheit} />
                </Link>

            </span>)}
        </List>
    );
}


const mapStateToProps = state => ({
    favCities: state.appData.favCities,
    isFahrenheit: state.appData.isFahrenheit,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleFavCity
}, dispatch);



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorites);
