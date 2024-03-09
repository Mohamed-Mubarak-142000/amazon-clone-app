import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/spinner/Spinner";

const Protected = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  if (loading === true) {
    return <Spinner />;
  } else {
    if (!isAuthenticated) {
      return (
        toast.warn("Please , You must login first..!"),
        (<Navigate to={"/login"} replace />)
      );
    }
    return children;
  }
};

export default Protected;
