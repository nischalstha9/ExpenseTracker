import React, { useState, useEffect } from "react";
import axiosInstance from "../AxiosInstance";
import BookComponent from "./BookComponent";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { insert_books } from "../action";

const AccountBooks = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [books, setBooks] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    axiosInstance
      .get("account-books/")
      .then((resp) => {
        setBooks(resp.data);
        dispatch(insert_books(resp.data));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mt-4">
      {/* <AddAccountBookModal _state={open} /> */}
      <h1>Your Account Books:</h1>
      <hr />
      <div className="books">
        {books.map((book) => {
          return (
            <BookComponent
              id={book.id}
              title={book.title}
              balance={book.balance}
            />
          );
        })}
      </div>
      <div className="add-account-div">
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/accounts/new")}
        >
          <AddIcon />
          Add New Account book
        </Button>
      </div>
    </div>
  );
};
export default AccountBooks;
