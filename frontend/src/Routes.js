import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Erro from './pages/Erro';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default () => {
    return (
        <Switch>
            {/* quando acessar a url "/", ir para a page Home */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* quando acessar a url "/sobre", ir para a page "Sobre" */}
            <Route exact path="/sobre">
                <Sobre />
            </Route>

            {/* quando acessar a url "/entrar", ir para a page "Entrar" */}
            <Route exact path="/signin">
                <SignIn />
            </Route>

            {/* quando acessar a url "/singup", ir para a page "Cadastrar" */}
            <Route exact path="/signup">
                <SignUp />
            </Route>

            {/* quando acessar uma url que não existe, ir para a page "Erro" */}
            <Route>
                <Erro />
            </Route>
        </Switch>
    )
}