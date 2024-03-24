import React from "react";

function Modal({
  modal,
  gameEnd,
  toggleModal,
  setGameEnd,
  setPokeID,
  setScore,
}) {
  return (
    <div
      className={`${
        modal
          ? "fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
          : "hidden"
      }`}
    >
      <div className="bg-gray-900 p-6 text-white rounded-lg shadow-xl border border-blue-400">
        <p className="text-xl font-bold text-center mb-4">{gameEnd}</p>

        <button
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-110"
          onClick={() => {
            setGameEnd("");
            setScore(null);
            setPokeID([]);
            toggleModal();
          }}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default Modal;
