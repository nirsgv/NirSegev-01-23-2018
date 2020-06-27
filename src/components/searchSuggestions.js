import React, { useState, useEffect } from 'react';
import { autoComplete } from '../helpers';
import List from "./list";
import { Link } from "react-router-dom";


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
            .then(data => {
                if (data) {
                    const compactSuggestions = data.map(suggestion => Object.assign({}, {
                        city: suggestion.EnglishName,
                        country: suggestion.Country.EnglishName,
                        geoPosition: suggestion.GeoPosition,
                        cityKey: suggestion.Key
                    }));
                    setCompletions(compactSuggestions)
                }
        });

        return () => {}
    }, [searchVal]);

    return  (
        <List baseClassName={className}>
            {completions.map((item, index) => <Suggestion item={item} key={index} index={index} setDisplayedCity={setDisplayedCity}/>)}
        </List>
    )
}


export default SearchSuggestions;