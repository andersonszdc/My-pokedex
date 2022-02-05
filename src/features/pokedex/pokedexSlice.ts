import { createSlice } from "@reduxjs/toolkit";

export const pokedexSlice = createSlice({
  name: "pokedex",
  initialState: {
    length: 0,
  },
  reducers: {
    addPokemon: (state) => {
      state.length += 1;
    },
    deletePokemon: (state) => {
      state.length -= 1;
    },
  },
});

export const { addPokemon, deletePokemon } = pokedexSlice.actions;

export default pokedexSlice.reducer;
