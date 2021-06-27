import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleUpdateServerItem } from "../../actions/items";
import { stringToBool } from "../../utils/helpers";

export default function ListItem({ id }) {
  const item = useSelector((state) => state.items[id]);
  item.completed = stringToBool(item.completed);

  const [itemTitle, setItemTitle] = React.useState(item.title);
  const [itemCompletion, setItemCompletion] = React.useState(item.completed);

  const dispatch = useDispatch();

  const updateItem = (e) => {
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
    if (itemCompletion !== item.completed) {
      dispatch(
        handleUpdateServerItem({
          completed: `${itemCompletion}`,
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

  return (
    <li>
      <div>
        <input type="checkbox" id="check" checked={item.completed} />
        <input onChange={(e) => setItemTitle(e.target.value)} onBlur={(e) => updateItem(e)} value={itemTitle} id={item.id} />
        <button type="button">x</button>
      </div>
    </li>
  );
}
