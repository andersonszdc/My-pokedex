import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Index";
import Index from "./pages";
import MyPokedex from "./pages/my-pokedex";

function App() {
  return (
    <BrowserRouter>
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
