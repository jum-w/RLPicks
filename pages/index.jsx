import Image from "next/image";
import Navbar from "./components/Navbar";
import Feature from "./components/Feature";
import Rocket from "./components/rocket.png";
import winner from "./components/winnerslogo.png";
import leaderboard from "./components/leaderboardlogo.png";
import present from "./components/presentlogo.png";
import Router from "next/router";
import { useEffect, useState } from "react";
import Axios from "axios";

const title1 = "Pick your winners";
const desc1 =
  "Pick between your favourite teams and the outcomes of the games!";
const title2 = "Climb the leaderboard";
const desc2 = "Frequent correct choices will rise you through the ranks!";
const title3 = "Earn prizes";
const desc3 = "Join our discord to earn prizes for your rankings!";

export default function LandingPage() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoggedIn(true);
      }
    });
  }, []);

  const start = () => {
    if (loggedIn == true) {
      Router.push("/home");
    } else {
      Router.push("/register");
    }
  };

  return (
    <div className="text-white min-h-screen">
      <Navbar loggedIn={loggedIn} />

      <div className="text-6xl text-center mt-32 font-bold mb-20">
        <Image src={Rocket} width={150} height={150} />
        <h1 className="mt-4">Rocket Picks</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center p-8">
        <Feature img={winner} title={title1} desc={desc1} />
        <Feature img={leaderboard} title={title2} desc={desc2} />
        <Feature img={present} title={title3} desc={desc3} />
      </div>
      <button
        className="bg-blue-600 rounded-md p-2
            text-white hover:bg-blue-700 duration-300 w-32 flex justify-center text-center mx-auto mt-8"
        onClick={start}
      >
        Get started
      </button>
    </div>
  );
}
