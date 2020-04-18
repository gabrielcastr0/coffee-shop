import React from 'react';
import { Link } from 'react-router-dom';

const Page = () => {
    return (
        <div className="container-fluid">
            <h1 className="mt-3">Página não encontrada</h1>
            <Link to="/">Voltar para a home</Link>
        </div>
    )
}

export default Page;