import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
import './style.css';

import useAPI from '../../components/helpers/CShopAPI';
import { doLogin } from '../../components/helpers/AuthHandler';

const Page = () => {

    const api = useAPI();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ disabled, setDisabled ] = useState(false);
    const [ error, setError ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        
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
                        <Input type="email" name="email" id="exampleEmail" placeholder="Insira seu e-mail" value={email} onChange={e=>setEmail(e.target.value)} disabled={disabled}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Senha</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Insira sua senha" value={password} onChange={e=>setPassword(e.target.value)} disabled={disabled}/>
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

export default Page;