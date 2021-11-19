import { combineReducers } from "redux";
import items from "./itmems";
import accounts from "./accounts"

export default combineReducers({
    items, accounts
});