import React from "react";
import { Container, Button, Card, Col, Row } from "react-bootstrap";
import first from "../../Assets/first.png";
import nikita from "../../Assets/nikita.png";
import workplace from "../../Assets/workplace.png";
import "./Headthird.css";
function Headthird() {
  return (
    <div>
      <Container>
        <div className="col-8">
          <h1 className="mt-4 steps mb-4">10 Steps from Idea to Profit</h1>
          <img src={first} className="w-100" />
          <div className="d-flex justify-content-between mt-4 forfont">
            <div>
              <Button variant="primary" className="rounded-pill p-2">
                innovations
              </Button>{" "}
              <Button
                variant="outline-primary"
                className="rounded-pill border border-light p-2 ml-1"
              >
                <span className="text-dark">innovations</span>
              </Button>{" "}
            </div>
            <div>
              <span>
                <span className="text-muted">by</span> Zijin
              </span>
            </div>
          </div>
          <div className="mt-4">
            <small className="mt-5">
              Some days a motivational quote can provide a quick pick-me-up for
              employees and even management. They can be a breath of fresh air
              when it comes to a drab afternoon. Today companies innovate to
              grow their core business or break into new markets, with the aim
              of differentiating themselves...{" "}
              <span className="text-primary">
                <u>Read more</u>
              </span>
            </small>
          </div>
          <div className="Management">
            <h2 className="mt-4">Innovation Management Essentials:</h2>
            <h2>Series 4 - Benefits of Innovation Management</h2>
            <img src={nikita} className="nikita mt-3 w-100" />
            <div className="d-flex justify-content-between mt-4 forfont">
              <div>
                <Button variant="primary" className="rounded-pill p-2">
                  work collective
                </Button>{" "}
                <Button
                  variant="outline-primary"
                  className="rounded-pill border border-light p-2 ml-1"
                >
                  <span className="text-dark">benefits</span>
                </Button>{" "}
              </div>
              <div>
                <span>
                  <span className="text-muted">by</span> Xuan
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <small className="mt-5">
              Some days a motivational quote can provide a quick pick-me-up for
              employees and even management. They can be a breath of fresh air
              when it comes to a drab afternoon. Today companies innovate to
              grow their core business or break into new markets, with the aim
              of differentiating themselves...{" "}
              <span className="text-primary">
                <u>Read more</u>
              </span>
            </small>
          </div>
          <h2 className="mt-4">Five Stages of Innovation</h2>
          <img src={workplace} className="workplace w-100 mt-4" />
          <div className="d-flex justify-content-between mt-4 forfont">
            <div>
              <Button variant="primary" className="rounded-pill p-2">
                ideas
              </Button>{" "}
              <Button
                variant="outline-primary"
                className="rounded-pill border border-light p-2 ml-1"
              >
                <span className="text-dark">innovations</span>
              </Button>{" "}
            </div>
            <div>
              <span>
                <span className="text-muted">by</span> Zijin
              </span>
            </div>
          </div>
          <div className="mt-4">
            <small className="mt-5">
              Some days a motivational quote can provide a quick pick-me-up for
              employees and even management. They can be a breath of fresh air
              when it comes to a drab afternoon. Today companies innovate to
              grow their core business or break into new markets, with the aim
              of differentiating themselves...{" "}
              <span className="text-primary">
                <u>Read more</u>
              </span>
            </small>
          </div>
          <div className="d-flex justify-content-end">
            <span className="previous text-primary">Previous articles</span>
          </div>
        </div>
        <div className="col-4">
          <div className="mt-5 mb-5">
            <Container>
              <div>
                <h2 className="Recent">Recent articles</h2>
              </div>
              <div className="mt-4">
                <div className="col">
                  <Card className="maincard h-100">
                    <Card.Body>
                      <Card.Title className="mt-3 mb-4">
                        <small>20 oct 2019 | by</small>
                        <span style={{ marginLeft: "8px" }}>Zijjin</span>
                      </Card.Title>
                      <Card.Subtitle className="mb-4 font-weight-bold">
                        10 Steps from Idea to Profit
                      </Card.Subtitle>
                      <div className="d-flex">
                        <Button variant="primary" className="rounded-pill p-2 ">
                          ideas
                        </Button>{" "}
                        <Button
                          variant="outline-primary"
                          className="rounded-pill  text-dark p-2 ml-1"
                        >
                          innovations
                        </Button>{" "}
                        <a href="#" className="ml-auto p-2">
                          Read
                        </a>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="maincard h-100">
                    <Card.Body>
                      <Card.Title className="mt-3 mb-4">
                        <small>20 oct 2019 | by</small>
                        <span style={{ marginLeft: "8px" }}>Xuan</span>
                      </Card.Title>
                      <Card.Subtitle className="mb-4 font-weight-bold">
                        Benefits of Innovation Management
                      </Card.Subtitle>
                      <div className="d-flex">
                        <Button variant="primary" className="rounded-pill p-2">
                          work collective
                        </Button>{" "}
                        <Button
                          variant="outline-primary"
                          className="rounded-pill border border-light p-2 ml-1 bg-light"
                        >
                          2+
                        </Button>{" "}
                        <a href="#" className="ml-auto p-2">
                          Read
                        </a>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="maincard h-100">
                    <Card.Body>
                      <Card.Title className="mt-3 mb-4">
                        <small>20 oct 2019 | by</small>
                        <span style={{ marginLeft: "8px" }}>Zijjin</span>
                      </Card.Title>
                      <Card.Subtitle className="mb-4 font-weight-bold">
                        Five Stages of Innovation
                      </Card.Subtitle>
                      <div className="d-flex">
                        <Button variant="primary" className="rounded-pill p-2">
                          ideas
                        </Button>{" "}
                        <Button
                          variant="outline-primary"
                          className="rounded-pill text-dark p-2 ml-1"
                        >
                          innovations
                        </Button>{" "}
                        <a href="#" className="ml-auto p-2">
                          Read
                        </a>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Headthird;
