import React from "react";
import "./Header.css";
import { Button } from "react-bootstrap";
import Group from "../Assets/Group.svg";
import Group2 from "../Assets/Group2.svg";

function Header() {
  return (
    <div>
      <div className="header-one">
        <div className="firstrow">Moving Innovation Forward</div>
        <div className="row">
          <div className="col mt-4">
            <img className="Group" src={Group} />
          </div>
          <div className="col mt-4">
             <p className="second">Transform ideas into ground-breaking results</p>
             <Button className="secondbtn pt-2 mt-4" variant="primary">
             EXPERIENCE IDEX
            </Button>{" "}
          </div>
          <div className="col">
          <img className="Group2" src={Group2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
