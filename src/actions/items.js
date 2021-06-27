import { receiveServerItems } from "../utils/api";

export const ADD_ITEM = "ADD_ITEM";
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
      dispatch(receiveItems({ items: data }));
    });
  };
}
