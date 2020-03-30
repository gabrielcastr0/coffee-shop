import React from 'react';
import { PageArea } from './styled';
import expresso from './expresso-background.jpg';
import '../../grid.css';

const Page = () => {
    return (
        <PageArea>
            <div id="area_box"></div>

            {/* Seção de Categorias */}
            <section className="categorias">
                <h2>Categorias</h2>
                <div className="categorias-item grid-3">
                    <img src={expresso}></img>
                    <h3>Expressos</h3>
                </div>

                <div className="categorias-item grid-3">
                    <img src={expresso}></img>
                    <h3>Cappuccinos</h3>
                </div>

                <div className="categorias-item grid-3">
                    <img src={expresso}></img>
                    <h3>Clássicos</h3>
                </div>

                <div className="categorias-item grid-3">
                    <img src={expresso}></img>
                    <h3>Frapê</h3>
                </div>
            </section>
        </PageArea>
    );
}

export default Page;