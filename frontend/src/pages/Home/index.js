import React from 'react';
import { PageArea } from './styled';
import expresso from './expresso-background.jpg';
import '../../grid.css';
import frape from './frape.png';

const Page = () => {
    return (
        <PageArea>
            <div id="area_box"></div>

            {/* Seção de Categorias */}
            <div>
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
            </div>

            {/* Seção de Produtos mais vendidos */}
            <div>
                <section className="produtos">
                    <h2>Produtos mais vendidos</h2>
                    <div className="produto-item grid-3">
                        <h3>Frapê Baunilha</h3>
                        <img src={frape}></img>
                        <h4>330ML</h4>
                        <h4>R$10,50</h4>
                    </div>

                    <div className="produto-item grid-3">
                        <h3>Frapê Baunilha</h3>
                        <img src={frape}></img>
                        <h4>330ML</h4>
                        <h4>R$10,50</h4>
                    </div>

                    <div className="produto-item grid-3">
                        <h3>Frapê Baunilha</h3>
                        <img src={frape}></img>
                        <h4>330ML</h4>
                        <h4>R$10,50</h4>
                    </div>

                    <div className="produto-item grid-3">
                        <h3>Frapê Baunilha</h3>
                        <img src={frape}></img>
                        <h4>330ML</h4>
                        <h4>R$10,50</h4>
                    </div>
                </section>
            </div>
        </PageArea>
    );
}

export default Page;