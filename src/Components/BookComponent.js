import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const BookComponent = ({ id, title, balance }) => {
  const to = `accounts/${id}`;
  return (
    <Link className="book-div" to={to}>
      <div className="title">{title}</div>
      <div className="balance">{balance}</div>
    </Link>
  );
};

export default BookComponent;
