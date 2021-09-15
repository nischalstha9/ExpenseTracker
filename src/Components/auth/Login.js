import { useState } from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AxiosInstance from "../../AxiosInstance";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { log_in, insert_user } from "../../action";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Alert from "../Alert";

const useStyles = makeStyles((theme) => ({
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  buttonWrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const [alerts, setAlerts] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit: (values) => {
      setProcessing(true);
      AxiosInstance.post(`auth/login/`, values, {
        withCredentials: true,
      })
        .then((resp) => {
          console.clear();
          localStorage.setItem("access_token", resp.data.access_token);
          localStorage.setItem("user", JSON.stringify(resp.data.user));
          dispatch(log_in());
          dispatch(insert_user(resp.data.user));
          history.push("/accounts");
          setSuccess(true);
          // alert.success("You are logged in!");
        })
        .catch((err) => {
          setSuccess(false);
          setAlerts([
            {
              message: err.response.data.non_field_errors[0],
              type: "error",
            },
          ]);
        })
        .finally(() => setProcessing(false));
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <div className={classes.buttonWrapper}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={processing}
              className={classes.submit}
            >
              Sign In
            </Button>
            {processing && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {alerts.map((alert) => {
        return <Alert message={alert.message} type={alert.type} />;
      })}
    </Container>
  );
}
