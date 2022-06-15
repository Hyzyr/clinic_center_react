import React, { useState } from "react";
import AvailableForm from "./pages/AvailableForm";
import PatientForm from "./pages/PatientForm";
import Tasks from "./pages/Tasks";

export default function Appointments() {
  const [page, setPage] = useState("tasks");

  return (
    <>
      {page === "tasks" && <Tasks setPage={setPage} />}
      {page === "patient" && <PatientForm setPage={setPage} />}
      {page === "available" && <AvailableForm setPage={setPage} />}
    </>
  );
}
