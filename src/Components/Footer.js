import React from 'react'
import { Container,Button } from 'react-bootstrap'
import Contact from "../Assets/Contact.svg";
import big from "../Assets/big.svg";
import asd from "../Assets/asd.svg";
import Clients from "../Assets/Clients.png";
import Sentence from "../Assets/Sentence.png";
import Header from "../Assets/Header.png";
import wer from "../Assets/wer.png";
import "./Footer.css";
function Footer() {
    return (
        <>
        <img className="" style={{marginBottom:"150px"}} src={Clients} />
        <div className="mt-5 mb-2">
         
            <Container>
                <div className="row">
                    <div className="col-4"> <img className="" src={Contact} /></div>
                    <div className="col-4 text-center"><img className="" src={big} /><br/>
                      <p className="text-primary mt-4">BLOG</p>
                    <img className="" src={asd} /> 
                    </div>
                    <div className="col-4">
                    <img className="header" src={Header} />
                    <img className="" src={Sentence} />
                    <Button variant="primary" className="footerbtn">Get Started!</Button>{' '}
                    </div>
                   
                </div>
            </Container>
            <hr/>
            <img className="wer" src={wer} />
            <hr/>
        </div>
        </>
    )
}

export default Footer
