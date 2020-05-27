import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { Link } from 'react-router-dom';
import { isLogged, doLogout } from '../../helpers/AuthHandler';

import './style.css';
import cup from './coffee-cup.png';
import avatar from './avatar.png';

const Header = () => {

    let logged = isLogged(); // true or false

    // function that call the doLogout() and do refresh to homepage
    const handleLogout = () => {
        doLogout();
        window.location.href = '/';
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <div className="container">
            <Navbar expand="md">
                <Link to="/" className="link">
                    <NavbarBrand>
                        <img 
                            src={cup} 
                            height="64" 
                            className="d-inline-block align-center"
                            alt="">
                        </img>
                        Coffee<span>Shop</span>
                    </NavbarBrand>
                </Link>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>

                        {/* when is Logged */}
                        {logged &&
                            <>
                                <Link to="/" className="link">
                                    <NavItem>
                                        <NavLink>Home</NavLink>
                                    </NavItem>
                                </Link>

                                <Link to="/products" className="link">
                                    <NavItem>
                                        <NavLink>Produtos</NavLink>
                                    </NavItem>
                                </Link>

                                <Link to="/add-product" className="link">
                                    <NavItem>
                                        <NavLink>Adicionar Produto</NavLink>
                                    </NavItem>
                                </Link>

                                <Link to="/about" className="link">
                                    <NavItem>
                                        <NavLink>Sobre Nós</NavLink>
                                    </NavItem>
                                </Link>

                                <Link to="/signin" className="link">
                                    <NavItem onClick={handleLogout}>
                                        <NavLink>
                                            <img 
                                                src={avatar} 
                                                height="64" 
                                                className="d-inline-block align-center"
                                                alt="">
                                            </img>Sair
                                        </NavLink>
                                    </NavItem>
                                </Link>
                            </>
                        } 

                        {/* when isn't Logged */}
                        {!logged &&
                            <>
                                <Link to="/" className="link">
                                    <NavItem>
                                        <NavLink>Home</NavLink>
                                    </NavItem>
                                </Link>

                                <Link to="/products" className="link">
                                    <NavItem>
                                        <NavLink>Produtos</NavLink>
                                    </NavItem>
                                </Link>

                                <Link to="/about" className="link">
                                    <NavItem>
                                        <NavLink>Sobre Nós</NavLink>
                                    </NavItem>
                                </Link>

                                <Link to="/signin" className="link">
                                    <NavItem>
                                        <NavLink>
                                            <img 
                                                src={avatar} 
                                                height="64" 
                                                className="d-inline-block align-center"
                                                alt="">
                                            </img>Entrar
                                        </NavLink>
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