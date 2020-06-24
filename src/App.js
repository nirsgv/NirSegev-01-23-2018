import React, { useState } from 'react';
import './styles/main.scss';

import { Router, Switch, Route, Link, NavLink } from "react-router-dom";
import List from "./components/list";
import Search from "./components/search";
import Favorites from "./containers/favorites";
import SearchSuggestions from "./components/searchSuggestions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { setSearchValue, setDisplayedCity, toggleFavCity } from "./actions";

import { createBrowserHistory } from "history";
import CityExpansion from "./components/cityExpansion";
const customHistory = createBrowserHistory();


function App({ isDarkMode, searchVal, setSearchValue, mainCityDisplayKey, setDisplayedCity, favCities, toggleFavCity }) {
    const navlinkProps = {
        className: "main-nav__link",
        activeClassName: "main-nav__link--active"
    };
    return (
        <div className="App">
            <Router history={customHistory}>

                <header className="header">
                    <div className="header__logo">logo</div>
                    <div className="header__controls"></div>
                    <List baseClassName="main-nav" addClass={"header__main-nav"}>
                        <NavLink {...navlinkProps} to="/weather">Weather</NavLink>
                        <NavLink {...navlinkProps} activeClassName="main-nav__link--active" to="/favorites">Favorites</NavLink>
                    </List>

                </header>

                <main>
                    <Switch>
                        <Route path="/weather">
                            <Search searchVal={searchVal} setSearchValue={setSearchValue} />
                            <SearchSuggestions searchVal={searchVal} setDisplayedCity={setDisplayedCity} />
                            <CityExpansion cityKey={mainCityDisplayKey} favCities={favCities} toggleFavCity={toggleFavCity}/>


                        </Route>
                        <Route path="/favorites">
                            <Favorites />
                        </Route>
                    </Switch>
                </main>
            </Router>

        </div>
    );
}


const mapStateToProps = state => ({
    isDarkMode: state.appData.isDarkMode,
    searchVal: state.appData.searchVal,
    mainCityDisplayKey: state.appData.mainCityDisplayKey,
    favCities: state.appData.favCities,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setSearchValue,
    setDisplayedCity,
    toggleFavCity
}, dispatch);



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
