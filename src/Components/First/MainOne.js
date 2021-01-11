import React from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";

function MainOne() {
  return (
    <div>
      <div className="mt-5 mb-5">
        <Container>
          <div>
            <h2 className="Recent">Recent articles</h2>
          </div>
          <div className="mt-4">
            <Row>
              <Col>
                <Card className="maincard h-100">
                  <Card.Body>
                    <Card.Title className="mt-3 mb-4">
                      <small>20 oct 2019 | by</small>
                      <span style={{ marginLeft: "8px" }}>Zijjin</span>
                    </Card.Title>
                    <Card.Subtitle className="mb-4 font-weight-bold">
                      10 Steps from Idea to Profit
                    </Card.Subtitle>
                    <div className="d-flex mt-5">
                    <Button variant="primary" className="rounded-pill p-2 ">ideas</Button>{' '}
                    <Button variant="outline-primary" className="rounded-pill  text-dark p-2 ml-1">innovations</Button>{' '}
                    <a href="#" className="ml-auto p-2">Read</a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="maincard h-100">
                  <Card.Body>
                    <Card.Title className="mt-3 mb-4">
                      <small>20 oct 2019 | by</small>
                      <span style={{ marginLeft: "8px" }}>Xuan</span>
                    </Card.Title>
                    <Card.Subtitle className="mb-4 font-weight-bold">
                      Benefits of Innovation Management
                    </Card.Subtitle>
                    <div className="d-flex mt-5">
                    <Button variant="primary" className="rounded-pill p-2">work collective</Button>{' '}
                    <Button variant="outline-primary" className="rounded-pill border border-light p-2 ml-1 bg-light">2+</Button>{' '}
                    <a href="#" className="ml-auto p-2">Read</a>
                    </div>
            </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="maincard h-100">
                  <Card.Body>
                    <Card.Title className="mt-3 mb-4">
                      <small>20 oct 2019 | by</small>
                      <span style={{ marginLeft: "8px" }}>Zijjin</span>
                    </Card.Title>
                    <Card.Subtitle className="mb-4 font-weight-bold">
                      Five Stages of Innovation
                    </Card.Subtitle>
                    <div className="d-flex mt-5">
                    <Button variant="primary" className="rounded-pill p-2">ideas</Button>{' '}
                    <Button variant="outline-primary"className="rounded-pill text-dark p-2 ml-1">innovations</Button>{' '}
                    <a href="#" className="ml-auto p-2">Read</a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default MainOne;
