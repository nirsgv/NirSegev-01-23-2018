import React, { useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SearchInput from "../components/searchInput";
import SearchSuggestions from "../components/searchSuggestions";
import { setSearchValue, setDisplayedCity, toggleFavCity } from "../actions";
import SvgSprite from "../components/svgSprite";


function Search({ searchVal, setSearchValue, setDisplayedCity }) {

    return (
        <>
        <section className={'search'}>
            <SvgSprite name={'SEARCH'}/>
            <SearchInput className={'search__input'}
                         searchVal={searchVal}
                         setSearchValue={setSearchValue}
                         />
        </section>
        <section className={'search__suggestions'}>
            {searchVal && <SearchSuggestions className={'suggestions'} searchVal={searchVal} setDisplayedCity={setDisplayedCity} />}
        </section>
        </>
    )
}

const mapStateToProps = state => ({
    favCities: state.appData.favCities,
    searchVal: state.appData.searchVal
});

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleFavCity,
    setSearchValue,
    setDisplayedCity
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
