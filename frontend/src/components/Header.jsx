import React from 'react'
import { Navbar, Nav, Container, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const header = () => {
  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect>
        <Container>
            <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/add">Add Movie</Nav.Link>
            </Nav>

          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default header;