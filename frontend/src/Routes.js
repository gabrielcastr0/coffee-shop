import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Erro from './pages/Erro';
import Entrar from './pages/Entrar';
import Cadastrar from './pages/Cadastrar';

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
            <Route exact path="/entrar">
                <Entrar />
            </Route>

            {/* quando acessar a url "/cadastrar", ir para a page "Cadastrar" */}
            <Route exact path="/cadastrar">
                <Cadastrar />
            </Route>

            {/* quando acessar uma url que não existe, ir para a page "Erro" */}
            <Route>
                <Erro />
            </Route>
        </Switch>
    )
}