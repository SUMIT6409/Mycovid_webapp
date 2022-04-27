import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./navbar";
import Sidebars from "./Sidebars";
import { useHistory } from "react-router-dom";

function EditStaff(props) {
  const [staff, setStaff] = useState(props.location.state);
  const [sname, setSname] = useState(staff.FirstName);
  const [lname, setLname] = useState(staff.LastName);
  const [sphone, setSphone] = useState(staff.PhoneNumber);
  const [email, setEmail] = useState(staff.Email);
  const [des, setDes] = useState(staff.Designation);
  const [admin, setAdmin] = useState(staff.Admin);

  const history = useHistory();
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
      .post(`http://localhost:4000/admin/editStaff/${staff.StaffId}`, data, {
        withCredentials: true,
      })
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
            src="https://www.uottawa.ca/health/sites/www.uottawa.ca.health/files/icon_-_register_with_a_doctor.png"
            style={{ height: "200px", width: "200px" }}
            alt=""
          />
          <h3 className="text-uppercase">Staff Update </h3>
          <h4>Staff Name : {staff.FirstName + " " + staff.LastName}</h4>
          <h4></h4>
          <p className="text"></p>
          <form></form>
          <div className="form-field"> </div>
        </div>
        <form className="form-right">
          <h5 className="text-uppercase">Staff Details </h5>
          <div className="row">
            <div className="col-sm-6 mb-3">
              {" "}
              <label>First Name*</label>{" "}
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="input-field"
                value={sname}
                onChange={handleSname}
                placeholder={staff.FirstName}
              />{" "}
            </div>
            <div className="col-sm-6 mb-3">
              {" "}
              <label>Last Name*</label>{" "}
              <input
                type="text"
                name="last_name"
                id="last_name"
                value={lname}
                className="input-field"
                onChange={handleLname}
                placeholder={staff.LastName}
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
                value={sphone}
                onChange={handleSphone}
                placeholder={staff.PhoneNumber}
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
                value={email}
                onChange={handleEmail}
                placeholder={staff.Email}
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditStaff;
