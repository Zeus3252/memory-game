import { useState, useEffect } from "react";
import GameRender from "./components/GameRender";

function App() {
  const [pokemon, setPokemon] = useState([]);

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

  return (
    <div>
      <GameRender pokemon={pokemon} setPokemon={setPokemon}></GameRender>
    </div>
  );
}

export default App;
