import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { autoComplete } from '../helpers';
import List from "./list";
import { Link } from "react-router-dom";

const exampleRes = [
    {
        "Version": 1,
        "Key": "215854",
        "Type": "City",
        "Rank": 31,
        "LocalizedName": "Tel Aviv",
        "EnglishName": "Tel Aviv",
        "PrimaryPostalCode": "",
        "Region": {
            "ID": "MEA",
            "LocalizedName": "Middle East",
            "EnglishName": "Middle East"
        },
        "Country": {
            "ID": "IL",
            "LocalizedName": "Israel",
            "EnglishName": "Israel"
        },
        "AdministrativeArea": {
            "ID": "TA",
            "LocalizedName": "Tel Aviv",
            "EnglishName": "Tel Aviv",
            "Level": 1,
            "LocalizedType": "District",
            "EnglishType": "District",
            "CountryID": "IL"
        },
        "TimeZone": {
            "Code": "IDT",
            "Name": "Asia/Jerusalem",
            "GmtOffset": 3,
            "IsDaylightSaving": true,
            "NextOffsetChange": "2020-10-24T23:00:00Z"
        },
        "GeoPosition": {
            "Latitude": 32.045,
            "Longitude": 34.77,
            "Elevation": {
                "Metric": {
                    "Value": 34,
                    "Unit": "m",
                    "UnitType": 5
                },
                "Imperial": {
                    "Value": 111,
                    "Unit": "ft",
                    "UnitType": 0
                }
            }
        },
        "IsAlias": false,
        "SupplementalAdminAreas": [],
        "DataSets": [
            "AirQualityCurrentConditions",
            "AirQualityForecasts",
            "Alerts",
            "ForecastConfidence"
        ]
    }
];

function Suggestion({ index, item, setDisplayedCity }) {
    const { city, country, cityKey } = item;
    return (
        <Link to={`/weather/${cityKey}`} className={''} onClick={()=>setDisplayedCity(cityKey)}>
            <h2>{`${city}, ${country}`}</h2>
        </Link>

    )
}


function SearchSuggestions({ searchVal, setDisplayedCity, className }) {

    const [ completions, setCompletions ] = useState([]);

    useEffect(() => {
        searchVal && autoComplete(searchVal)
            .then(data => {console.log(data);return data;})
            .then(data => data.map(suggestion => Object.assign({}, {
                city: suggestion.EnglishName,
                country: suggestion.Country.EnglishName,
                geoPosition: suggestion.GeoPosition,
                cityKey: suggestion.Key
             })))
            .then(data => {setCompletions(data);console.log(data);return data;})
            .catch(err => console.log(err));

        return () => {}
    }, [searchVal]);

    return completions && completions.length > 0 ? (
        <List baseClassName={className}>
            {completions.map((item, index) => <Suggestion item={item} key={index} index={index} setDisplayedCity={setDisplayedCity}/>)}
        </List>
    ) : <></>
}

SearchSuggestions.defaultProps = {
    baseClassName: 'list',
};

SearchSuggestions.propTypes = {
    baseClassName: PropTypes.string,
    children: PropTypes.node,
};


export default SearchSuggestions;