import Layout from "./components/Layout";
import { useState, useEffect } from "react";

const Picks = () => {
  const [w1, setW1] = useState("");
  const [w2, setW2] = useState("");
  const [w3, setW3] = useState("");
  const [w4, setW4] = useState("");
  const [w5, setW5] = useState("");
  const [w6, setW6] = useState("");
  const [winner, setWinner] = useState("");

  const [s1, setS1] = useState(0);
  const [s2, setS2] = useState(0);
  const [s3, setS3] = useState(0);
  const [s4, setS4] = useState(0);
  const [s5, setS5] = useState(0);
  const [s6, setS6] = useState(0);
  const [s7, setS7] = useState(0);
  const [s8, setS8] = useState(0);
  const [s9, setS9] = useState(0);
  const [s10, setS10] = useState(0);
  const [s11, setS11] = useState(0);
  const [s12, setS12] = useState(0);
  const [s13, setS13] = useState(0);
  const [s14, setS14] = useState(0);

  const t1 = "1",
    t2 = "2",
    t3 = "3",
    t4 = "4",
    t5 = "5",
    t6 = "6",
    t7 = "7",
    t8 = "8";

  const checkG1 = () => {
    if (s1 > s2 && s1 == 4 && s2 >= 0 && s2 < 4) {
      setW1(t1);
    } else if (s2 > s1 && s2 == 4 && s1 >= 0 && s1 < 4) {
      setW1(t2);
    } else {
      setW1("");
    }
  };

  const checkG2 = () => {
    if (s3 > s4 && s3 == 4 && s4 >= 0 && s4 < 4) {
      setW2(t3);
    } else if (s4 > s3 && s4 == 4 && s3 >= 0 && s3 < 4) {
      setW2(t4);
    } else {
      setW2("");
    }
  };

  const checkG3 = () => {
    if (s5 > s6 && s5 == 4 && s6 >= 0 && s6 < 4) {
      setW3(t5);
    } else if (s6 > s5 && s6 == 4 && s5 >= 0 && s5 < 4) {
      setW3(t6);
    } else {
      setW3("");
    }
  };

  const checkG4 = () => {
    if (s7 > s8 && s7 == 4 && s8 >= 0 && s8 < 4) {
      setW4(t7);
    } else if (s8 > s7 && s8 == 4 && s7 >= 0 && s7 < 4) {
      setW4(t8);
    } else {
      setW4("");
    }
  };

  const checkG5 = () => {
    if (s9 > s10 && s9 == 4 && s10 >= 0 && s10 < 4) {
      setW5(w1);
    } else if (s10 > s9 && s10 == 4 && s9 >= 0 && s9 < 4) {
      setW5(w2);
    } else {
      setW5("");
    }
  };

  const checkG6 = () => {
    if (s11 > s12 && s11 == 4 && s12 >= 0 && s12 < 4) {
      setW6(w3);
    } else if (s12 > s11 && s12 == 4 && s11 >= 0 && s11 < 4) {
      setW6(w4);
    } else {
      setW6("");
    }
  };

  const checkWinner = () => {
    if (s13 > s14 && s13 == 4 && s14 >= 0 && s14 < 4) {
      setWinner(w5);
    } else if (s14 > s13 && s14 == 4 && s13 >= 0 && s13 < 4) {
      setWinner(w6);
    } else {
      setWinner("");
    }
  };

  const checkGames = () => {
    checkG1();
    checkG2();
    checkG3();
    checkG4();
    checkG5();
    checkG6();
    checkWinner();
  };

  useEffect(() => {
    checkGames();
  });

  return (
    <div className="min-h-screen ml-2 sm:ml-32 flex justify-center">
      <form>
        <div className="flex lg:flex-row flex-col h-max items-center">
          <div className="text-lg w-80 justify-between flex flex-col p-5">
            <h1 className="text-center">Quarter finals</h1>
            {/* Quarter Finals */}
            <div className="flex justify-between bg-lighter2 rounded-md">
              <label className="text-center w-full p-2">{t1}</label>
              <input
                maxLength={1}
                onChange={(e) => {
                  setS1(e.target.value);
                }}
                className="bg-blue-800 w-11 text-center p-2 block focus:border-blue-500 focus:outline-none rounded-r-md"
              />
            </div>
            <div className="flex justify-between bg-lighter2 rounded-md mb-8">
              <label className="text-center w-full p-2">{t2}</label>
              <input
                onChange={(e) => {
                  setS2(e.target.value);
                }}
                maxLength={1}
                className="bg-orange-700 w-11 text-center p-2 focus:border-blue-500 focus:outline-none rounded-r-md"
              />
            </div>
            <div className="flex justify-between bg-lighter2 rounded-md">
              <label className="text-center w-full p-2">{t3}</label>
              <input
                maxLength={1}
                onChange={(e) => {
                  setS3(e.target.value);
                }}
                className="bg-blue-800 w-11 text-center p-2 block focus:border-blue-500 focus:outline-none rounded-r-md"
              />
            </div>
            <div className="flex justify-between bg-lighter2 rounded-md mb-8">
              <label className="text-center w-full p-2">{t4}</label>
              <input
                onChange={(e) => {
                  setS4(e.target.value);
                }}
                maxLength={1}
                className="bg-orange-700 w-11 text-center p-2 focus:border-blue-500 focus:outline-none rounded-r-md"
              />
            </div>
            <div className="flex justify-between bg-lighter2 rounded-md">
              <label className="text-center w-full p-2">{t5}</label>
              <input
                maxLength={1}
                onChange={(e) => {
                  setS5(e.target.value);
                }}
                className="bg-blue-800 w-11 text-center p-2 block focus:border-blue-500 focus:outline-none rounded-r-md"
              />
            </div>
            <div className="flex justify-between bg-lighter2 rounded-md mb-8">
              <label className="text-center w-full p-2">{t6}</label>
              <input
                onChange={(e) => {
                  setS6(e.target.value);
                }}
                maxLength={1}
                className="bg-orange-700 w-11 text-center p-2 focus:border-blue-500 focus:outline-none rounded-r-md"
              />
            </div>
            <div className="flex justify-between bg-lighter2 rounded-md">
              <label className="text-center w-full p-2">{t7}</label>
              <input
                maxLength={1}
                onChange={(e) => {
                  setS7(e.target.value);
                }}
                className="bg-blue-800 w-11 text-center p-2 block focus:border-blue-500 focus:outline-none rounded-r-md"
              />
            </div>
            <div className="flex justify-between bg-lighter2 rounded-md mb-8">
              <label className="text-center w-full p-2">{t8}</label>
              <input
                onChange={(e) => {
                  setS8(e.target.value);
                }}
                maxLength={1}
                className="bg-orange-700 w-11 text-center p-2 focus:border-blue-500 focus:outline-none rounded-r-md"
              />
            </div>
          </div>
          <div className="text-lg w-80 justify-between flex flex-col p-5">
            <h1 className="text-center">Semi Finals</h1>
            {/* Semi Finals */}
            <div className="flex justify-between bg-lighter2 rounded-md">
              <label className="text-center w-full p-2">{w1}</label>
              <input
                maxLength={1}
                onChange={(e) => {
                  setS9(e.target.value);
                }}
                className="bg-blue-800 w-11 text-center p-2 block focus:border-blue-500 focus:outline-none rounded-r-md"
              />
            </div>
            <div className="flex justify-between bg-lighter2 rounded-md mb-4 lg:mb-10">
              <label className="text-center w-full p-2">{w2}</label>
              <input
                onChange={(e) => {
                  setS10(e.target.value);
                }}
                maxLength={1}
                className="bg-orange-700 w-11 text-center p-2 focus:border-blue-500 focus:outline-none rounded-r-md"
              />
            </div>
            <div className="flex justify-between bg-lighter2 rounded-md mt-4 lg:mt-10">
              <label className="text-center w-full p-2">{w3}</label>
              <input
                maxLength={1}
                onChange={(e) => {
                  setS11(e.target.value);
                }}
                className="bg-blue-800 w-11 text-center p-2 block focus:border-blue-500 focus:outline-none rounded-r-md"
              />
            </div>
            <div className="flex justify-between bg-lighter2 rounded-md mb-8">
              <label className="text-center w-full p-2">{w4}</label>
              <input
                onChange={(e) => {
                  setS12(e.target.value);
                }}
                maxLength={1}
                className="bg-orange-700 w-11 text-center p-2 focus:border-blue-500 focus:outline-none rounded-r-md"
              />
            </div>
          </div>
          <div className="text-lg w-80 justify-between flex flex-col p-5">
            <h1 className="text-center">Grand Finals</h1>
            {/* Grand Finals */}
            <div className="flex justify-between bg-lighter2 rounded-md">
              <label className="text-center w-full p-2">{w5}</label>
              <input
                maxLength={1}
                onChange={(e) => {
                  setS13(e.target.value);
                }}
                className="bg-blue-800 w-11 text-center p-2 block focus:border-blue-500 focus:outline-none rounded-r-md"
              />
            </div>
            <div className="flex justify-between bg-lighter2 rounded-md mb-8">
              <label className="text-center w-full p-2">{w6}</label>
              <input
                onChange={(e) => {
                  setS14(e.target.value);
                }}
                maxLength={1}
                className="bg-orange-700 w-11 text-center p-2 focus:border-blue-500 focus:outline-none rounded-r-md"
              />
            </div>
          </div>
        </div>
        <div className="">{winner}</div>
        <button>hi</button>
      </form>
    </div>
  );
};

Picks.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Picks;
