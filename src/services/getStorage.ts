import { CaseReducer } from "@reduxjs/toolkit";
import { PokedexState } from "../redux/slices/pokedexSlice";

const getStorage: CaseReducer<PokedexState> = (state) => {
  const storage = localStorage.getItem("pokedex");
  const storageObj = JSON.parse(storage!);
  if (storageObj) {
    state.itens.splice(0, state.itens.length);
    state.itens.push(...storageObj);
  }
};

export default getStorage;
