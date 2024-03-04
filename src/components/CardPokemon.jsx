import { pokemonColors } from "../config/pokemon-colors";
import { Modal } from "./Modal";

export const CardPokemon = ({ name, id, types }) => {
  return (
    <div className="relative overflow-hidden">
      <div
        className={`w-full rounded-md h-[250px] overflow-hidden p-7 transition-all`}
        style={{ background: pokemonColors[types[0]?.type?.name] }}
      >
        <img
          src="/img/logo-pokebola.png"
          alt=""
          className="opacity-30 absolute -right-0 -bottom-10 transform translate-x-1/4 translate-y-1/4 "
        />
        <div className="flex items-center justify-between text-white text-xl font-bold">
          <h1 className="capitalize">{name}</h1>
          <h2 className="text-5xl absolute right-5 opacity-50">#{id}</h2>
        </div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
          alt=""
          width={100}
          height={100}
          className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 img-poke"
        />
        <Modal id={id} />
      </div>
    </div>
  );
};
