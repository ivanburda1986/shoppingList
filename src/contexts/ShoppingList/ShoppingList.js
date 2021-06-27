import React from "react";
import { useSelector } from "react-redux";
import ListItem from "../../components/ListItem/ListItem";

export default function ShoppingList() {
  const shoppingListItems = useSelector((state) => state.items);
  //console.log(typeof shoppingListItems);
  if (shoppingListItems.length === 0) {
    return <div></div>;
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
      <ul>
        {shoppingListItemsSorted.map((item) => (
          <ListItem key={item.id} id={item.id} />
        ))}
      </ul>
    );
  }
}
