import React, { useState } from "react";
import AvailableForm from "./pages/AvailableForm";
import PatientForm from "./pages/PatientForm";
import Tasks from "./pages/Tasks";

export default function Appointments() {
  const [pages, setPages] = useState("tasks");

  return (
    <>
      {pages === "tasks" && <Tasks />}
      {pages === "patient" && <PatientForm />}
      {pages === "available" && <AvailableForm />}
    </>
  );
}
