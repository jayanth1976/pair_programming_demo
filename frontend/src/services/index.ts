import { IBookDetails } from "../components/organisms/SubmitBookForm";
import API from "./API";

export const postBook = async (data: IBookDetails) => {
  const response = await API.post("/books", data);
  return response.data;
};

export const getBooks = async () => {
  const response = await API.get("/books");
  return response.data;
};
