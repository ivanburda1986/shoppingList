import { receiveServerItems, updateServerItem, addServerItem, deleteServerItem } from "../utils/api";

export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

// RECEIVE ITEMS
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

// UPDATE AN ITEM
function updateItem(updatedItem) {
  return {
    type: UPDATE_ITEM,
    updatedItem,
  };
}

export function handleUpdateServerItem(updatedItem) {
  return (dispatch) => {
    dispatch(updateItem(updatedItem));
    updateServerItem(updatedItem); //If server update request fails: add catch and trigger dispatch while passing the orignal item
  };
}

// ADD AN ITEM
function addItem(newItem) {
  return {
    type: ADD_ITEM,
    newItem,
  };
}

export function handleAddServerItem(newItem) {
  return (dispatch) => {
    dispatch(addItem(newItem));
    addServerItem(newItem);
  };
}

// DELETE AN ITEM
function deleteItem(itemId) {
  return {
    type: DELETE_ITEM,
    itemId,
  };
}

export function handleDeleteServerItem(itemId) {
  return (dispatch) => {
    dispatch(deleteItem(itemId));
    deleteServerItem(itemId);
  };
}
