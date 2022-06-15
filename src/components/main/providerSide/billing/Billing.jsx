import React, { useState } from "react";
import Form from "./pages/Form";
import History from "./pages/History";
import List from "./pages/List";

const Billing = () => {
  const [page, setPage] = useState("list");

  return (
    <>
      {page === "list" && <List setPage={setPage} />}
      {page === "form" && <Form setPage={setPage} />}
      {page === "history" && <History setPage={setPage} />}
    </>
  );
};

export default Billing;
