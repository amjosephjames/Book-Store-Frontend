import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <AbtBag>
          <Logo>BookStore</Logo>
          <Text>Come and Explore the world leading Books and authors</Text>
          <button>Shop Now</button>
        </AbtBag>
        <OtherNav>
          <Holder>
            <Title>Menu</Title>
            <span>Shop</span>
            <span>Category</span>
            <span>Catalogue</span>
          </Holder>
          <Holder>
            <Title>Help</Title>
            <span>FAQ</span>
            <span>Privacy Policy</span>
            <span>Terms and Condition</span>
          </Holder>
          <Holder>
            <Title>Get App</Title>
            <span>App Store</span>
            <span>Google Play Store</span>
          </Holder>
        </OtherNav>
      </Wrapper>
      <small>Developed by James Joseph.</small>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  background-color: #020c1b;
  display: flex;
  border-top: 1px solid light silver;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction: column;
  /* font-family: montserrat; */
  small {
    font-size: 8px;
    margin-bottom: 10px;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;
const AbtBag = styled.div`
  margin-bottom: 10px;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 30px;
  }
  button {
    height: 30px;
    width: 100px;
    background-color: white;
    /* font-family: montserrat; */
    font-weight: 600;
    color: #020c1b;
    border: none;
    outline: none;
  }
`;
const Logo = styled.div`
  font-size: 22px;
  color: white;
  font-weight: 900;
  margin-bottom: 10px;
`;
const Text = styled.div`
  width: 250px;
  font-size: 12px;
  margin-bottom: 15px;
  color: white;
`;
const OtherNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    justify-content: center;
    flex-direction: column;
  }
`;
const Holder = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  font-size: 15px;

  @media (max-width: 500px) {
    align-items: center;
    margin-bottom: 20px;
  }

  span {
    margin: 10px 0;
    font-weight: lighter;
    color: white;
  }
`;
const Title = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
  color: white;
`;
