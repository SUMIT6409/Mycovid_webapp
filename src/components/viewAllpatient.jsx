import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Sidebars from "./Sidebars";
import ViewPatient from "./viewPatient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./navbar";
function ViewAllpatient(props) {
  const history = useHistory();
  const [patient, setPatient] = useState(props.location.state);
  console.log("hi");
  //console.log(props.location.state);
  const handleDelete = (id) => {
    const newPatient = patient.filter((c) => c.PatientId !== id);
    setPatient(newPatient);
    axios
      .get(`http://localhost:4000/patients/deletePatient/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("hi");
        console.log(res);
        if (res.data.status === "success")
          toast.success("Pateint Deleted successfully");
        else toast.error("Invalid Details");
      });
    // this.setState({ counters: counters });
    console.log(id);
  };
  const [newid, setNewid] = useState("");
  const handleSearch = (c) => {
    const id = c.PatientId;
    const fn = c.FirstName;
    const ln = c.LastName;

    axios
      .get(`http://localhost:4000/patients/viewVitals/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data.length);
        const arr = res.data.data;
        const val = {
          arr,
          fn,
          ln,
        };
        const dal = {
          Fname: fn,
          Lname: ln,
          id,
        };
        if (res.data.data.length > 0) history.push("/viewVital", val);
        else history.push("/noVital", dal);
      });
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
        <h1>Patient Information</h1>
        <br />
        {patient.map((c) => (
          <div
            key={c.PatientId}
            className="container shadow-lg p-3 mb-5 bg-body rounded crapper"
            style={{ width: "550px", backgroundColor: "#3786bd" }}
          >
            <div align="right">
              <button
                align="right"
                className="btn btn-warning m-2"
                onClick={() => history.push("/editPatient", c)}
              >
                <i class="fa fa-edit "></i>
              </button>

              <button
                align="right"
                className="btn btn-danger"
                onClick={() => handleDelete(c.PatientId)}
              >
                <i class="fa fa-remove "></i>
              </button>
            </div>
            <h5 align="left" style={{ color: "white" }}>
              IPD Number: {c.PatientId}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              Patient Name: {c.FirstName + " " + c.LastName}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              Phone Number: {c.PhoneNumber}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              Relative Name: {c.RelativeName}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              Relative Phone Number: {c.RelativePhoneNumber}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              Relationship: {c.Relationship}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              Date and Admit Time: {c.ProfileCreationTime}
            </h5>
            <button className="btn btn-warning" onClick={() => handleSearch(c)}>
              Show Vitals
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

export default ViewAllpatient;
