import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Item from "./Item/Index";

const Pokedex = () => {
  const selected = useSelector((state: RootState) => state.pokedex.itens);
  return (
    <div>
      <h1>POKEDEX</h1>
      {selected.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </div>
  );
};

export default Pokedex;
