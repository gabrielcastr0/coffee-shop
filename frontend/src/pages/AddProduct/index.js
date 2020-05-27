import React, { Component } from 'react';
import { 
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

export default class Usuarios extends Component {

  lsUsersKey = 'products'; // localStorage key

  constructor(props) {
      super(props);

      this.state = { // products array
          products: []
      }
  }

  // function to set product
  handleSubmit = async (e) => {
      e.preventDefault();
      let select = document.querySelector("#productInput");

      await this.setState({
          products: [
              ...this.state.products,
              e.target.elements.productName.value
          ]
      });
      
      localStorage.setItem(this.lsUsersKey, JSON.stringify(this.state.products));
      select.value = "";
      select.focus();
  }

  render() {
      return (
          <>
              <Container className="mt-3">
                  <h5>Home / Adicionar Produto</h5>
                  <Form onSubmit={this.handleSubmit}>
                      <FormGroup>
                          <Label for="userName">Nome do Produto:</Label>
                          <Input type="text" name="productName" id="productInput" className="productInput" placeholder="Insira o nome do produto"/>
                      </FormGroup>
                      <Button type="submit">Adicionar</Button>
                  </Form>
              </Container>
          </>
      );
  }
}