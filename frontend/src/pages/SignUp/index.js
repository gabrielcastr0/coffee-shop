import React, { useState } from 'react';
import { PageArea } from './styled';
import { PageContainer, PageTitle } from '../../components/MainComponents';

const Page = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisable] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisable(true);
    }

    return(
        <PageContainer>
            <PageTitle>Cadastrar</PageTitle>
            <PageArea>
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area-title">Nome Completo:</div>
                        <div className="area-input">
                            <input type="text" disabled={disabled}/>
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Insira seu Email:</div>
                        <div className="area-input">
                            <input type="email" disabled={disabled}/>
                        </div>
                    </label>    

                    <label className="area">
                        <div className="area-title">Insira sua Senha:</div>
                        <div className="area-input">
                            <input type="email" disabled={disabled}/>
                        </div>
                    </label>   

                    <label className="area">
                        <div className="area-title">Confirmar senha:</div>
                        <div className="area-input">
                            <input type="email" disabled={disabled}/>
                        </div>
                    </label>   

                    <label className="area">
                        <div className="area-title"></div>
                        <div className="area-input">
                            <button disabled={disabled}>Fazer Login</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;