import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Pokemon from "./components/Pokemon";
import Modal from "./components/Modal";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokeID, setPokeID] = useState([]);
  const [gameEnd, setGameEnd] = useState("");
  const [score, setScore] = useState(null);
  const [highscore, setHighScore] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    try {
      const getData = async () => {
        let i = 1;
        let newPokemon = [];
        while (i <= 12) {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${i}/`
          );
          const result = await response.json();
          newPokemon.push({ ...result.sprites, id: i });
          i++;
        }
        setPokemon(newPokemon);
      };
      getData();
    } catch (error) {
      console.error(error);
    }
  }, []);



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

  function shufflePokemon(array) {
    return array.sort(() => Math.random() - 0.5);
  }
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
      <div className="mt-12 flex justify-center">
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

export default App;
