import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Container>
      <Text>
        <Top>
          <H1>explore the world leading books and authors</H1>
        </Top>
        <P>
          Million of authors and book writers around the world showcase their
          products on book store the home to the world best exciting books
        </P>
        <Button to="/upload">Get Started</Button>
      </Text>
    </Container>
  );
};
export default Hero;

const Container = styled.div`
  /* width: 100%; */
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #020c1b;
  padding-top: 100px;
`;

const Text = styled.div`
  width: 500px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 85%;
  }
  @media (max-width: 460px) {
    height: 240px;
  }
  @media (max-width: 375px) {
    height: 250px;
  }
`;

const Button = styled(Link)`
  width: 150px;
  text-decoration: none;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #020c1b;
  font-size: 15px;
  background-color: #fff;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* align-items: center; */
  line-height: 1;
`;
const H1 = styled.div`
  font-weight: bold;
  color: white;
  font-size: 25px;
`;

const P = styled.div`
  font-size: 15px;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 10px;
  color: white;
  /* align-items: center; */

  span {
    color: white;
    font-size: 15px;
  }
`;
