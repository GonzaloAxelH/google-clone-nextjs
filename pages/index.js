import React from "react";
import GoogleImage from "../components/GoogleImage/GoogleImage";
import Layout from "../Layouts/Layout";
import Footer from "../components/Footer/Footer";
import SearchForm from "../components/SearchForm/SearchForm";
import GoogleOptions from "../components/GoogleOptions/GoogleOptions";
import styled from "styled-components";
const HomeContainer = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <Layout>
      <HomeContainer>
        <GoogleImage />
        <SearchForm />
        <Footer />
      </HomeContainer>
    </Layout>
  );
}
