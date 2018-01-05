import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends React.Component {

  render(){
    return (
      <Navbar className="clear-margin">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><b>React ToDo Application</b></Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to="/posts">
            <NavItem eventKey={1}>Posts</NavItem>
          </LinkContainer>
          <LinkContainer to="/users">
            <NavItem eventKey={2}>Users</NavItem>
          </LinkContainer>
          <LinkContainer to="/comments">
            <NavItem eventKey={3}>Comments</NavItem>
          </LinkContainer>
          <LinkContainer to="/todos">
            <NavItem eventKey={4}>Todos</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}
