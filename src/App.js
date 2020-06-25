import React, { useState } from 'react';
import './styles/main.scss';

import { Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { toggleDarkMode, toggleIsFahrenheit } from './actions'
import List from "./components/list";
import Favorites from "./containers/favorites";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import CityExpansion from "./containers/cityExpansion";
import Checkbox from "./components/checkbox";
const customHistory = createBrowserHistory();


function App({ toggleDarkMode, toggleIsFahrenheit, isDarkMode, isFahrenheit }) {
    const navlinkProps = {
        className: "main-nav__link",
        activeClassName: "main-nav__link--active"
    };
    return (
        <div className={`App App--${isDarkMode ? 'dark' : 'bright'}-mode`}>
            <Router history={customHistory}>

                <header className="header">
                    <div className="header__logo">logo</div>
                    <List baseClassName="main-nav" addClass={"header__main-nav"}>
                        <NavLink {...navlinkProps} to="/weather">Weather</NavLink>
                        <NavLink {...navlinkProps} to="/favorites">Favorites</NavLink>
                    </List>
                    <List baseClassName="checkbox-toggle" addClass={"header__controls"}>
                        <Checkbox
                            checkboxId={'dark-mode-checkbox'}
                            labelText={'Dark Mode'}
                            name={'Dark Mode'}
                            checked={isDarkMode}
                            onChangeCb={toggleDarkMode}
                        />
                        <Checkbox
                            checkboxId={'fahrenheit-checkbox'}
                            labelText={'Use Fahrenheit'}
                            name={'Use Fahrenheit'}
                            checked={isFahrenheit}
                            onChangeCb={toggleIsFahrenheit}
                        />
                    </List>
                </header>

                <main>
                    <Switch>
                        {/*<Route path="/weather">*/}
                            {/*<Search />*/}
                            {/*<CityExpansion />*/}
                        {/*</Route>*/}
                        <Route path="/weather/:id" component={CityExpansion} />
                        <Route path="/favorites" component={Favorites} />

                    </Switch>
                </main>
            </Router>

        </div>
    );
}


const mapStateToProps = state => ({
    isDarkMode: state.appData.isDarkMode,
    isFahrenheit: state.appData.isFahrenheit,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleDarkMode,
    toggleIsFahrenheit
}, dispatch);



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
