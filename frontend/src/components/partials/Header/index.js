import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

import { Link } from 'react-router-dom';
import { isLogged, doLogout } from '../../helpers/AuthHandler'; // importando function isLogged

import './style.css'; // importando css
import cup from './coffee-cup.png'; // importando logo
import avatar from './avatar.png'; // importando avatar

const Header = () => {

    let logged = isLogged(); // armazena true or false

    const handleLogout = () => {
        doLogout();
        window.location.href = '/';
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
            <Navbar expand="md">
                <Link to="/" className="link">
                    <NavbarBrand>
                        <img src={cup} height="64" className="d-inline-block align-center"></img>
                        Coffee<span>Shop</span>
                    </NavbarBrand>
                </Link>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>

                        {logged &&
                            <>
                                <Link to="/" className="link">
                                    <NavItem>
                                        <NavLink>Home</NavLink>
                                    </NavItem>
                                </Link>

                                <Link to="/erro" className="link">
                                    <NavItem>
                                        <NavLink>Produtos</NavLink>
                                    </NavItem>
                                </Link>

                                <Link to="/erro" className="link">
                                    <NavItem>
                                        <NavLink>Adicionar Produto</NavLink>
                                    </NavItem>
                                </Link>

                                <Link to="/erro" className="link">
                                    <NavItem>
                                        <NavLink>Sobre Nós</NavLink>
                                    </NavItem>
                                </Link>

                                <Link to="/entrar" className="link">
                                    <NavItem onClick={handleLogout}>
                                        <NavLink><img src={avatar} height="64" className="d-inline-block align-center"></img>Sair</NavLink>
                                    </NavItem>
                                </Link>
                            </>
                        } 

                        {!logged &&
                            <>
                                <Link to="/" className="link">
                                    <NavItem>
                                        <NavLink>Home</NavLink>
                                    </NavItem>
                                </Link>

                                <Link to="/erro" className="link">
                                    <NavItem>
                                        <NavLink>Produtos</NavLink>
                                    </NavItem>
                                </Link>

                                <Link to="/erro" className="link">
                                    <NavItem>
                                        <NavLink>Sobre Nós</NavLink>
                                    </NavItem>
                                </Link>

                                <Link to="/entrar" className="link">
                                    <NavItem>
                                        <NavLink><img src={avatar} height="64" className="d-inline-block align-center"></img>Entrar</NavLink>
                                    </NavItem>
                                </Link>
                            </>
                        }          

                        
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header;