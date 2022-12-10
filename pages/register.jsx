import { useState } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmarkCircle,
  faCircleInfo,
  faCircleCheck,
  faUser,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import rocket from "./components/rocket.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Register({ loggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState(null);
  const [success, setSuccess] = useState(false);

  const special = /\W|_/g;

  const addUser = (e) => {
    e.preventDefault();
    if (username.length < 3 || username.length > 12) {
      setSuccess(false);
      setErrMsg("Username is invalid.");
    } else if (special.test(username)) {
      setSuccess(false);
      setErrMsg("Username must be alphanumeric.");
    } else if (password.length < 8 || password.length > 24) {
      setSuccess(false);
      setErrMsg("Password is invalid.");
    } else {
      Axios.post("https://api.rocketpicks.xyz/create", {
        username: username,
        password: password,
      }).then((response) => {
        if (
          response.data.message[0] == "&" ||
          response.data.message == "Done"
        ) {
          setErrMsg(null);
          setSuccess(true);
        } else {
          setSuccess(false);
          setErrMsg(response.data.message);
        }
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-screen flex justify-center items-center flex-col">
        <div className="p-4 w-full max-w-sm rounded-lg border:none shadow-md bg-lighter2">
          <div className="text-center">
            <Image src={rocket} width={50} height={50} />
          </div>
          <form className="p-3">
            <h5 className="text-white text-xl pb-8 text-center">
              Create an account
            </h5>
            <div className="pb-1 text-gray-300">
              <label className="block pb-2">Username</label>
              <div
                className={`flex justify-center items-center border rounded-lg border-gray-600 text-gray-400 ${
                  (username.length < 3 && username.length != 0) ||
                  username.length > 12
                    ? "border-red-700"
                    : "border-gray-600"
                }`}
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-center justify-center items-center ml-3 mr-1"
                />
                <input
                  className="w-full bg-lighter2 p-2 focus:outline-none rounded-lg"
                  type="text"
                  placeholder="John..."
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex text-sm items-center mx-2 text-gray-500 pb-3">
              <FontAwesomeIcon icon={faCircleInfo} className="pr-1" />
              <h1>Username must be between 3-12 characters.</h1>
            </div>
            <div className="text-gray-300 pb-1">
              <label className="block pb-2">Password</label>
              <div
                className={`flex justify-center items-center border rounded-lg text-gray-400 ${
                  (password.length < 8 && password.length != 0) ||
                  password.length > 24
                    ? "border-red-700"
                    : "border-gray-600"
                }`}
              >
                <FontAwesomeIcon
                  icon={faKey}
                  className="text-center justify-center items-center ml-3 mr-1"
                />
                <input
                  className="w-full bg-lighter2 p-2 focus:outline-none rounded-lg"
                  type="password"
                  placeholder="••••••••"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex text-sm items-center mx-2 text-gray-500">
              <FontAwesomeIcon icon={faCircleInfo} className="pr-1" />
              <h1>Password must be between 8-24 characters.</h1>
            </div>
            <a
              href="/login"
              className="flex w-max mt-2 text-sm text-blue-600 hover:text-blue-500 duration-300 underline"
            >
              Already have an account?
            </a>
            <button
              className="bg-blue-600 min-w-full rounded-lg mt-5 p-2
            text-white hover:bg-blue-700 duration-300 block text-center"
              onClick={addUser}
            >
              Create Account
            </button>
          </form>
        </div>
        {errMsg != null && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="mt-5 bg-red-600 p-4 rounded-lg text-center text-white justify-center flex">
              <FontAwesomeIcon icon={faXmarkCircle} className="text-2xl mr-2" />
              {errMsg}
            </div>
          </motion.div>
        )}
        {success == true && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="mt-5 bg-green-600 p-4 rounded-lg text-white text-center justify-center flex flex-col">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-2xl mr-2"
                />
                Success! Please&nbsp;
                <a
                  href="/login"
                  className="text-blue-600 underline hover:text-blue-700"
                >
                  login.
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
