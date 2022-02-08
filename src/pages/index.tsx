import React from "react";
import { useState } from "react";
import Catalog from "../components/Catalog/Index";
import FilterType from "../components/FilterType";
import Searchbar from "../components/Searchbar/Index";

const Index = () => {
  const [search, setSearch] = useState("");
  const [types, setTypes] = useState<string[]>([])
  return (
    <>
      <Searchbar search={search} setSearch={setSearch} />
      <FilterType types={types} setTypes={setTypes} />
      <Catalog search={search} />;
    </>
  );
};

export default Index;
