import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Spinner from "../components/spinner/Spinner";
const ProtectedSeller = ({ children }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.seller);
  if (loading === true) {
    return <Spinner />;
  } else {
    if (isAuthenticated === false) {
      return <Navigate to={`/seller-login`} replace />;
    }
    return children;
  }
};

export default ProtectedSeller;
