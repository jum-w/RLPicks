import Image from "next/image";
import Feature from "./components/Feature";
import Rocket from "./components/rocket.png";
import winner from "./components/winnerslogo.png";
import leaderboard from "./components/leaderboardlogo.png";
import present from "./components/presentlogo.png";
import Router from "next/router";
import Axios from "axios";
import { motion } from "framer-motion";
import axios from "axios";

const title1 = "Pick your winners";
const desc1 =
  "Pick between your favourite teams and the outcomes of the games!";
const title2 = "Climb the leaderboard";
const desc2 = "Frequent correct choices will increase your ranking!";
const title3 = "Earn prizes";
const desc3 = "Join our discord to earn prizes for your rankings!";

export default function LandingPage() {
  Axios.defaults.withCredentials = true;

  const route = async (url) => {
    try {
      const response = await axios.get("https://api.rocketpicks.xyz/login");
      response.data.loggedIn ? Router.push("/picks") : Router.push(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-white min-h-screen">
      <div className="flex justify-end p-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <button
            className="bg-blue-600 rounded-lg p-2 hover:bg-blue-700 duration-300 block text-center w-24"
            onClick={() => {
              route("/login");
            }}
          >
            Login
          </button>
        </motion.div>
      </div>
      <div className="text-6xl text-center mt-32 font-bold mb-20">
        <motion.div
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image src={Rocket} width={150} height={150} />
        </motion.div>
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="mt-4">Rocket Picks</h1>
          <h4 className="mt-4 text-xl">Note: Website will not work due to closing the backend hosting, see here for <a href="https://github.com/jum-w/RLPicks" className="text-blue-500">github</a></h4>
        </motion.div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center p-8">
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Feature img={winner} title={title1} desc={desc1} />
        </motion.div>
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Feature img={leaderboard} title={title2} desc={desc2} />
        </motion.div>

        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Feature img={present} title={title3} desc={desc3} />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <button
          className="bg-blue-600 rounded-lg p-2 mb-4 hover:bg-blue-700 duration-300 w-32 flex justify-center text-center mx-auto mt-8"
          onClick={() => {
            route("/register");
          }}
        >
          Get started
        </button>
      </motion.div>
    </div>
  );
}
