import React from 'react';
import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';
import coffee from './coffee-cup.png';
import avatar from './avatar.png';

const Header = () => {

    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <h1><img src={coffee} height="64"></img>Coffee<span>Shop</span></h1>
                    </Link>
                </div>

                <nav className="menu-nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/erro">Cardápio</Link>
                        </li>

                        <li>
                            <Link to="/erro">Sobre nós</Link>
                        </li>

                        <li>
                            <img src={avatar} height="64"></img>
                            <Link to="/erro">Entrar</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;