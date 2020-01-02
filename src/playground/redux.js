import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// //action generators
// const incrementCount = ({ incrementBy = 1 } = {}) => ({
//   type: "INCREMENT",
//   incrementBy
// });
// const decrementCount = ({ decrementBy = 1 } = {}) => ({
//   type: "DECREMENT",
//  decrementBy
// });

// const setCount = ({count}) => ({
//     type:'SET',
//     count
// })
// const resetCount = () => ({
//     type:'RESET'
// })

// const countReducer = (state = { count: 0 }, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + action.incrementBy
//       };
//     case "SET":
//       return {
//         count: action.count
//       };

//     case "DECREMENT":
//       return {
//         count: state.count - action.decrementBy
//       };
//     case "RESET":
//       return {
//         count: 0
//       };
//     default:
//       return state;
//   }
// };
// const store = createStore(countReducer);

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(incrementCount());

// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 12
// });
// store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch(resetCount());

// store.dispatch(setCount({ count :100}));

// console.log(store.getState());

// const book = {
//   title: "ego is the enemy",
//   author: "ddd",
//   publisher: {
//     // name:'Penguin'
//   }
// };

// const { name = "PublisherName" } = book.publisher;
// console.log(name);

// const items = ["coffee", "$33.9", "$5.3", "$2.4"];

// const [coffee, p1, p2, p3] = items;
// console.log(`${coffee} is now ${p1}`);

// //action generators
// const addExpense = ({
//   description = "",
//   notes = "",
//   amount = 0,
//   createdAt = 0
// } = {}) => ({
//   type: "ADD_EXPENSE",
//   expenses: {
//     id: uuid(),
//     description,
//     notes,
//     amount,
//     createdAt
//   }
// });

// const removeExpense = ({ id } = {}) => ({
//   type: "REMOVE_EXPENSE",
//   id
// });

// const editExpense = (id, updates) => ({
//   type: "EDIT_EXPENSE",
//   id,
//   updates
// });

// const expenseReducerDefault = [];

// const expenseReducer = (state = expenseReducerDefault, action) => {
//   switch (action.type) {
//     case "ADD_EXPENSE":
//       return [...state, action.expenses];
//     case "REMOVE_EXPENSE":
//       return state.filter(({ expenseId }) => action.id !== expenseId);
//     case "EDIT_EXPENSE":
//       return state.map(expense => {
//         if (expense.id === action.id) {
//           return {
//             ...expense,
//             ...action.updates
//           };
//         } else {
//           return expense;
//         }
//       });
//     default:
//       return state;
//   }
// };

// const setTextFilter = (text = "") => ({
//   type: "SET_TEXT_FILTER",
//   text
// });

// const sortByAmount = amount => ({
//   type: "SORT_BY_AMOUNT",
//   sortBy: amount
// });
// const sortByDate = date => ({
//   type: "SORT_BY_DATE",
//   sortBy: date
// });
// const setStartDate = startDate => ({
//   type: "SET_START_DATE",
//   startDate
// });
// const setEndDate = endDate => ({
//   type: "SET_END_DATE",
//   endDate
// });
// const filterReducerDefault = {
//   text: "",
//   sortBy: "amount",
//   startDate: undefined,
//   endDate: undefined
// };

// const filterReducer = (state = filterReducerDefault, action) => {
//   switch (action.type) {
//     case "SET_TEXT_FILTER":
//       return {
//         ...state,
//         text: action.text
//       };
//     case "SORT_BY_DATE":
//       return {
//         ...state,
//         sortBy: action.date
//       };
//     case "SORT_BY_AMOUNT":
//       return {
//         ...state,
//         sortBy: action.amount
//       };
//     case "SET_START_DATE":
//       return {
//         ...state,
//         startDate: action.startDate
//       };
//     case "SET_END_DATE":
//       return {
//         ...state,
//         endDate: action.endDate
//       };
//     default:
//       return state;
//   }
// };

// const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
//   return expenses
//     .filter(expense => {
//       const startDateMatch =
//         typeof startDate !== "number" || expense.createdAt >= startDate;
//       const endDate =
//         typeof endDate !== "number" || expense.createdAt <= endDate;
//       const textMatch = expense.description
//         .toLowerCase()
//         .includes(text.toLowerCase());

//       return startDateMatch && endDate && textMatch;
//     })
//     .sort((a, b) => {
//       if (sortBy === "date") {
//         return a.createdAt < b.created ? 1 : -1;
//       } else if (sortBy === "amount") {
//         return a.amount <b.amount ? 1 : -1;
//       }
//     });
// };

// const store = createStore(
//   combineReducers({
//     expenses: expenseReducer,
//     filters: filterReducer
//   })
// );
// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

// const expenseOne = store.dispatch(
//   addExpense({ description: "rent", amount: 100, createdAt: 2000 })
// );
// const expenseTwo = store.dispatch(
//   addExpense({ description: "Book", amount: 300, createdAt: 8000 })
// );

// // const rem = store.dispatch(removeExpense({ id: expenseOne.expenses.id }));
// // const edi = store.dispatch(
// //   editExpense(expenseTwo.expenses.id, { amount: 300 })
// // );
// // const tex = store.dispatch(setTextFilter("welcome"));

// // store.dispatch(setTextFilter());
// // store.dispatch(sortByAmount(34));
// // store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1243));
// // console.log(expenseOne);
// // console.log(expenseTwo);
// // console.log(rem);
// // console.log(edi);
// // console.log(tex);
// // console.log(tex2)

// const demoState = {
//   expenses: [
//     {
//       id: "11",
//       description: "January rent",
//       notes: "aas",
//       amount: 2222,
//       createdAt: 0
//     }
//   ],
//   filters: {
//     text: "",
//     sortBy: "amount",
//     startDate: undefined,
//     endDate: undefined
//   }
// };
import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <p>Welcome</p>
    <h2>Info :{props.info}</h2>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => {
    <div>
      <WrappedComponent {...props} />
    </div>;
  };
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(
  <AdminInfo info="wwwwwwwwwww" />,
  document.getElementById("app")
);
