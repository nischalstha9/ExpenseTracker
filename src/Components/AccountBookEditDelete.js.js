import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import AxiosInstance from "../AxiosInstance";
import { useFormik } from "formik";
import { useHistory, useParams } from "react-router-dom";
import Alert from "./Alert";

export default function DeleteAccountBookModal() {
  const history = useHistory();
  const [accountBook, setAccountBook] = useState({});
  const [alerts, setAlerts] = useState([]);
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
  const deleteForm = useFormik({
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
        .catch((err) => {
          let msg = Object.entries(err.response.data)[0][1];
          console.log(msg);
          setAlerts([
            {
              message: msg,
              type: "danger",
            },
          ]);
        });
    },
  });

  return (
    <div className="container mt-3">
      <div className="jumbotron">
        <h3>Update Book "{accountBook.title}"</h3>

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
        <h3>Delete Book "{accountBook.title}"</h3>
        <hr />
        <DialogTitle id="form-dialog-title">
          Confirm Delete Account Book: "{accountBook.title}"
        </DialogTitle>
        <form action="" onSubmit={deleteForm.handleSubmit}>
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
              onChange={deleteForm.handleChange}
              value={deleteForm.values.password}
              placeholder="Your Password"
            />
          </DialogContent>
          <DialogActions>
            <button
              onClick={deleteForm.handleSubmit}
              className="btn btn-outline-danger"
            >
              Confirm Delete
            </button>
          </DialogActions>
        </form>
        {alerts.map((alert) => {
          return <Alert message={alert.message} type={alert.type} />;
        })}
      </div>
    </div>
  );
}
