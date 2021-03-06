import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import { App } from './App';
import { Movies } from './Movies/Movies';
import { NotFound } from './NotFound';
import * as serviceWorker from './serviceWorker';
import { MovieDetail } from './Movies/MovieDetail';

const routing = (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
            <Route exact={true} path="/" component={App} />
            <Route exact={true} path="/movies" component={Movies} />
            <Route exact={true} path="/movies/:id" component={MovieDetail} />
            <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
