import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    margin: "0 auto",
    padding: "0 2rem"
  },
  notFound: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
  },
  addButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    textAlign: "flex-end",
    marginLeft: "auto"
  },
}));
