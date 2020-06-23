import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { autoComplete } from '../helpers';

function Search({ searchVal, setSearchValue }) {

    return (
        <>
            <label htmlFor="search">Search:</label>
            <input type="text" id="search" value={searchVal} onChange={e => setSearchValue(e.target.value)} />
        </>
    )
}

Search.defaultProps = {
    baseClassName: 'list',
};

Search.propTypes = {
    baseClassName: PropTypes.string,
    children: PropTypes.node,
};


export default Search;