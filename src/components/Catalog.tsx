import { gql, useQuery } from "@apollo/client";
import React from "react";

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

interface Pokemon {
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
        <div key={index}>
          {item.name}
          <img src={item.image} alt={item.name} />
          {item.id}
        </div>
      ))}
    </>
  );
};

export default Catalog;
