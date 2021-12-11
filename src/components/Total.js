import React from "react";
import accounting from "accounting";
import { Button, makeStyles } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    Height: "20vh",
  },
  button: {
    marginTop: "2rem",
  },
}));

const Total = () => {
  const classes = useStyles();
  const [{ car, user }] = useStateValue();
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      navigate("/checkout");
    } else {
      alert("Inicie sesion para continuar");
    }
  };
  return (
    <div className={classes.root}>
      <h5>Total items: {car?.length}</h5>
      <h5>
        {accounting.formatMoney(
          car?.reduce((acc, item) => item.price + acc, 0),
          "$"
        )}
      </h5>
      <Button
        onClick={handleClick}
        className={classes.button}
        variant="contained"
        color="secondary"
      >
        Checkout
      </Button>
    </div>
  );
};

export default Total;
