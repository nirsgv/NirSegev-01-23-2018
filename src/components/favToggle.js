import React, { useState } from 'react';
import PropTypes from 'prop-types';


const isLiked = (cityKey, favCities) => favCities.includes(cityKey);

function FavToggle({ cityKey, favCities = [], toggleFavCity }) {


    return (
        <>
            <button className={`fav-toggle-btn ${isLiked(cityKey, favCities) ? 'active' : ''}`} onClick={() => toggleFavCity(cityKey, favCities)}>
                Toggle-favorites
            </button>
        </>
    )
}

FavToggle.defaultProps = {
    baseClassName: 'list',
};

FavToggle.propTypes = {
    baseClassName: PropTypes.string,
    children: PropTypes.node,
};


export default FavToggle;