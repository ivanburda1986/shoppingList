import React from "react";
import classes from "./Loading.module.css";

export function Loading() {
  const square = <div className={classes.square} key={0}></div>;
  const [squares, setSquares] = React.useState([square]);

  React.useEffect(() => {
    setTimeout(() => addSquare(squares.length), 250);
  }, [squares]);

  const addSquare = () => {
    if (squares.length <= 10) {
      setSquares([...squares, <div className={classes.square} key={squares.length}></div>]);
    }
    if (squares.length === 10) {
      setSquares([]);
    }
  };

  return <div className={classes.Loading}>{squares}</div>;
}
