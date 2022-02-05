import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../components/Catalog";
import { PokedexState } from "../features/pokedex/pokedexSlice";

const deletePokemon: CaseReducer<PokedexState, PayloadAction<Pokemon>> = (
  state,
  action
) => {
  const i = state.itens.findIndex((item) => item.id === action.payload.id);

  state.itens.splice(i, 1);
};

export default deletePokemon;
