import React from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Navbar from "./navbar";
import Sidebars from "./Sidebars";
function Dashboard(props) {
  //var doc = props.location.state;
  // var nam;
  // if (props.location.state[0]) nam = props.location.state[0];
  // if (props.location.state[0]) localStorage.setItem("firstName", nam.FirstName);
  // if (props.location.state[0]) localStorage.setItem("lastName", nam.LastName);
  const [cookies, setCookie] = useCookies();
  console.log("hi");
  console.log(cookies);
  console.log("hi");
  const history = useHistory();
  console.log(props.valid);
  const handleMeal = () => {
    toast.error("Work in Progress");
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
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <Sidebars />
      <ToastContainer />
      <div className="content-container ">
        <div>
          <div>
            <h1>Admin Dashbord</h1>
            <div className="container ">
              <div className="content-container ">
                {" "}
                {/* <div className=" m-3 fontstyleis " style={{ width: "1%" }}></div> */}
                <div className="row m-1 fontstyleis " style={{ width: "63%" }}>
                  <div
                    className="col exampleisthe circleBase m-3"
                    onClick={() => history.push("/searchPatient")}
                  >
                    {" "}
                    <p>
                      <h5>
                        <b>
                          {" "}
                          Covid <br /> Rounds
                        </b>
                      </h5>
                    </p>
                    <img
                      src="https://www.numed.co.uk/img/svg-icons/ev-vital.png?1475595208"
                      style={{ height: "90px", width: "90px" }}
                    />
                  </div>
                  <div
                    className="col exampleisthe circleBase m-3"
                    onClick={handleMeal}
                  >
                    {" "}
                    <p>
                      <h5>
                        <b>
                          {" "}
                          Meal <br /> Status
                        </b>
                      </h5>
                    </p>
                    <img
                      src="https://thumbs.dreamstime.com/b/diet-plan-icon-food-nutrition-list-sheet-apple-banana-symbol-dietary-habit-illustration-simple-graphic-eps-141048688.jpg"
                      style={{ height: "90px", width: "90px" }}
                    />
                  </div>
                  <div className="w-100"></div>
                  <div
                    className="col exampleisthe circleBase m-3"
                    onClick={() => history.push("/addPatient")}
                  >
                    {" "}
                    <p>
                      <h5>
                        <b>
                          {" "}
                          Patient <br /> Registration
                        </b>
                      </h5>
                    </p>
                    <img
                      src="https://cdn2.iconfinder.com/data/icons/medical-and-health-color-1/64/patient-information-online-registration-hospital-document-512.png"
                      style={{ height: "90px", width: "90px" }}
                      alt=""
                    />
                  </div>
                  <div
                    className="col exampleisthe circleBase m-3"
                    onClick={handleAddstaff}
                  >
                    <p>
                      <h5>
                        <b>
                          Doctor <br /> Registration
                        </b>
                      </h5>
                    </p>
                    <img
                      src="https://www.uottawa.ca/health/sites/www.uottawa.ca.health/files/icon_-_register_with_a_doctor.png"
                      style={{ height: "90px", width: "90px" }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {!valid && <h1>hello world</h1>} */}
    </div>
  );
}

export default Dashboard;
