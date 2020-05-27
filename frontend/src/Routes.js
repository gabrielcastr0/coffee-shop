import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';

export default () => {
    return (
        <Switch>
            {/* when access the url "/", go to Home */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* when access the url "/products", go to Products */}
            <Route exact path="/products">
                <Products />
            </Route>

            {/* when access the url "/signin", go to SignIn */}
            <Route exact path="/add-product">
                <AddProduct />
            </Route>

            {/* when access the url "/about", go to About */}
            <Route exact path="/about">
                <About />
            </Route>

            {/* when access the url "/signin", go to SignIn */}
            <Route exact path="/signin">
                <SignIn />
            </Route>

            {/* when access the url "/signup", go to SignUp */}
            <Route exact path="/signup">
                <SignUp />
            </Route>

            {/* when try access a url that not exist, go to Error */}
            <Route>
                <Error />
            </Route>
        </Switch>
    )
}