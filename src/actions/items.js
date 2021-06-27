import { receiveServerItems, updateServerItem } from "../utils/api";

export const ADD_ITEM = "ADD_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";

function receiveItems(items) {
  return {
    type: RECEIVE_ITEMS,
    items,
  };
}

export function handleReceiveServerItems() {
  return (dispatch) => {
    receiveServerItems().then((data) => {
      dispatch(receiveItems(data));
    });
  };
}

function updateItem(updatedItem) {
  console.log("Hello from updateItem");
  return {
    type: UPDATE_ITEM,
    updatedItem,
  };
}

export function handleUpdateServerItem(updatedItem) {
  console.log("Hello from handleUpdateServerItem");
  return (dispatch) => {
    dispatch(updateItem(updatedItem));
    updateServerItem(updatedItem); //If server update request fails: add catch and trigger dispatch while passing the orignal item
  };
}
