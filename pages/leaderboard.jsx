import Layout from "./components/Layout";
import Axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Leaderboard = () => {
  Axios.defaults.withCredentials = true;

  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [points, setPoints] = useState(0);
  const [last, setLast] = useState(0);
  const [message, setMessage] = useState("");

  const getData = () => {
    Axios.get("http://localhost:3001/names").then((response) => {
      if (response) {
        setScores(response.data);
        setLast(response.data[9].points);
      }
    });

    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setName(response.data.user[0].username);
        setPoints(response.data.user[0].points);
      }
    });
  };

  const diff = () => {
    if (points > last) {
      setMessage("Congratulations, you are top 10!");
    } else {
      setMessage("Keep going, you are almost there!");
    }
  };

  useEffect(() => {
    getData();
    diff();
    setLoading(false);
  }, []);

  if (loading == false)
    return (
      <div className="flex flex-col w-1/2 mx-auto text-lg text-xs sm:text-base">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="text-center my-12">
            <h1 className="text-4xl font-bold">The Scores</h1>
            <div className="mt-4">You have {points} points.</div>
            <h2 className="mt-2">{message}</h2>
          </div>
        </motion.div>
        <div className=""></div>
        <div className="my-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex p-3 rounded-t-lg bg-lighter2 shadow-2xl">
              <div className="p-2 sm:w-96 w-32">#</div>
              <div className="p-2 w-64">Name</div>
              <div className="p-2 flex w-full mr-2 sm:mr-8 justify-end">
                Points
              </div>
            </div>
          </motion.div>
          {scores.map((val, index) => {
            if (loading == false)
              return (
                <motion.div
                  initial={{ opacity: 0, y: 150 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index / 10 }}
                  key={index}
                >
                  <div className="flex p-3 rounded-b-lg bg-lighter2 shadow-2xl border-t border-gray-600">
                    <div className="p-2 sm:w-96 w-32">{index + 1}</div>
                    <div className="p-2 w-64">{val.username}</div>
                    <div className="p-2 flex w-full mr-2 sm:mr-8 justify-end">
                      {val.points}
                    </div>
                  </div>
                </motion.div>
              );
          })}
        </div>
      </div>
    );
};

Leaderboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Leaderboard;