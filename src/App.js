import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleReceiveServerItems } from "./actions/items";

import Navigation from "./components/Navigation/Navigation";
import ItemCreation from "./components/ItemCreation/ItemCreation";
import ShoppingList from "./contexts/ShoppingList/ShoppingList";
import Footer from "./components/Footer/Footer";

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(handleReceiveServerItems());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Navigation />
        <ItemCreation />
        <ShoppingList />
        <Footer />
      </div>
    </Router>
  );
}
