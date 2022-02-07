import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../components/Catalog/Index";
import { PokedexState } from "../redux/slices/pokedexSlice";

const addPokemon: CaseReducer<PokedexState, PayloadAction<Pokemon>> = (
  state,
  action
) => {
  const checkId = (item: Pokemon) => {
    return item.name === action.payload.name;
  };

  if (!state.itens.find(checkId)) {
    state.itens.push(action.payload);
  }
};

export default addPokemon;
