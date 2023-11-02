import { Box, TextField, styled } from "@mui/material";
import React, { useState } from "react";
import Text from "../../atoms/Typography";
import InputField from "../../atoms/InputField";
import ButtonComponent from "../../atoms/Button";
import { postBook } from "../../../services";
import { useNavigate } from "react-router-dom";

export interface IBookDetails {
  id?: number;
  bookName: string;
  genre: string;
}

const Wrapper = styled(Box)(`
    width: 100vw;
    height: 100vh;
    position: relative;
`);
const InnerWrapper = styled(Box)(`
    position: absolute;
    transform: translate(-50%,-50%);
    top:50%;
    left:50%;
    width: 30vw;
    height: 60vh;
    & .MuiTypography-root{
        text-align:center;
    }
    & .MuiButton-root{
        width:30%;
    }
`);

const TextFields = styled(Box)(`
    height: 60%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`);

const SubmitBookForm = () => {
  const [bookDetails, setBookDetails] = useState<IBookDetails>({
    bookName: "",
    genre: ""
  });
  const navigate = useNavigate();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setBookDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (data: IBookDetails) => {
    postBook(data).then(() => {
      alert("saved successfully");
    });
  };
  return (
    <Wrapper>
      <InnerWrapper>
        <Text variant="h4">Book details</Text>
        <TextFields>
          <InputField
            label="Name"
            onChange={(e) => handleChange(e)}
            name="bookName"
          />
          <InputField
            label="Genre"
            onChange={(e) => handleChange(e)}
            name="genre"
          />
          <ButtonComponent
            variant="contained"
            onClick={() => {
              handleSubmit(bookDetails);
              navigate("/view");
            }}
            disabled={bookDetails.bookName === "" || bookDetails.genre === ""}
          >
            Submit
          </ButtonComponent>
        </TextFields>
      </InnerWrapper>
    </Wrapper>
  );
};

export default SubmitBookForm;
