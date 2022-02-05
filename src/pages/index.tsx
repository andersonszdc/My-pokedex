import React from "react";
import { useState } from "react";
import Catalog from "../components/Catalog/Index";
import Searchbar from "../components/Searchbar/Index";

const Index = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Searchbar search={search} setSearch={setSearch} />
      <Catalog search={search} />;
    </>
  );
};

export default Index;
