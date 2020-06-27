import React from 'react';

function SearchInput({ searchVal, setSearchValue, className }) {

    return (
        <input type="text"
               id="search" value={searchVal}
               placeholder="Search for location..."
               className={className}
               autoComplete="off"
               onChange={e => setSearchValue(e.target.value)}
        />
    )
}


export default SearchInput;