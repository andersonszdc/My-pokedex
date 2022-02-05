import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useDispatch } from "react-redux";
import { pokedexSlice } from "../features/pokedex/pokedexSlice";

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
  const dispatch = useDispatch();
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
          <button
            onClick={() => dispatch(pokedexSlice.actions.addPokemon(item))}
          >
            Add
          </button>
          <button
            onClick={() => dispatch(pokedexSlice.actions.deletePokemon(item))}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default Catalog;
