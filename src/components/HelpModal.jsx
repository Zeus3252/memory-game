import React from "react";

function HelpModal({ helpmodal, toggleHelpModal }) {
  return (
    <div
      className={`${
        helpmodal
          ? "fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
          : "hidden"
      }`}
    >
      <div className="w-[29%] bg-gray-900 p-6 text-white rounded-lg shadow-xl border border-blue-400 text-center">
        <p>
          <i>
            Memory-Card is an engaging online game designed to test your memory
            and attention to detail.
          </i>{" "}
          <br /> <br />
          In each round, your goal is to pick a card that you haven't selected
          before.
          <br /> <br />
          The game ends if you select a card you've already chosen or if you
          manage to select all unique cards without repeating, leading to a win.
        </p>
        <div className="mt-4 flex justify-center">
          <button
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-110"
            onClick={toggleHelpModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default HelpModal;
