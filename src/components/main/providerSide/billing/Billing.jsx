import React, { useState } from "react";
import Form from "./pages/Form";
import History from "./pages/History";
import List from "./pages/List";

const Billing = () => {
  const [page, setPage] = useState("form");

  return (
    <>
      {page === "list" && <List />}
      {page === "form" && <Form />}
      {page === "history" && <History />}
    </>
  );
};

export default Billing;
