import React from "react";
import Logo from "../components/Logo/Logo";
import { Link, Outlet } from "react-router";
import authImage from "../assets/authImage.png";
import { FiHome } from "react-icons/fi";

const AuthLayout = () => {
  return (
    <div className="bg-white px-4 md:px-8 lg:px-12">
      <div className="container mx-auto py-10 rounded-2xl">
        <div>
          <Logo></Logo>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10">
          {/* OUTLET  /  AUTHENTICATION FORM */}
          <div className="">
            <Outlet></Outlet>
          </div>

          {/* FIXED IMAGE */}
          <div className="bg-[#FAFDF0] rounded-xl">
            <img className="mx-auto py-20" src={authImage} alt="" />
            <div className="flex justify-center mb-10">
              <Link to={"/"}>
                <button className="flex items-center gap-2 px-8 py-3 bg-white text-green-600 border-2 border-green-600 rounded-full font-semibold text-base transition-all duration-300 hover:bg-green-600 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-600/30">
                  <FiHome></FiHome>
                  Go to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
