import React, { useState } from 'react';
import { connect } from "react-redux";
import { toggleFavCity } from "../actions";
import { bindActionCreators } from "redux";
import CurrentWeather from "../components/currentWeather";


function Favorites({ favCities }) {

    return (
        <section className="favorites">
            {favCities.map(item => <CurrentWeather cityKey={item} />)}
        </section>
    );
}


const mapStateToProps = state => ({
    favCities: state.appData.favCities,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleFavCity
}, dispatch);



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorites);
