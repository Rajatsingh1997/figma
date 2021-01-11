import React from "react";
import { Container, Button,Row,Col } from "react-bootstrap";
import Contact from "../../Assets/Contact.svg";
import big from "../../Assets/big.svg";
import asd from "../../Assets/asd.svg";
import left from "../../Assets/left.png";
import mid from "../../Assets/mid.png";
import right from "../../Assets/right.png";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="mx-5">
      <div className="aboveicos">
       <Row className="text-center">
        <Col></Col>
        <Col><h1 className="trused mt-3">Trusted by</h1></Col>
        <Col></Col>
        </Row>
        </div>
        
        <div className="belowForm">
        <Row className="justify-content-around ">
        <Col sm={0}></Col>
        <Col sm={3}> <img className="img_left" src={left}/></Col>
        <Col sm={3}><img className="img_mid" src={mid} /></Col>
        <Col sm={3}><img className="img_right" src={right} /></Col>
        <Col sm={0}></Col>
        </Row>
        </div>
        </div>
        <hr/>
        <Container className="mb-4">
        <div className="mt-5 mb-2 forbodr">
          <div className="row">
            <div className="col lg-4 md-12 sm-12">
              {" "}
              <img className="Contact" src={Contact}/>
            </div>
            <div className="col lg-4 md-12 sm-12 text-center">
              <img className="big" src={big} />
              <br />
              <p className="text-primary mt-4">BLOG</p>
              <img className="asd" src={asd} />
            </div>
            <div className="tophead col lg-4 md-12 sm-12 mx-0">
              <span className="top mb-1">Turn ideas into innovations</span>
              <br />
              <span className="sendtop">
                Start collecting ideas for the next big thing in your
                organization now!<br/>
              </span>
              <Button variant="primary" className="footerbtnzero">
                <span className="lastbtn">Get Started!</span>
              </Button>{" "}
            </div>
          </div>
        </div>
      </Container>
      <hr />

      <Container>
      <small
        className="d-flex justify-content-end"
        style={{fontWeight: "500",color:"333333, 87%" }}
      >
        ©2019 - IDEX | All rights reserved
      </small>
      </Container>
      <hr />
    </>
  );
}

export default Footer;
