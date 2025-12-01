import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // using location from react router
  const location = useLocation();

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/40 backdrop-blur-md z-50">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>

          <div className="absolute inset-0 h-16 w-16 rounded-full border-4 border-transparent border-b-blue-400 animate-spin [animation-duration:1.2s]"></div>

          <div className="absolute inset-2 h-12 w-12 rounded-full border-4 border-transparent border-t-blue-300 animate-spin [animation-duration:1.5s]"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
