import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './style.css';

const About = () => {
    return (
        <div className="container">
            <h5 className="mt-3">Home / About</h5>
            <ListGroup>
                <ListGroupItem>Gabriel Souza de Castro e Rosa</ListGroupItem>
                <ListGroupItem>Marcella Canedo Tristão</ListGroupItem>
                <ListGroupItem>Carlos Murilo</ListGroupItem>
                <ListGroupItem>Bruno D'Lucca Silva Carvalho</ListGroupItem>
                <ListGroupItem>Leonardo Neres Gonçalves</ListGroupItem>
                <ListGroupItem>Matheus Henrique Gomes De Lira</ListGroupItem>
            </ListGroup>
        </div>
    )
}

export default About;