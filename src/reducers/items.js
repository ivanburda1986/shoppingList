import { ADD_ITEM, RECEIVE_ITEMS } from "../actions/items";

export default function items(state = [], action) {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return {
        ...state,
        ...action.items,
      };
    case ADD_ITEM:
      return {};
    default:
      return state;
  }
}
