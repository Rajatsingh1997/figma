import React from "react";
import { Container, Button,Row,Col } from "react-bootstrap";
import Contact from "../../Assets/Contact.svg";
import big from "../../Assets/big.svg";
import asd from "../../Assets/asd.svg";
// import left from "../Assets/left.png";
// import mid from "../Assets/mid.png";
// import right from "../Assets/right.png";
import "./Footerthird.css";
function Footerthird() {
  return (
    <>
        <hr/>
        <Container className="mb-4">
        <div className="mt-5 mb-2 forbodr">
          <div className="row">
            <div className="col-4">
              {" "}
              <img className="Contact" src={Contact}/>
            </div>
            <div className="col-4 text-center">
              <img className="big" src={big} />
              <br />
              <p className="text-primary mt-4">BLOG</p>
              <img className="asd" src={asd} />
            </div>
            <div className="tophead col-4">
              <span className="top mb-1">Turn ideas into innovations</span>
              <br />
              <span className="sendtop">
                Start collecting ideas for the next big thing in your
                organization now!<br/>
              </span>
              <Button variant="primary" className="footerbtnthird">
                <span className="">Get Started!</span>
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

export default Footerthird;