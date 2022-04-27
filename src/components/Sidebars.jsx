import React from "react";
import Dashboard2 from "./Dashboard2";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Sidebars(props) {
  const history = useHistory();
  const handleWard = () => {
    axios
      .get("http://localhost:4000/patients/ward", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data);
        console.log("hi");
        history.push("/viewWard", res.data.data);
      });
  };
  const handleAddstaff = () => {
    axios
      .get("http://localhost:4000/admin/viewStaff", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === "success") history.push("/addStaff");
        else toast.error("You are not an admin");
      });
  };
  const handleAllpatient = () => {
    axios
      .get("http://localhost:4000/patients/view", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        console.log("hi");
        history.push("/viewAllpatient", res.data.data);
      });
  };
  const handleAllstaff = () => {
    console.log("hi");
    axios
      .get("http://localhost:4000/admin/viewStaff", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === "success")
          history.push("/viewAllStaff", res.data.data);
        else toast.error("You are not an admin");
      });
  };
  const handleVital = () => {
    history.push("/searchVital");
  };
  var first = localStorage.getItem("firstName");
  var last = localStorage.getItem("lastName");
  return (
    <div>
      <ToastContainer />
      <div className="sidebar-container">
        <br />
        <div className="sidebar-logo">Dr. {first + " " + last}</div>
        <ul className="sidebar-navigation">
          <div onClick={() => history.push("/searchPatient")}>
            {" "}
            <li>
              <a href="#">
                <i className="fa fa-stethoscope" aria-hidden="true"></i>{" "}
                <h5>Covid Rounds</h5>
              </a>
            </li>
          </div>
          <li>
            <a href="#" onClick={handleWard}>
              <i className="fa fa-stethoscope" aria-hidden="true"></i>{" "}
              <h5>Covid Wards</h5>
            </a>
          </li>
          <li>
            <div onClick={handleAllpatient}>
              {" "}
              <a href="#">
                <i className="fa fa-tachometer" aria-hidden="true"></i>
                <h5> All Patients</h5>
              </a>
            </div>
          </li>

          <div onClick={() => history.push("/addPatient")}>
            <li>
              <a href="#">
                <i className="fa fa-stethoscope" aria-hidden="true"></i>{" "}
                <h5>Patient Registration</h5>
              </a>
            </li>
          </div>
          <li>
            <div onClick={handleAllstaff}>
              <a href="#">
                <i className="fa fa-user-md" aria-hidden="true"></i>{" "}
                <h5>All Staff</h5>
              </a>
            </div>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-info-circle" aria-hidden="true"></i>{" "}
              <h5>F.A.Q.</h5>
            </a>
          </li>

          <div onClick={handleAddstaff}>
            <li>
              <a href="#">
                <i className="fa fa-info-circle" aria-hidden="true"></i>
                <h5> Staff Registration</h5>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebars;
