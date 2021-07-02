import { combineReducers } from "redux";
import items from "./items";
import loading from "./loading";

export default combineReducers({ items, loading });
