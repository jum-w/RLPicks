import axios from "axios";
import Router from "next/router";
import { useState, useEffect } from "react";
import Axios from "axios";

const Navbar = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      console.log(response.data.user[0].username);
      setName(response.data.user[0].username);
    });
  }, []);

  return (
    <div className="p-3">
      <div className="">{name}</div>
      <div className="">points</div>
      <button
        className="bg-blue-600 rounded-md p-1
            text-white hover:bg-blue-700 duration-300 block text-center w-24"
      >
        Login
      </button>
      <button
        className="bg-blue-600 rounded-md p-1
            text-white hover:bg-blue-700 duration-300 block text-center w-24"
      >
        Login
      </button>
      <button
        className="bg-blue-600 rounded-md p-1
            text-white hover:bg-blue-700 duration-300 block text-center w-24"
      >
        Login
      </button>
    </div>
  );
};

export default Navbar;
