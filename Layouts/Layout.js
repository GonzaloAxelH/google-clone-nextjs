import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";

const Fullcontnainer = styled.div``;
const Layout = ({ children }) => {
  return (
    <Fullcontnainer>
      <NavBar />
      {children}
    </Fullcontnainer>
  );
};

export default Layout;
