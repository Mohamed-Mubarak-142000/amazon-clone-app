import React, { useEffect, useState } from "react";
import { VscEyeClosed } from "react-icons/vsc";
import { VscEye } from "react-icons/vsc";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/features/authSlice";
import Spinner from "../../components/spinner/Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const { loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { Oneuser } = useSelector((state) => ({
    ...state.auth,
  }));

  useEffect(() => {
    if (Oneuser?.token) {
      navigate("/");
    }
  }, []);

  //handle submit********
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password, navigate }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 capitalize text-center text-3xl font-bold text-gray-900">
          Login to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
            {/****************************rememmber**************************************/}
            <div className={`${styles.normalFlex} justify-between`}>
              {/**********************checkbox************************/}
              <div className={`${styles.normalFlex}`}>
                <input
                  type="checkbox"
                  name="remember"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600  focus:ring-blue-500 border-gray-300 rounded "
                />
                <label
                  htmlFor="remember-me"
                  className="block ml-2 text-gray-600 text-sm"
                >
                  {" "}
                  Remember me
                </label>
              </div>
              {/***********************forget password************************ */}
              <div className="text-sm">
                <a
                  href="/forget-password"
                  className="font-meduim text-blue-600 hover:text-blue-500"
                >
                  Forget Password ?
                </a>
              </div>
            </div>
            {/**************************button*************************** */}
            <div>
              <button
                type="submit"
                className="group capitalize relative w-full h-[40px] flex justify-center py-2 border border-transparent text-md font-md rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                login
              </button>
            </div>

            {/********************************sign up******************************/}
            <div className={`${styles.normalFlex} capitalize text-md`}>
              not have any account ?
              <Link
                to="/register"
                className="text-blue-500 pl-1 hover:text-blue-700 cursor-pointer "
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>

      {loading ? <Spinner /> : null}
    </div>
  );
};

export default Login;
