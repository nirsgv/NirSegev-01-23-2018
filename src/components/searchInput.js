import React from 'react';
import { throttle, debounce } from "../helpers";

function SearchInput({ searchVal, setSearchValue, className }) {

    return (
        <input type="text"
               id="search" value={searchVal}
               placeholder="Search for location..."
               className={className}
               autoComplete="off"
               onChange={e => throttle(setSearchValue(e.target.value),3000)}
        />
    )
}


export default SearchInput;