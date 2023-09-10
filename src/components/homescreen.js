import React from "react";
import styled from "styled-components";
import Header from "./header";
import Hero from "./hero";
import Books from "./books";
import Footer from "./footer";
const Homescreen = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <Books />
      <Footer />
    </Container>
  );
};
export default Homescreen;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
