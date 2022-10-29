import { useState } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmarkCircle,
  faCircleInfo,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import rocket from "./components/rocket.png";
import Image from "next/image";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState(null);
  const [success, setSuccess] = useState(false);

  const addUser = (e) => {
    e.preventDefault();
    if (username.length < 3 || username.length > 12) {
      setSuccess(false);
      setErrMsg("Username is invalid.");
    } else if (password.length < 8 || password.length > 24) {
      setSuccess(false);
      setErrMsg("Password is invalid.");
    } else {
      Axios.post("http://localhost:3001/create", {
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
    <div className="min-h-screen flex justify-center items-center flex-col p-4">
      <div className="p-4 w-full max-w-sm bg-white rounded-lg border:none shadow-md bg-lighter2">
        <div className="text-center">
          <Image src={rocket} width={50} height={50} />
        </div>
        <form className="p-3">
          <h5 className="text-white text-xl pb-8 text-center">
            Create an account
          </h5>
          <div className="pb-1 text-gray-300">
            <label className="block pb-2">Username</label>
            <input
              className="w-full bg-lighter2 rounded-md p-2 border border-gray-600 focus:border-blue-500 focus:outline-none"
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="flex text-sm items-center mx-2 text-gray-500 pb-3">
            <FontAwesomeIcon icon={faCircleInfo} className="pr-1" />
            <h1>Username must be between 3-12 characters.</h1>
          </div>
          <div className="text-gray-300 pb-1">
            <label className="block pb-2">Password</label>
            <input
              className="w-full bg-lighter2 rounded-md p-2 border border-gray-600 focus:border-blue-500 focus:outline-none"
              type="password"
              placeholder="••••••••"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="flex text-sm items-center mx-2 text-gray-500">
            <FontAwesomeIcon icon={faCircleInfo} className="pr-1" />
            <h1>Password must be between 8-24 characters.</h1>
          </div>
          <button
            className="bg-blue-600 min-w-full rounded-md mt-8 p-2
            text-white hover:bg-blue-700 duration-300 block text-center"
            onClick={addUser}
          >
            Register
          </button>
        </form>
      </div>
      {errMsg != null && (
        <div className="mt-5 bg-red-600 p-4 rounded-md text-white text-center justify-center flex">
          <FontAwesomeIcon icon={faXmarkCircle} className="text-2xl mr-2" />
          {errMsg}
        </div>
      )}
      {success == true && (
        <div className="mt-5 bg-green-600 p-4 rounded-md text-white text-center justify-center flex flex-col">
          <div className="flex">
            <FontAwesomeIcon icon={faCircleCheck} className="text-2xl mr-2" />
            Success! Please&nbsp;
            <a
              href="/login"
              className="text-blue-600 underline hover:text-blue-700"
            >
              login.
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
