import React from "react";
import styled from "styled-components";
import pix from "./logo1.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logodiv>
          <Logo src={pix} />
          <H1>BookStore</H1>
        </Logodiv>
        <Button to="/upload">Upload Book</Button>
      </Wrapper>
    </Container>
  );
};
export default Header;

const Container = styled.div`
  width: 100%;
  height: 13vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: white;
  z-index: 10;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1238px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;
const Logodiv = styled.div`
  width: 165px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Logo = styled.img`
  width: 50px;
  height: 50px;
  object-position: center;
`;
const H1 = styled.div`
  color: black;
  font-size: 22px;
  width: 100%;
  font-weight: bold;
`;
const Button = styled(Link)`
  width: 150px;
  text-decoration: none;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 15px;
  background-color: #020c1b;
`;
