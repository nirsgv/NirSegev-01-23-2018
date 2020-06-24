import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SvgSprite from "./svgSprite";


const isLiked = (cityKey, favCities) => favCities.includes(cityKey);

function FavToggle({ cityKey, favCities = [], toggleFavCity }) {

    return (
        <>
            <button className={`fav-toggle-btn ${isLiked(cityKey, favCities) ? 'active' : ''}`} onClick={() => toggleFavCity(cityKey, favCities)}>
                <SvgSprite name={'HEART'}/>
                <span className={'fav-toggle-btn__text'}>{`${isLiked(cityKey, favCities) ? 'Remove From' : 'Add To'}`} Favorites</span>
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