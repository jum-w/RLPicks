import Axios from "axios";
import { useEffect, useState } from "react";
import Teams from "./Teams";
import { motion } from "framer-motion";
import axios from "axios";

const Picked = ({
  name,
  team1,
  team2,
  team3,
  team4,
  team5,
  team6,
  team7,
  team8,
}) => {
  Axios.defaults.withCredentials = true;

  const [w1, setW1] = useState("");
  const [w2, setW2] = useState("");
  const [w3, setW3] = useState("");
  const [w4, setW4] = useState("");
  const [w5, setW5] = useState("");
  const [w6, setW6] = useState("");
  const [w7, setW7] = useState("");

  const setTeams = async () => {
    try {
      const response = await axios.post("https://api.rocketpicks.xyz/teams", {
        username: name,
      });
      if (!response.data[0]) return;
      const { winner1, winner2, winner3, winner4, winner5, winner6, winner7 } =
        response.data[0];
      setW1(winner1);
      setW2(winner2);
      setW3(winner3);
      setW4(winner4);
      setW5(winner5);
      setW6(winner6);
      setW7(winner7);
    } catch (error) {}
  };

  useEffect(() => {
    setTeams();
  });

  return (
    <div className="mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="text-center my-12">
          <h1 className="text-4xl font-bold">The Teams</h1>
          <div className="mt-4">You have already chosen your picks!</div>
          <div className="mt-2">
            You will not be able to change them, and they will be refreshed when
            the event is over.
          </div>
        </div>
      </motion.div>
      <div className="flex justify-center mx-auto opacity-50">
        <div className="flex 2xl:flex-row flex-col h-max items-center">
          <div className="text-lg w-80 justify-between flex flex-col p-5">
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <h1 className="text-center">Quarter finals</h1>
              {/* Quarter Finals */}
              <div className="mb-8">
                <div>
                  <Teams team1={team1} />
                </div>
                <div>
                  <Teams team1={team2} />
                </div>
              </div>
              <div className="mb-8">
                <div>
                  <Teams team1={team3} />
                </div>
                <div>
                  <Teams team1={team4} />
                </div>
              </div>
              <div className="mb-8">
                <div>
                  <Teams team1={team5} />
                </div>
                <div>
                  <Teams team1={team6} />
                </div>
              </div>
              <div className="">
                <div>
                  <Teams team1={team7} />
                </div>
                <div>
                  <Teams team1={team8} />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="text-lg w-80 justify-between flex flex-col p-5">
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <h1 className="text-center">Semi Finals</h1>
              {/* Semi Finals */}
              <div className="mb-8">
                <div>
                  <Teams team1={w1} />
                </div>
                <div>
                  <Teams team1={w2} />
                </div>
              </div>
              <div className="">
                <div>
                  <Teams team1={w3} />
                </div>
                <div>
                  <Teams team1={w4} />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="text-lg w-80 justify-between flex flex-col p-5">
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <h1 className="text-center">Grand Finals</h1>
              {/* Grand Finals */}
              <div className="">
                <div>
                  <Teams team1={w5} />
                </div>
                <div>
                  <Teams team1={w6} />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="text-lg w-80 justify-between flex flex-col p-5">
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <h1 className="text-center">Your Winner</h1>
              {/* Winner */}
              <div className="">
                <div>
                  <Teams team1={w7} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Picked;
