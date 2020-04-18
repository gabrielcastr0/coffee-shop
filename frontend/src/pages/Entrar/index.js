import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './style.css';

const Page = () => {
    return(
        <div className="container">
            <h1 className="mt-3">Login</h1>
            <div className="area-box">
                <Form className="mt-3">
                    <FormGroup>
                        <Label for="exampleEmail">E-mail</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Insira seu e-mail" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Senha</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Insira sua senha" />
                    </FormGroup>
                    <Button color="secondary">Fazer Login</Button>
                </Form>
            </div>
        </div>
    );
}

export default Page;