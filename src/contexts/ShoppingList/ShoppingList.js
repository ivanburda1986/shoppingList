import React from "react";
import { useSelector } from "react-redux";
import ListItem from "../../components/ListItem/ListItem";
import { Loading } from "../../components/Loading/Loading";
import classes from "./ShoppingList.module.css";

export default function ShoppingList() {
  const shoppingListItems = useSelector((state) => state.items);
  const loading = useSelector((state) => state.loading.state);

  if (loading === true) {
    return (
      <div className={classes.Loading}>
        <p>Loading... </p>
      </div>
    );
  } else {
    const shoppingListItemsSorted = Object.keys(shoppingListItems)
      .map((id) => {
        const { title, creationDate, completed } = shoppingListItems[id];
        return {
          id,
          title,
          creationDate,
          completed,
        };
      })
      .sort((a, b) => b.creationDate - a.creationDate);
    return (
      <React.Fragment>
        <ul>
          {shoppingListItemsSorted.map((item) => (
            <ListItem key={item.id} id={item.id} />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
