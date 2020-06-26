import React, { useState } from 'react';
import { connect } from "react-redux";
import { setDisplayedCity, toggleFavCity } from "../actions";
import { bindActionCreators } from "redux";
import CurrentWeather from "../components/currentWeather";
import List from "../components/list";
import { Link } from "react-router-dom";


function Favorites({ favCities, isFahrenheit, toggleFavCity, setDisplayedCity }) {

    const st = (item, favCities) => setTimeout(()=>toggleFavCity(item, favCities),1000);
    const [ dieClass, setDieClass ] = useState('');

    return (
        <List baseClassName={'favorites'}>
            {favCities.map((item, index) => <span key={index} className={dieClass} onAnimationEnd={() => {setDieClass('');toggleFavCity(item, favCities)}}>

                <Link to={`weather/${item}`} className={''} >
                    <CurrentWeather cityKey={item} isFahrenheit={isFahrenheit} setDisplayedCity={setDisplayedCity} />
                </Link>
                <div className="favorites__remove-btn-wrap">
                    <button className={'favorites__remove-btn'} onClick={()=>toggleFavCity(item, favCities)}>Remove</button>
                </div>

            </span>)}
        </List>
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
