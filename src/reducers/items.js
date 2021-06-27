import { RECEIVE_ITEMS, UPDATE_ITEM, ADD_ITEM } from "../actions/items";
import { stringToBool } from "../utils/helpers";

export default function items(state = [], action) {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return {
        ...state,
        ...action.items,
      };
    case UPDATE_ITEM:
      console.log("Hello from the UPDATE_ITEM reducer");
      return {
        ...state,
        [action.updatedItem.id]: action.updatedItem,
      };
    case ADD_ITEM:
      return {};
    default:
      return state;
  }
}
