import { createStore, combineReducers } from "redux";
import expenseReducer from "../reducers/expenseReducer";
import filterReducer from "../reducers/filterReducer";

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filterReducer,
      auth:authReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};


