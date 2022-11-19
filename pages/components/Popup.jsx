import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Popup = ({ visible, close, submitScores }) => {
  if (visible == true)
    return (
      <div className="fixed inset-0 flex text-white justify-center items-center bg-opacity-30 backdrop-blur-sm lg:ml-64">
        <div className="p-4 w-full max-w-sm rounded-lg border:none shadow-md bg-lighter2">
          <div className="flex flex-col justify-center items-center text-center">
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className="text-5xl mb-4 text-gray-600"
            />
            Are you sure you want to choose these teams? You will not be able to
            change them later.
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-600 w-32 rounded-lg mt-5 p-2
            text-white hover:bg-blue-700 duration-300 block text-center mx-4"
              onClick={submitScores}
            >
              Yes, I'm sure
            </button>
            <button
              className="border border-gray-600 w-32 rounded-lg mt-5 p-2
            text-white hover:border-red-700 duration-300 block text-center mx-4"
              onClick={close}
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    );
};

export default Popup;
