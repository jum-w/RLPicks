import Axios from "axios";
import { useEffect, useState } from "react";
import Teams from "./Teams";
import { motion } from "framer-motion";

const Picked = ({ name, t1, t2, t3, t4, t5, t6, t7, t8, picked }) => {
  Axios.defaults.withCredentials = true;

  const [w1, setW1] = useState("");
  const [w2, setW2] = useState("");
  const [w3, setW3] = useState("");
  const [w4, setW4] = useState("");
  const [w5, setW5] = useState("");
  const [w6, setW6] = useState("");
  const [w7, setW7] = useState("");

  useEffect(() => {
    Axios.post("https://api.rocketpicks.xyz/teams", {
      username: name,
    }).then((response) => {
      if (response.data[0] !== undefined) {
        setW1(response.data[0].winner1);
        setW2(response.data[0].winner2);
        setW3(response.data[0].winner3);
        setW4(response.data[0].winner4);
        setW5(response.data[0].winner5);
        setW6(response.data[0].winner6);
        setW7(response.data[0].winner7);
      }
    });
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
                  <Teams t1={t1} />
                </div>
                <div>
                  <Teams t1={t2} />
                </div>
              </div>
              <div className="mb-8">
                <div>
                  <Teams t1={t3} />
                </div>
                <div>
                  <Teams t1={t4} />
                </div>
              </div>
              <div className="mb-8">
                <div>
                  <Teams t1={t5} />
                </div>
                <div>
                  <Teams t1={t6} />
                </div>
              </div>
              <div className="">
                <div>
                  <Teams t1={t7} />
                </div>
                <div>
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
                <div>
                  <Teams t1={w1} />
                </div>
                <div>
                  <Teams t1={w2} />
                </div>
              </div>
              <div className="">
                <div>
                  <Teams t1={w3} />
                </div>
                <div>
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
                <div>
                  <Teams t1={w5} />
                </div>
                <div>
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
              <div className="">
                <div>
                  <Teams t1={w7} />
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
