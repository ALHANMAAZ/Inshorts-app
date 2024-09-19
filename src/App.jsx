import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Admin from "./Components/Admin";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Register from "./Components/Register";
import State from "./Context/State";
import UpdatedNews from "./Components/UpdatedNews";
import AddNews from "./Components/AddNews";

function App() {
  return (
    <>
      <State>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/admin"
            element={
              <ProtectedRouteForAdmin>
                <Admin />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/addNews"
            element={
              <ProtectedRouteForAdmin>
                <AddNews />
              </ProtectedRouteForAdmin>
            }
          />

          <Route
            path="/updateNews"
            element={
              <ProtectedRouteForAdmin>
                <UpdatedNews />
              </ProtectedRouteForAdmin>
            }
          />
        </Routes>
        <ToastContainer position="top-center" />
      </State>
    </>
  );
}

export default App;

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

//admin
const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  console.log(admin.user.email);
  if (admin.user.email === "admin@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
