import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Main />} />
        {/* <Route path="/" element={<Navigate to={"/login"} />} /> */}
      </Routes>
    </>
  );
}

export default App;
