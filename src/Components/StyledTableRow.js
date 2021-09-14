import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TableCell, TableRow } from "@material-ui/core";
import EditTransactionModal from "./Modals/EditTransactionModal";
import { green, red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  greenRow: {
    backgroundColor: green[200],
  },
  redRow: {
    backgroundColor: red[200],
  },
  root: {
    marginTop: "10px",
    width: "100%",
    padding: "10px",
  },
});

const StyledTableRow = ({ trans, accountBook, refreshForm }) => {
  const classes = useStyles();
  return (
    <TableRow
      tabIndex={-1}
      key={trans.id}
      className={trans._type === "DEBIT" ? classes.greenRow : classes.redRow}
    >
      <TableCell>{trans.date}</TableCell>
      <TableCell>{trans.description}</TableCell>
      <TableCell>{trans.amount}</TableCell>
      <TableCell>
        <EditTransactionModal
          account_book={accountBook}
          trans_id={trans.id}
          description={trans.description}
          amount={trans.amount}
          refreshForm={refreshForm}
        />
      </TableCell>
    </TableRow>
  );
};

export default StyledTableRow;
