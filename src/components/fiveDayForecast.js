import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getFiveDayForecast, getAverage } from "../helpers";
import List from "./list";

function ForecastHeadline({ category, content }) {

    return (
        <div className='forecast-headline'>
            <h1 className='forecast-headline__category'>{category}</h1>
            <h2 className='forecast-headline__content'>{content}</h2>
        </div>
    )
}

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
    const [ headline, setHeadline ] = useState({});

    useEffect(() => {
        cityKey && getFiveDayForecast(cityKey)
            .then(data => {setHeadline(Object.assign({}, {
                category: data.Headline.Category,
                content: data.Headline.Text
            })); console.log(data);return data})
            .then((data) => data.DailyForecasts.map(item => Object.assign({}, {
                temp: item.Temperature,
                date: item.Date
            })))
            .then((data) => setForecast(data));
        return () => {}
    }, [cityKey]);

    return (
        <>
            {
                headline
                && <ForecastHeadline category={headline.category} content={headline.content} />
            }
            <List baseClassName={baseClassName}>
                {forecast && forecast.map((item, index) => <DailyForecast day={item} key={index} baseClassName={baseClassName}/>)}
            </List>
        </>
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