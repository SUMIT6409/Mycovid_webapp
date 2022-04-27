import React, { useState } from "react";
import Sidebars from "./Sidebars";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./navbar";
import { useHistory } from "react-router-dom";
function PatientRegister(props) {
  const [patient, setPatient] = useState({});
  const history = useHistory();
  const [pname, setPname] = useState("");
  const [lname, setLname] = useState("");
  const [rname, setRname] = useState("");
  const [pphone, setPphone] = useState("");
  const [rphone, setRphone] = useState("");
  const [relis, setRelis] = useState("");
  const [mname, setMname] = useState("");
  const [IPD, setIPD] = useState("");
  const [ward, setWard] = useState(5);
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
  const handleIPD = (e) => {
    setIPD(e.currentTarget.value);
    console.log(IPD);
  };
  const handleWard = (e) => {
    setWard(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    console.log("hi");
    e.preventDefault();
    const data = {
      IPDNumber: IPD,
      FirstName: pname,
      MiddleName: mname,
      LastName: lname,
      PhoneNumber: pphone,
      RelativeName: rname,
      RelativePhoneNumber: rphone,
      Relationship: relis,
      AdmissionDateTime: Date().toLocaleString(),
      WardId: ward,
    };
    axios
      .post("http://localhost:4000/patients/newPatient", data, {
        withCredentials: true,
      })
      .then((res) => {
        const data = {
          Fname: pname,
          Lname: lname,
          id: IPD,
        };
        console.log(res);
        if (res.data.status === "success") {
          toast.success("Pateint added successfully");
          const hoo = "patientadded";
          history.push("/newVital", data);
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
          <br />
          <br />
          <h3 className="text-uppercase">Patient Registration </h3>
          <br />

          <p className="text"></p>
          <div className="form-field"> </div>
        </div>
        <form className="form-right">
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
                onChange={handlePname}
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
                onChange={handleMname}
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
                onChange={handleLname}
              />{" "}
            </div>
            <div className="col-sm-6 mb-3">
              {" "}
              <label>Patient's Number*</label>{" "}
              <input
                type="text"
                className="input-field"
                onChange={handlePphone}
              />{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3">
              {" "}
              <label>IPD Number*</label>{" "}
              <input
                autoFocus
                type="text"
                name="ipd"
                id="ipd"
                className="input-field"
                onChange={handleIPD}
              />{" "}
            </div>
            <div className="col-sm-6 mb-3">
              {" "}
              <label>Ward ID*</label>{" "}
              <input
                autoFocus
                type="text"
                name="ipd"
                id="ipd"
                className="input-field"
                onChange={handleWard}
              />{" "}
            </div>
          </div>
          <br />
          <h5>Relative Details</h5>
          <br />
          <div className="row">
            <div className="col-sm-6 mb-3">
              {" "}
              <label>Relative Name*</label>{" "}
              <input
                type="text"
                className="input-field"
                onChange={handleRname}
              />{" "}
            </div>
            <div className="col-sm-6 mb-3">
              {" "}
              <label>Relative's Number*</label>{" "}
              <input
                type="text"
                className="input-field"
                onChange={handleRphone}
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
              />{" "}
            </div>
          </div>
          <div className="mb-3">
            {" "}
            <label className="option">
              Patient agrees to the <a href="#">Terms and Conditions</a>{" "}
              <input type="checkbox" /> <span className="checkmark"></span>{" "}
            </label>{" "}
          </div>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default PatientRegister;
