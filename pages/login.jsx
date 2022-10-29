import { useEffect, useState } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoggedIn(true);
      }
    });
  }, []);

  const login = (e) => {
    e.preventDefault();
    if (username.length < 3 || username.length > 12) {
      setErrMsg("Invalid username/password.");
      return;
    } else if (password.length < 8 || password.length > 24) {
      setErrMsg("Invalid username/password.");
      return;
    }
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message == "Login complete.") {
        setErrMsg(null);
        Router.push("/home");
      } else {
        setErrMsg(response.data.message);
        console.log(response.data.message);
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="p-4 w-full max-w-sm bg-white rounded-lg border:none shadow-md bg-lighter2">
        <form className="p-3">
          <h5 className="text-white text-xl pb-5">Login</h5>
          <div className="pb-3 text-gray-300">
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
          <div className="pt-3 text-gray-300">
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
          <button
            className="bg-blue-600 min-w-full rounded-md mt-8 p-2
            text-white hover:bg-blue-700 duration-300 block text-center"
            onClick={login}
          >
            Sign in
          </button>
        </form>
      </div>
      {errMsg != null && (
        <div className="mt-5 bg-red-600 p-4 rounded-md text-center justify-center flex text-white">
          <FontAwesomeIcon icon={faXmarkCircle} className="text-2xl mr-2" />
          {errMsg}
        </div>
      )}
    </div>
  );
}
