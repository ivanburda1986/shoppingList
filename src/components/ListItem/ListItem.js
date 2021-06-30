import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleUpdateServerItem, handleDeleteServerItem } from "../../actions/items";
import sharedClasses from "../Input-shared.module.css";

import Checkbox from "../Checkbox/Checkbox";

export default function ListItem({ id }) {
  const item = useSelector((state) => state.items[id]);
  const [itemTitle, setItemTitle] = React.useState(item.title);
  const dispatch = useDispatch();

  const updateTitle = (e) => {
    e.preventDefault();
    //Request an update only if the title has changed
    if (itemTitle !== item.title) {
      dispatch(
        handleUpdateServerItem({
          completed: `${item.completed}`,
          creationDate: `${item.creationDate}`,
          id: `${item.id}`,
          title: `${e.target.value}`,
        })
      );
    }
    //No update because the title has not changed
    else {
      console.log("Nothing has changed");
    }
  };

  const deleteItem = (itemId) => {
    dispatch(handleDeleteServerItem(itemId));
  };

  return (
    <li>
      <div className={sharedClasses.flex}>
        <Checkbox id={item.id} />
        <input className={sharedClasses.input} onChange={(e) => setItemTitle(e.target.value)} onBlur={(e) => updateTitle(e)} value={itemTitle} id={item.id} />
        <button className={sharedClasses.button} type="button" onClick={() => deleteItem(item.id)}>
          ✕
        </button>
      </div>
    </li>
  );
}
