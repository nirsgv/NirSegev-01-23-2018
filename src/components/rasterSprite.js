import React, { useState } from 'react';
import PropTypes from 'prop-types';



function RasterSprite({ iconNum }) {


    return (
        <>
            <div className={`weather-icon weather-icon--${iconNum}-s`}>
            </div>
        </>
    )
}

RasterSprite.defaultProps = {
    baseClassName: 'list',
};

RasterSprite.propTypes = {
    baseClassName: PropTypes.string,
    children: PropTypes.node,
};


export default RasterSprite;