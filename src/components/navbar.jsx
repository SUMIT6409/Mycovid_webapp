import React from "react";
import "font-awesome/css/font-awesome.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Navbar(props) {
  const history = useHistory();
  const handleClick = () => {
    axios.get("http://localhost:4000/logout").then((res) => {
      console.log(res);
      history.push("/");
    });
  };
  const handleHome = () => {
    history.push("/dashboard");
  };
  return (
    <div>
      {/* <div className="back"></div> */}
      <nav
        className="navbar fixed-top navbar-expand-md navbar-dark bd-navbar "
        style={{ backgroundColor: "#001f3f" }}
      >
        <i
          className="fa fa-hospital-o fa-2x m-2"
          aria-hidden="true"
          style={{ color: "white" }}
        ></i>
        <a className="navbar-brand" href="#" style={{ color: "white" }}>
          My Covid
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto topnav">
            <li className="nav-item">
              <Link className="nav-link" to="/otp" style={{ color: "white" }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "white" }}>
                Contact
              </a>
            </li>
            <li className="nav-item">
              <button
                className=" btn btn-danger btn-sm m-2"
                onClick={handleHome}
              >
                Home
              </button>
              <button
                className=" btn btn-primary btn-sm m-2"
                onClick={handleClick}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {/* <br /> <br /> */}
    </div>
  );
}

export default Navbar;
