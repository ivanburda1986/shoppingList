import { RECEIVE_ITEMS, UPDATE_ITEM, ADD_ITEM, DELETE_ITEM } from "../actions/items";

export default function items(state = [], action) {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return {
        ...state,
        ...action.items,
      };
    case UPDATE_ITEM:
      return {
        ...state,
        [action.updatedItem.id]: action.updatedItem,
      };
    case ADD_ITEM:
      let newState = { ...state };
      newState[action.newItem.id] = action.newItem;
      return {
        ...newState,
      };
    case DELETE_ITEM:
      let updatedState = { ...state };
      delete updatedState[action.itemId];
      return {
        ...updatedState,
      };
    default:
      return state;
  }
}
