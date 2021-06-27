import React from "react";
import { useSelector } from "react-redux";
import ListItem from "../../components/ListItem/ListItem";

export default function ShoppingList() {
  const shoppingListItems = useSelector((state) => state.items);
  //console.log(typeof shoppingListItems);
  if (shoppingListItems.length === 0) {
    console.log("not here yet");
    return <div></div>;
  } else {
    const shoppingListItemsSorted = Object.keys(shoppingListItems.items)
      .map((id) => {
        const { title, creationDate, completed } = shoppingListItems.items[id];
        return {
          id,
          title,
          creationDate,
          completed,
        };
      })
      .sort((a, b) => b.creationDate - a.creationDate);
    console.log(shoppingListItemsSorted);

    return (
      <ul>
        {shoppingListItemsSorted.map((item) => (
          <ListItem key={item.id} title={item.title} />
        ))}
      </ul>
    );
  }
}
