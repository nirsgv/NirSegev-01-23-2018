import React from 'react';
import './App.css';

import {Router, Switch, Route, Link, NavLink} from "react-router-dom";
import {createBrowserHistory} from "history";
import List from "./components/list";

const customHistory = createBrowserHistory();

function App() {
    return (
        <div className="App">
            <Router history={customHistory}>

                <header className="App-header">
                    <List baseClassName="main-nav" printBase={false}>
                        <NavLink activeClassName="active" to="/weather">Weather</NavLink>
                        <NavLink activeClassName="active" to="/favourites">Favourites</NavLink>
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
