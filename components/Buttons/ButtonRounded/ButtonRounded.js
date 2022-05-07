import React from "react";
import styled from "styled-components";
const BtnRound = styled.button`
  background: transparent;
  border: none;
  border-radius: 50%;
  transition: 0.2s all;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
  img {
    border-radius: 50%;
  }
`;

const ButtonRounded = ({ children, ...props }) => {
  return <BtnRound {...props}>{children}</BtnRound>;
};

export default ButtonRounded;
