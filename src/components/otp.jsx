import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function OTP(props) {
  // const num = 0;
  const [code, setCode] = useState(9);
  const [ans, setAns] = useState(props.location.state);
  const history = useHistory();
  const [invalid, setInvalid] = useState("");
  const num = props.location.state.phone;
  console.log(props.location.state);
  const [cookie, setCookie] = useState("");
  const handleResend = (e) => {
    e.preventDefault();
    history.push("/");
  };
  //start
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      phone: num,
      hash: ans.data.hash,
      otp: code,
    };
    axios
      .post("http://localhost:4000/verify", data, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        withCredentials: true,
      })
      .then((res) => {
        const session = {
          valid: false,
        };
        console.log(res.headers);
        if (res.data.status === "success") {
          //setCookie(res.data.data.cookies);
          //console.log("h9");
          session.valid = true;
          var first = res.data.data[0].FirstName;
          var last = res.data.data[0].LastName;
          localStorage.setItem("firstName", first);
          localStorage.setItem("lastName", last);
          history.push("/dashboard");
          setInvalid("");
        } else toast.error("Invalid OTP");
      })
      .catch((err) => console.log(err));
  };
  //end
  const handleChange = (e) => {
    //const codes = { ...code };
    setCode(e.currentTarget.value);
  };
  // const handleClick = () => {
  //   if (invalid) toast.error("Invalid OTP");
  // };
  return (
    <div>
      <ToastContainer />
      <div>
        <img
          src="https://cdn4.iconfinder.com/data/icons/blue-sapphire-medical-set-2/256/66-512.png"
          width="200"
          className="m-5"
        />
        <div className="container height-100 d-flex justify-content-center ">
          <div className="position-relative">
            <div
              className="card p-2 text-center"
              style={{ backgroundColor: "#0096FF" }}
            >
              <h6 style={{ color: "white" }}>
                Please enter the one time password <br /> to verify your account
              </h6>
              <div>
                {" "}
                <span style={{ color: "white" }}>
                  A code has been sent to your number
                </span>{" "}
              </div>
              <form onSubmit={handleSubmit}>
                <div
                  id="otp"
                  // className="inputs d-flex flex-row justify-content-center mt-2"
                >
                  {" "}
                  <input
                    autoFocus
                    className="m-2 text-center form-control rounded"
                    type="number"
                    id="first"
                    maxLength="6"
                    minLength="6"
                    style={{ borderColor: "black" }}
                    onChange={handleChange}
                  />{" "}
                </div>
                <div className="mt-4">
                  {" "}
                  <button
                    className="btn btn-danger px-4 validate"
                    type="submit"
                    //onClick={handleClick}
                  >
                    Validate
                  </button>{" "}
                </div>
              </form>
            </div>

            <div>
              <div>
                {" "}
                <br />
                <span>Didn't get the code </span> <br />
                <br />
                <button
                  className="text-decoration-none btn btn-primary"
                  style={{ color: "white" }}
                  onClick={handleResend}
                >
                  Retry
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTP;
