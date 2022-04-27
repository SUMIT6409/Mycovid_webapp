import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Joi, { validate } from "joi-browser";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";
function Login(props) {
  const history = useHistory();
  const [account, setAccount] = useState({ number: "" });
  const [error, setError] = useState({});
  const [success, setSuccess] = useState({});
  const [invalid, setInvalid] = useState("a");

  const handleClick = (e) => {
    e.preventDefault();
    //validate();
    // console.log(errors);
    // setError(errors);
    //if (errors) return;

    const data = {
      phone: account.number,
    };
    axios
      .post("http://localhost:4000/login", data, {
        withCredentials: true,
      })
      .then((res) => {
        const result = {
          ...res.data,
          phone: account.number,
        };
        console.log(result);
        if (res.data.status === "success") {
          // <Redirect
          //   to={{
          //     pathname: "/otp",
          //     state: { phone: account.number },
          //   }}
          // />;
          history.push("/otp", result);
          //setInvalid("");
        } else {
          toast.error("Invalid Number");
        }
      })
      .catch((err) => setError(err.message));

    //console.log("levi ackerman");
  };
  const handleChange = (e) => {
    const accounts = { ...account };
    accounts.number = e.currentTarget.value;
    setAccount(accounts);
  };
  return (
    <div className="container register">
      <br />
      {/* {invalid && <div>{toast.error("Invalid Number")}</div>} */}
      <ToastContainer />
      <div className="row">
        <div className="col-md-3 register-left">
          <img
            src="https://clipground.com/images/hospital-logo-clipart-1.jpg"
            alt=""
          />
          <h3>Welcome</h3>
          <p>
            {" "}
            <h6>The server is only for Hospital staff</h6>
          </p>

          <br />
        </div>
        <div className="col-md-9 register-right">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active "
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="">
                <h3 className="register-heading"> Health Staff Login</h3>
                <div className="register-form ">
                  <form>
                    <div className="col-md-6 container">
                      <div className="form-group">
                        <i
                          className="fa fa-phone fa-3x m-2"
                          aria-hidden="true"
                          style={{ color: "#0096FF" }}
                        ></i>
                        <input
                          autoFocus
                          type="number"
                          className="form-control"
                          placeholder="Phone Number *"
                          value={account.number}
                          onChange={handleChange}
                          style={{ borderColor: "lightskyblue" }}
                        />
                      </div>
                    </div>

                    <button
                      className="btn btn-primary m-3"
                      //type="submit"
                      onClick={handleClick}
                    >
                      Generate OTP
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
