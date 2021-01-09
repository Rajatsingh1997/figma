import React from "react";
import "./BodyBox.css";
import {Container} from "react-bootstrap";
import first from "../../Assets/first.svg";
import secondimg from "../../Assets/second.svg";
import third from "../../Assets/third.svg";
function BodyBox() {
  return (
    <>
    <Container>
    <div className="main">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 box1">
          <div className="card forshadow"> 
            <div className="card-body">
              <img className="first mx-auto d-block" src={first} />
              <h5 className="card-titlefirst">Employee Engagement</h5>
              <small className="card-text">
                Engage your entire workforce in ideation. Break down department,
                language, and geographic barriers. Empower company-wide
                innovation and foster a culture of ownership.
              </small>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 ">
          <div className="card forshadow mb-5">
            <div className="card-body">
              <img className="secondimg mx-auto d-block" src={secondimg} />
              <h5 className="card-title">Continuouse Improvement</h5>
              <small className="card-text">
                Stakeholders from all sides of the business collaborate to come
                up with, refine, and prioritize the best ideas in one platform.
                Improve products, processes, and customer satisfaction.
              </small>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card forshadow">
            <div className="card-body">
              <img className="third mx-auto d-block" src={third} />
              <h5 className="card-title">High Return of Investment</h5>
              <small className="card-text">
                Crowdsource ideas for your organization. Create the next big
                thing with people who know your business the best. Track the
                performance of ideas and generate billions of dollars in return.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
    </>
  );
}

export default BodyBox;
