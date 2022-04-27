import React, { useState } from "react";
import Sidebars from "./Sidebars";
import ViewPatient from "./viewPatient";

function ViewWard(props) {
  const [patient, setPatient] = useState(props.location.state);
  console.log("hi");
  //console.log(props.location.state);
  // const handleDelete = (id) => {
  //   const newPatient = patient.filter((c) => c.PatientId !== id);
  //   setPatient(newPatient);

  //   // this.setState({ counters: counters });
  //   console.log(id);
  // };
  console.log(patient);

  //console.log(Object.keys(patient));
  //console.log(Object.keys(Object.keys(patient)[1])[0]);
  // while (i--) {
  //   console.log(patient[i]);
  //   // i++;
  // }
  return (
    <div>
      <Sidebars />
      <div>
        <br />
        <h1>Patient Information</h1>
        <br />
        {}
      </div>
    </div>
  );
}

export default ViewWard;
