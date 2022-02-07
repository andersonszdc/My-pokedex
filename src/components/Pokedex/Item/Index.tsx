import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { pokedexSlice } from "../../../redux/slices/pokedexSlice";
import { Pokemon } from "../../Catalog/Index";

type IndexProps = {
  item: Pokemon;
};

type InfoProps = {
  name: string;
  sprites: any;
};

const Item = ({ item }: IndexProps) => {
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
    <div>
      {info.name}
      <img src={info.sprites.front_default} alt={info.name} />
      <button
        onClick={() => dispatch(pokedexSlice.actions.deletePokemon(item))}
      >
        Delete
      </button>
    </div>
  ) : null;
};

export default Item;
