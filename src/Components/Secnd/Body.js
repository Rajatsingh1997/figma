import React, { useState } from "react";
import { Container, Row, Card, Button, Accordion, Col } from "react-bootstrap";
import "./Body.css";
import dropdown from "../../Assets/dropdown.png";
function Body() {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  return (
    <>
      <div className="bodybg">
        <div className="plans">
          <span>Plans & Pricing</span>
        </div>
        <small className="Choose text-muted">
          Choose the plan that best suits your needs.
        </small>

        <Container>
          <div className="Contan">
            <Row className="d-flex justify-content-around">
              <div>
                <Card style={{ width: "15rem" }} className="Others">
                  <Card.Body>
                    <Card.Title className="family">STARTER</Card.Title>
                    <Card.Subtitle
                      className="mb-2 text-muted"
                      style={{ minHeight: "36px" }}
                    >
                      <span className="Doller">
                        <b>$99</b>
                      </span>{" "}
                      USD/Month
                    </Card.Subtitle>
                    <hr />
                    <Card.Text className="text-muted">
                      Unlimited members
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Up to 100 ideas
                    </Card.Text>
                    <Card.Text className="text-muted">1 team</Card.Text>
                    <Card.Text className="text-muted">
                      Your own workspace for innovation
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Collect, analyze, and manage ideas
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Performance analytics on innovation and people
                    </Card.Text>
                    <Card.Text className="Success">
                      Advanced audience segmentation
                    </Card.Text>
                    <Card.Text className="Success">
                      Customization according to your own branding
                    </Card.Text>
                    <Card.Text className="Success">Single Sign-On</Card.Text>
                    <Card.Text className="Success">
                      A dedicated innovation success manager
                    </Card.Text>
                    <Button variant="outline-primary w-100 mt-3 mb-3">
                      Try it for free
                    </Button>{" "}
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card style={{ width: "15rem" }} className="Forshadow">
                  <Card.Body>
                    <Card.Title className="family">PROFESSIONAL</Card.Title>
                    <Card.Subtitle
                      className="mb-2 text-muted"
                      style={{ minHeight: "36px" }}
                    >
                      <span className="Doller">$499</span> USD/Month
                    </Card.Subtitle>
                    <hr />
                    <Card.Text className="text-muted">
                      Unlimited members
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Up to 500 ideas
                    </Card.Text>
                    <Card.Text className="text-muted">5 teams</Card.Text>
                    <Card.Text className="text-muted">
                      Your own workspace for innovation
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Collect, analyze, and manage ideas
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Performance analytics on innovation and people
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Advanced audience segmentation
                    </Card.Text>
                    <Card.Text className="Success">
                      Customization according to your own branding
                    </Card.Text>
                    <Card.Text className="Success">Single Sign-On</Card.Text>
                    <Card.Text className="Success">
                      A dedicated innovation success manager
                    </Card.Text>
                    <Button variant="primary w-100 mt-3 mb-3">
                      Try it for free
                    </Button>{" "}
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card style={{ width: "15rem" }} className="Others">
                  <Card.Body>
                    <Card.Title className="family">BUSINESS</Card.Title>
                    <Card.Subtitle
                      className="mb-2 text-muted"
                      style={{ minHeight: "36px" }}
                    >
                      <span className="Doller">$999</span> USD/Month
                    </Card.Subtitle>
                    <hr />
                    <Card.Text className="text-muted">
                      Unlimited members
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Up to 1000 ideas
                    </Card.Text>
                    <Card.Text className="text-muted">10 teams</Card.Text>
                    <Card.Text className="text-muted">
                      Your own workspace for innovation
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Collect, analyze, and manage ideas
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Performance analytics on innovation and people
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Advanced audience segmentation
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Customization according to your own branding
                    </Card.Text>
                    <Card.Text className="Success">Single Sign-On</Card.Text>
                    <Card.Text className="Success">
                      A dedicated innovation success manager
                    </Card.Text>
                    <Button variant="outline-primary w-100 mt-3 mb-3">
                      Try it for free
                    </Button>{" "}
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card style={{ width: "15rem" }} className="Others">
                  <Card.Body>
                    <Card.Title className="family">ENTERPRISE</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      For pricing and custom features{" "}
                      <span className="text-primary">contact us</span>
                    </Card.Subtitle>
                    <hr />
                    <Card.Text className="text-muted">
                      Unlimited members
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Up to 100 ideas
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Unlimited teams
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Your own workspace for innovation
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Collect, analyze, and manage ideas
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Performance analytics on innovation and people
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Advanced audience segmentation
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Customization according to your own branding
                    </Card.Text>
                    <Card.Text className="text-muted">Single Sign-On</Card.Text>
                    <Card.Text className="text-muted">
                      A dedicated innovation success manager
                    </Card.Text>
                    <Button variant="outline-primary w-100 mt-3 mb-3">
                      Contact us
                    </Button>{" "}
                  </Card.Body>
                </Card>
              </div>
            </Row>
          </div>
        </Container>
        <div>
          <span className="Frequently mt-5">Frequently asked questions</span>
        </div>
        <div className="secfam">
          <Container>
            <Row className="mt-4">
              <Col>
                <div>
                  <Accordion>
                    <Card>
                      <Card.Header className="bg-white">
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="0"
                          className="acBtn"
                        >  <div className="d-flex justify-content-between">
                          <span className="btnbox">Can I cancel my subscription?</span>
                          <span><img src={dropdown}/></span>
                          </div>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body className="textbody">
                          Our goal is to make you happy. You can cancel at any
                          time and won't be billed for subsequent months.{" "}
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </Col>
              <Col>
                <div>
                  <Accordion>
                    <Card>
                      <Card.Header className="bg-white">
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="0"
                          className="acBtn"
                        >
                        <div className="d-flex justify-content-between">
                         <span className="btnbox"> What are my payment options?</span>
                         <span><img src={dropdown}/></span>
                         </div>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body className="textbody">
                          All payments are made via bank transfer. We will issue
                          you invoices for payment.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <div>
                  <Accordion>
                    <Card>
                      <Card.Header className="bg-white">
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="0"
                          className="acBtn"
                        >
                        <div className="d-flex justify-content-between">
                          <span className="btnbox">How is my data protected?</span>
                          <span><img src={dropdown}/></span>
                          </div>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body className="textbody">
                          We take security very seriously. Your contact info,
                          ideas and data are yours and yours alone. All data is
                          encrypted using transport layer security. All ideas
                          and content that you create and upload to the platform
                          is only available to authenticated users.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </Col>
              <Col>
                <div>
                  <Accordion>
                    <Card>
                      <Card.Header className="bg-white">
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          className="acBtn"
                          eventKey="0"
                        >
                        <div className="d-flex justify-content-between">
                          <span className="btnbox">What happens if collect more ideas than limited in
                          plan?</span>
                          <span><img src={dropdown}/></span>
                          </div>
                          
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body className="textbody">
                          Don’t worry, we’ll let you know before you hit a limit
                          so you can plan ahead. We facilitate Pay As You Grow -
                          add 100 ideas for $99/month anytime.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <span className="stay mt-4">
          Stay in touch if you have any more questions
        </span>
        <div className="d-flex justify-content-center mb-5">
          <Button variant="outline-primary mt-2">CONTACT US</Button>{" "}
        </div>
        <hr />
      </div>
    </>
  );
}

export default Body;
