import { useEffect, useState } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmarkCircle,
  faUser,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";
import { motion } from "framer-motion";
import rocket from "./components/rocket.png";
import Image from "next/image";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("https://api.rocketpicks.xyz/login", {
      headers: "Access-Control-Allow-Origin: https://api.rocketpicks.xyz",
    }).then((response) => {
      if (response.data.loggedIn == true) {
        setLoggedIn(true);
        Router.push("/picks");
      } else setLoading(false);
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
    Axios.post("https://api.rocketpicks.xyz/login", {
      headers: "Access-Control-Allow-Origin: https://api.rocketpicks.xyz",
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message == "Login complete.") {
        setErrMsg(null);
        Router.push("/picks");
      } else {
        setErrMsg(response.data.message);
        console.log(response.data.message);
      }
    });
  };

  if (loggedIn == false && loading == false)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="min-h-screen flex flex-col justify-center items-center">
          <div className="p-4 w-full max-w-sm rounded-lg border:none shadow-md bg-lighter2">
            <div className="text-center">
              <Image src={rocket} width={50} height={50} />
            </div>
            <form className="p-3">
              <h5 className="text-white text-center text-xl pb-8">
                Login to your account
              </h5>
              <div className="pb-1 text-gray-300">
                <label className="block pb-2">Username</label>
                <div className="flex justify-center items-center border rounded-lg border-gray-600 text-gray-400">
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
              <div className="pt-3 text-gray-300">
                <label className="block pb-2">Password</label>
                <div className="flex justify-center items-center border rounded-lg border-gray-600 text-gray-400">
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
              <a
                href="/register"
                className="flex justify-end mt-2 text-sm w-max text-blue-600 hover:text-blue-500 duration-300 underline"
              >
                Don't have an account?
              </a>
              <button
                className="bg-blue-600 min-w-full rounded-lg mt-5 p-2
            text-white hover:bg-blue-700 duration-300 block text-center"
                onClick={login}
              >
                Sign in
              </button>
            </form>
          </div>
          {errMsg != null && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="mt-5 bg-red-600 p-4 rounded-lg text-center flex items-center text-center text-white">
                <FontAwesomeIcon
                  icon={faXmarkCircle}
                  className="text-2xl mr-2"
                />
                {errMsg}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    );
}
