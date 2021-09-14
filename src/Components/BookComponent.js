import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import { Link } from "react-router-dom";

export const bookStyles = makeStyles({
  root: {
    textDecoration: "none",
  },
  card: {
    boxSizing: "border-box",
    border: "4px solid #1a61bd",
    borderRadius: "5px",
    textDecoration: "none",
    padding: "15px 5px",
    minHeight: "100%",
  },
  cardTitle: {
    fontSize: "26px",
    textDecoration: "none",
    color: "#1a61bd",
  },
  cardBalance: {
    color: "green",
    right: "0",
  },
});

const BookComponent = ({ id, title, balance }) => {
  const classes = bookStyles();
  const to = `accounts/${id}`;
  return (
    <div className={classes.card}>
      <Link className={classes.root} to={to}>
        <div className={classes.cardTitle}>{title}</div>
        <div className={classes.cardBalance}>Rs. {balance}</div>
      </Link>
    </div>
  );
};

export default BookComponent;
