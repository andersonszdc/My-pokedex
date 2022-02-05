import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  transition: .2s ease-out;

  :hover {
    transform: scale(1.05);
  }

  .btn-action {
    width: 100%;
    cursor: pointer;
  }
`;
