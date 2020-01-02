import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router/AppRouter";
import configStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expensesSelector";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configStore();

store.dispatch(addExpense({ description: "Water bill" }));
store.dispatch(addExpense({ description: "Gas bill" }));
store.dispatch(setTextFilter("water"));

const state = store.getState();
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpense);

console.log(store.getState());
ReactDOM.render(<AppRouter />, document.getElementById("app"));
