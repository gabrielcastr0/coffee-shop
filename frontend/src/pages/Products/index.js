import React, { Component } from 'react';
import { 
  Container, 
  Table,
  Button
} from 'reactstrap';
import { isLogged } from '../../components/helpers/AuthHandler';


export default class Products extends Component {

    
    lsUsersKey = 'products'; // localStorage key

    constructor(props) {
        super(props);
        this.state = { // products array
            products: []
        }
    }

    // function to get products (storage)
    componentDidMount() { 
        const products = JSON.parse(localStorage.getItem(this.lsUsersKey));
        if (products !== null) {
            this.setState({
                products
            });
        }
    }

    // function to remove products
    productRemove = (e) => {
        let products = this.state.products;
        products.splice(e, 1);
        this.setState({
            products: products
        });

        localStorage.setItem(this.lsUsersKey, JSON.stringify(this.state.products));
    }

    render(){
        let logged = isLogged();
        return (
        <>
            <Container className="mt-3">
                <h5>Home / Produtos</h5>
                {!logged &&
                <Table bordered>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Produto</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        {
                            this.state.products.map((product, i) => (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{product}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                }

                {logged &&
                <Table bordered>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Produto</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        {
                            this.state.products.map((product, i) => (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{product}</td>
                                    <td>
                                        <Button onClick={()=>this.productRemove(i)} color="danger">Remover</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                }
            </Container>
        </>
        );
    }
    }