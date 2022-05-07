import React from "react";
import styled from "styled-components";
import CloseInputIcon from "../Icons/CloseInputIcon";
import MicrophoneIcon from "../Icons/MicrophoneIcon";
import SmallSearchIcon from "../Icons/SmallSearchIcon";
import Suggestions from "../Suggestions/Suggestions";
import { useState } from "react";
import GoogleOptions from "../GoogleOptions/GoogleOptions";
const Form = styled.form`
  padding: 20px;
  flex: 2;
`;
const InputControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #dfe1e5;
  border-radius: 99999px;
  padding: 0px 6px 0px 10px;
  min-width: 100%;
  width: 590px;
  max-width: 590px;
  transition: 0.2s all;
  @media (max-width: 630px) {
    width: 100%;
  }

  span {
    height: 44px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    padding: 0 8px;
    color: #9aa0a6;
  }
  svg {
    width: 24px;
  }
  &:hover,
  &:active,
  &:target {
    background-color: #fff;
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223, 225, 229, 0);
  }
`;
const GoogleInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  text-decoration: none;
  width: 100%;
  height: 34px;
`;

const SearchForm = () => {
  const [searchValues, setSearchValues] = useState("");
  return (
    <Form>
      <InputControl>
        <span>
          <SmallSearchIcon width="20px" heigth="20px" fill="#9aa0a6" />
        </span>
        <GoogleInput
          value={searchValues}
          onChange={(e) => setSearchValues(e.target.value)}
          type="text"
        />
        <Suggestions />
        {searchValues !== "" && (
          <span onClick={() => setSearchValues("")}>
            <CloseInputIcon fill="#70757a" />
          </span>
        )}
        <span>
          <MicrophoneIcon />
        </span>
      </InputControl>
      <GoogleOptions />
    </Form>
  );
};

export default SearchForm;
