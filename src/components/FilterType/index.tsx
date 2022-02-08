import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { TypeBtn, TypesWrapper } from "./styles";

type FilterProps = {
  types: string[];
  setTypes: React.Dispatch<React.SetStateAction<string[]>>;
};

const FilterType = ({ types, setTypes }: FilterProps) => {
  const [itens, setItens] = useState<string[]>();
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((res) => res.json())
      .then((res) => {
        setItens(res.results);
      });
  }, []);

  return itens ? (
    <TypesWrapper>
      {itens.map((type: any, index: number) => (
          <TypeItem
            key={index}
            type={type}
            setTypes={setTypes}
            types={types}
          />
      ))}
    </TypesWrapper>
  ) : null;
};

export default FilterType;

type TypeItemProps = {
  type: {
    name: string;
    url: string;
  };
  types: string[];
  setTypes: React.Dispatch<React.SetStateAction<string[]>>;
};

const TypeItem = ({ type, types, setTypes }: TypeItemProps) => {
  const [active, setActive] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value } = e.target as HTMLButtonElement;

    if (types.includes(value)) {
      setTypes((s) => {
        setActive(false);
        const i = s.findIndex((type) => type === value);
        let newS = [...s];
        newS.splice(i, 1);
        return newS;
      });
    } else {
      setActive(true);
      setTypes((s) => [...s, value]);
    }
  };

  return (
    <TypeBtn
      active={active}
      onClick={handleClick}
      value={type.name}
      className="typeItem"
    >
      {type.name}
    </TypeBtn>
  );
};
