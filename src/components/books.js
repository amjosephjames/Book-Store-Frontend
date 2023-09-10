import React, { useEffect } from "react";
import styled from "styled-components";
import cov from "./bookcover.jpeg";
import axios from "axios";
// import { useParams } from "react-router-dom";
const Books = () => {
  const [data, setData] = React.useState([]);
  // const id = useParams();
  const getData = async () => {
    try {
      const mainURL = "https://openlibrary.org/developers/api";
      const URL = `${mainURL}/books/get`;

      await axios.get(URL).then((res) => {
        console.log(res.data.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Cont>
      <Wrap>
        {data?.map((props) => (
          <CardDiv key={props._id}>
            <Div>
              <CoverImage src={props.image} alt="" />
              <Hold>
                <Title>{props.title}</Title>
              </Hold>
            </Div>
            <Category>Educational</Category>
            <Down>
              <P>Written by {props.author}</P>
            </Down>
          </CardDiv>
        ))}
      </Wrap>
    </Cont>
  );
};
export default Books;

const Cont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;
const Wrap = styled.div`
  /* height: 85%; */

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1115px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const CardDiv = styled.div`
  width: 250px;
  height: 300px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid silver;
  @media (max-width: 900px) {
    width: 220px;
  }
  @media (max-width: 768px) {
    width: 200px;
  }
`;
const Div = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-position: center;
`;
const Hold = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-bottom: 100px;
`;
const Category = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #020c1b;
  color: white;
  font-size: 16px;
`;
const Title = styled.div`
  color: white;
  font-size: 16px;
`;

const Down = styled.div`
  width: 99%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const P = styled.div`
  color: #020c1b;
  font-size: 16px;
`;
