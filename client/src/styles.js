import styled from "styled-components";

export const Button = styled.button`
  margin-top: 30px;
`;

export const CardInput = styled.input`
  font: 700 20px/24px normal Roboto;
  text-align: center;
  border: none;
  background: ${({ isPaid }) => (isPaid ? "rgba(0, 0, 0, .001)" : "#FFE3E3")};
`;
