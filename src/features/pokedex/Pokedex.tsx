import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { addPokemon, deletePokemon } from "./pokedexSlice";

const Pokedex = () => {
  const count = useSelector((state: RootState) => state.pokedex.length);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(deletePokemon())}>+</button>
      {count}
      <button onClick={() => dispatch(addPokemon())}>+</button>
    </div>
  );
};

export default Pokedex;
