import React from "react";
import { useDispatch } from "react-redux";
import { pokedexSlice } from "../../../redux/slices/pokedexSlice";
import { Pokemon } from "../Index";

type ItemProps = {
  item: Pokemon;
};

const Item = ({ item }: ItemProps) => {
  const dispatch = useDispatch();
  return (
    <div>
      {item.name}
      <img src={item.image} alt={item.name} />
      <button onClick={() => dispatch(pokedexSlice.actions.addPokemon(item))}>
        Add
      </button>
      <button
        onClick={() => dispatch(pokedexSlice.actions.deletePokemon(item))}
      >
        Delete
      </button>
    </div>
  );
};

export default Item;
