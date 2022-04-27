import React from "react";
import Navbar from "./navbar";
import Sidebars from "./Sidebars";

function MealStatus(props) {
  return (
    <div>
      <Navbar />
      <Sidebars />
      <div className="wrapper ">
        <div className="form-left">
          <h2 className="text-uppercase"></h2>
          <img
            src="https://cdn4.iconfinder.com/data/icons/chef-s-kitchen/256/icon-appetizer-512.png"
            style={{ height: "200px", width: "200px" }}
            alt=""
          />
          <h3>Hospital Name or Covid info</h3>
          <p className="text"></p>
          <div className="form-field"> </div>
        </div>
        <form className="form-right">
          <h2 className="text-uppercase">Dietary Care </h2>
          <div className="row">
            <div className="col-sm-6 mb-3">
              {" "}
              <label>
                <h5>Patient ID : 781456</h5>
              </label>{" "}
            </div>
            <div className="col-sm-6 mb-3">
              {" "}
              <label>
                <h5>Parcels : 2</h5>
              </label>{" "}
            </div>
          </div>
          <div className="mb-3">
            {" "}
            <label>
              <h5>Ward Number : 08</h5>
            </label>{" "}
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3">
              {" "}
              <label>
                <h5>Orders: 03</h5>
              </label>{" "}
            </div>
            <div className="col-sm-6 mb-3">
              {" "}
              <label>
                <h5>Reference Number: 12</h5>
              </label>{" "}
            </div>
          </div>
          <div className="mb-3">
            {" "}
            <form>
              <label for="Staff">
                <h5>Meal Type: </h5>
              </label>
              <select
                name="Staff"
                id="Staff"
                className="m-2 "
                style={{
                  width: "200px",
                  height: "40px",
                }}
              >
                <option value="Doctor">Vitamin</option>
                <option value="Intern">Carbs</option>

                <option value="Nursing">Protein</option>
              </select>
              <label for="Staff">
                <h5>Quantity: 7</h5>
              </label>
              <button className="btn btn-primary">+</button>
            </form>
          </div>
          <div className="form-field">
            {" "}
            <input
              type="submit"
              value="Register"
              className="register"
              name="register"
            />{" "}
          </div>
        </form>
      </div>
    </div>
  );
}

export default MealStatus;
