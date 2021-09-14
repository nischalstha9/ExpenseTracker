import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AxiosInstance from "../../AxiosInstance";
import { useFormik } from "formik";

export default function EditTransactionModal({
  account_book,
  trans_id,
  description,
  amount,
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
  const HandleDelete = () => {
    AxiosInstance.delete(
      `account-books/${account_book}/transactions/${trans_id}/`,
      {
        withCredentials: true,
      }
    )
      .then((resp) => {
        handleClose();
        refreshForm();
      })
      .catch((err) => console.log(err));
  };

  const formik = useFormik({
    initialValues: { description: description, amount: amount },
    onSubmit: (values) => {
      AxiosInstance.patch(
        `account-books/${account_book}/transactions/${trans_id}/`,
        values,
        {
          withCredentials: true,
        }
      )
        .then((resp) => {
          console.log(resp);
          handleClose();
          refreshForm();
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <div>
      <Button
        variant="outlined"
        disableElevation
        color="default"
        onClick={handleClickOpen}
      >
        &#9998;
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Transaction</DialogTitle>
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
            <Button onClick={HandleDelete} color="primary">
              Delete
            </Button>
            <Button onClick={formik.handleSubmit} color="primary">
              Update
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
