import React, { useState } from "react";
import Dashboard from "./Dashboard2";
import Sidebars from "./Sidebars";
import Navbar from "./navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Main(props) {
  const [s, setS] = useState(props.location.state);
  if (s === "patientadded") {
    toast.success("Patient Added Successfully");
    setS("");
  }
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <Sidebars />
      <Dashboard />
    </div>
  );
}

export default Main;
