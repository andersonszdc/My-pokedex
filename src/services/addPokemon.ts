import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../components/Catalog";
import { PokedexState } from "../features/pokedex/pokedexSlice";

const addPokemon: CaseReducer<PokedexState, PayloadAction<Pokemon>> = (
  state,
  action
) => {
  const checkId = (item: Pokemon) => {
    return item.id === action.payload.id;
  };

  if (!state.itens.find(checkId)) {
    state.itens.push(action.payload);
  }
};

export default addPokemon;
