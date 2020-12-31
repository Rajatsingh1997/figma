import React from "react";
import "./Main.css";
import Frm from "./Frm";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

function Main() {
  return (
    <>
      <div className="bground">
        <div className="top">
          <h3>Resources</h3>
          <small className="learn">
            Learn more on how to successfully manage innovation at your
            organization.
          </small>
        </div>

        <Container>
          <div className="run">
            <Row>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button variant="outline-primary" className="mt-3 mx-1">
                  SEE ALL ARTICALS
                </Button>{" "}
              </Col>
            </Row>
            <div>
              <h3 className="keep">Keep in touch</h3>
            </div>
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
