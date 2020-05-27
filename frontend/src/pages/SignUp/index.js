import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import useApi from '../../components/helpers/CShopAPI';
import { doLogin } from '../../components/helpers/AuthHandler';

const SignUp = () => {
    const api = useApi();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setDisabled(true);
        setError('');

        if ( password !== confirmPassword ) {
            setError('As senhas não são iguais!');
            setDisabled(false);
            return;
        }

        const json = await api.register(name, email, password, confirmPassword);

        if (json.error) {
            setDisabled(false);
            setError(json.error);
        } else {
            doLogin(json.token);
            window.location.href = '/';
        }

        setDisabled(false);
    }

    return(

        <div className="container">
            <h5 className="mt-3">Home / Login / Cadastrar</h5>

            <div className="area-box">
                <Form className="mt-3" onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="nomeCompleto">Nome Completo</Label>
                        <Input 
                            required
                            pattern="[a-zA-Z\s]+$"
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
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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

                    <Button color="secondary" disabled={disabled}>Cadastrar</Button>
                </Form>
            </div>

            {error &&
                <Alert color="danger mt-2">
                    Dado(s) já existentes!
                </Alert>
            }
            
        </div>
    );
}

export default SignUp;