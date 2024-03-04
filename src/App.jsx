import { useEffect, useRef, useState } from "react";
import { CardPokemon, FIlterPokemon, Loading, Modal } from "./components";
import { getAllPokemon } from "./actions/pokemon.api";


function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const pokemonsRef = useRef()

  useEffect(() => {
    setLoading(true);
    getAllPokemon().then((res) => {
      if (res) {
        setPokemons(res);
        pokemonsRef.current = res
        setLoading(false);
      }
    });
  }, []);

  const filterPokemon = (filterName) => {
    if (filterName.length > 0) {
      const filteredPokemons =[...pokemons].filter((pokemon) =>
        pokemon.name.toLowerCase().includes(filterName.toLowerCase())
      );
      setPokemons(filteredPokemons);
    } else {
      setPokemons(pokemonsRef.current);
    }
  };



  return (
    <main className="bg-fondo w-full pb-20 p-5">
      <article className="mx-auto container">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="Poke Api"
          className="mx-auto py-10"
        />

        <FIlterPokemon filterPokemon={filterPokemon} />

        {loading && <Loading />}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {pokemons.map((pokemon) => (
            <CardPokemon key={pokemon.id} {...pokemon} />
          ))}
        </div>
     
      </article>
    </main>
  );
}

export default App;
