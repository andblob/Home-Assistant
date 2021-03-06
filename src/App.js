
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
/*
import React, { Component } from 'react';
import { Button } from 'reactstrap';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button color="danger">Danger!</Button>
      </div>
    );
  }
}

export default App;

*/
/*
import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="inverse" inverse toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h1>Welcome to React</h1>
                <p>
                  <Button
                    tag="a"
                    color="success"
                    size="large"
                    href="http://reactstrap.github.io"
                    target="_blank"
                  >
                    View Reactstrap Docs
                  </Button>
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
*/

import React from 'react';
import { Table, Button } from 'reactstrap';

class Device_Row extends React.Component{
  
  render() {
    return (
      <tr>
        <th scope="row">{this.props.row_num}</th>
        <td>{this.props.name}</td>
        <td><Button color="success">{this.props.operation}</Button>{' '}</td>
        <td><Button color="secondary">Configure</Button>{' '}</td>
      </tr>
    )
  }
}

export default class Example extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rows: 0,
    };
  }
  renderRow(name, operation){
    this.state.rows += 1;
    return <Device_Row row_num={this.state.rows} name={name} operation={operation}/>;
  }
  render() {
    return (
      <Table hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Device</th>
            <th>Operation</th>
            <th>configure</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRow("computer", "startup")}
          {this.renderRow("phone", "alert")}
          {this.renderRow("speaker", "toggle_mute")}
        </tbody>
      </Table>
    );
  }
}