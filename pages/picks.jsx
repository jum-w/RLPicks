import Layout from "./components/Layout";
import { useState, useEffect } from "react";
import Axios from "axios";
import Teams from "./components/Teams";
import Picked from "./components/Picked";
import Popup from "./components/Popup";
import { motion } from "framer-motion";

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

  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
  const [t3, setT3] = useState("");
  const [t4, setT4] = useState("");
  const [t5, setT5] = useState("");
  const [t6, setT6] = useState("");
  const [t7, setT7] = useState("");
  const [t8, setT8] = useState("");

  useEffect(() => {
    Axios.get("https://api.rocketpicks.xyz/login", {
      headers: { "Access-Control-Allow-Origin": "https://api.rocketpicks.xyz" },
    }).then((response) => {
      if (response.data.loggedIn === true) {
        setName(response.data.user[0].username);
      }
    });

    Axios.get("https://api.rocketpicks.xyz/teams", {
      headers: { "Access-Control-Allow-Origin": "https://api.rocketpicks.xyz" },
    }).then((response) => {
      console.log(response);
      if (response.data[0] !== undefined) {
        setT1(response.data[0].team1);
        setT2(response.data[0].team2);
        setT3(response.data[0].team3);
        setT4(response.data[0].team4);
        setT5(response.data[0].team5);
        setT6(response.data[0].team6);
        setT7(response.data[0].team7);
        setT8(response.data[0].team8);
        setPickable(true);
      }
    });

    setLoading(false);
  }, []);

  Axios.post("https://api.rocketpicks.xyz/check", {
    headers: { "Access-Control-Allow-Origin": "https://api.rocketpicks.xyz" },
    username: name,
  }).then((response) => {
    if (!response.data[0] && !response.data[0].winner1) {
      setPicked(true);
      setLoading(false);
    } else {
      setLoading(false);
    }
  });

  const submitScores = (e) => {
    e.preventDefault();
    if (winner.length) {
      Axios.post("https://api.rocketpicks.xyz/results", {
        headers: {
          "Access-Control-Allow-Origin": "https://api.rocketpicks.xyz",
        },
        username: name,
        score1: w1,
        score2: w2,
        score3: w3,
        score4: w4,
        score5: w5,
        score6: w6,
        score7: winner,
      }).then((response) => {
        if (response) {
          setPicked(true);
        }
      });
    } else {
      setError(true);
    }
  };

  const close = () => setVisible(false);

  if (picked == false && loading == false && pickable == false)
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
                      setW1(t1);
                    }}
                  >
                    <Teams t1={t1} />
                  </div>
                  <div
                    onClick={() => {
                      setW1(t2);
                    }}
                  >
                    <Teams t1={t2} />
                  </div>
                </div>
                <div className="mb-8">
                  <div
                    onClick={() => {
                      setW2(t3);
                    }}
                  >
                    <Teams t1={t3} />
                  </div>
                  <div
                    onClick={() => {
                      setW2(t4);
                    }}
                  >
                    <Teams t1={t4} />
                  </div>
                </div>
                <div className="mb-8">
                  <div
                    onClick={() => {
                      setW3(t5);
                    }}
                  >
                    <Teams t1={t5} />
                  </div>
                  <div
                    onClick={() => {
                      setW3(t6);
                    }}
                  >
                    <Teams t1={t6} />
                  </div>
                </div>
                <div className="">
                  <div
                    onClick={() => {
                      setW4(t7);
                    }}
                  >
                    <Teams t1={t7} />
                  </div>
                  <div
                    onClick={() => {
                      setW4(t8);
                    }}
                  >
                    <Teams t1={t8} />
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
                    <Teams t1={w1} />
                  </div>
                  <div
                    onClick={() => {
                      if (winner == w1) {
                        setWinner("");
                      }
                      setW5(w2);
                    }}
                  >
                    <Teams t1={w2} />
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
                    <Teams t1={w3} />
                  </div>
                  <div
                    onClick={() => {
                      if (winner == w3) {
                        setWinner("");
                      }
                      setW6(w4);
                    }}
                  >
                    <Teams t1={w4} />
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
                    <Teams t1={w5} />
                  </div>
                  <div
                    onClick={() => {
                      setWinner(w6);
                    }}
                  >
                    <Teams t1={w6} />
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
                    <Teams t1={winner} />
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
            onClick={() => {
              if (winner.length == 0) {
                setError(true);
              } else {
                setError(false);
                setVisible(true);
              }
            }}
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
            <div className="mt-8 w-64  mb-4 mx-auto bg-red-600 p-3 items-center rounded-lg text-white text-center justify-center flex flex-col">
              <div className="flex">Your picks are invalid! Try again.</div>
            </div>
          </motion.div>
        )}
        <Popup visible={visible} close={close} submitScores={submitScores} />
      </div>
    );
  else if (loading == false && picked == true && pickable == true)
    return (
      <Picked
        name={name}
        t1={t1}
        t2={t2}
        t3={t3}
        t4={t4}
        t5={t5}
        t6={t6}
        t7={t7}
        t8={t8}
      />
    );
  else if (loading == false && pickable == false) {
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
