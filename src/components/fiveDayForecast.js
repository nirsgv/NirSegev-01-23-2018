import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getFiveDayForecast, getAverage } from "../helpers";
import List from "./list";



function DailyForecast({ day, baseClassName }) {
    const { date, temp } = day,
          { Maximum, Minimum } = temp,
          dayTitle = new Date(date).toDateString().split(' ')[0],
          tempAverage = getAverage(Maximum.Value, Minimum.Value);

    return (
        <>
            <div className={`${baseClassName}__title`}>{dayTitle}</div>
            <div className={`${baseClassName}__degree-num`}>{`${tempAverage} ${Maximum.Unit}`}</div>
        </>
    )
}

function FiveDayForecast({ cityKey, baseClassName }) {

    const [ forecast, setForecast ] = useState(null);

    useEffect(() => {
        cityKey && getFiveDayForecast(cityKey)
            .then(data => {console.log(data);return data;})
            .then((data) => data.DailyForecasts.map(item => Object.assign({}, {
                temp: item.Temperature,
                date: item.Date
            })))
            .then((data) => setForecast(data));
        return () => {}
    }, [cityKey]);

    return (

        <List baseClassName={baseClassName}>
            {forecast && forecast.map((item, index) => <DailyForecast day={item} key={index} baseClassName={baseClassName}/>)}
        </List>
    )
}

FiveDayForecast.defaultProps = {
    baseClassName: 'list',
};

FiveDayForecast.propTypes = {
    baseClassName: PropTypes.string,
    children: PropTypes.node,
};


export default FiveDayForecast;