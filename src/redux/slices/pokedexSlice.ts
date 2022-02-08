import { createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../../components/Catalog/Index";
import addPokemon from "../../services/addPokemon";
import deletePokemon from "../../services/deletePokemon";
import getStorage from "../../services/getStorage";

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
    getStorage,
  },
});

export default pokedexSlice.reducer;
