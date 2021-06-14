import React, { useState, useEffect } from "react";

import BookComponent from "./BookComponent";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

import RefreshAccountBooks from "./RefreshAccountBooks";

const AccountBooks = () => {
  RefreshAccountBooks();
  const history = useHistory();
  const books = useSelector((state) => state.account_books);

  return (
    <div className="container mt-4">
      {/* <AddAccountBookModal _state={open} /> */}
      <h3>Your Account Books:</h3>
      <hr />
      <div className="books">
        {books.map((book) => {
          return (
            <div className="management-container">
              <BookComponent
                key={book.id}
                id={book.id}
                title={book.title}
                balance={book.balance}
              />
              <div className="btn-group">
                <button
                  account_book={book}
                  className="btn btn-outline-info"
                  onClick={() => history.push(`/manage/accounts/${book.id}`)}
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="add-account-div">
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/create-account-book")}
        >
          <AddIcon />
          Add New Account book
        </Button>
      </div>
    </div>
  );
};
export default AccountBooks;
