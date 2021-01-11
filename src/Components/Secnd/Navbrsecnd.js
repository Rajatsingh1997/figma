import React,{useState} from "react";
import { Navbar, Button,Nav,Dropdown } from "react-bootstrap";
import logo from "../../Assets/logo.svg";
import en from "../../Assets/en.svg";
import "./Navbrsecnd.css";
import {Link} from "react-router-dom";
function Navbrsecnd() {

  const[click,setClick]=useState("false")
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="topNav">
        <Navbar.Brand href="#home">
          <img className="ml-5" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto  text-dark">
          {/* <Nav.Link href="#features" className="text-dark ">
              <span className="olspan">HOME</span>
            </Nav.Link>
            <Nav.Link href="#features" className="text-dark ">
            <span className="olspan">HOW IT WORKS</span>
            </Nav.Link>
            <Nav.Link href="#features" className="text-dark ">
            <span className="olspan">TESTIMONIALS</span>
            </Nav.Link>
            <Nav.Link href="#features" className="text-dark ">
            <span className="olspan">BLOG</span>
            </Nav.Link>
            <Nav.Link href="#features" className="text-dark ">
            <span className="olspan">CONTACT US</span>

            </Nav.Link> */}
            <Link to="/">
            <Nav.Link href="/" className="text-dark">
            <span className="olspan">HOME</span>
            </Nav.Link>
            </Link>
            <Dropdown>
              <Dropdown.Toggle variant="white" id="dropdown-basic">
                <span>
                  <img src={en} className="ml-2 mr-2 olspan" />
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

export default Navbrsecnd;