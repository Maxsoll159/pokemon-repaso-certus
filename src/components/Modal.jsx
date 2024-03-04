import { useEffect, useState } from "react";
import { getPokemonId } from "../actions/pokemon.api";

export const Modal = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pokemon, setPokemon] = useState();
  const [rotateY, setRotateY] = useState(true);

  const openModal = () => {
    getPokemonId(id).then((res) => setPokemon(res));
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón para abrir el modal */}
      <button
        className="bg-violet-500 text-white rounded-md px-4 py-2  transition absolute bottom-5 left-[35%]"
        onClick={openModal}
      >
        Ver mas
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[999999] inset-0">
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
            onClick={closeModal}
          />

          {pokemon ? (
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md z-50">
              <h2 className="text-2xl font-bold mb-4">
                Informacion del pokemon #{id}
              </h2>
              <img
                src={
                  rotateY
                    ? pokemon.sprites.front_default
                    : pokemon.sprites.back_default
                }
                alt=""
                width={200}
                className="transition-all mx-auto img-poke"
                height={200}
                style={{
                  transform: `rotateY(${rotateY ? "180deg" : "0"})`,
                  transition: "transform 0.5s",
                }}
              />

              <button
                className="bg-green-500 text-white mx-auto rounded-md px-4 py-2 block hover:bg-green-700 transition"
                onClick={() => setRotateY(!rotateY)}
              >
                Girar
              </button>
              {pokemon.stats.map((stat) => (
                <div>
                    <p>{stat.stat.name}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{width: stat.base_stat}}></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-white">Cargando...</div>
          )}
        </div>
      )}
    </>
  );
};
