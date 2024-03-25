function Pokemon({ pokeURL, gameRefresh, pokeID }) {
  return (
    <div className="relative inline-block">
      <div className="w-48 h-48 bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
        <img
          src={pokeURL}
          onClick={() => {
            gameRefresh(pokeID);
          }}
          alt="Pokemon"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Pokemon;
