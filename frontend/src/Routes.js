import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default () => {
    return (
        <Switch>
            {/* when access the url "/", will be redirect to Home Page */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* when access the url "/about", will be redirect to About Page */}
            <Route exact path="/about">
                <About />
            </Route>

            {/* when access the url "/signin", will be redirect to SignIn Page */}
            <Route exact path="/signin">
                <SignIn />
            </Route>

            {/* when access the url "/signin", will be redirect to SignUp Page */}
            <Route exact path="/signup">
                <SignUp />
            </Route>

            {/* when access a page that not exist, will be redirect to NotFound Page */}
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}