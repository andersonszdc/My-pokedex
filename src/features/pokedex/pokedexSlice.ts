import { createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../../components/Catalog";
import addPokemon from "../../services/addPokemon";
import deletePokemon from "../../services/deletePokemon";

export interface PokedexState {
  itens: Pokemon[];
}

const initialState: PokedexState = {
  itens: [],
};

export const pokedexSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {
    addPokemon,
    deletePokemon,
  },
});

export default pokedexSlice.reducer;
