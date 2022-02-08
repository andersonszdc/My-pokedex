import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Index";
import Index from "./pages";
import MyPokedex from "./pages/my-pokedex";
import { pokedexSlice } from "./redux/slices/pokedexSlice";
import GlobalStyle from "./styles/global";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pokedexSlice.actions.getStorage());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="my-pokedex" element={<MyPokedex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
