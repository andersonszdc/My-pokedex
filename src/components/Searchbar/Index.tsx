import React from "react";

type SearchbarProps = {
  search: string;
  setSearch: (arg0: string) => void;
};

const Searchbar = ({ search, setSearch }: SearchbarProps) => {
  return (
    <div>
      <input
      placeholder="Digite algo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default Searchbar;
