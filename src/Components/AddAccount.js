import React from "react";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import AxiosInstance from "../AxiosInstance";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const AddAccount = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: { title: "" },
    onSubmit: (values) => {
      console.log(values);
      AxiosInstance.post(`account-books/`, values, {
        withCredentials: true,
      })
        .then((resp) => {
          console.clear();
          console.log(resp);
          history.push("/accounts");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div>
      <form
        action=""
        method="post"
        className="container mt-4 pt-4"
        onSubmit={formik.handleSubmit}
      >
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          autoFocus
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Create
        </Button>
      </form>
    </div>
  );
};

export default AddAccount;
