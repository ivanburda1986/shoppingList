import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleReceiveServerItems } from "./actions/items";
import Navigation from "./components/Navigation/Navigation";

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(handleReceiveServerItems());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Navigation />
      </div>
    </Router>
  );
}
