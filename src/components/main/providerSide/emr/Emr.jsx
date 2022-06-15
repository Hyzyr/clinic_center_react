import React, { useState } from "react";
import Form from "./pages/Form";
import Search from "./pages/Search.jsx";

const pages = {
  form: { link: "form" },
  search: { link: "search" },
};

const Emr = () => {
  const [page, setPage] = useState(pages.search.link);

  return (
    <>
      {page === pages.form.link && <Form />}
      {page === pages.search.link && <Search />}
    </>
  );
};

export default Emr;
