import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import configStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expensesSelector";
import FirebaseProvider from './firebaseIntegration/firebase'
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import 'react-dates/lib/css/_datepicker.css';

const store = configStore();

// store.dispatch(addExpense({ description: "Water bill" ,amount:4500}));
// store.dispatch(addExpense({ description: "Gas bill" }));
// store.dispatch(setTextFilter("gas"));


const state = store.getState();
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpense);
console.log(store.getState());

const Jsx = () => (
  <Provider store={store}>
    {/* <FirebaseProvider> */}
       <AppRouter />
    {/* </FirebaseProvider> */}
  </Provider>
);

ReactDOM.render( <Jsx/>, document.getElementById("app"));
