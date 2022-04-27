import React from "react";
import Sidebars from "./Sidebars";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./navbar";
import { useHistory } from "react-router-dom";
function NewVital(props) {
  // const [patient, setPatient] = useState(props.location.state);
  const [prate, setPrate] = useState("");
  const [resrate, setResrate] = useState("");
  const [sys, setSys] = useState("");
  const [dia, setDia] = useState("");
  const [sp, setSp] = useState("");
  const [oxy, setOxy] = useState("");
  const [temp, setTemp] = useState("");
  const history = useHistory();
  //const id = props.location.state.id;
  const handlePrate = (e) => {
    setPrate(e.currentTarget.value);
  };
  const handleRandom = (e) => {
    e.preventDefault();
    console.log(props.location.state);
  };
  const handleResrate = (e) => {
    setResrate(e.currentTarget.value);
  };
  const handleSys = (e) => {
    setSys(e.currentTarget.value);
  };
  const handleDia = (e) => {
    setDia(e.currentTarget.value);
  };
  const handleSp = (e) => {
    setSp(e.currentTarget.value);
  };
  const handleOxy = (e) => {
    setOxy(e.currentTarget.value);
  };
  const handleTemp = (e) => {
    setTemp(e.currentTarget.value);
  };
  console.log("hi");
  console.log(props.location.state);
  console.log("hi");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      PulseRate: prate,
      RespiratoryRate: resrate,
      BpSystolic: sys,
      BpDiastolic: dia,
      SpO2: sp,
      O2: oxy,
      Temperature: temp,
    };
    axios
      .post(
        `http://localhost:4000/patients/updateVitals/${props.location.state.id}}`,
        data,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.status === "success") {
          toast.success("Vitals Updated successfully");
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
          <h3>
            Patient Name :{" "}
            {props.location.state.Fname + " " + props.location.state.Lname}
          </h3>
          <h3>IPD Number : {props.location.state.id}</h3>
          <p className="text"></p>
          <div className="form-field"> </div>
        </div>
        <form className="form-right">
          <h2 className="text-uppercase">New Vitals </h2>
          <div className="row">
            <div className="col-sm-6 mb-3">
              {" "}
              <label>Pulse Rate (BPM)</label>{" "}
              <input
                autoFocus
                type="text"
                name="first_name"
                id="first_name"
                className="input-field"
                onChange={handlePrate}
                // placeholder={patient.PulseRate}
              />{" "}
            </div>
            <div className="col-sm-6 mb-3">
              {" "}
              <label>Respiratory Rate</label>{" "}
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="input-field"
                onChange={handleResrate}
                //placeholder={patient.RespiratoryRate}
              />{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3">
              {" "}
              <label>BP Systolic</label>{" "}
              <input
                type="text"
                className="input-field"
                onChange={handleSys}
                // placeholder={patient.BpSystolic}
              />{" "}
            </div>
            <div className="col-sm-6 mb-3">
              {" "}
              <label>BP Diastolic</label>{" "}
              <input
                type="text"
                className="input-field"
                onChange={handleDia}
                // placeholder={patient.BpDiastolic}
              />{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3">
              {" "}
              <label>SpO2 (%)</label>{" "}
              <input
                type="text"
                className="input-field"
                onChange={handleSp}
                // placeholder={patient.SpO2}
              />{" "}
            </div>
            <div className="col-sm-6 mb-3">
              {" "}
              <label>O2 (L)</label>{" "}
              <input
                type="text"
                className="input-field"
                onChange={handleOxy}
                placeholder="NIL"
              />{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3">
              {" "}
              <label>Temperature (Fahrenheit)</label>{" "}
              <input
                type="text"
                className="input-field"
                onChange={handleTemp}
                // placeholder={patient.Temperature}
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewVital;
