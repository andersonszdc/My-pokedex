import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { pokedexSlice } from "../../../redux/slices/pokedexSlice";
import { Pokemon } from "../Index";
import { Card } from "./styles";

type ItemProps = {
  item: Pokemon;
};

type InfoProps = {
  name: string;
  sprites: any;
};

const Item = ({ item }: ItemProps) => {
  const [info, setInfo] = useState<InfoProps>();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(item.url)
      .then((res) => res.json())
      .then((result) => {
        setInfo(result);
      });
  }, [item]);

  return info ? (
    <Card>
      {info.name}
      <img src={info.sprites.front_default} alt={info.name} />
      <button
        className="btn-action"
        onClick={() => dispatch(pokedexSlice.actions.addPokemon(item))}
      >
        Add
      </button>
    </Card>
  ) : (
    <div>Não encontrado</div>
  );
};

export default Item;
