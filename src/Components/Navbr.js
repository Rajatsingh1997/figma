import React from "react";
import { Navbar, Button } from "react-bootstrap";
import logo from "../Assets/logo.svg";
import "./Navbr.css";
function Navbr() {
  return (
    <div className="topNav">
      <Navbar>
        <Navbar.Brand href="#home">
          <img className="logo1" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <div class="collapse navbar-collapse box" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                HOME <span class="sr-only">(current)</span>
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
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button className="navbtn" variant="primary">
              Try it for free
            </Button>{" "}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbr;
