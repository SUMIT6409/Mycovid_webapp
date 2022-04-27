import "./App.css";
import React, { Component } from "react";
import OTP from "./components/otp";
import Login from "./components/login";
import Navbar from "./components/navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import Dashboard2 from "./components/Dashboard2";

import Sidebars from "./components/Sidebars";
import Dashboard from "./components/Dashboard2";
import VitalStats from "./components/vitalStats";
import VitalTab from "./components/vitalTab";
import PatientRegister from "./components/patientRegister";
import StaffRegister from "./components/staffRegister";
import MealStatus from "./components/mealStatus";
import Main from "./components/main";
import PageNotfound from "./components/pageNotfound";
import ViewPatient from "./components/viewPatient";
import PatientDetails from "./components/patientDetails";
import Junk from "./components/junk";
import DemoNav from "./components/demoNav";
import ViewWard from "./components/viewWard";
import EditPatient from "./components/editPatient";
import EditStaff from "./components/editStaff";
import ViewAllstaff from "./components/viewAllstaff";
import SearchVital from "./components/searchVital";
import ViewVital from "./components/viewVital";
import EditVital from "./components/editVital";
import NoVital from "./components/noVital";
import NewVital from "./components/newVital";
import ViewAllpatient from "./components/viewAllpatient";
function App() {
  var str = "";
  return (
    <div className="App">
      {/*  */}
      {/* <Navbar /> */}
      <div className="content">
        <Switch>
          <Route path="/otp" component={OTP} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/searchPatient" component={VitalStats} />
          <Route path="/viewPatient" component={PatientDetails} />
          <Route path="/addPatient" component={PatientRegister} />
          <Route path="/addStaff" component={StaffRegister} />
          <Route path="/mealStatus" component={MealStatus} />
          <Route path="/junk" component={Junk} />
          <Route path="/viewWard" component={ViewWard} />
          <Route path="/editPatient" component={EditPatient} />
          <Route path="/editStaff" component={EditStaff} />
          <Route path="/viewAllstaff" component={ViewAllstaff} />
          <Route path="/searchVital" component={SearchVital} />
          <Route path="/viewVital" component={ViewVital} />
          <Route path="/editVital" component={EditVital} />
          <Route path="/noVital" component={NoVital} />
          <Route path="/newVital" component={NewVital} />
          <Route path="/viewAllpatient" component={ViewAllpatient} />
          <Route path="/not-found" component={PageNotfound} />
          <Route path="/" exact component={Login} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
