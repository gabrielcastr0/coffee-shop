import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert, NavItem, NavLink } from 'reactstrap';
import './style.css';

import { Link } from 'react-router-dom';

import useAPI from '../../components/helpers/CShopAPI';
import { doLogin } from '../../components/helpers/AuthHandler';

const SignIn = () => {

    const api = useAPI();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ disabled, setDisabled ] = useState(false);
    const [ error, setError ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');
        
        const json = await api.login(email, password);

        if(json.error){
            setError(json.error);
        }else{
            doLogin(json.token);
            window.location.href = '/';
        }
    }

    return(

        <div className="container">
            <h1 className="mt-3">Login</h1>

            <div className="area-box">
                <Form className="mt-3" onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="exampleEmail">E-mail</Label>
                        <Input 
                            required
                            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            type="email" 
                            name="email" 
                            id="exampleEmail" 
                            placeholder="Insira seu e-mail" 
                            value={email} 
                            onChange={e=>setEmail(e.target.value)} 
                            disabled={disabled}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="examplePassword">Senha</Label>
                        <Input 
                            required
                            type="password" 
                            name="password" 
                            id="examplePassword" 
                            placeholder="Insira sua senha" 
                            value={password} 
                            onChange={e=>setPassword(e.target.value)} 
                            disabled={disabled}/>
                    </FormGroup>
                    <Button color="secondary" disabled={disabled}>Fazer Login</Button>
                </Form>
            </div>

            <div className="mt-2">
                <span id="semConta">Não tem conta? 
                    <Link to="/signup" className="linkCadastro"> Clique aqui para se cadastrar</Link>
                </span>
            </div>

            {error &&
                <Alert color="danger mt-2">
                    Usuário e/ou senha inválidos!
                </Alert>
            }
            
        </div>
    );
}

export default SignIn;