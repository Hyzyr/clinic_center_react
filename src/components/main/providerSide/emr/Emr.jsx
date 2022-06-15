import React, { useState } from "react";
import Form from "./pages/Form";
import Search from "./pages/Search.jsx";

const Emr = () => {
  const [page, setPage] = useState("form");

  return (
    <>
      {page === "form" && <Form setPage={setPage} />}
      {page === "search" && <Search setPage={setPage} />}
    </>
  );
};

export default Emr;
