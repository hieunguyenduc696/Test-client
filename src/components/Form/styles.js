import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  type: {
    width: "100%",
    margin: theme.spacing(1)
  },
  container: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  buttonSubmit: {
    display: "flex",
    marginLeft: "auto",
    marginTop: "20px",
  },
}));
