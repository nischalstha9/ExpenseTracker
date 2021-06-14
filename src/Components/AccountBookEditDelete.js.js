import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import AxiosInstance from "../AxiosInstance";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

export default function DeleteAccountBookModal() {
  const history = useHistory();
  const [accountBook, setAccountBook] = useState({});
  let { account_id } = useParams();
  useEffect(() => {
    AxiosInstance.patch(`account-books/${account_id}/`, {
      withCredentials: true,
    })
      .then((resp) => {
        console.log(resp);
        setAccountBook(resp.data);
        console.log(accountBook);
      })
      .catch((err) => console.log(err));
  }, []);

  const UpdateForm = useFormik({
    initialValues: { title: accountBook.title },
    onSubmit: (values) => {
      AxiosInstance.patch(`account-books/${accountBook.id}/`, values, {
        withCredentials: true,
      })
        .then((resp) => {
          history.push("/manage/accounts");
        })
        .catch((err) => console.log(err));
    },
  });
  const formik = useFormik({
    initialValues: { password: "" },
    onSubmit: (values) => {
      console.log(values);
      AxiosInstance.delete(
        `account-books/${accountBook.id}/`,
        { data: values },
        {
          withCredentials: true,
        }
      )
        .then((resp) => {
          history.push("/manage/accounts");
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <div className="container mt-3">
      <div className="jumbotron">
        <h3>Update {accountBook.title}</h3>
        <hr />
        <DialogTitle id="form-dialog-title">Title:</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            onChange={UpdateForm.handleChange}
            value={UpdateForm.values.title}
            placeholder="Title"
          />
          <button
            className="btn btn-warning mt-3"
            onClick={UpdateForm.handleSubmit}
          >
            Update
          </button>
        </DialogContent>
      </div>
      <div className="">
        <h3>Delete {accountBook.title}</h3>
        <hr />
        <DialogTitle id="form-dialog-title">
          Confirm Delete Account Book: "{accountBook.title}"
        </DialogTitle>
        <form action="" onSubmit={formik.handleSubmit}>
          <DialogContent>
            <DialogContentText>
              Deleting Account Book will delete all of your transactions in
              respective account book. This action is irreversible. Enter your
              password to continue.
            </DialogContentText>
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Your Password"
            />
          </DialogContent>
          <DialogActions>
            <button
              onClick={formik.handleSubmit}
              className="btn btn-outline-danger"
            >
              Confirm Delete
            </button>
          </DialogActions>
        </form>
      </div>
    </div>
  );
}
