import React, { useState } from 'react';
import { connect } from "react-redux";
import { setDisplayedCity, toggleFavCity } from "../actions";
import { bindActionCreators } from "redux";
import CurrentWeather from "../components/currentWeather";
import List from "../components/list";
import { Link } from "react-router-dom";


function Favorites({ favCities, isFahrenheit, toggleFavCity, setDisplayedCity }) {

    const [ entranceClassName, setEntranceClassName ] = useState('faded-in-from-bottom');

    return (
        <div className={`animate ${entranceClassName}`} onAnimationEnd={() => setEntranceClassName('')}>
            <List baseClassName={'favorites'}>
                {favCities.length ? favCities.map((item, index) => <span key={index} onAnimationEnd={() => toggleFavCity(item, favCities)}>

                <Link to={`weather/${item}`} className={''} >
                    <CurrentWeather cityKey={item} isFahrenheit={isFahrenheit} setDisplayedCity={setDisplayedCity} />
                </Link>
                <div className="favorites__remove-btn-wrap">
                    <button className={'favorites__remove-btn'} onClick={()=>toggleFavCity(item, favCities)}>Remove</button>
                </div>

                </span>) : <>
                    <h1 className={'favorites__add-headline'}>Add items</h1>
                    <Link to={'/'} className={'favorites__add-link'}>Here.</Link></>}
            </List>
        </div>
    );
}


const mapStateToProps = state => ({
    favCities: state.appData.favCities,
    isFahrenheit: state.appData.isFahrenheit,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleFavCity,
    setDisplayedCity
}, dispatch);



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorites);
