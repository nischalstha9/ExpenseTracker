import { useDispatch, useSelector } from "react-redux";
import { insert_books } from "../action";
import AxiosInstance from "../AxiosInstance";
import React from "react";

export default function RefreshAccountBooks() {
  const authenticated = useSelector((state) => state.authenticated);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (authenticated) {
      AxiosInstance.get("account-books/")
        .then((resp) => {
          dispatch(insert_books(resp.data));
        })
        .catch((err) => console.log(err));
    }
  }, []);
}
