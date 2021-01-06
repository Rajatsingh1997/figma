import React,{useState} from "react";
import { Navbar, Button,Nav } from "react-bootstrap";
import logo from "../Assets/logo.svg";
import "./Navbr.css";
function Navbr() {
  const[click,setClick]=useState("false")
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="topNav">
        <Navbar.Brand href="#home">
          <img className="ml-5" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing">
            <div className="d-flex justify-content-center box">
            <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                HOME <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                HOW IT WORKS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                TESTIMONIALS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                BLOG
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                CONTACT US
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                PRICING
              </a>
            </li>
          </ul>
          </div>
            </Nav.Link>
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

export default Navbr;
