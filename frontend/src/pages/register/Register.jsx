import React, { useState } from "react";
import { VscEyeClosed } from "react-icons/vsc";
import { VscEye } from "react-icons/vsc";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/features/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  //clear inputs
  const clearInputs = () => {
    setName("");
    setEmail("");
    setPassword("");
    setAvatar();
  };
  //handleSubmit**********************************
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      let newForm = new FormData();
      newForm.append("file", avatar);
      newForm.append("name", name);
      newForm.append("email", email);
      newForm.append("password", password);
      dispatch(registerUser({ newForm, config, navigate }));
      clearInputs();
    } catch (error) {
      console.log(error);
    }
  };

  //handleImage************************************
  const handleFileAvatar = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 capitalize text-center text-3xl font-bold text-gray-900">
          Create new account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/******************image****************** */}
            <div>
              <label
                htmlFor="avatar"
                className="text-sm block font-medium text-gray-700 "
              ></label>
              <div className="flex items-center justify-center flex-col gap-2">
                <span className="h-16 w-16 border-2 border-gray-400 flex items-center justify-center  rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="person"
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : (
                    <RxAvatar className="h-16 w-16" />
                  )}
                </span>

                {/************ */}
                <label
                  htmlFor="file-name"
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>UpLoad Image</span>
                  <input
                    type="file"
                    name="avatar"
                    accept=".png,.jpg , .jpeg"
                    id="file-name"
                    onChange={handleFileAvatar}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
            {/**************************username******************************/}
            <div>
              <label
                htmlFor="name"
                className="block text-md font-medium text-gray-700"
              >
                Full Name:
              </label>

              <div className="mt-1">
                <input
                  className="apperance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-500 sm:text-sm"
                  type="text"
                  name="name"
                  autoComplete="text"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>

            {/**************************email******************************/}
            <div>
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-700"
              >
                E-mail Address:
              </label>

              <div className="mt-1">
                <input
                  className="apperance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-500 sm:text-sm"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>

            {/**************************password******************************/}
            <div>
              <label
                htmlFor="password"
                className="block text-md font-medium text-gray-700"
              >
                Password:
              </label>

              <div className="mt-1 relative">
                <input
                  className="apperance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-500 sm:text-sm"
                  type={show ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                {show ? (
                  <VscEye
                    className="absolute top-2 right-2 text-md cursor-pointer"
                    size={20}
                    onClick={() => setShow(false)}
                  />
                ) : (
                  <VscEyeClosed
                    className="absolute top-2 right-2 text-md cursor-pointer"
                    size={20}
                    onClick={() => setShow(true)}
                  />
                )}
              </div>
            </div>

            {/**************************button*************************** */}
            <div>
              <button
                type="submit"
                className="group capitalize relative w-full h-[40px] flex justify-center py-2 border border-transparent text-md font-md rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                register
              </button>
            </div>
            {/********************************sign up******************************/}
            <div className={`${styles.normalFlex} capitalize text-md`}>
              Already You have an account ?
              <Link
                to="/login"
                className="text-blue-500 pl-1 hover:text-blue-700 cursor-pointer "
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
