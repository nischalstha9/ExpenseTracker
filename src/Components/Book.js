import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../AxiosInstance";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Transaction from "./Transaction";
import AddTransactionModal from "./Modals/AddTransactionModal";
import CustomTablePagination from "./CustomTablePagination";
import {
  ButtonGroup,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from "@material-ui/core";
import EditTransactionModal from "./Modals/EditTransactionModal";
import { TableContainer } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import StyledTableRow from "./StyledTableRow";

const useStyles = makeStyles({
  root: {
    margin: "0px 5px",
    padding: "5px",
  },
  container: {},
  formEntity: {
    // padding: "0px 5px",
  },
});

const Book = () => {
  const classes = useStyles();
  let { account_id } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [bookDetail, setBookDetail] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [dataCount, setdataCount] = React.useState(0);
  const [refresher, setRefresher] = useState(0);

  const initialFilter = Object.freeze({
    type: "",
    sdate: "",
    edate: "",
    search: "",
  });
  const [filterForm, setFilterForm] = React.useState(initialFilter);
  const handleFormChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "sdate" || e.target.name === "edate") {
      let date;
      try {
        date = new Date(value).toISOString();
      } catch {
        date = "";
      }
      setFilterForm({
        ...filterForm,
        [e.target.name]: date,
      });
    } else {
      setFilterForm({
        ...filterForm,
        [e.target.name]: value.trim(),
      });
    }
  };

  let url = `account-books/${account_id}/transactions/?limit=${rowsPerPage}&offset=${
    page * rowsPerPage
  }&_type=${filterForm.type}&search=${filterForm.search}&date__gte=${
    filterForm.sdate || ""
  }&date__lte=${filterForm.edate || ""}`;

  const RefreshForm = () => {
    setRefresher(refresher + 1);
  };

  useEffect(() => {
    axiosInstance
      .get(`account-books/${account_id}/`)
      .then((resp) => {
        setBookDetail(resp.data);
      })
      .catch((err) => console.log(err));
  }, [refresher, account_id]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  const types = [
    { value: "", title: "All Transaction" },
    { value: "DEBIT", title: "Income" },
    { value: "CREDIT", title: "Expenses" },
  ];

  useEffect(() => {
    axiosInstance
      .get(url)
      .then((resp) => {
        setTransactions(resp.data.results);
        setdataCount(resp.data.count);
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
      <form
        action=""
        method="get"
        id="filter-form"
        className={classes.root}
        onSubmit={(e) => e.preventDefault()}
      >
        <Grid container lg={12}>
          <Grid
            xs={12}
            sm={4}
            md={4}
            lg={4}
            className={classes.formEntity}
            spacing={"1px"}
          >
            <FormControl fullWidth>
              <label htmlFor="sdate">Transaction Type:</label>
              <br />
              <Select
                variant="outlined"
                id="type"
                name="type"
                type="text"
                displayEmpty
                value={filterForm.type}
                onChange={handleFormChange}
              >
                {types.map((type) => (
                  <MenuItem key={type.value} value={type.value}>
                    {type.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid
            xs={12}
            sm={4}
            md={4}
            lg={4}
            className={classes.formEntity}
            spacing={"1px"}
          >
            <FormControl fullWidth>
              <label htmlFor="sdate">Start Date:</label>
              <br />
              <TextField
                type="date"
                name="sdate"
                variant="outlined"
                onChange={(e) => {
                  handleFormChange(e);
                }}
              ></TextField>
            </FormControl>
          </Grid>
          <Grid
            xs={12}
            sm={4}
            md={4}
            lg={4}
            className={classes.formEntity}
            spacing={"1px"}
          >
            <FormControl fullWidth>
              <label htmlFor="sdate">End Date:</label>
              <br />
              <TextField
                type="date"
                name="edate"
                variant="outlined"
                onChange={(e) => {
                  handleFormChange(e);
                }}
              ></TextField>
            </FormControl>
          </Grid>
          <Grid
            xs={12}
            sm={4}
            md={4}
            lg={4}
            className={classes.formEntity}
            spacing={"1px"}
          >
            <FormControl fullWidth>
              <label htmlFor="sdate">Search:</label>
              <br />
              <TextField
                variant="outlined"
                name="search"
                onKeyUp={(e) => {
                  if (e.code === "Enter") {
                    setPage(0);
                    handleFormChange(e);
                  }
                }}
              />
            </FormControl>
          </Grid>
        </Grid>
      </form>
      <hr />
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Date</b>
              </TableCell>
              <TableCell>
                <b>Description</b>
              </TableCell>
              <TableCell>
                <b>Amount</b>
              </TableCell>
              <TableCell>
                <b>Action</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((trans) => {
              return (
                <StyledTableRow
                  trans={trans}
                  accountBook={account_id}
                  refreshForm={RefreshForm}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <CustomTablePagination
        dataCount={dataCount}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Book;
