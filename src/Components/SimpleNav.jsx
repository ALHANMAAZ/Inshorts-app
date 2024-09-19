import React from "react";
import { Link } from "react-router-dom";

const SimpleNav = () => {
  return (
    <>
      <div className="box-border font-roboto mt-[110px]">
        {/* Adjust the margin-top based on the Navbar height */}
        <div className="flex justify-between items-center bg-custom-red h-14 w-full max-w-[965px] mx-auto px-4 py-2 shadow-custom">
          <p className="text-white text-sm font-light xs:w-80 xxs:w-72">
            For the best experience use the
            <span className="font-bold"> inshorts</span> app on your smartphone
          </p>
          <div className="flex space-x-2">
            <Link to="/" className="flex">
              <img
                src="Images/appstore.png"
                alt="appstore"
                className="box-border p-2 w-36"
              />
            </Link>
            <Link to="/" className="flex">
              <img
                src="Images/playstore.png"
                alt="playstore"
                className="box-border p-2 w-36"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleNav;
