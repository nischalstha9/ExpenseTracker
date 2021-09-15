import { Alert as BaseAlert } from "@material-ui/lab";

const Alert = ({ message, type }) => {
  return <BaseAlert severity={type}>{message}</BaseAlert>;
};

export default Alert;
