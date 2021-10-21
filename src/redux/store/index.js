import { combineReducers, createStore } from "redux";
import { expenseReducer } from "../reducers/expenses";
const reducer = combineReducers({
  expenses: expenseReducer,
});
const initialState = {};
const store = createStore(reducer, initialState);
console.log("woooooooooooooooooooooooooooo");
console.log(initialState);
export default store;
