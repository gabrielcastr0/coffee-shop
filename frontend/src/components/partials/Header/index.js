import React from 'react';
import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';

import { isLogged } from '../../../helpers/AuthHandler';

const Header = () => {
    let logged = isLogged();

    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <h1>Coffee Shop<img src="#" alt=""></img></h1>
                    </Link>
                </div>

                <nav>
                    <ul>
                        { /* when logged, show this */}
                        {logged &&
                            <>
                                <li>
                                    <Link to="/my-account">Minha conta</Link>
                                </li>
                            </>
                        }

                        { /* when not logged, show this */}
                        {!logged &&
                            <>
                                <li>
                                    <Link to="/signin">Login</Link>
                                </li>

                                <li>
                                    <Link to="/signup">Cadastrar</Link>
                                </li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;