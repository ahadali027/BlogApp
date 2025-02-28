import React from "react";
import URLS from "@/config/config";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  // const isAuthenticated = localStorage.getItem("auth token");
  const user = useSelector((state) => state.auth?.user);
useEffect(()=>{
  
}, [])

  if (!user) {
    return <Navigate to={URLS.AUTH.LOGIN} />;
  }

  return children;
};

export default ProtectedRoute;
