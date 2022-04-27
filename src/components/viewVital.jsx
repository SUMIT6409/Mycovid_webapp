import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Sidebars from "./Sidebars";
import ViewPatient from "./viewPatient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./navbar";
function ViewVital(props) {
  const history = useHistory();
  const [patient, setPatient] = useState(props.location.state);

  console.log("hi");
  //console.log(props.location.state);
  const handleEdit = (c) => {
    const data = {
      arr: c,
      FN: patient.fn,
      LN: patient.ln,
    };
    history.push("/editVital", data);
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <ToastContainer />
      <Sidebars />
      <div>
        <br />
        <h1>Vitals Information</h1>
        <br />
        {patient.arr.map((c) => (
          <div
            key={c.StaffName}
            className="container shadow-lg p-3 mb-5 bg-body rounded crapper"
            style={{ width: "550px", backgroundColor: "#3786bd" }}
          >
            <h5 align="left" style={{ color: "white" }}>
              IPD Number: {c.PatientId}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              Patient Name : {patient.fn + " " + patient.ln}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              Staff Name: {c.StaffName}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              Status Date Time: {c.StatusDatetime}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              Pulse Rate (BPM): {c.PulseRate}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              Respiratory Rate: {c.RespiratoryRate}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              BP Systolic: {c.BpSystolic}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              BP Diastolic: {c.BpDiastolic}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              SpO2 (%): {c.SpO2}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              O2 (L): {c.O2}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              Temperature: {c.Temperature}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              Remarks: {c.Remarks}
            </h5>
            <button
              className="btn btn-warning m-2"
              onClick={() => handleEdit(c)}
            >
              Update Vitals <i class="fa fa-edit "></i>
            </button>
          </div>
        ))}

        {/* <table>
        <tr>
          <th>PatientId</th>
          <th>PhoneNumber</th>
          <th>Relationship</th>
          <th>RelativeName</th>
          <th>RelativePhoneNumber</th>
          <th>ProfileCreationTime</th>
        </tr>
      </table> */}
      </div>
    </div>
  );
}

export default ViewVital;
