import React from "react";
import { Row, Card } from "react-bootstrap";
import "./Work.css";
function Works() {
  return (
    <div>
      <h1 className="text-center works">How it Works</h1>
      <Row>
        <div className="col-4">
          <p
            className="lefttake"
            style={{ marginLeft: "100px", fontSize: "24px", color: "#2D8DFC" }}
          >
            Ideate & Collect
          </p>
          <div style={{marginLeft: "100px"}}>
          <small >
            Harness the collective innovative power of your organization by
            allowing anyone to submit an idea, openly or anonymously. Gather all
            the ideas in one platform and systemically categorize them.
          </small>
          </div>
        </div>
        <div className="col-8">
          <Card >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
             
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </div>
  );
}

export default Works;
