import React from "react";
import HelpModal from "./HelpModal";
import { useState } from "react";

function NavBar({ score, highscore }) {
  const [helpmodal, setHelpModal] = useState(false);

  const toggleHelpModal = () => {
    setHelpModal(!helpmodal);
  };
  return (
    <div
      className="flex justify-between items-center py-4 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
      style={{ marginTop: 0 }}
    >
      <div className="text-3xl font-bold tracking-wider">Memory Card Game</div>
      <div className="flex flex-col items-end">
        <p className="text-lg">
          Score: <span className="font-bold">{score}</span>
        </p>
        <p className="text-lg">
          Highscore: <span className="font-bold">{highscore}</span>
        </p>
        <button
          onClick={toggleHelpModal}
          className="mt-2 bg-red-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 shadow"
        >
          Rules
        </button>
        <HelpModal toggleHelpModal={toggleHelpModal} helpmodal={helpmodal} />
      </div>
    </div>
  );
}

export default NavBar;
