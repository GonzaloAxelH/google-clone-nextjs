import React from "react";
import GoogleImage from "../components/GoogleImage/GoogleImage";
import Layout from "../Layouts/Layout";
import Footer from "../components/Footer/Footer";
import SearchForm from "../components/SearchForm/SearchForm";

import styled from "styled-components";
const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: calc(100vh - 70px);
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
