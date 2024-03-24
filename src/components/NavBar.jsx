import React from "react";

function NavBar({ score, highscore }) {
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
      </div>
    </div>
  );
}

export default NavBar;
