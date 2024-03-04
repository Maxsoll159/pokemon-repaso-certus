

export const FIlterPokemon = ({filterPokemon}) => {


  const onFilterPokemon = (e) => {
    const namePokemon = e.target.value.toLowerCase()
    console.log("name", namePokemon)
    filterPokemon(namePokemon)
  };

  return <div>
    <input 
    onChange={onFilterPokemon}
    type="text" 
    className="p-2 rounded-lg my-5 outline-none border hover:border-blue-500 w-full"
    placeholder="Buscar pokemon....." />
  </div>;
};
