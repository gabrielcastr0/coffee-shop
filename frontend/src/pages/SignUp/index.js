import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import useApi from '../../components/helpers/CShopAPI';
import { doLogin } from '../../components/helpers/AuthHandler';

const SignIn = () => {
    const api = useApi();

    const [name, setName] = useState('');
    const [stateLoc, setStateLoc] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [stateLocList, setStateLocList] = useState([]);

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getStates = async () => {
            const sList = await api.getStates();
            setStateLocList(sList);
        }
        getStates();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setDisabled(true);
        setError('');

        if ( password !== confirmPassword ) {
            setError('Confirmação de senha com erro!');
            setDisabled(false);
            return;
        }

        const json = await api.register(name, stateLoc, email, password, confirmPassword);

        if (json.error) {
            setError(json.error);
        } else {
            doLogin(json.token);
            window.location.href = '/';
        }

        setDisabled(false);
    }

    return(

        <div className="container">
            <h1 className="mt-3">Login</h1>

            <div className="area-box">
                <Form className="mt-3" onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="nomeCompleto">Nome Completo</Label>
                        <Input 
                            required
                            type="text" 
                            name="nomeCompleto" 
                            id="nomeCompleto" 
                            placeholder="Insira seu nome" 
                            value={name} 
                            onChange={e=>setName(e.target.value)} 
                            disabled={disabled}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">E-mail</Label>
                        <Input 
                            required
                            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Insira seu e-mail" 
                            value={email} 
                            onChange={e=>setEmail(e.target.value)} 
                            disabled={disabled}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="pass">Senha</Label>
                        <Input 
                            required
                            type="password" 
                            name="pass" 
                            id="pass" 
                            placeholder="Insira sua senha" 
                            value={password} 
                            onChange={e=>setPassword(e.target.value)} 
                            disabled={disabled}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="confirmar">Confirmar senha</Label>
                        <Input 
                            required
                            type="password" 
                            name="confirmar" 
                            id="confirmar" 
                            placeholder="Confirme sua senha" 
                            checked={confirmPassword}
                            onChange={e=>setConfirmPassword(e.target.value)} 
                            disabled={disabled}/>
                    </FormGroup>

                    <Button color="secondary" disabled={disabled}>Fazer Login</Button>
                </Form>
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