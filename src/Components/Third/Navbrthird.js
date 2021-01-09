import React from "react";
import { Navbar, Button, Nav, Dropdown } from "react-bootstrap";
import "./Navbrthird.css";
import logo from "../../Assets/logo.svg";
import en from "../../Assets/en.svg";
import {Link} from "react-router-dom";
function Navbrthird() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-white mb-5 topbar"
        variant="dark"
      >
        <Navbar.Brand href="/">
          <img className="ml-5" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto text-dark">
          <Link to="/">
            <Nav.Link href="/" className="text-dark ">
             <span className="home"> HOME</span>
            </Nav.Link>
            </Link>
            <Dropdown>
              <Dropdown.Toggle variant="white" id="dropdown-basic">
                <span className="home">
                  <img src={en} className="ml-2 mr-2" />
                  English
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Button className="navbtn" variant="primary">
                Try it for free
              </Button>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navbrthird;