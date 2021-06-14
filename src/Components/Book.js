import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../AxiosInstance";
import Transaction from "./Transaction";
import AddTransactionModal from "./Modals/AddTransactionModal";
import Pagination from "@material-ui/lab/Pagination";
import { ButtonGroup } from "@material-ui/core";

const Book = () => {
  let { account_id } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [bookDetail, setBookDetail] = useState([]);

  const [transactionType, setTransactionType] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [query, setQuery] = useState("");
  const [sdate, setSDate] = useState("");
  const [edate, setEDate] = useState("");
  const [refresher, setRefresher] = useState(0);

  let url = `account-books/${account_id}/transactions/?page=${page}&_type=${transactionType}&search=${query}&date__gte=${sdate}&date__lte=${edate}`;

  const RefreshForm = () => {
    setRefresher(refresher + 1);
  };
  useEffect(() => {
    setPage(1);
    setTransactionType("");
    setSDate("");
    setEDate("");
  }, [account_id]);

  useEffect(() => {
    axiosInstance
      .get(`account-books/${account_id}/`)
      .then((resp) => {
        setBookDetail(resp.data);
      })
      .catch((err) => console.log(err));
  }, [refresher, account_id]);

  useEffect(() => {
    axiosInstance
      .get(url)
      .then((resp) => {
        setPages(Math.ceil(resp.data.count / 10));
        setTransactions(resp.data.results);
      })
      .catch((err) => console.log(err));
  }, [url, refresher, account_id]);
  return (
    <div className="container mt-4">
      <h4>Title: {bookDetail.title}</h4>
      <h4>
        Balance: Rs.
        <span id="balance_amt" className="text-success">
          {" "}
          {bookDetail.balance}
        </span>
        /-
      </h4>
      <hr />

      <form action="" method="get" id="filter-form" className="form-control">
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="inputState">
              <h6>Type:</h6>
            </label>
            <select
              className="custom-select"
              id="Transasction_Filter"
              onChange={(e) => {
                setPage(1);
                setTransactionType(e.target.value);
              }}
            >
              <option value="">All Transactions</option>
              <option value="DEBIT">Income</option>
              <option value="CREDIT">Expenses</option>
            </select>
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="sdate-filter">
              <h6>Start Date:</h6>
            </label>
            <input
              type="date"
              autoComplete="false"
              className="form-control"
              id="sdate-filter"
              onChange={(e) => {
                setPage(1);
                setSDate(`${e.target.value}T00:00:00`);
              }}
            />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="edate-filter">
              <h6>End Date:</h6>
            </label>
            <input
              type="date"
              autoComplete="false"
              className="form-control"
              id="edate-filter"
              onChange={(e) => {
                setPage(1);
                setEDate(`${e.target.value}T00:00:00`);
              }}
            />
          </div>

          <div className="form-group col-md-4">
            <input
              type="text"
              autoComplete="false"
              className="form-control"
              id="search-filter"
              placeholder="Search By Description"
              value={query}
              onChange={(e) => {
                setPage(1);
                setQuery(e.target.value);
              }}
            />
          </div>

          <div className="">
            <button
              type="reset"
              autoComplete="false"
              className="btn btn-secondary"
              id="clear-filter"
              onClick={(e) => {
                setEDate("");
                setSDate("");
                setQuery("");
                setTransactionType("");
              }}
            >
              clear
            </button>
          </div>
          <div className="row mx-2">
            <ButtonGroup>
              <AddTransactionModal
                account_book={account_id}
                _type="DEBIT"
                refreshForm={RefreshForm}
              />
              <AddTransactionModal
                account_book={account_id}
                _type="CREDIT"
                refreshForm={RefreshForm}
              />
            </ButtonGroup>
          </div>
        </div>
      </form>

      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="bg-white sticky-top">
              Date
            </th>
            <th scope="col" className="bg-white col-6 sticky-top">
              Description
            </th>
            <th scope="col" className="bg-white sticky-top">
              Amount
            </th>
            <th scope="col" className="bg-white sticky-top">
              Action
            </th>
          </tr>
        </thead>
        <tbody id="tbody">
          {transactions.map((transaction) => {
            return (
              <Transaction
                tran={transaction}
                key={transaction.id}
                account_book={account_id}
                RefreshFrom={RefreshForm}
              />
            );
          })}
        </tbody>
      </table>
      {pages > 1 ? (
        <Pagination
          count={pages}
          color="primary"
          onChange={(e, page) => setPage(page)}
          page={page}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Book;
