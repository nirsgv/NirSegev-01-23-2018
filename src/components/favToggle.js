import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SvgSprite from "./svgSprite";


const isLiked = (cityKey, favCities) => favCities.includes(cityKey);

function FavToggle({ cityKey, favCities = [], toggleFavCity }) {

    const liked = isLiked(cityKey, favCities);

    return (
        <>
            <button className={`fav-toggle-btn ${liked ? 'active' : ''}`} onClick={() => toggleFavCity(cityKey, favCities)}>
                <div className="wrap-for-separator">
                    <SvgSprite name={'HEART'}/>
                    {/*<span className={'fav-toggle-btn__text'}>{`${liked ? 'Remove From' : 'Add To'}`} Favorites</span>*/}
                    <span className={'fav-toggle-btn__text'}>{`${liked ? 'Remove' : 'Add'}`}</span>

                </div>
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