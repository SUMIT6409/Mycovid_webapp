import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Sidebars from "./Sidebars";
import ViewPatient from "./viewPatient";
import axios from "axios";
import Navbar from "./navbar";
function ViewAllstaff(props) {
  const history = useHistory();
  const [staff, setStaff] = useState(props.location.state);
  console.log("hi");
  //console.log(props.location.state);
  const handleDelete = (id) => {
    const newStaff = staff.filter((c) => c.StaffId !== id);
    setStaff(newStaff);
    axios
      .get(`http://localhost:4000/admin/deleteStaff/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status === "success")
          toast.success("Staff Deleted successfully");
        else toast.error("Invalid Details");
      });
    // this.setState({ counters: counters });
    console.log(id);
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
        <h1>Staff Information</h1>
        <br />
        {staff.map((c) => (
          <div
            key={c.StaffId}
            className="container shadow-lg p-3 mb-5 bg-body rounded crapper"
            style={{ width: "550px", backgroundColor: "#3786bd" }}
          >
            <h5 align="left" style={{ color: "white" }}>
              Staff Name: {c.FirstName + " " + c.LastName}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              Phone Number: {c.PhoneNumber}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              Email : {c.Email}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              Designation: {c.Designation}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              Admin: {c.Admin}
            </h5>
            <h5 align="left" style={{ color: "white" }}>
              Working Status : {c.WorkingStatus}
            </h5>
            <button
              className="btn btn-warning m-2"
              onClick={() => history.push("/editStaff", c)}
            >
              Edit Staff <i class="fa fa-edit "></i>
            </button>

            <button
              className="btn btn-danger"
              onClick={() => handleDelete(c.StaffId)}
            >
              Delete Staff <i class="fa fa-remove "></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewAllstaff;
