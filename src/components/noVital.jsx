import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./navbar";
import Sidebars from "./Sidebars";

function NoVital(props) {
  const id = props.location.state;
  console.log(id);
  const history = useHistory();
  const handleClick = () => {
    history.push("/newVital", id);
  };
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <Sidebars />
      <div>
        <br />
        <br />
        <br />
        <br />
        <div
          //key={c.StaffName}
          className="container shadow-lg p-3 mb-5 bg-body rounded crapper"
          style={{ width: "550px", backgroundColor: "#3786bd" }}
        >
          <h5 align="left" style={{ color: "white" }}>
            No Vitals found for this patient
          </h5>
          <h5 align="left" style={{ color: "white" }}>
            Click below to add Vitals
          </h5>
          <button className="btn btn-danger" onClick={handleClick}>
            Add vitals
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoVital;
