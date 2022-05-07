import React from "react";
import styled from "styled-components";

const SubmitBtn = styled.input`
  background-color: #f8f9fa;
  border: 1px solid #f8f9fa;
  border-radius: 4px;
  color: #3c4043;
  font-family: arial, sans-serif;
  font-size: 14px;
  margin: 11px 4px;
  padding: 0 16px;
  line-height: 27px;
  height: 36px;
  min-width: 54px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  transition: 0.2s all;
  &:hover {
    box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
    background-color: #f8f9fa;
    border: 1px solid #dadce0;
    color: #202124;
  }
`;

const Inputs = styled.div`
  display: flex;
  justify-content: center;
  padding: 18px 0 0;
`;

const GoogleOptions = () => {
  return (
    <Inputs>
      <SubmitBtn
        type="submit"
        aria-label="Me siento con suerte"
        value="Me siento con suerte"
      />
      <SubmitBtn
        type="submit"
        aria-label="Me siento con suerte"
        value="Me siento con suerte"
      />
    </Inputs>
  );
};

export default GoogleOptions;
