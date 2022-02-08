import styled from "styled-components";

export const TypesWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

type TypeBtnProps = {
  active: boolean;
};

export const TypeBtn = styled.button<TypeBtnProps>`
  padding: 4px 8px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  ${({ active }) =>
    active
      ? `
    background-color: red;
    `
      : `
    background-color: #ccc;
  `}
`;
