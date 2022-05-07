import Link from "next/link";
import React from "react";
import styled from "styled-components";
import User from "../User/User";
import Aplications from "../Aplications/Aplications";
import BtnRound from "../Buttons/ButtonRounded/ButtonRounded";
import { signIn, signOut, useSession } from "next-auth/react";
import ButtonSignIn from "../Buttons/Button/Button";
const ContainerNavBar = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  a {
    font-size: 13px;
    padding: 0 1em;
    &:hover {
      text-decoration: underline;
    }
  }
  button {
    width: 40px;
    height: 40px;
    margin: 0 0.3em;
  }
`;
const NavBar = () => {
  const { data: session } = useSession();
  return (
    <ContainerNavBar>
      <div></div>
      <Links>
        <Link href="/">
          <a>Gmail</a>
        </Link>
        <Link href="/">
          <a>Imagenes</a>
        </Link>
        <Aplications onClick="open modal Apps" />
        <User onClick={() => alert("open modal user")} />
        {!session && (
          <ButtonSignIn onClick={() => signIn()}>Sign In</ButtonSignIn>
        )}
      </Links>
    </ContainerNavBar>
  );
};

export default NavBar;
