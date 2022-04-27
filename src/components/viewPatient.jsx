import React, { useState } from "react";
import Navbar from "./navbar";

function ViewPatient(props) {
  const [patient, setPatient] = useState({
    PatientId: 1,
    PhoneNumber: 1,
    RelativeName: 1,
    RelativePhoneNumber: 1,
    Relationship: 1,
    ProfileCreationTime: 1,
  });
  console.log("hi");
  console.log(props.location);
  //const [patient, setPatient] = useState({});
  // const handleDelete = () => {
  //   axios.delete("https://locallink").then((res)=>{
  //     if(Object.keys(res)) history.pushState("/searchPatient")
  //   })
  // }
  // const handleEdit = () => {
  //   axios.get("https://localserver").then((res)=>{
  //     if(Object.keys(res)) history.pushState("/editPatient")
  //   })
  // }

  return (
    <div>
      <Navbar />
      <h1>Patient Information</h1>
      <br />
      <div
        className="container shadow-lg p-3 mb-5 bg-body rounded "
        style={{ width: "550px", backgroundColor: "#3786bd" }}
      >
        <h5 align="left" style={{ color: "white" }}>
          Patient Name: {patient.PatientId}
        </h5>
        <h5 align="left" style={{ color: "white" }}>
          Phone Number: {patient.PhoneNumber}
        </h5>
        <h5 align="left" style={{ color: "white" }}>
          Relative Name: {patient.RelativeName}
        </h5>
        <h5 align="left" style={{ color: "white" }}>
          Relative Phone Number: {patient.RelativePhoneNumber}
        </h5>
        <h5 align="left" style={{ color: "white" }}>
          Relationship: {patient.Relationship}
        </h5>
        <h5 align="left" style={{ color: "white" }}>
          Date and Admit Time: {patient.ProfileCreationTime}
        </h5>
      </div>
      <button className="btn btn-primary m-2">
        Edit Patient <i class="fa fa-edit "></i>
      </button>

      <button className="btn btn-danger">
        Delete Patient <i class="fa fa-remove "></i>
      </button>
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
  );
}

export default ViewPatient;
