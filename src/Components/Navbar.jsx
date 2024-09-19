import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SimpleNav from "./SimpleNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user.user.email);
  const dispatch = useNavigate();
  const logout = () => {
    localStorage.clear("user");
    dispatch("/");
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[72px] bg-white z-50 shadow-md flex items-center font-roboto">
        {/* Hamburger Menu Button */}
        <button onClick={toggleSidebar} className="ml-4 p-3 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Menu Text */}
        <p
          className="text-custom-gray text-lg cursor-pointer"
          onClick={toggleSidebar}
        >
          Menu
        </p>
        <Link to="/" className="">
          <img
            src="/Images/inshorts.png"
            alt="Inshorts"
            className="border-0 box-border h-[72px] p-[8px] absolute left-1/2  top-0 transform -translate-x-1/2"
          />
        </Link>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out  `}
          style={{ width: "216px" }}
        >
          <div className="p-6">
            {/* Close Button */}
            <button
              onClick={toggleSidebar}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="mt-4">
              <li className="py-2">
                <Link to="/" className="hover:text-gray-400 cursor-pointer">
                  Home
                </Link>
              </li>
              {user?.user?.email === "admin@gmail.com" ? (
                <li className="py-2">
                  <Link
                    to={"/admin"}
                    className="hover:text-gray-400 cursor-pointer"
                  >
                    Admin
                  </Link>
                </li>
              ) : (
                ""
              )}

              {user ? (
                <li className="py-2">
                  <p
                    onClick={logout}
                    className="hover:text-gray-400 cursor-pointer"
                  >
                    Logout
                  </p>
                </li>
              ) : (
                <li className="py-2">
                  <Link
                    to={"/register"}
                    className="hover:text-gray-400 cursor-pointer"
                  >
                    Signup
                  </Link>
                </li>
              )}
              <li className="py-2 mb-2">
                <Link
                  to="/login"
                  className="hover:text-gray-400 cursor-pointer"
                >
                  Login
                </Link>
              </li>
              <hr />
              <h2 className="text-2xl font-bold pt-4 pb-2">Categories</h2>
              <li className=" py-2">
                <a href="#about" className="hover:text-gray-400 cursor-pointer">
                  About
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#services"
                  className="hover:text-gray-400 cursor-pointer"
                >
                  Services
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#contact"
                  className="hover:text-gray-400 cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SimpleNav />
    </>
  );
};

export default Navbar;
