import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Item from "./Item/Index";
import { Content } from "./styles";

export interface Pokemon {
  name: string;
  url: string;
}

// interface PokemonsData {
//   pokemons: {
//     results: Pokemon[];
//     next: string;
//   };
// }

type CatalogProps = {
  search: string;
};

const Catalog = ({ search }: CatalogProps) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [currentOffset, setCurrentOffset] = useState(0);

  useEffect(() => {
    const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
    const URL_CONFIRED = `${ENDPOINT}?offset=${currentOffset}`;
    fetch(URL_CONFIRED)
      .then((response) => response.json())
      .then(({ results }) => {
        setPokemons((prevPokemons) => [...prevPokemons, ...results]);
      });
  }, [currentOffset]);

  useEffect(() => {
    const interserctionObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("on");
        setCurrentOffset((previousOffset) => previousOffset + 20);
      }
    });

    interserctionObserver.observe(
      document.querySelector("#sentinela") as HTMLDivElement
    );

    return () => interserctionObserver.disconnect();
  }, []);

  const filtered = pokemons.filter((item) => item.name.includes(search));

  return (
    <Content>
      {filtered.map((item, index) => (
        <Item item={item} key={index} />
      ))}
      <div id="sentinela" />
    </Content>
  );
};

export default Catalog;
