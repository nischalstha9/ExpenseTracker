import React from "react";

import BookComponent from "./BookComponent";
import AddIcon from "@material-ui/icons/Add";
import { Button, Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useStyles } from "./Book.js";

import RefreshAccountBooks from "./RefreshAccountBooks";

const AccountBooks = () => {
  RefreshAccountBooks();
  const classes = useStyles();
  const history = useHistory();
  const books = useSelector((state) => state.account_books);

  return (
    <>
      <h3 className={classes.accountTitle}>Edit Your Account Books:</h3>
      <hr />
      <Grid container spacing={1} style={{ padding: "10px 0px 0px 0px" }}>
        {books.map((book) => {
          return (
            <Grid item spacing={12} xs={6} sm={6} md={4} lg={3}>
              <BookComponent
                key={book.id}
                id={book.id}
                title={book.title}
                balance={book.balance}
              />
            </Grid>
          );
        })}
      </Grid>
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
    </>
  );
};
export default AccountBooks;
