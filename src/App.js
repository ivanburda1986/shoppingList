import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleReceiveServerItems, handleUpdateServerItem } from "./actions/items";

import Navigation from "./components/Navigation/Navigation";
import ShoppingList from "./contexts/ShoppingList/ShoppingList";

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(handleReceiveServerItems());
  }, [dispatch]);

  const updateItem = (e) => {
    e.preventDefault();
    dispatch(
      handleUpdateServerItem({
        completed: 0,
        creationDate: 1624787753000,
        id: "0cd1d77d-0684-4c06-935c-a49a5e319314",
        title: "Melons",
      })
    );
  };

  return (
    <Router>
      <div>
        <Navigation />
        <ShoppingList />
        <button onClick={(e) => updateItem(e)} type="button">
          test
        </button>
      </div>
    </Router>
  );
}
