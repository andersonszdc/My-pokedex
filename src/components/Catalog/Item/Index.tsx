import React from "react";
import { useDispatch } from "react-redux";
import { pokedexSlice } from "../../../redux/slices/pokedexSlice";
import { Pokemon } from "../Index";
import { Card } from "./styles";

type ItemProps = {
  item: Pokemon;
};

const Item = ({ item }: ItemProps) => {
  const dispatch = useDispatch();
  return (
    <Card>
      {item.name}
      <img src={item.image} alt={item.name} />
      <button className="btn-action" onClick={() => dispatch(pokedexSlice.actions.addPokemon(item))}>
        Add
      </button>
    </Card>
  );
};

export default Item;
