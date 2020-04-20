import React, { useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Page = () => {
    return (
        <div className="container mt-5">
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

export default Page;