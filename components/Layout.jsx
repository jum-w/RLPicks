import Router from "next/router";
import { useState, useEffect } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faStar } from "@fortawesome/free-solid-svg-icons";

const Layout = ({ children }) => {
  Axios.defaults.withCredentials = true;

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  const route = (url) => {
    Router.push(url);
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setName(response.data.user[0].username);
        setLoading(false);
      } else {
        Router.push("login");
      }
    });
  }, []);

  if (loading == false)
    return (
      <div className="text-white min-h-screen flex">
        <div className="min-h-screen py-3 bg-lighter2 relative text-center w-32 sm:w-64">
          <div className="p-4">
            <div className="text-2xl font-bold">Rocket Picks</div>
            <div className="mt-2 mb-2">Hello, {name}</div>
          </div>
          <button
            onClick={() => {
              route("/leaderboard");
            }}
            className="p-2 px-4 rounded-lg text-start
          text-white hover:bg-blue-600 duration-300 text-center text-sm sm:text-base sm:w-52 m-1"
          >
            <FontAwesomeIcon icon={faTrophy} className="mr-2" />
            Scores
          </button>
          <button
            onClick={() => {
              route("/picks");
            }}
            className="p-2 px-4 rounded-lg text-start
          text-white hover:bg-blue-600 duration-300 text-center text-sm sm:text-base sm:w-52 m-1"
          >
            <FontAwesomeIcon icon={faStar} className="mr-2" />
            Picks
          </button>
        </div>
        {children}
      </div>
    );
};

export default Layout;
