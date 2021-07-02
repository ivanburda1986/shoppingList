import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleUpdateServerItem } from "../../actions/items";
import { stringToBool } from "../../utils/helpers";

import sharedClasses from "../Input-shared.module.css";
import classes from "./Checkbox.module.css";

export default function Checkbox({ id }) {
  const item = useSelector((state) => state.items[id]);
  const [itemCompletion, setItemCompletion] = React.useState(stringToBool(item.completed));
  const dispatch = useDispatch();
  const [classList, setclassList] = React.useState([classes.checkboxLabel]);

  React.useEffect(() => {
    customCheckboxState();
  }, [itemCompletion]);

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

  const customCheckboxState = () => {
    let checkboxSelector = document.getElementById(`label${item.id}`);
    if (itemCompletion) {
      checkboxSelector.innerText = "✔";
    } else {
      checkboxSelector.innerText = "";
    }
  };

  const showFocus = () => {
    setclassList(classList.concat(classes.focused));
  };

  const removeFocus = () => {
    console.log(classList);
    setclassList(classList.splice(0, 1));
    console.log(classList);
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <label className={classList.join(" ")} htmlFor={`checkbox${item.id}`} id={`label${item.id}`}></label>
        <input className={sharedClasses.checkbox} type="checkbox" id={`checkbox${item.id}`} defaultChecked={itemCompletion} onFocus={() => showFocus()} onBlur={() => removeFocus()} onClick={(e) => updateCompletion(e)} />
      </div>
    </>
  );
}
