import { changeTheName, changeTheEmail } from "./chgdata";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  changeTheName,
  changeTheEmail,
});

export default rootReducers;