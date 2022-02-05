import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import ItemId from "./pages/itemId";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path=":id" element={<ItemId />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
