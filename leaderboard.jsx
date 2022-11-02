import Layout from "./components/Layout";
import Axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Leaderboard = () => {
  Axios.defaults.withCredentials = true;

  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("http://localhost:3001/names").then((response) => {
      if (response) {
        setScores(response.data);
        setLoading(false);
      }
    });
  }, []);

  return (
    <div className="flex flex-col justify-center w-1/2 mx-auto text-lg text-xs sm:text-base">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex p-3 rounded-t-lg bg-lighter2 shadow-2xl">
          <div className="p-2 sm:mr-32 mr-8">#</div>
          <div className="p-2 w-64">Name</div>
          <div className="p-2 flex w-full mr-2 sm:mr-8 justify-end">Points</div>
        </div>
      </motion.div>
      {scores.map((val, key) => {
        if (loading == false)
          return (
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + key / 10 }}
            >
              <div
                className="flex p-3 rounded-b-lg bg-lighter2 shadow-2xl border-t border-gray-600"
                key={key}
              >
                <div className="p-2 sm:mr-32 mr-8">{key + 1}</div>
                <div className="p-2 w-64">{val.username}</div>
                <div className="p-2 flex w-full mr-2 sm:mr-8 justify-end">
                  {val.points}
                </div>
              </div>
            </motion.div>
          );
      })}
    </div>
  );
};

Leaderboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Leaderboard;
