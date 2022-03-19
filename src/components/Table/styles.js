import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "2rem auto",
  },
  container: {
    maxHeight: 440,
  },
  status: {
    padding: "5px",
    borderRadius: "5px",
    "&.Pending": {
      color: "goldenrod",
      backgroundColor: "rgba(189, 189, 3, 0.103)",
    },
    "&.Approved": {
      color: "green",
      backgroundColor: "rgba(0, 128, 0, 0.151)",
    },
    "&.Rejected": {
      color: "red",
      backgroundColor: "rgba(239, 207, 207, 1)",
    },
  },
  action: {
    padding: "5px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  Cancel: {
    color: "red",
    backgroundColor: "rgba(239, 207, 207, 1)",
  },
  Approved: {
    color: "green",
    backgroundColor: "rgba(0, 128, 0, 0.151)",
  },
  Rejected: {
    color: "red",
    backgroundColor: "rgba(239, 207, 207, 1)",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
