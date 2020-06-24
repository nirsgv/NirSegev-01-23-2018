import React, { useState } from 'react';
import './styles/main.scss';

import { Router, Switch, Route, Link, NavLink } from "react-router-dom";
import List from "./components/list";
import Search from "./containers/search";
import Favorites from "./containers/favorites";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import { createBrowserHistory } from "history";
import CityExpansion from "./containers/cityExpansion";
const customHistory = createBrowserHistory();


function App({  }) {
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
                        <NavLink {...navlinkProps} to="/favorites">Favorites</NavLink>
                    </List>

                </header>

                <main>
                    <Switch>
                        <Route path="/weather">
                            <Search />
                            <CityExpansion />
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
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
