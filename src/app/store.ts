import { configureStore } from "@reduxjs/toolkit";
import pokedexReducer from "../features/pokedex/pokedexSlice"

const store = configureStore({
    reducer: {
        pokedex: pokedexReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>