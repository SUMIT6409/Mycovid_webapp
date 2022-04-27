import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";
import Sidebars from "./Sidebars";
function VitalStats(props) {
  const [val, setVal] = useState("");
  const [patient, setPatient] = useState({});
  const history = useHistory();
  const handleSearch = () => {
    const searched = {
      search: val,
    };
    axios
      .post("http://localhost:4000/patients/search", searched, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data);
        //setPatient(res);
        // console.log(res);
        history.push("/viewPatient", res.data.data);
      });
  };
  const handleChange = (e) => {
    setVal(e.currentTarget.value);
  };
  return (
    <div>
      <Navbar />
      <br />
      <br />
      {/*  */}
      <Sidebars />
      <div className="registration-form m-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        ></div>
        <br />
        <br />
        <br />
        <header>
          <h1>Enter Patient Information</h1>
          <p>Enter Name or ID </p>
        </header>
        <form>
          <div className="input-section email-section">
            <input
              className="email"
              type="text"
              placeholder="ENTER A VALID INFO"
              autocomplete="off"
              onChange={handleChange}
            />
            <div className="animated-button" onClick={handleSearch}>
              <span className="icon-paper-plane">
                <i className="fa fa-search"></i>
              </span>
              <span className="next-button email">
                <i className="fa fa-arrow-up"></i>
              </span>
            </div>
          </div>
          <div className="input-section password-section folded">
            <input
              className="password"
              type="password"
              placeholder="ENTER YOUR PASSWORD HERE"
            />
            <div className="animated-button">
              <span className="icon-lock">
                <i className="fa fa-lock"></i>
              </span>
              <span className="next-button password">
                <i className="fa fa-arrow-up"></i>
              </span>
            </div>
          </div>
          <div className="input-section repeat-password-section folded">
            <input
              className="repeat-password"
              type="password"
              placeholder="REPEAT YOUR PASSWORD HERE"
            />
            <div className="animated-button">
              <span className="icon-repeat-lock">
                <i className="fa fa-lock"></i>
              </span>
              <span className="next-button repeat-password">
                <button>
                  <i className="fa fa-paper-plane"></i>
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VitalStats;
