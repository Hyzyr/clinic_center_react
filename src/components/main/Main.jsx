import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PatientSide from "./patientSide/Index";
import ProviderSide from "./providerSide/Index";

export default function Main() {
  return (
    <Routes>
      <Route path={"/*"} element={<PatientSide />} />
      <Route path={"/provider/*"} element={<ProviderSide />} />
    </Routes>
  );
}

