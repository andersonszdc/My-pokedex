import { gql, useQuery } from "@apollo/client";
import React from "react";
import Item from "./Item/Index";
import { Content } from "./styles";

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

type CatalogProps = {
  search: string;
};

const Catalog = ({ search }: CatalogProps) => {
  const { loading, error, data } = useQuery<PokemonsData>(POKEMONS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const { results } = data!.pokemons;
  const filtered = results.filter((item) => item.name.includes(search));

  return (
    <Content>
      {filtered.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </Content>
  );
};

export default Catalog;
