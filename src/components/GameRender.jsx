import { useState } from "react";
import NavBar from "./NavBar";
import Modal from "./Modal";
import Pokemon from "./Pokemon";
import HelpModal from "./GameHelp";

function shufflePokemon(array) {
  return array.sort(() => Math.random() - 0.5);
}

function GameRender({ pokemon, setPokemon }) {
  const [modal, setModal] = useState(false);
  const [pokeID, setPokeID] = useState([]);
  const [gameEnd, setGameEnd] = useState("");
  const [score, setScore] = useState(null);
  const [highscore, setHighScore] = useState(null);

  function gameRefresh(newPokeID) {
    if (pokeID.length === 11) {
      setGameEnd("You Win");
      toggleModal();
      if (score > highscore) {
        setHighScore(score);
      }
    }

    if (!pokeID.includes(newPokeID)) {
      setPokeID((prevState) => [...prevState, newPokeID]);
      setScore((prevState) => prevState + 1);
      setPokemon(pokemon);
    } else if (pokeID.includes(newPokeID)) {
      setGameEnd("You Lose");
      toggleModal();
      if (score > highscore) {
        setHighScore(score);
      }
    }
  }
  const toggleModal = () => {
    setModal(!modal);
  };

  const shuffledPokemon = shufflePokemon([...pokemon]);
  return (
    <>
      <NavBar score={score} highscore={highscore} />
      <br />
      <br />
      <Modal
        modal={modal}
        toggleModal={toggleModal}
        gameEnd={gameEnd}
        setGameEnd={setGameEnd}
        setPokeID={setPokeID}
        setScore={setScore}
      />

      <div className="pokemonContainer">
        <div className="pokemonDisplay">
          {shuffledPokemon &&
            shuffledPokemon.map((item) => (
              <Pokemon
                key={item.id}
                pokeID={item.id}
                pokeURL={item.front_default}
                gameRefresh={gameRefresh}
              />
            ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded"
          onClick={() => {
            setGameEnd("");
            setScore(null);
            setPokeID([]);
            setGameOver((prevState) => prevState + 1);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}
export default GameRender;
