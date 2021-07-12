import { combineReducers } from "redux";
import counter from "./counter";
import { CounterState } from "./state";

export type RootState = {
  counter: CounterState;
};

export default combineReducers({
  counter,
});
