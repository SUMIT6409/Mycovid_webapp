import React from "react";
import Sidebars from "./Sidebars";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./navbar";
import { useHistory } from "react-router-dom";
function EditVital(props) {
  const [patient, setPatient] = useState(props.location.state);
  // console.log(patient);
  const [prate, setPrate] = useState(patient.arr.PulseRate);
  const [resrate, setResrate] = useState(patient.arr.RespiratoryRate);
  const [sys, setSys] = useState(patient.arr.BpSystolic);
  const [dia, setDia] = useState(patient.arr.BpDiastolic);
  const [sp, setSp] = useState(patient.arr.SpO2);
  const [oxy, setOxy] = useState(patient.arr.O2);
  const [temp, setTemp] = useState(patient.arr.Temperature);
  const history = useHistory();
  const handlePrate = (e) => {
    setPrate(e.currentTarget.value);
    console.log(patient.arr.PatientId);
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
  // console.log("hi");
  // console.log(props.location.state);
  // console.log("hi");
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
        `http://localhost:4000/patients/updateVitals/${patient.arr.PatientId}`,
        data,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.status === "success") {
          toast.success("Vitals edited successfully");
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
          <h3>Patient Name: {patient.FN + " " + patient.LN}</h3>
          <h3>IPD Number: {patient.arr.PatientId}</h3>
          <p className="text"></p>
          <div className="form-field"> </div>
        </div>
        <form className="form-right">
          <h2 className="text-uppercase">Vitals Update </h2>
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
                value={prate}
                placeholder={patient.arr.PulseRate}
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
                value={resrate}
                onChange={handleResrate}
                placeholder={patient.arr.RespiratoryRate}
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
                value={sys}
                onChange={handleSys}
                placeholder={patient.arr.BpSystolic}
              />{" "}
            </div>
            <div className="col-sm-6 mb-3">
              {" "}
              <label>BP Diastolic</label>{" "}
              <input
                type="text"
                className="input-field"
                onChange={handleDia}
                value={dia}
                placeholder={patient.arr.BpDiastolic}
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
                value={sp}
                placeholder={patient.arr.SpO2}
              />{" "}
            </div>
            <div className="col-sm-6 mb-3">
              {" "}
              <label>O2 (L)</label>{" "}
              <input
                type="text"
                className="input-field"
                onChange={handleOxy}
                value={oxy}
                placeholder={patient.arr.O2}
              />{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3">
              {" "}
              <label>Temeprature (Fahrenheit)</label>{" "}
              <input
                type="text"
                className="input-field"
                onChange={handleTemp}
                placeholder={patient.arr.Temperature}
                value={temp}
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

export default EditVital;
