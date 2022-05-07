import { Html, Head, NextScript, Main } from "next/document";
import React from "react";
import styled from "styled-components";
const MenuPortal = styled.div``;
const Document = () => {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <body>
        <Main />
        <MenuPortal id="menu-portal"></MenuPortal>
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
