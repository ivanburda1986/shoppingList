import { SHOW_LOADING, HIDE_LOADING } from "../actions/loading";

export default function loading(state = false, action) {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        state: true,
      };
    case HIDE_LOADING:
      return {
        state: false,
      };
    default:
      return state;
  }
}
