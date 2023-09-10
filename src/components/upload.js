import React, { useState } from "react";
import styled from "styled-components";
import { BsImageFill } from "react-icons/bs";
import pix from "./bookcover.jpeg";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const navigate = useNavigate();
  // const id = useParams();
  const [image, setImage] = useState("/diary.jpg");
  const [avatar, setAvatar] = useState("");

  const formSchema = yup.object().shape({
    title: yup.string().required("This Field Cannot Be Empty"),
    author: yup.string().required("This Field Cannot Be Empty"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    setAvatar(file);
  };

  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    const { author, title } = value;
    const mainURL = " https://openlibrary.org/developers/api";
    // const mainURL = "http://localhost:2120";
    const URL = `${mainURL}/books/create`;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("image", avatar);

    const config = {
      "content-type": "multipart/form-data",
      onUploadProgress: (ProgressEvent) => {
        const { loaded, total } = ProgressEvent;
        const precent = Math.floor((loaded * 100) / total);
        console.log(precent);
      },
    };

    await axios.post(URL, formData, config).then((res) => {
      console.log("Data: ", res);

      navigate("/books");
    });
  });

  return (
    <Container>
      <Wrapper>
        <Card onSubmit={onSubmit}>
          <Circle>
            <Img src={image} alt="" />
          </Circle>

          <Input id="pix" type="file" accept="image/*" onChange={handleImage} />
          <Button htmlFor="pix">Upload Cover Image</Button>

          <Inp placeholder="Enter Title" {...register("title")} />
          <TexArea placeholder="Summary..." />
          <Inp placeholder="Enter Author name" 
              {...register("author")}
          />
          <Select>
            <option>select a category</option>
            <option value="comedy">Comedy</option>
            <option value="music">Music</option>
            <option value="romance">Romance</option>
          </Select>

          <Button2 cp="pointer" bg="black" type="submit">
            Submit
          </Button2>

          <Button2 cp="not-allowed" bg="silver">
            Submit
          </Button2>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Upload;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Button2 = styled.button`
  height: 40px;
  width: 150px;
  background-color: ${(props) => props.bg};

  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  transition: all 350ms;
  cursor: ${(props) => props.cp};
  margin-top: 10px;

  /* :hover {
    transform: scale(0.95);
  } */

  @media screen and (max-width: 500px) {
    width: 120px;
  }
`;

const Select = styled.select`
  width: 91%;
  height: 30px;
  border-radius: 3px;
  border: 0.7px solid silver;
  /* outline-color: #f8cbe0; */
  outline: none;
  padding-left: 10px;
  @media (max-width: 400px) {
    width: 90%;
  }
  @media (max-width: 425px) {
    width: 90%;
  }
  @media (max-width: 360px) {
    width: 90%;
  }
  @media (max-width: 320px) {
    width: 90%;
  }
`;

const TexArea = styled.textarea`
  width: 350px;
  height: 70px;
  border-radius: 3px;
  border: 0.7px solid silver;
  /* outline-color: #f8cbe0; */
  padding-left: 10px;
  outline: none;
  resize: none;
  @media (max-width: 400px) {
    width: 90%;
  }
  @media (max-width: 425px) {
    width: 90%;
  }
  @media (max-width: 360px) {
    width: 90%;
  }
  @media (max-width: 320px) {
    width: 90%;
  }
`;

const Inp = styled.input`
  margin: 10px;
  width: 350px;
  height: 30px;
  border-radius: 3px;
  border: 0.7px solid silver;
  outline: none;
  /* outline-color: #f8cbe0; */
  padding-left: 10px;
  @media (max-width: 400px) {
    width: 90%;
  }
  @media (max-width: 425px) {
    width: 90%;
  }
  @media (max-width: 360px) {
    width: 90%;
  }
  @media (max-width: 320px) {
    width: 90%;
  }
`;

const Input = styled.input`
  display: none;
`;
const Button = styled.label`
  height: 40px;
  width: 200px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: all 350ms;
  margin-top: 10px;
  cursor: pointer;

  /* :hover {
    transform: scale(0.98);
  } */
`;

const Circle = styled.div`
  height: 150px;
  width: 250px;
  border-radius: 5px;
  /* border-radius: 50%; */
  background-color: #e6e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  flex-direction: column;
  font-size: 30px;
  span {
    font-size: 12px;
  }
`;

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  width: 400px;
  /* height: 300px; */

  /* margin-top: 100px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  @media (max-width: 400px) {
    width: 350px;
  }
  @media (max-width: 425px) {
    width: 350px;
  }
  @media (max-width: 360px) {
    width: 300px;
  }
  @media (max-width: 320px) {
    width: 280px;
  }
`;

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 150vh;
`;
