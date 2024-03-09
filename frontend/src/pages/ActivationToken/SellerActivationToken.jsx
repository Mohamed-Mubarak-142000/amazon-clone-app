import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server_Url } from "../../server";

const SellerActivationToken = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server_Url}/shop/activation`, {
            activation_token,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            setError(true);
            console.log(err);
          });
      };
      sendRequest();
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-[100vh] border">
      {error ? (
        <h2>Your Token Is Expired!!</h2>
      ) : (
        <h2>Your Account has been created successfully!</h2>
      )}
    </div>
  );
};

export default SellerActivationToken;
