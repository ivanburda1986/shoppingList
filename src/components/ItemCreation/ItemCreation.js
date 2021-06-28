import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { handleAddServerItem } from "../../actions/items";

import classes from "./ItemCreation.module.css";
import sharedClasses from "../Input-shared.module.css";

export default function ItemCreation() {
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = React.useState("");

  const createItem = () => {
    dispatch(
      handleAddServerItem({
        completed: false,
        creationDate: Date.now(),
        id: uuidv4(),
        title: newTitle,
      })
    );
    setNewTitle("");
  };

  const createItemByEnterPress = (e) => {
    if (e.charCode === 13) {
      createItem();
    }
  };

  return (
    <div className={sharedClasses.flex}>
      <input className={classes.invisible} />
      <input className={sharedClasses.input} placeholder="Item name ... " value={newTitle} onKeyPress={(e) => createItemByEnterPress(e)} onChange={(e) => setNewTitle(e.target.value)} />
      <button className={sharedClasses.button} type="button" onClick={() => createItem()}>
        +
      </button>
    </div>
  );
}
