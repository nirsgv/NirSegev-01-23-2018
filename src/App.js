import React from 'react';
import './App.css';
import './styles/main.scss';

import {Router, Switch, Route, Link, NavLink} from "react-router-dom";
import {createBrowserHistory} from "history";
import List from "./components/list";

const customHistory = createBrowserHistory();

function App() {
    const navlinkProps = {
        className: "main-nav__link",
        activeClassName: "main-nav__link--active"
    };
    return (
        <div className="App">
            <Router history={customHistory}>

                <header className="App-header">

                    <List baseClassName="main-nav">
                        <NavLink {...navlinkProps} to="/weather">Weather</NavLink>
                        <NavLink {...navlinkProps} activeClassName="main-nav__link--active" to="/favourites">Favourites</NavLink>
                    </List>

                </header>

                <main>
                    <Switch>
                        <Route path="/weather">
                            <h1>A</h1>
                        </Route>
                        <Route path="/favourites">
                            <h1>B</h1>
                        </Route>
                    </Switch>
                </main>
            </Router>

        </div>
    );
}

export default App;
