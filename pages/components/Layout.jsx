import Router from "next/router";
import { useState, useEffect } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Rocket from "./rocket.png";
import axios from "axios";

const Layout = ({ children }) => {
  Axios.defaults.withCredentials = true;

  const [loading, setLoading] = useState(true);

  const route = (url) => Router.push(url);

  const getData = async () => {
    try {
      const response = await axios.get("https://api.rocketpicks.xyz/login");
      if (response.data.loggedIn) {
        setLoading(false);
      } else {
        Router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading == false)
    return (
      <div className="text-white min-h-screen flex">
        <div className="min-h-screen py-3 bg-lighter2 relative text-center w-16 md:w-64 text-xl md:text-base">
          <div className="mt-4 mb-8">
            <Image src={Rocket} width={50} height={50} />
            <div className="text-2xl font-bold mb-2 md:block hidden">
              Rocket Picks
            </div>
          </div>
          <div
            className="p-2 px-4 rounded-lg text-start
          text-white hover:bg-blue-600 duration-300 text-center md:text-base md:w-52 m-1 mx-auto flex items-center cursor-pointer w-max md:my-0 my-6"
            onClick={() => {
              route("/leaderboard");
            }}
          >
            <FontAwesomeIcon icon={faTrophy} className="md:justify-center" />
            <div
              onClick={() => {
                route("/leaderboard");
              }}
              className="md:block hidden ml-2"
            >
              Leaderboard
            </div>
          </div>
          <div
            className="p-2 px-4 rounded-lg text-start text-white hover:bg-blue-600 duration-300 text-center md:text-base md:w-52 m-1 mx-auto flex items-center cursor-pointer w-max"
            onClick={() => {
              route("/picks");
            }}
          >
            <FontAwesomeIcon icon={faStar} className="md:justify-center" />
            <div
              onClick={() => {
                route("/leaderboard");
              }}
              className="md:block hidden ml-2"
            >
              Picks
            </div>
          </div>
        </div>
        {children}
      </div>
    );
};

export default Layout;
