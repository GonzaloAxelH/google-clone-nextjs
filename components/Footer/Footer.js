import Link from "next/link";
import React from "react";
import styled from "styled-components";
const FooterContainer = styled.footer`
  width: 100vw;
  background-color: #f2f2f2;
  flex: 0.7;
`;
const Information = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    a {
      text-align: center;
      margin: 0 20px;
    }
  }
`;
const HeadFoot = styled.div`
  height: 40px;
  padding-left: 2em;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dadce0;
  span {
    color: #70757a;
  }
`;
import LinkTo from "../Links/LinkTo";
const Footer = () => {
  return (
    <FooterContainer>
      <HeadFoot>
        <span>Peru</span>
      </HeadFoot>
      <Information>
        <ul>
          <LinkTo to="/" label="Sobre Google" />
          <LinkTo to="/" label="Publicidad" />
          <LinkTo to="/" label="Negocios" />
          <LinkTo to="/" label="Como funciona la busqueda" />
        </ul>
        <ul>
          <LinkTo to="/" label="Privacidad" />
          <LinkTo to="/" label="Condiciones" />
          <LinkTo to="/" label="Preferencias" />
        </ul>
      </Information>
    </FooterContainer>
  );
};

export default Footer;
