import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';

/** navigation bar*/
export const NavigationBar = () => (
    <Navbar expand="lg">
      <Navbar.Brand href='/'>MyMovieFlix</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/register">New User</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/users/:username">Me</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)