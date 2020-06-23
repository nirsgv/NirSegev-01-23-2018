import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCurrentConditions } from '../helpers';


function CityExpansion({ cityKey }) {

    const [ cityDetails, setCityDetails ] = useState(123);

    useEffect(() => {
        cityKey && getCurrentConditions(cityKey)
            .then((data) => setCityDetails(data));
        return () => {}
    }, [cityKey]);

    return (
        <section className="city-expanded">
            {cityDetails && cityDetails.WeatherText}
        </section>
    )
}

CityExpansion.defaultProps = {
    baseClassName: 'list',
};

CityExpansion.propTypes = {
    baseClassName: PropTypes.string,
    children: PropTypes.node,
};


export default CityExpansion;