import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: ${(props) => (props.invert ? "#fff" : "rgb(26, 115, 232)")};
  color: ${(props) => (props.invert ? "rgb(26, 115, 232)" : "#fff")};
  border: 1px solid ${(props) => (props.invert ? "rgb(26, 115, 232)" : "#fff")};
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.25px;
  line-height: 16px;
  margin-left: 10px;
  margin-right: 8px;
  min-width: 96px;
  padding: 9px 23px;
  text-align: center;
  vertical-align: middle;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

  cursor: pointer;

  &:hover {
    background: ${(props) => (props.invert ? "#fff" : "#2b7de9")};
  }
`;
const Button = ({ children, invert, ...props }) => {
  return (
    <Btn invert={invert} {...props}>
      {children}
    </Btn>
  );
};

export default Button;
