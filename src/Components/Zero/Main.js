import React from "react";
import "./Main.css";
import Frm from "./Frm";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

function Main() {
  return (
    <>
      <div className="bground">
        <div className="top text-center">
          <h3>Resources</h3>
          <small className="learn mb-4">
            Learn more on how to successfully manage innovation at your
            organization.
          </small>
        </div>

        <Container>
          <div className="mt-4">
            <Row>
              <Col>
                <Card className="h-400">
                  <Card.Body>
                    <Card.Title className="mt-3 mb-4">
                      <small>20 oct 2019 | by</small>
                      <span style={{ marginLeft: "8px" }}>Zijjin</span>
                    </Card.Title>
                    <Card.Subtitle className="mb-4 font-weight-bold">
                      10 Steps from Idea to Profit
                    </Card.Subtitle>
                    <Card.Text className="text-muted">
                      Some days a motivational quote can provide a quick
                      pick-me-up for employees and even management...
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="h-400">
                  <Card.Body>
                    <Card.Title className="mt-3 mb-4">
                      <small>20 oct 2019 | by</small>
                      <span style={{ marginLeft: "8px" }}>Xuan</span>
                    </Card.Title>
                    <Card.Subtitle className="mb-4 font-weight-bold">
                      Benefits of Innovation Management
                    </Card.Subtitle>
                    <Card.Text className="text-muted">
                      Planting the seed of innovation involves risk. It can
                      consume a great deal of time, energy, resources...
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="h-400">
                  <Card.Body>
                    <Card.Title className="mt-3 mb-4">
                      <small>20 oct 2019 | by</small>
                      <span style={{ marginLeft: "8px" }}>Zijjin</span>
                    </Card.Title>
                    <Card.Subtitle className="mb-4 font-weight-bold">
                      Five Stages of Innovation
                    </Card.Subtitle>
                    <Card.Text className="text-muted">
                      Today companies innovate to grow their core business or
                      break into new markets, with the aim...
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          <Row>
            <Col className="run">
              <Button variant="outline-primary" className="mt-3 mx-1">
                SEE ALL ARTICLES
              </Button>{" "}
            </Col>
          </Row>
          <div className="manage run">
            <h3 className="keep">Keep in touch</h3>
            <small className="connect">
              Connect with an innovation management specialist.
            </small>
          </div>
        </Container>
        <div>
          <Frm />
          <div className="dummy"></div>
        </div>
      </div>
    </>
  );
}

export default Main;
