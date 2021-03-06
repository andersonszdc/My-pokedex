import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../components/Catalog/Index";
import { PokedexState } from "../redux/slices/pokedexSlice";

const deletePokemon: CaseReducer<PokedexState, PayloadAction<Pokemon>> = (
  state,
  action
) => {
  const i = state.itens.findIndex((item) => item.name === action.payload.name);

  state.itens.splice(i, 1);
};

export default deletePokemon;
