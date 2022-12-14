import Layout from "./components/Layout";
import { useState, useEffect } from "react";
import Axios from "axios";
import Teams from "./components/Teams";
import Picked from "./components/Picked";
import Popup from "./components/Popup";
import { motion } from "framer-motion";
import axios from "axios";

const Picks = () => {
  Axios.defaults.withCredentials = true;

  const [w1, setW1] = useState("");
  const [w2, setW2] = useState("");
  const [w3, setW3] = useState("");
  const [w4, setW4] = useState("");
  const [w5, setW5] = useState("");
  const [w6, setW6] = useState("");

  const [winner, setWinner] = useState("");
  const [name, setName] = useState("");
  const [picked, setPicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pickable, setPickable] = useState(false);

  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [team3, setTeam3] = useState("");
  const [team4, setTeam4] = useState("");
  const [team5, setTeam5] = useState("");
  const [team6, setTeam6] = useState("");
  const [team7, setTeam7] = useState("");
  const [team8, setTeam8] = useState("");

  const getUser = async () => {
    try {
      const response = await axios.get("https://api.rocketpicks.xyz/login");
      setName(response.data.user[0].username);
    } catch (error) {
      console.log(error);
    }
  };

  const getTeams = async () => {
    try {
      const response = await axios.get("https://api.rocketpicks.xyz/teams");
      if (!response.data[0]) {
        setPickable(false);
        return;
      }
      setPickable(true);
      const { team1, team2, team3, team4, team5, team6, team7, team8 } =
        response.data[0];
      setTeam1(team1);
      setTeam2(team2);
      setTeam3(team3);
      setTeam4(team4);
      setTeam5(team5);
      setTeam6(team6);
      setTeam7(team7);
      setTeam8(team8);
    } catch (error) {
      console.log(error);
    }
  };

  const checkTeams = async () => {
    try {
      const response = await axios.post("https://api.rocketpicks.xyz/check", {
        username: name,
      });
      response.data[0].winner1 ? setPicked(true) : setPicked(false);
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
    checkTeams();
    getTeams();
    setLoading(false);
  });

  const submitScores = async (e) => {
    e.preventDefault();
    if (winner.length) {
      try {
        const response = axios.post("https://api.rocketpicks.xyz/results", {
          username: name,
          score1: w1,
          score2: w2,
          score3: w3,
          score4: w4,
          score5: w5,
          score6: w6,
          score7: winner,
        });

        response ? setPicked(true) : setPicked(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      setError(true);
    }
  };

  const checkPicks = () => {
    if (
      !w1.length ||
      !w2.length ||
      !w3.length ||
      !w4.length ||
      !w5.length ||
      !w6.length ||
      !winner.length
    ) {
      setError(true);
    } else {
      setError(false);
      setVisible(true);
    }
  };

  const close = () => setVisible(false);

  if (picked === false && loading === false && pickable === true)
    return (
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="text-center my-12 mx-4">
            <h1 className="text-4xl font-bold">The Teams</h1>

            <div className="mt-4">
              Each correct pick is 5 points, regardless of opponent, you will
              still get 5 points if your chosen team wins.
            </div>
            <div className="mt-2">
              A correct Grand Finals winner will result in 10 points.
            </div>
            <div className="mt-2">Good luck!</div>
          </div>
        </motion.div>
        <div className="flex justify-center mx-auto">
          <div className="flex 2xl:flex-row flex-col h-max items-center">
            <div className="text-lg w-80 justify-between flex flex-col p-5 disabled">
              <motion.div
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <h1 className="text-center">Quarter finals</h1>
                {/* Quarter Finals */}
                <div className="mb-8">
                  <div
                    onClick={() => {
                      w5 === team2 ? setW5("") : setW5(w5);
                      setW1(team1);
                    }}
                  >
                    <Teams team1={team1} />
                  </div>
                  <div
                    onClick={() => {
                      w5 === team1 ? setW5("") : setW5(w5);
                      setW1(team2);
                    }}
                  >
                    <Teams team1={team2} />
                  </div>
                </div>
                <div className="mb-8">
                  <div
                    onClick={() => {
                      w5 === team4 ? setW5("") : setW5(w5);
                      setW2(team3);
                    }}
                  >
                    <Teams team1={team3} />
                  </div>
                  <div
                    onClick={() => {
                      w5 === team3 ? setW5("") : setW5(w5);
                      setW2(team4);
                    }}
                  >
                    <Teams team1={team4} />
                  </div>
                </div>
                <div className="mb-8">
                  <div
                    onClick={() => {
                      w6 === team6 ? setW6("") : setW6(w6);
                      setW3(team5);
                    }}
                  >
                    <Teams team1={team5} />
                  </div>
                  <div
                    onClick={() => {
                      w6 === team5 ? setW6("") : setW6(w6);
                      setW3(team6);
                    }}
                  >
                    <Teams team1={team6} />
                  </div>
                </div>
                <div className="">
                  <div
                    onClick={() => {
                      w6 === team8 ? setW6("") : setW6(w6);
                      setW4(team7);
                    }}
                  >
                    <Teams team1={team7} />
                  </div>
                  <div
                    onClick={() => {
                      w6 === team7 ? setW6("") : setW6(w6);
                      setW4(team8);
                    }}
                  >
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
                  <div
                    onClick={() => {
                      if (winner == w2) {
                        setWinner("");
                      }
                      setW5(w1);
                    }}
                  >
                    <Teams team1={w1} />
                  </div>
                  <div
                    onClick={() => {
                      if (winner == w1) {
                        setWinner("");
                      }
                      setW5(w2);
                    }}
                  >
                    <Teams team1={w2} />
                  </div>
                </div>
                <div>
                  <div
                    onClick={() => {
                      if (winner == w4) {
                        setWinner("");
                      }
                      setW6(w3);
                    }}
                  >
                    <Teams team1={w3} />
                  </div>
                  <div
                    onClick={() => {
                      if (winner == w3) {
                        setWinner("");
                      }
                      setW6(w4);
                    }}
                  >
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
                  <div
                    onClick={() => {
                      setWinner(w5);
                    }}
                  >
                    <Teams team1={w5} />
                  </div>
                  <div
                    onClick={() => {
                      setWinner(w6);
                    }}
                  >
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
                <div>
                  <div>
                    <Teams team1={winner} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            className="bg-blue-600 rounded-lg p-3 mb-4
            text-white hover:bg-blue-700 duration-300 w-48 flex justify-center text-center mx-auto mt-8"
            onClick={checkPicks}
          >
            Confirm Picks
          </button>
        </motion.div>
        {error == true && (
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mt-8 w-72 mb-4 mx-auto bg-red-600 p-3 items-center rounded-lg text-white text-center justify-center flex flex-col">
              <div className="flex">You haven't completed your picks!</div>
            </div>
          </motion.div>
        )}
        <Popup visible={visible} close={close} submitScores={submitScores} />
      </div>
    );
  else if (loading === false && picked === true)
    return (
      <Picked
        name={name}
        team1={team1}
        team2={team2}
        team3={team3}
        team4={team4}
        team5={team5}
        team6={team6}
        team7={team7}
        team8={team8}
      />
    );
  else if (loading === false && pickable === false && picked === false) {
    return (
      <div className="text-center my-12 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-4xl font-bold">The Teams</h1>

          <div className="mt-4">
            This is where you will be able to choose your teams.
          </div>
          <div className="mt-2">
            The top 8 have not yet been decided, come back soon!
          </div>
        </motion.div>
      </div>
    );
  }
};

Picks.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Picks;
