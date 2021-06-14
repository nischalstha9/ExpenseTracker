import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AxiosInstance from "../../AxiosInstance";
import { useFormik } from "formik";

export default function AddTransactionModal({
  account_book,
  _type,
  refreshForm,
}) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    formik.handleReset();
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: { description: "", amount: 0, _type: _type },
    onSubmit: (values) => {
      AxiosInstance.post(
        `account-books/${account_book}/transactions/`,
        values,
        {
          withCredentials: true,
        }
      )
        .then((resp) => {
          handleClose();
          refreshForm();
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {_type === "DEBIT" ? "Add Income" : "Add Expense"}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Add {_type === "DEBIT" ? "Income" : "Expense"} Transaction
        </DialogTitle>
        <form action="" onSubmit={formik.handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.description}
              placeholder="Description"
            />
            <TextField
              margin="dense"
              id="amount"
              label="Amount"
              type="number"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.amount}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={formik.handleSubmit} color="primary">
              {_type === "DEBIT" ? "Add Income" : "Add Expense"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
