import React from "react";
import Sidebars from "./Sidebars";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./navbar";
import { useHistory } from "react-router-dom";
function EditPatient(props) {
  const [patient, setPatient] = useState(props.location.state);
  const [pname, setPname] = useState(patient.FirstName);
  const [lname, setLname] = useState(patient.LastName);
  const [rname, setRname] = useState(patient.RelativeName);
  const [pphone, setPphone] = useState(patient.PhoneNumber);
  const [rphone, setRphone] = useState(patient.RelativePhoneNumber);
  const [relis, setRelis] = useState(patient.Relationship);
  const [mname, setMname] = useState(patient.MiddleName);
  const [ward, setWard] = useState(5);
  const history = useHistory();
  const handlePname = (e) => {
    setPname(e.currentTarget.value);
  };
  const handleLname = (e) => {
    setLname(e.currentTarget.value);
  };
  const handleMname = (e) => {
    setMname(e.currentTarget.value);
  };
  const handlePphone = (e) => {
    setPphone(e.currentTarget.value);
  };
  const handleRphone = (e) => {
    setRphone(e.currentTarget.value);
  };
  const handleRname = (e) => {
    setRname(e.currentTarget.value);
  };
  const handleRelis = (e) => {
    setRelis(e.currentTarget.value);
  };
  const handleWard = (e) => {
    setWard(e.currentTarget.value);
  };
  console.log("hi");
  console.log(props.location.state);
  console.log("hi");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      FirstName: pname,
      MiddleName: mname,
      LastName: lname,
      PhoneNumber: pphone,
      RelativeName: rname,
      RelativePhoneNumber: rphone,
      Relationship: relis,
      WardId: ward,
      //AdmissionDateTime: Date().toLocaleString(),
    };
    axios
      .post(
        `http://localhost:4000/patients/editPatient/${patient.PatientId}`,
        data,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.status === "success") {
          toast.success("Staff edited successfully");
          history.push("/dashboard");
        } else toast.error("Invalid Details");
      });
  };
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <ToastContainer />
      <Sidebars />
      <div className="wrapper ">
        <div className="form-left">
          <h2 className="text-uppercase"></h2>
          <img
            src="https://cdn2.iconfinder.com/data/icons/medical-and-health-color-1/64/patient-information-online-registration-hospital-document-512.png"
            style={{ height: "200px", width: "200px" }}
            alt=""
          />
          <h4>Patient Name: {patient.FirstName + " " + patient.LastName}</h4>
          <h4>IPD Number : {patient.PatientId}</h4>
          <p className="text"></p>
          <div className="form-field"> </div>
        </div>
        <form className="form-right">
          <h2 className="text-uppercase">Patient Update </h2>

          <h5>Patient Details</h5>
          <div className="row">
            <div className="col-sm-6 mb-3">
              {" "}
              <label>First Name*</label>{" "}
              <input
                autoFocus
                type="text"
                name="first_name"
                id="first_name"
                className="input-field"
                value={pname}
                onChange={handlePname}
                placeholder={patient.FirstName}
              />{" "}
            </div>
            <div className="col-sm-6 mb-3">
              {" "}
              <label>Middle Name</label>{" "}
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="input-field"
                value={mname}
                onChange={handleMname}
                placeholder={patient.MiddleName}
              />{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3">
              {" "}
              <label>Last Name*</label>{" "}
              <input
                type="text"
                className="input-field"
                value={lname}
                onChange={handleLname}
                placeholder={patient.LastName}
              />{" "}
            </div>
            <div className="col-sm-6 mb-3">
              {" "}
              <label>Patient's Number*</label>{" "}
              <input
                type="text"
                className="input-field"
                onChange={handlePphone}
                value={pphone}
                placeholder={patient.PhoneNumber}
              />{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3">
              {" "}
              <label>Ward ID</label>{" "}
              <input
                autoFocus
                type="number"
                name="first_name"
                id="first_name"
                className="input-field"
                value={ward}
                onChange={handleWard}
                //placeholder={patient.Firs}
              />{" "}
            </div>
          </div>
          <br />
          <br />
          <h5>Relative Details</h5>
          <div className="row">
            <div className="col-sm-6 mb-3">
              {" "}
              <label>Relative Name*</label>{" "}
              <input
                type="text"
                className="input-field"
                onChange={handleRname}
                value={rname}
                placeholder={patient.RelativeName}
              />{" "}
            </div>
            <div className="col-sm-6 mb-3">
              {" "}
              <label>Relative's Number*</label>{" "}
              <input
                type="text"
                className="input-field"
                onChange={handleRphone}
                value={rphone}
                placeholder={patient.RelativePhoneNumber}
              />{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3">
              {" "}
              <label>Relationship*</label>{" "}
              <input
                type="text"
                className="input-field"
                onChange={handleRelis}
                value={relis}
                placeholder={patient.Relationship}
              />{" "}
            </div>
          </div>
          <div className="mb-3">
            {" "}
            <label className="option">
              Patient agrees to the <a href="#">Terms and Conditions</a>{" "}
              <input type="checkbox" checked />{" "}
              <span className="checkmark"></span>{" "}
            </label>{" "}
          </div>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPatient;
