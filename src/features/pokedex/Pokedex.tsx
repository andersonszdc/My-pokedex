import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { pokedexSlice } from "./pokedexSlice";

const Pokedex = () => {
  const selected = useSelector((state: RootState) => state.pokedex.itens);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>POKEDEX</h1>
      {selected.map((item, index) => (
        <div key={index}>
          {item.name}
          <img src={item.image} alt={item.name} />
          <button
            onClick={() => dispatch(pokedexSlice.actions.addPokemon(item))}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default Pokedex;
