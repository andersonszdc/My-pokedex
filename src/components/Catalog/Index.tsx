import { gql, useQuery } from "@apollo/client";
import React from "react";
import Item from "./Item/Index";

const POKEMONS = gql`
  {
    pokemons {
      results {
        id
        name
        image
      }
    }
  }
`;

export interface Pokemon {
  id: number;
  name: string;
  image: string;
}

interface PokemonsData {
  pokemons: {
    results: Pokemon[];
  };
}

const Catalog = () => {
  const { loading, error, data } = useQuery<PokemonsData>(POKEMONS);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  const { results } = data!.pokemons;
  return (
    <>
      {results.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </>
  );
};

export default Catalog;
