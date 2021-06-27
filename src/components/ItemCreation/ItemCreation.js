import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { handleAddServerItem } from "../../actions/items";

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

  return (
    <div>
      <input placeholder="Item name ... " value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      <button type="button" onClick={() => createItem()}>
        +
      </button>
    </div>
  );
}
