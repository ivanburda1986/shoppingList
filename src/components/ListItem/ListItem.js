import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleUpdateServerItem, handleDeleteServerItem } from "../../actions/items";
import { stringToBool } from "../../utils/helpers";

import sharedClasses from "../Input-shared.module.css";

export default function ListItem({ id }) {
  const item = useSelector((state) => state.items[id]);

  const [itemTitle, setItemTitle] = React.useState(item.title);
  const [itemCompletion, setItemCompletion] = React.useState(stringToBool(item.completed));

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

  const updateCompletion = () => {
    setItemCompletion(!itemCompletion);
    dispatch(
      handleUpdateServerItem({
        completed: `${!itemCompletion}`,
        creationDate: `${item.creationDate}`,
        id: `${item.id}`,
        title: `${item.title}`,
      })
    );
  };

  const deleteItem = (itemId) => {
    dispatch(handleDeleteServerItem(itemId));
  };

  return (
    <li>
      <div className={sharedClasses.flex}>
        <input className={sharedClasses.checkbox} type="checkbox" id="check" defaultChecked={itemCompletion} onClick={() => updateCompletion()} />
        <input className={sharedClasses.input} onChange={(e) => setItemTitle(e.target.value)} onBlur={(e) => updateTitle(e)} value={itemTitle} id={item.id} />
        <button className={sharedClasses.button} type="button" onClick={() => deleteItem(item.id)}>
          ✕
        </button>
      </div>
    </li>
  );
}
