import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./navbar";
import Sidebars from "./Sidebars";
import { useHistory } from "react-router-dom";

function StaffRegister(props) {
  const history = useHistory();
  const [sname, setSname] = useState("");
  const [lname, setLname] = useState("");
  const [sphone, setSphone] = useState("");
  const [email, setEmail] = useState("");
  const [des, setDes] = useState("");
  const [admin, setAdmin] = useState("");
  // setDes(document.querySelector("#Staff").value);
  // const handlePrint = (e) => {
  //   e.preventDefault();
  //   console.log(document.querySelector("#Staff").value);
  // };
  const handleSname = (e) => {
    setSname(e.currentTarget.value);
  };
  const handleSphone = (e) => {
    setSphone(e.currentTarget.value);
  };
  const handleLname = (e) => {
    setLname(e.currentTarget.value);
  };
  const handleEmail = (e) => {
    setEmail(e.currentTarget.value);
  };
  const handleDesignation = (e) => {
    console.log(e.currentTarget.value);
    setDes(e.currentTarget.value);
  };
  const handleAdmin = (e) => {
    setAdmin(e.currentTarget.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      FirstName: sname,
      MiddleName: "",
      LastName: lname,
      PhoneNumber: sphone,
      Email: email,
      Designation: des,
      Admin: admin,
    };
    axios
      .post("http://localhost:4000/admin/newStaff", data, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === "success") {
          toast.success("Staff added successfully");
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
            src="https://www.uottawa.ca/health/sites/www.uottawa.ca.health/files/icon_-_register_with_a_doctor.png"
            style={{ height: "200px", width: "200px" }}
            alt=""
          />
          <br />
          <br />
          <h2 className="text-uppercase">Staff Registration </h2>
          <p className="text"></p>
          <form></form>
          <div className="form-field"> </div>
        </div>
        <form className="form-right">
          <h4>Staff Details</h4>
          <div className="row">
            <div className="col-sm-6 mb-3">
              {" "}
              <label>First Name*</label>{" "}
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="input-field"
                onChange={handleSname}
              />{" "}
            </div>
            <div className="col-sm-6 mb-3">
              {" "}
              <label>Last Name*</label>{" "}
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="input-field"
                onChange={handleLname}
              />{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3">
              {" "}
              <label>Phone Number*</label>{" "}
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="input-field"
                onChange={handleSphone}
              />{" "}
            </div>
            <div className="col-sm-6 mb-3">
              {" "}
              <label>Email</label>{" "}
              <input
                type="email"
                name="last_name"
                id="last_name"
                className="input-field"
                onChange={handleEmail}
              />{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3">
              {" "}
              <label>Designation*</label>{" "}
              <select
                name="Staff"
                id="Staff"
                className="m-2 "
                style={{
                  width: "170px",
                  height: "40px",
                }}
                onChange={handleDesignation}
              >
                <option value="Intern">Intern</option>
                <option value="Resident 1">Resident 1</option>

                <option value="Resident 2">Resident 2</option>
                <option value="Resident 3">Resident 3</option>
              </select>
            </div>
            <div className="col-sm-6 mb-3">
              <label>Admin*</label>{" "}
              <select
                name="Staff"
                id="Staff"
                className="m-2 "
                style={{
                  width: "170px",
                  height: "40px",
                }}
                onChange={handleAdmin}
              >
                <option value="0">NO</option>
                <option value="1">YES</option>
              </select>
            </div>
          </div>
          <div className="mb-3"> </div>
          <button className="btn btn-primary" onClick={handleClick}>
            Register
          </button>
          {/* <button className="btn btn-primary" onClick={handlePrint}>
            Register
          </button> */}
        </form>
      </div>
    </div>
  );
}

export default StaffRegister;
